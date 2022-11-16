function findRotatedIndex(arr, num) {
  let high_idx = arr.length - 1
  let low_idx = 0
  
  while(low_idx <= high_idx){
    let mid_idx = Math.floor((high_idx + low_idx) / 2);

    if (arr[mid_idx] === num) {
      return mid_idx;
    } 
    else if (mid_idx === low_idx) {
      return -1;
    }
    
    if (arr[mid_idx]>=arr[low_idx]){
        if (num <= arr[mid_idx] && num >= arr[low_idx]){
        high_idx = mid_idx-1;
      } else {
        low_idx = mid_idx+1;
      }
    } else {
        if (num >= arr[mid_idx] && num <= arr[high_idx]){
          low_idx = mid_idx+1;
      } else {
          high_idx = mid_idx-1;
      }
    }
  }
}

module.exports = findRotatedIndex