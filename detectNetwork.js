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
      } else if((prefix3 === 4903 || prefix3 === 4905 || prefix3 === 4911 || prefix3 === 4936 || prefix3 === 6333 || prefix3 === 6759 || prefix4 === 564182 || prefix4 === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
      return 'Switch';
      } else if (prefix2 === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Visa';
      } else if((prefix1 >=51 && prefix1 <= 55) && cardNumber.length === 16) {
      return 'MasterCard';
    } else if((prefix3 === 6011 || (prefix5 >= 644 && prefix5 <= 649) || prefix1 === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover';
    } else if((prefix3 === 5018 || prefix3 === 5020 || prefix3 === 5038 || prefix3 === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
      return 'Maestro';
    } else if (((prefix4 >= 622126 && prefix4 <= 622925 )|| (prefix5 >= 624 && prefix5 <= 626) || (prefix3 >= 6282 && prefix3 <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <=19)) {
      return 'China UnionPay';

    }
  }






