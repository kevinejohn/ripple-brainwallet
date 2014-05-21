var mn = require('./lib/mnemonic');

/**
 * Encrypt a secret
 *
 * @param {String} secret
 * @return {String} words
 */

module.exports.encrypt = function(secret) {
  if (typeof secret !== 'string') {
    throw new Error('Secret missing');
  }

  // TODO: Validate secret
  // Pad secret (Add 3 arbitrary characters) to get 32 characters

  return mn.encode(new Buffer(secret + 'FFF', 'base64').toString('hex'));
};

/**
 * Decrypt brainwallet
 *
 * @param {String|Array} words
 * @return {String} secret
 */

module.exports.decrypt = function(arg0) {
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
