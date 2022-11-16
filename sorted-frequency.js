function sortedFrequency(arr,num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

  function findFirst(arr, num, low=0, high=arr.length-1){
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || num > arr[mid-1] && arr[mid] === num )){
        return mid;
      } else if (num > arr[mid]){
        return findFirst(arr, num, mid + 1, high)
      } else {
        return findFirst(arr, num, low, mid - 1)
      }
    }
    return -1
  }


  function findLast(arr, num, low=0, high=arr.length-1){
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || num < arr[mid+1] && arr[mid] === num )){
        return mid;
      } else if (num < arr[mid]){
        return findLast(arr, num, low, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, high)
      }
    }
  return -1

  }

module.exports = sortedFrequency



// firstFirst (target num)
// determine low, med, high indexes

// while low <= high
  // if med = number
    // if med - 1 != med return med
    // else high = med - 1
  // else
    //

    // if true, high = med - 1
    // if false, low = med + 1
// return -1 

// find first index of 2
// find first index of 3
 
