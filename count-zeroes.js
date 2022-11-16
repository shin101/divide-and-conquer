function countZeroes(arr) {
  let left_idx = 0;
  let right_idx = arr.length - 1;
  
  if (arr.length === 0 || arr[arr.length-1] === 1 ){
    return 0;
  } else if(arr[0] === 0){
    return arr.length;
  }
  
  while(left_idx + 1 < right_idx) {
    let mid_idx = Math.floor((left_idx + right_idx) / 2);

    if(arr[mid_idx] === 0){
      right_idx = mid_idx;
    } else if (arr[mid_idx] === 1){
      left_idx = mid_idx;
    }
  }

  return arr.length - right_idx;
};

module.exports = countZeroes
  
  
  
  