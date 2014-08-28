var assert = require('assert');
var brainwallet = require('../ripple-brainwallet');

describe('decrypt', function() {
  it('should decrypt', function(done) {
    assert.strictEqual(
    brainwallet.decrypt('nervous price pale creak wrong girl sink opposite crawl social decide desire build loss dude beyond tease deny'), 'shZeCuzgbPWKGS77A62dym1mWo7Ap');
    done();
  });
});

