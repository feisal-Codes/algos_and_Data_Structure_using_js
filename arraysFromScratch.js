class Myarray{
  constructor(){
    this.length=0;
    this.data={}
  }

   get(index){
     return this.data[index]
   }

  push(item){
    this.data[this.length]=item
    this.length++
    return this.length
  }
  pop(){
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length --
    return lastItem
  }
  delete(index){
      const item= this.data[index]
      this.shiftItems(index)
    return item
  }

  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
      // this.length --

    }
    delete this.data[this.length -1]
    this.length--

  }
}
const myArray= new Myarray()
myArray.push("a")
myArray.push("b")
myArray.push("c")
myArray.push("d")
console.log(myArray)
console.log(myArray.get(0))
// console.log(myArray.pop())
myArray.delete(0)
console.log(myArray)

