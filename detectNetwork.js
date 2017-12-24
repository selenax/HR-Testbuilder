// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  //convert string to number, slice prefix 
  //detect prefix && length of digit
  //return name of network
  var prefix1 = parseInt(cardNumber.slice(0,2));
  var prefix2 = parseInt(cardNumber.slice(0,1));
  var prefix3 = parseInt(cardNumber.slice(0,4));
  var prefix4 = parseInt(cardNumber.slice(0,6));
  var prefix5 = parseInt(cardNumber.slice(0,3));
  
  
  
  if((prefix1 === 38 || prefix1 === 39) && cardNumber.length === 14) {
    return 'Diner\'s Club';
      } else if ((prefix1 === 34 || prefix1 === 37  ) && cardNumber.length === 15) {
      return "American Express";
      } else if (prefix2 === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Visa';
      } else if((prefix1 === 51 || prefix1 === 52 || prefix1 === 53 || prefix1 === 54 || prefix1 === 55) && cardNumber.length === 16) {
      return 'MasterCard';
    } else if((prefix3 === 6011 || prefix5 === 644 || prefix5 === 645 || prefix5 === 646 || prefix5 === 647 || prefix5 === 648 || prefix5 === 649 || prefix1 === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover';
    } else if((prefix3 === 5018 || prefix3 === 5020 || prefix3 === 5038 || prefix3 === 6304) && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 ||cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
      return 'Maestro';
    // } else if(prefix4 === 633110 && cardNumber.length === 16) {
    //  return 'Switch';
    // } else if(prefix1 === 62 && cardNumber.length === 16) {
    //  return 'China UnionPay';
    }
};


