var crypto = require('crypto')

// Factory
module.exports = function adept(settings) {
    // Checks if all params have been passed correctly
    if (!settings.cloudfront_hostname) { return new Error("Please provide an 'cloudfront_hostname'"); };
    if (!settings.adept_account_id)    { return new Error("Please provide an 'adept_account_id'");    };
    if (!settings.adept_account_key)   { return new Error("Please provide an 'adept_account_key'");   };

    return new Adept(settings);
};

// Constructor
function Adept(settings) {
    this.default_bucket = settings.default_bucket;
    this.cloudfront_hostname = settings.cloudfront_hostname;
    this.adept_account_id = settings.adept_account_id;
    this.adept_account_key = settings.adept_account_key;
};

function joinOperations(params) {
    var operations_str = ''
    for (o in params.operations) {
        operations_str += '/' + params.operations[o];
    };
    return operations_str;
}

// Genrate Adept URL
Adept.prototype.generateAdeptUrl = function(params) {

    // check if an image key has been passed
    if (!params.asset_key) {
        return new Error("Please provide either an asset_key");
    };

    // set the bucket to either the one specified here, or the default
    var bucket;
    if (params.bucket) {
        bucket = params.bucket;
    } else {
        if (this.default_bucket) {
            bucket = this.default_bucket;
        } else {
            return new Error ("You have to provide a S3 bucket name");
        };
     };

    // join operations
    var operations_str = joinOperations(params);

    // sets path
    var path = '/' + bucket + '/'+ params.asset_key + operations_str + '/' + this.adept_account_id;

    // generate hex
    var hash_hex = crypto.createHmac('sha1', this.adept_account_key).update(path).digest('hex');

    // generates adept url
    var adept_url = this.cloudfront_hostname + path + '/' + hash_hex;

    // returns adept url
    return adept_url;
};