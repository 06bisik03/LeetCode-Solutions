/*EXPL: this function does the following. It fixes one of the numbers and reduces the problem to a two sum problem. Our fixed integer is within the for-loop(with counter i).
After we fix our integer we use a double sided counter to iterate over the array that is left after fixing the integer. We know when to stop by comparing left to right counter.
Since we sort our array at the beginning we know which of the two we need to update according to the sum of the 3 integers. We are also checking for duplications after every iteration
to make sure we do not calculate the same thing again. For that we use checkDup. */

function threeSum(nums: number[]): number[][] {
  const arr: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum: number = nums[right] + nums[left] + nums[i];
      if (sum === 0) {
        arr.push([nums[left], nums[right], nums[i]]);
        left++;
        right--;
        left = checkDup(left,right, nums, "l")[0];
        right = checkDup(left,right, nums, "r")[1];
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return arr;
}

function checkDup(l: number, r: number, x: number[], direction: string): [number,number] {
  switch (direction) {
    case "l":
      while (l < r) {
        if (x[l] === x[l - 1]) {
          l++;
        } else {
            break;
        }
      }
      break;

    case "r":
      while (r > l) {
        if (x[r] === x[r + 1]) {
          r--;
        } else {
            break;
        }
      }
      break;
  }
  return [l,r];
}
console.log(threeSum([1, 2, 0, 1, 0, 0, 0, 0]));
