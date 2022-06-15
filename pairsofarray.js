//log all pairs of array

const array1=['a','b', 'c','d', 'e']

function arrayPairs(array){
  for(let i=0; i<array.length; i++){
for(let j=0; j<array.length; j++){
  if(array[i]===array[j]){
    continue
  }
   console.log(array[i]+array[j] )
  
} }
}

 arrayPairs(array1)
