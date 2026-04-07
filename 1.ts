/*EXPL: to be able to find the pair in linear time, we need to use a map which will store every number we have seen until that point of time along with the index at which it is inside the given array.
When we keep iterting over the array, we keep an eye on the remainder of target-current and if we have this number inside the map it means that this number and the number we have added in the map before are the pair we are looking for.*/
function twoSum(nums: number[], target: number): number[] {
  let m: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x: number = target - nums[i];
    if (!m.has(x)) {
      m.set(nums[i], i);
    } else {
      let y: number = m.get(x)!;
      return [y, i];
    }
  }
  return [];
}
