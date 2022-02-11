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
  return s;
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
