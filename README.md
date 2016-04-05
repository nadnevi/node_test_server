### A Simple Node HTTP server

This server accepts any type of normal http request (GET, POST, etc) and prints out all of the request information (headers, cookies, parameters, body, etc.).  It then returns a short message with a 200 status.

* Supports URL and JSON encoding

# Setup
```
$> npm install
```

# Running
```
$> npm start
or
$> node http_server.js
```

# Sample output
```
********** Tue Apr 05 2016 09:51:01 GMT-0400 (EDT) **********
POST request to /testing
req.headers = { host: '0.0.0.0:3000',
  connection: 'keep-alive',
  'content-length': '108',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/49.0.2623.87 Chrome/49.0.2623.87 Safari/537.36',
  'cache-control': 'no-cache',
  origin: 'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop',
  'content-type': 'application/json',
  authorization: 'Basic c25vdzptYW4=',
  'postman-token': '8d661002-0d7c-bc63-6fb6-3b93f3a9634d',
  accept: '*/*',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'en-US,en;q=0.8' }
req.cookies = {}
req.params = { '0': '/testing' }
req.query = { i: 'rock' }
req.body = { summary: 'Lost: My Tiger',
  description: 'On the quiet side.  Somewhat peculiar.  A good companion, in a weird sort of way' }
*************************************************************
```

# Stopping
    Control-C in the terminal it was started in.