var mn = require('./mnemonic');

if (process.argv && process.argv.length === 4) {
  var option = process.argv[2];
  var param = process.argv[3];

  var result;

  if (option === 'decrypt') {
    // Decrypt

    // TODO: Check for 18 words and validate resulting secret
    // Slice last 3 padded characters
    result = new Buffer(mn.decode(param), 'hex').toString('base64').slice(0,-3);
  }
  else {
    // Encrypt

    // TODO: Validate secret
    // Pad secret (Add 3 arbitrary characters) to get 32 characters
    result = mn.encode(new Buffer(param+'FFF', 'base64').toString('hex'));
  }

  console.log(result);
}
else {
  console.log('Example: \nnode ' + process.argv[1] + ' decrypt \"true completely happen mean window gift tremble girlfriend ugly victim finger release early prove bullet chin strain relationship\"');
}
