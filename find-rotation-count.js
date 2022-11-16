function findRotationCount(arr, low_idx = 0, high_idx = arr.length - 1) {
  let mid_idx = Math.floor((low_idx + high_idx)/2);

  if (arr[high_idx] > arr[low_idx]){
    return 0;
  }

  // if you found a pivot
  if (arr[mid_idx] < arr[mid_idx-1] && arr[mid_idx] <= arr[mid_idx+1] ){
    return mid_idx 
  }
  if (arr[mid_idx] < arr[high_idx]){
    return findRotationCount(arr, low_idx, mid-1)
  }

  if (mid_idx < high_idx && arr[mid_idx + 1] < arr[mid_idx]){
    return mid_idx + 1;
  }

  return findRotationCount(arr, mid_idx + 1, high_idx);

}

module.exports = findRotationCount


