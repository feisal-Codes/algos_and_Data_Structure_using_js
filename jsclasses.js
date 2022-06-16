//es6js classes refreshers
//inheritance

class Animal{

constructor(name,type, sound){
 this.name=name;
  this.type=type.toLowerCase()
  this.sound=sound
  
}

  sounds(){
     console.log(this.sound)
  }
  
}


class Insect extends Animal{
  constructor(name,type, sound, habitat){
    super(name,type, sound)
    this.habitat = habitat
  }

  desc(){
    console.log(this.name +" is a "+ this.type+ ".it lives in " + this.habitat)
  }
  
}



const cat = new Animal("tom", "cat", "meoww")
const dog=new Animal("spike", "dog","Wooof" )
const spider= new Insect("Charlotte", "spider", "grrr", "web")

cat.sounds()
dog.sounds()
spider.sounds()
spider.desc()