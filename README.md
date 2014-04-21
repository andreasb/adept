### Adept

A simple Node.js module that allows you to easily generate Adept URLs.

#### Installation

    npm install adept

#### Usage

```js
var adept = require("adept");

// Setup Adept settings
var settings = {
    "account_id": "xxxxxxxxx",
    "account_key": "xxxxxxxxxxxxxxxxxx",
    "cloudfront_hostname": "xxxxxxxxx"
};

// Initialize Adept
var a = adept(settings)

// Setup params for the image to modify
var params = {
    "bucket": "xxxxxxxxx",
    "operations": ["maxwidth-100"],
    "asset_key": "xxxxxxxxxxxxxxxxxx.jpeg"
};

// Generate the Adept URL
var url = a.generateAdeptUrl(params);
```