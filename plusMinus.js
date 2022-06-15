//input n=numbr of elements
//array values
//get the ratios of positive ,negative and 0 values 

//loops through the array
//store the postive,negative and 0values 

function plusMinus(arr, n){
  let positiveValues =0;
  let negativeValues =0;
  let zeroValues =0;

  for(let i=0; i<arr.length; i++){
    if(arr[i] < 0){
       negativeValues += 1
    }
    if(arr[i]>0){
      positiveValues += 1;
    }
    if(arr[i]==0){
      zeroValues += 1;
    } 
  }

  console.log((positiveValues/n).toFixed(6) +"\n")
  console.log((negativeValues/n).toFixed(6)+"\n")
  console.log((zeroValues/n).toFixed(6) +"\n")

}

const arr=[1,-1,-1,-2,0,0]
const n=6

plusMinus(arr,6)