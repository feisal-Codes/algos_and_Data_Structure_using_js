// Staircase detail

// This is a staircase of size n:

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .
//iterate over the n values
//for each value of n print # ntimes and jump a space of n times //except the last one  



//space = n-1

function stairCase(n){
  for(let i=1; i <= n; i++){
      let space = " "
      let hash="#"
      space= space.repeat(n-i)
      hash= hash.repeat(i)
  
      console.log(space+hash)
    }
}

stairCase(20)





