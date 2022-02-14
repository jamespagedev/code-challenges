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
  const digitTracker = {}; // key === letter, value === [array of indexNumbers pointing to digits inside the string]

  //--------------------------- helper function(s) ---------------------------
  function isPalindrome(subStr) {
    for (let i = 0, j = subStr.length - 1; i <= j; i++, j--) {
      if (subStr[i] !== subStr[j]) return false;
    }
    return true;
  }

  //---------------------------------- main ----------------------------------
  for (let i = 0; i < s.length; i++) {
    if (digitTracker.hasOwnProperty(s[i])) {
      // This digit has already been found in the string before
      digitTracker[s[i]].forEach((letterIndex) => {
        const possiblePal = s.substring(letterIndex, i + 1);
        if (isPalindrome(possiblePal) && longestPal.length < possiblePal.length)
          // note: change < to <= to get aba instead of bab in the example
          longestPal = possiblePal;
      });
      digitTracker[s[i]].push(i);
    } else {
      // This digit has not been found yet in the string
      digitTracker[s[i]] = [i];
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
console.log(longestPalindrome("abcxcba")); // "abcxcba"
console.log(longestPalindrome("abcxycba")); // "a"
console.log(longestPalindrome("abcba")); // "abcba"
