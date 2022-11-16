function findFloor(arr, num, low_idx = 0, high_idx = arr.length -1) {
  let mid_idx = Math.floor((low_idx + high_idx)/2);
  // if first num is what we're looking for
  if(arr[mid_idx] == num){
    return arr[mid_idx]
  }

  if (low_idx > high_idx) return -1;

  if(num >= arr[high_idx]){
    return arr[high_idx]
  }

  if (mid_idx > 0 && arr[mid_idx - 1] <= num && num < arr[mid_idx]) {
    return arr[mid_idx - 1];
  }

  if(num < arr[mid_idx]){
    return findFloor(arr, num, low_idx, mid_idx-1);
  }

  return findFloor(arr, num, mid_idx+1, high_idx);

}

module.exports = findFloor

