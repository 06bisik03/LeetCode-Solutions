function isPalindrome(x: number): boolean {
    //If x % 10 = 0 must be true otherwise it cannot be a palindrome because the format would not support
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let y = 0;
  // Take away the LSB of x and add it to y. Multiply it with 10 every loop to keep it up to date until we reach half of x.
  while (x > y) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === y || x === Math.floor(y / 10);
}