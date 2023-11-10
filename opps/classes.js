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
      super(d)
    this.foddy=p
   }
    item(){
        console.log("food")
    }

}
const y= new menu("ll","jj")
console.log(y.fruits())
//error as tryig to access private 
//console.log(y.fruits(),y.private())

