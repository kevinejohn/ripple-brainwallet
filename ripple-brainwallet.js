var mn = require('./lib/mnemonic');

/**
 * Encrypt a secret
 *
 * @param {String} secret
 * @return {String} words
 */
var encryptNoVerify = function(secret) {
  if (typeof secret !== 'string') {
    throw new Error('Secret missing');
  }

  // TODO: Validate secret
  // Pad secret (Add 3 arbitrary characters) to get 32 characters
  return mn.encode(new Buffer(secret + 'FFF', 'base64').toString('hex'));
};

module.exports.encrypt = function(secret) {
  var encrypted = encryptNoVerify(secret);

  // Verify encrypted
  var decrypted = decryptNoVerify(encrypted);
  if (decrypted !== secret) {
    throw new Error('Invalid secret');
  }

  return encrypted;
};

/**
 * Decrypt brainwallet
 *
 * @param {String|Array} words
 * @return {String} secret
 */
var decryptNoVerify = function(arg0) {
   var words = [ ];

   if (Array.isArray(arg0)) {
     words = arg0;
   } else if (arguments.length === 18) {
     words = Array.prototype.slice.call(arguments);
   } else {
     words = arg0.split(/\s/g);
   }

   if (words.length !== 18) {
     throw new Error('Less than 18 words supplied to decrypt');
   }

   // Slice last 3 padded characters
   return new Buffer(mn.decode(words.join(' ')), 'hex').toString('base64').slice(0,-3);
 };

module.exports.decrypt = function(arg0) {
  var decrypted = decryptNoVerify(arg0);

  // Verify encrypted
  var encrypted = encryptNoVerify(decrypted);
  if (encrypted !== arg0) {
    throw new Error('Invalid brain wallet');
  }

  return decrypted;
};
