











console.log("hii")

class food{
    constructor(dish){
        this.dishname=dish
    }
  fruits(){
    const str= this.dishname
     console.log("fruits is not avaail in stock")
    return str
 
  }

static private(){
    console.log("private to this function and it will not inherirt")
}


}

const order=new food("mango")
console.log(order.fruits(),order.dishname)

//Extends

class menu extends food{
  
   //overwrite
   constructor(d,p){
      super(d)//// Calls food constructor with argument d
    this.foddy=p
   }
    item(){
        console.log("food")
    }

}
const y= new menu("ll","jj")
console.log(y.fruits(),y.foddy,y.dishname)

//error as tryig to access private 
//console.log(y.fruits(),y.private())
//getter ansd setter there are others two for object and function
//check video of hitesh

class Profile{
  constructor(a,b){
 this.name=a,
 this.b=b
  }

set name(val){
this._name=val
}
get name(){
  return this._name.toUpperCase()
}




}
const a = new Profile("Ank","dd")
console.log(a.name)



//obj

let  Profilet={

  name:"Anjjd",
  
   
 
 set _name(val){
 this.name=val
 },
 get _name(){
   return this.name.toUpperCase()
 }
 
 
 
 
 }
 
 console.log(Profilet["_name"])
 
 
 