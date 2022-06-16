// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format
//5,8,10,12,15

// A single line of five space-separated integers
//[2,1,3,4,5]
function miniMaxSum(arr){
  //get the min number
  //get the max number 
  //add all the numbers except the min in getting maxsum
  //add all the numbers except the max number in getting the minsum
let max=0;
let min=arr[arr.length - 1] 
let sum= 0

  for(let i=0; i<arr.length; i++){
     sum += arr[i]
    
    
    if(max<arr[i]){
      max=arr[i];
    
    }
    if(min > arr[i]){
      min = arr[i]
    }

    


    
  }
  console.log(BigInt(sum-max) +" " + BigInt(sum-min))
  
  // console.log("this is the max sum:" +(maxSum-min))
 
// return maxSum
}
console.log(miniMaxSum([1,2,3]))