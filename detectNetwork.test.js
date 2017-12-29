
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    var number = 2
    if(number !==2 ) {
      throw new Error('Test failed!');
    }
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 !== 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {

  var should = chai.should();
  for(var prefix = 38; prefix <= 39; prefix++) {
    (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 14', function() {
      detectNetwork(prefix + '345678901273').should.equal('Diner\'s Club');
     });
    })(prefix);
  }
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  // var assert = function(isTrue) {
  //   if(!isTrue) {
  //     throw new Error('Test failed');
  //   }
  // };
  var should = chai.should();
  for(var prefix = 34; prefix <= 37; prefix+=3) {
    (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 15', function() {
      detectNetwork(prefix + '3456789012345').should.equal('American Express');
      });
    })(prefix);
  }
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
 var should = chai.should();
 for(var length = 13; length <= 19; length+=3) {
  (function(length) {
    it('has a prefix of 4 and a length of ' + length, function() {
      detectNetwork('4123456789012123456'.slice(0, length)).should.equal('Visa');
    });
  })(length);
 }
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
  for(var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '12345678901234').should.equal('MasterCard');
      });
    })(prefix);
  }
});

describe('Discover', function() {

  var should = chai.should();
  for(var length = 16; length <= 19; length+=3) {
    (function(length) {
      it('has a prefix of 65 and a length of ' + length, function() {
        detectNetwork('6512345678901234567'.slice(0,length)).should.equal('Discover');
      });
      it('has a prefix of 6011 and a length of ' + length, function() {
        detectNetwork('6011345678901234567'.slice(0,length)).should.equal('Discover');
      });
    })(length); //close IIFE
  }

  for(var length = 16; length <= 19; length+=3) {
    for(var prefix = 644; prefix <= 649; prefix++) {
      (function(length, prefix) {
        it('has a prefix of ' + prefix + ' a length of ' + length, function() {
          detectNetwork((prefix + '1345678901234567').slice(0, length)).should.equal('Discover');
        });
      })(length, prefix);
    }
  }

});


describe('Maestro', function() {
  var should = chai.should();

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function() {
        detectNetwork('5018717234567679911'.slice(0, length)).should.equal('Maestro');
      }); 
      it('has a prefix of 5020 and a length of' + length, function() {
        detectNetwork('5020717634579911424'.slice(0, length)).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function() {
         detectNetwork('5038717476479791424'.slice(0, length)).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + length, function() {
        detectNetwork('6304456789471767914'.slice(0, length)).should.equal('Maestro');
     });
    })(length);
  }
});


describe('China UnionPay', function() {
var should = chai.should();
for(var length = 16; length <= 19; length++){
  for(var prefix = 622126; prefix <= 622925; prefix++) {
    (function(length, prefix) {
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        detectNetwork((prefix + '4567890123456').slice(0, length)).should.equal('China UnionPay');
      })
    })(length, prefix);
  } //close inner loop

    for(var prefix = 624; prefix <= 626; prefix++) {
      (function(length, prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          detectNetwork((prefix + '1234567890123456'). slice(0, length)).should.equal('China UnionPay');
        });
      })(length, prefix);
    } //close inner loop 

      for(var prefix = 6282; prefix <= 6288; prefix++) {
        (function(length, prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
            detectNetwork((prefix + '123456789012345').slice(0, length)).should.equal('China UnionPay');
          });
        }) (length, prefix); //close IIFE
      } //close inner loop
  } //close outer loop 
}); //close describe 


// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.



describe('Switch', function(){
  var should = chai.should();
  var length = [16, 18, 19];
  var prefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  for(var l of length) {
    for(var p of prefix) {
      (function(l, p){
        it('has a prefix of ' + p + ' an aa length of ' + l, function(){
          detectNetwork((p + '123456789012345').slice(0, l)).should.equaal('Switch');
        });
      })(l, p);
    }
  }
});








