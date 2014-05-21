var assert = require('assert');
var brainwallet = require('../brainwallet');

describe('encrypt', function() {
  it('should encrypt', function(done) {
    assert.strictEqual(brainwallet.encrypt('shZeCuzgbPWKGS77A62dym1mWo7Ap'), 'nervous price pale creak wrong girl sink opposite crawl social decide desire build loss dude beyond tease deny');
    done();
  });
});

