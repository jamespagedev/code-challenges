/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * @param {string} s
 * @return {string}
 *
 * Examples:
 * "babad" -> "bab" or "aba"
 * "cbbd"  -> "bb"
 * "a"     -> "a"
 * "ac"    -> "a"
 */

function longestPalindrome(s) {
  //------------------------------ edge case(s) ------------------------------
  if (s.length < 2) return s;

  //------------------------------- variable(s) ------------------------------
  let longestPal = s[0];

  //--------------------------- helper function(s) ---------------------------
  function isPalindrome(subStr) {
    for (let i = 0, j = subStr.length - 1; i <= j; i++, j--) {
      if (subStr[i] !== subStr[j]) return false;
    }
    return true;
  }

  //---------------------------------- main ----------------------------------
  for (let i = 0; i < s.length; i++) {
    let isIndexesMoved = true;
    let leftI = i === 0 ? 0 : i - 1;
    let rightI = i === s.length - 1 ? i : i + 1;
    while (isIndexesMoved) {
      let isPalFound = false;
      let subStrLeft = s.substring(leftI, i + 1);
      let subStrRight = s.substring(i, rightI + 1);
      let subStrFull = s.substring(leftI, rightI + 1);

      // check index to left
      if (isPalindrome(subStrLeft)) {
        isPalFound = true;
        if (subStrLeft.length > longestPal.length) {
          longestPal = subStrLeft;
        }
      }

      // check index to right
      if (isPalindrome(subStrRight)) {
        isPalFound = true;
        if (subStrRight.length > longestPal.length) {
          longestPal = subStrRight;
        }
      }

      // check left to right
      if (isPalindrome(subStrFull)) {
        isPalFound = true;
        if (subStrFull.length > longestPal.length) {
          longestPal = subStrFull;
        }
      }

      // update leftI and rightI as needed
      if (
        rightI !== s.length - 1 &&
        subStrFull.length % 2 === 0 &&
        isPalFound
      ) {
        // if subStrFull length is even and rightI is not (subStrFull.length-1) and isPalFound
        rightI++;
      } else if (leftI !== 0 && subStrFull.length % 2 === 1) {
        // else if subStrFull length is odd and leftI is not 0
        leftI--;
      } else {
        isIndexesMoved = false;
      }
    }
  }
  return longestPal;
}

console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("aa")); // "aa"
console.log(longestPalindrome("aaa")); // "aaa"
console.log(longestPalindrome("cac")); // "cac"
console.log(longestPalindrome("abba")); // "abba"
console.log(longestPalindrome("cabba")); // "abba"
console.log(longestPalindrome("abbac")); // "abba"
console.log(longestPalindrome("ababc")); // "aba"
console.log(longestPalindrome("cabab")); // "aba"
console.log(longestPalindrome("aabbaa")); // "aabbaa"
console.log(longestPalindrome("caabbaa")); // "aabbaa"
console.log(longestPalindrome("aabbaac")); // "aabbaa"
console.log(longestPalindrome("abaaba")); // "abaaba"
console.log(longestPalindrome("cabaaba")); // "abaaba"
console.log(longestPalindrome("abaabac")); // "abaaba"
console.log(longestPalindrome("abcbc")); // "bcb"
console.log(longestPalindrome("abccba")); // "abccba"
console.log(longestPalindrome("abcxcba")); // "cxc"
console.log(longestPalindrome("abcxycba")); // "a"
