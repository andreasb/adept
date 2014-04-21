var crypto = require('crypto')

// Factory
module.exports = function adept(settings) {

    // check if all params have been passed correctly
    if (!settings.account_id) {
        return new Error("Please provide an 'account_id'");
    };

    if (!settings.account_key) {
        return new Error("Please provide an 'account_key'");
    };

    if (!settings.cloudfront_hostname) {
        return new Error("Please provide a 'cloudfront_hostname'");
    };

    return new Adept(settings);
};

// Constructor
function Adept(settings) {
    this.account_id = settings.account_id;
    this.account_key = settings.account_key;
    this.cloudfront_hostname = settings.cloudfront_hostname;
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

    // check if the asset key and S3 bucket name params have been passed correctly
    if (!params.asset_key) {
        return new Error("Please provide an 'asset_key'");
    };

    if (!params.bucket) {
        return new Error("You have to provide a S3 'bucket' name");
    };

    // join operations
    var operations_str = joinOperations(params);

    // set path
    var path = '/' + params.bucket + '/'+ params.asset_key + operations_str + '/' + this.account_id;

    // generate hex
    var hash_hex = crypto.createHmac('sha1', this.account_key).update(path).digest('hex');

    // generate adept url
    var adept_url = this.cloudfront_hostname + path + '/' + hash_hex;

    // return adept url
    return adept_url;
};