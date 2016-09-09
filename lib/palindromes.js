function isPalindrome(s) {
  var removespace = s.replace(/\s+/g, '');
  var stringReverse = removespace.split("").reverse().join("");
  return removespace === stringReverse;
}

module.exports = isPalindrome;
