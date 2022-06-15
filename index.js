//compare if one element of an array is present in another
//parameters array 1 , array 2 
//if element is present in both return true
//else return false 
//write an optimized function

//the easy way , function isnt efficient and has a big 0
//n times n

// const array1=['x', 'y', 'z', 'w'];
// const array2=['a', 'b', 'w', 'l']
// function compareArrays(){
// for (let i=0; i< array1.length; i++ ){
//   for (let j=0; j< array2.length; j++ ){
//     if(array1[i]===array2[j]){
//       return true
//     }
//   }
// }
// return false
// }

// console.log(compareArrays(array1, array2))
//this functon returns (a*b)


//to optimize the code above , a common pattern is 
// convertng one of the arrays into an object and the comparing the object each property of the object with the each index of the array



const array2=['a', 'b', 'w', 'k']
const array1=['x', 'y', 'u', 'l',"k"];
  
function optimizedcode(array2, array1){
  const obj={}
  for(let i=0; i<array2.length; i++){
  if(!obj[array2[i]]){
    let item = array2[i]
    obj[item]=true
  }

}
    console.log(obj)

 for(let j=0; j<array1.length; j++){
    

  if(obj[array1[j]]){
    return true
  }
}
  console.log(obj)
  return false
  }

console.log(optimizedcode(array2, array1))

//this function has a big 0 of (a+b) 







