### Adept

Genrates Adept URLs.

#### Installation

    npm install adept

#### Usage

```js
var adept = require('adept');

// Setup Adept settings
var settings = {
    "default_bucket": "xxxxxxxxx",
    "cloudfront_hostname": "xxxxxxxxx",
    "adept_account_id": "xxxxxxxxx",
    "adept_account_key": "xxxxxxxxxxxxxxxxxx"
};

// Initialize Adept
var a = adept(settings)

// Setup params for image to modify
var params = {
    "bucket": "xxxxxxxxx",  // if not passed, the default_bucket is used
    "operations": ['maxwidth-100'],
    "asset_key": 'xxxxxxxxxxxxxxxxxx.jpeg'
};

// Generate the Adept URL
var url = a.generateAdeptUrl(params);
```