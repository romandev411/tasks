const arr = [1,2,3,4,5,8,9,99];

function sum(arr) {
  let sum = 0;
  for (let i = 0;i<arr.length;i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

console.log(sum(arr));

function minMax() {
  let min = arguments[0];
  let max = arguments[0];
  
  for (let i = 0;i < arguments.length;i++) {
    if (arguments[i]< min) {
      min = arguments[i];
    }
    
     if (arguments[i]>max) {
      max = arguments[i];
    }
  }
  return [min, max]
}


console.log(minMax(-1, -22, 1,2,3,4));
