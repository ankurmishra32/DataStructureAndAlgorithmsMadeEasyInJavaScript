// Problem-8 Given an array of characters formed with a's and b's. The string is marked with special character X
// which represents the middle of the list. Check whether the string is palindrome or not?
function isPalindrome(inputStr) {
  let i = 0;
  let j = inputStr.length - 1;
  while ((i < j) && (inputStr[i] === inputStr[j])) {
    i++;
    j--;
  }
  if (i < j) {
    console.error('Not a Palindrome');
    return 0;
  }
  console.log('Palindrome');
  return 1;
}

export default isPalindrome;
