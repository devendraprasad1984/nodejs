/*
Let's design a photo-sharing service like Instagram, where users can upload photos to share them with other users.
Similar Services: Flickr, Picasa
Instagram also enables its users to share through many other social networking platforms, such as Facebook, Twitter, Flickr, and Tumblr.
We plan to design a simpler version of Instagram for this design problem, where a user can share photos and follow other users. The ‘News Feed’ for each user will consist of top photos of all the people the user follows

2. Requirements and Goals of the System
    Functional Requirements
        Users should be able to upload/download/view photos.
        Users can perform searches based on photo/video titles.
        Users can follow other users.
        The system should generate and display a user’s News Feed consisting of top photos from all the people the user follows.
    Non-functional Requirements
        Our service needs to be highly available.
        The acceptable latency of the system is 200ms for News Feed generation.
        Consistency can take a hit (in the interest of availability) if a user doesn’t see a photo for a while; it should be fine.
        The system should be highly reliable; any uploaded photo or video should never be lost.
3. Some Design Considerations#
    The system would be read-heavy, so we will focus on building a system that can retrieve photos quickly.
    Practically, users can upload as many photos as they like; therefore, efficient management of storage should be a crucial factor in designing this system.
    Low latency is expected while viewing photos.
    Data should be 100% reliable. If a user uploads a photo, the system will guarantee that it will never be lost
4. Capacity Estimation and Constraints
    Let’s assume we have 500M total users, with 1M daily active users.
    2M new photos every day, 23 new photos every second. Average photo file size => 200KB
    Total space required for 1 day of photos: 2M * 200KB => 400 GB
    Total space required for 10 years: 400GB * 365 (days a year) * 10 (years) ~= 1425TB
5. High Level System Design#
    At a high-level, we need to support two scenarios, one to upload photos and the other to view/search
    photos. Our service would need some object storage servers to store photos and some database servers to
    store metadata information about the photos.
6. Database Schema
    We need to store data about users, their uploaded photos, and the people they follow. The Photo table
    will store all data related to a photo; we need to have an index on (PhotoID, CreationDate) since we
    need to fetch recent photos first
    Photp->photoId, userId, photoPath, photoLat, photolang, userLat, userLang, creationDate
    User->userId, name, email, dob, creationDate, lastLogin
    userFollow->followrId, followeeId
    mySql RDBMS would be ideal, but scaling would be a little troublesome here
    photo object store would be either in HDFS or S3
7. Data Size Estimation
    User: UserID (4 bytes) + Name (20 bytes) + Email (32 bytes) + DateOfBirth (4 bytes) + CreationDate (4 bytes) + LastLogin (4 bytes) = 68 bytes
        If we have 500 million users, we will need 32GB of total storage. 500 million * 68 ~= 32GB
    Photo: PhotoID (4 bytes) + UserID (4 bytes) + PhotoPath (256 bytes) + PhotoLatitude (4 bytes) + PhotoLongitude(4 bytes) + UserLatitude (4 bytes) + UserLongitude (4 bytes) + CreationDate (4 bytes) = 284 bytes
    If 2M new photos get uploaded every day, we will need 0.5GB of storage for one days:
        2M * 284 bytes ~= 0.5GB per day
        For 10 years we will need 1.88TB of storage
    UserFollow: Each row in the UserFollow table will consist of 8 bytes. If we have 500 million users and on average each user follows 500 users. We would need 1.82TB of storage for the UserFollow table:
    500 million users * 500 followers * 8 bytes ~= 1.82TB
    Total space required for all tables for 10 years will be 3.7TB:
    32GB + 1.88TB + 1.82TB ~= 3.7TB

8. Component Design#
    Photo uploads (or writes) can be slow as they have to go to the disk, whereas reads will be faster, especially if they are being served from cache.
    Uploading users can consume all the available connections, as uploading is a slow process.
    This means that ‘reads’ cannot be served if the system gets busy with all the ‘write’ requests.
    We should keep in mind that web servers have a connection limit before designing our system.
    If we assume that a web server can have a maximum of 500 connections at any time, then it can’t have more
    than 500 concurrent uploads or reads. To handle this bottleneck, we can split reads and writes into separate services.
    We will have dedicated servers for reads and different servers for writes to ensure that uploads don’t hog the system.
    Separating photos’ read and write requests will also allow us to scale and optimize each of these operations independently
 9. Reliability and Redundancy#
     Losing files is not an option for our service. Therefore, we will store multiple copies of each file so that if one storage server dies, we can retrieve the photo from the other copy present on a different storage server.
     This same principle also applies to other components of the system. If we want to have high availability of the system, we need to have multiple replicas of services running in the system so that even if a few services die down, the system remains available and running. Redundancy removes the single point of failure in the system.
     If only one instance of a service is required to run at any point, we can run a redundant secondary copy of the service that is not serving any traffic, but it can take control after the failover when the primary has a problem.
     Creating redundancy in a system can remove single points of failure and provide a backup or spare functionality if needed in a crisis. For example, if there are two instances of the same service running in production and one fails or degrades, the system can failover to the healthy copy. Failover can happen automatically or require manual intervention
     client->uploads image->image storage + image store meta->backups
     client->view/search image<->image storage + image store meta<->replicate to backups
 10. Data Sharding#
    Let’s discuss different schemes for metadata sharding:
    a. Partitioning based on UserID Let’s assume we shard based on the ‘UserID’ so that we can keep all photos of a user on the same shard. If one DB shard is 1TB, we will need four shards to store 3.7TB of data. Let’s assume, for better performance and scalability, we keep 10 shards.
    So we’ll find the shard number by UserID % 10 and then store the data there. To uniquely identify any photo in our system, we can append the shard number with each PhotoID.
    How can we generate PhotoIDs? Each DB shard can have its own auto-increment sequence for PhotoIDs, and since we will append ShardID with each PhotoID, it will make it unique throughout our system
*/