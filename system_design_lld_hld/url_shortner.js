/*
* 1. Why do we need URL shortening?#
* URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.

* 2. Requirements and Goals of the System
*  Functional Requirements:
    Given a URL, our service should generate a shorter and unique alias of it. This is called a short link. This link should be short enough to be easily copied and pasted into applications.
    When users access a short link, our service should redirect them to the original link.
    Users should optionally be able to pick a custom short link for their URL.
    Links will expire after a standard default timespan. Users should be able to specify the expiration time.
*   Non-Functional Requirements
    The system should be highly available. This is required because, if our service is down, all the URL redirections will start failing.
    URL redirection should happen in real-time with minimal latency.
    Shortened links should not be guessable (not predictable).
*   Extended Requirements:
    Analytics; e.g., how many times a redirection happened?
    Our service should also be accessible through REST APIs by other services.

* 3 capacity estimations
*   url shortning per month: 500M
*   total years: 5
*   QPS: 500 million / (30 days * 24 hours * 3600 seconds) = ~200 URLs/s
*   object size traffic: 500B (100 * 500M => 50B)
*   total files: 30BN (500 million * 5 years * 12 months = 30 billion)
*   storage: 15TB (30 billion * 500 bytes = 15 TB)
*   Bandwidth: incoming (200 * 500 bytes = 100 KB/s), outgoing (20K * 500 bytes = ~10 MB/s)
*   memory: per day (20K * 3600 seconds * 24 hours = ~1.7 billion), cache: 0.2 * 1.7 billion * 500 bytes = ~170GB
*
* 4 System APIS
*   createURL(api_dev_key, original_url, custom_alias=None, user_name=None, expire_date=None):=>A successful insertion returns the shortened URL; otherwise, it returns an error code
*   deleteURL(api_dev_key, url_key)
*
* 5 Database Design (nosql best fits the need as this is read heavy and needs high I/O, dynamoDB, cassandra)
*   We need to store billions of records.
    Each object we store is small (less than 1K).
    There are no relationships between records—other than storing which user created a URL.
    Our service is read-heavy
    * URL->originalUrl, creationDate, expirationDate, userId
    * USER->name, email, creationDate, lastLogin

* 6. Basic System Design and Algorithm
*   1: encoding actual url using base32/base64 algo
*   using base64 algo of 6 char string would have 64^6=68.7BN combinations and 64^8=281 trillion
*   we can MD5 (128bit encryption) / SHA256
*   the issue with base64 and MD5 is if 2 people enter same url, they get same key which is not acceptable. workaround would
*   append each input with userid, datetime or increasing sequencer (may overflow) and then apply hash
*   2. Key Generation Service: pre written unique KEY database, for every request assign it from here. concurrency
*   can be a problem here. so KGS can use 2 tables one for used keys and one for non used keys. also we can have a
*   cache in memory for faster responses. its a single point of failure. KGS will have secondary replica
*   base64 based KGS DB size: 6 (characters per key) * 68.7B (unique keys) = 412 GB
*   How would we perform a key lookup? We can look up the key in our database to get the full URL.
*
*   If it’s present in the DB, issue an “HTTP 302 Redirect” status back to the browser, passing the stored
*   URL in the “Location” field of the request. If that key is not present in our system,
*   issue an “HTTP 404 Not Found” status or redirect the user back to the homepage
*
*   Partitining Approach: based on short urls 1st letter as range identifier to store url in that parition.
*       it can lead to unbalanced db server
*   hash based approach: hash as key [1-256] overloaded hash issue can be solved using consistent hashing (dynamo db / cassendra uses) technique
*
* 8 Cache approach
*   use memCached approach, service will check here first
*   How can each cache replica be updated? Whenever there is a cache miss, our servers would be hitting a
*   backend database. Whenever this happens, we can update the cache and pass the new entry to all the cache
*   replicas. Each replica can update its cache by adding the new entry. If a replica already has that entry,
*   it can simply ignore it.
*
*   9. Load Balancer (LB)
    Between Clients and Application servers
    Between Application Servers and database servers
    Between Application Servers and Cache servers
*
* 10. Purging or DB cleanup
*   Whenever a user tries to access an expired link, we can delete the link and return an error to the user.
    A separate Cleanup service can run periodically to remove expired links from our storage and cache. This service should be very lightweight and scheduled to run only when the user traffic is expected to be low.
    We can have a default expiration time for each link (e.g., two years).
    After removing an expired link, we can put the key back in the key-DB to be reused.
    Should we remove links that haven’t been visited in some length of time, say six months? This could be tricky. Since storage is getting cheap, we can decide to keep links forever.
    *
* 11 telemetry: automated communication among multiple sources in distributed systems
* 12. Security and Permissions#
    Can users create private URLs or allow a particular set of users to access a URL?
    We can store the permission level (public/private) with each URL in the database. We can also create a separate table to store UserIDs that have permission to see a specific URL. If a user does not have permission and tries to access a URL, we can send an error (HTTP 401) back. Given that we are storing our data in a NoSQL wide-column database like Cassandra, the key for the table storing permissions would be the ‘Hash’ (or the KGS generated ‘key’). The columns will store the UserIDs of those users that have permission to see the URL.
* * */
