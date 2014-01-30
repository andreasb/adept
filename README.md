### Adept

Genrates Adept URLs.

#### Installation

    npm install adept

#### Usage


    var adept = require('adept');


    // Setup Adept
    var settings = {
        "default_bucket": "xxxxxxxxxxxxxxxxxx",
        "cloudfront_hostname": "xxxxxxxxxxxxxxxxxx",
        "adept_account_id": "xxxxxxxxxxxxxxxxxx",
        "adept_account_key": "xxxxxxxxxxxxxxxxxx"
    };


    // Initialize adept
    var a = adept(settings)


    // 1. Setup operations and URL for image to manipulate
    var params = {
        "operations": ['xxxxxx', 'xxxxxx'],
        "image_url": 'xxxxxx'
    };

    // Generate the Adept URL by image URL
    var url = a.generateAdeptUrl(params);


    // 2. Setup operations, image key, and bucket containing the image:
    var params = {
        "bucket": "xxxxxx"
        "operations": ['xxxxxx', 'xxxxxx'],
        "image_url": 'xxxxxx'
    };

    // Generate the Adept URL by image key and bucket
    var url = a.generateAdeptUrl(params);

