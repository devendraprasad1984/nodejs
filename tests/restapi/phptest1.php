<?php
//
//$client = new httpClient;
//$request = new httpClientRequest;
//
//$request->setRequestUrl('https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-compact');
//$request->setRequestMethod('GET');
//$request->setQuery(new httpQueryString(array(
//    'id' => 'adsmi%3Aind%2Caex%3Aind%2Cco1%3Acom%2Cgc1%3Acom'
//)));
//
//$request->setHeaders(array(
//    'x-rapidapi-host' => 'bloomberg-market-and-financial-news.p.rapidapi.com',
//    'x-rapidapi-key' => '53f8428418msh6be97643ba409e5p1a583djsn3bf38edbf00a'
//));
//
//$client->enqueue($request)->send();
//$response = $client->getResponse();
//
//echo $response->getBody();



$response = UnirestRequest::get("https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-compact?id=adsmi%253Aind%252Caex%253Aind%252Cco1%253Acom%252Cgc1%253Acom",
  array(
    "X-RapidAPI-Host" => "bloomberg-market-and-financial-news.p.rapidapi.com",
    "X-RapidAPI-Key" => "53f8428418msh6be97643ba409e5p1a583djsn3bf38edbf00a"
  )
);

echo $response;


