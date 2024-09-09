/*
const food={
    dish:"vada",
    printfood:function(x,y){
        console.log(this.dish +" " +" "+ x + y)
    }
}
console.log(food.printfood('m','n'))


const newFood={
    dish:"mushroom"
}

//call-method- boorrowing function from other object

food.Rrintfood.call(newFood,"tomato","paorr")
 
let printveg=function(x,y){
    console.log(this.dish+""+ y, x )
}
printveg.call(newFood ,"dd" ,33)


///now apply -- pass argument as array

const applyFood={
    dish:"444"
}
printveg.apply(applyFood,["ddd","this is apply"])

///bind ---it crete copy of printveg and it will bind coppiedmethod with object and return copiemethodmethod

let bind=printveg.bind(applyFood,"bind","it will also return")
bind()

*/


/*



//BEST EXAMPLES

function use() {
    this.pk = "pp";
    this.name = "ii";

    const btn = document.querySelector('button');

    // Using an arrow function to preserve the context of 'this'
    this.handleClick = function() {
        console.log("Cc");
        console.log(this.pk);
    }

    btn.addEventListener("click", this.handleClick.bind(this));

//btn.addEventListener("click", this.handleClick.call(this));

/*Immediate Invocation: call() immediately invokes the function with the specified context,
 whereas bind() returns a new function without immediately invoking it.
Return Value: call() returns the result of the function call,
 while bind() returns a new function with the bound context.
*/

 /*   return this;

}

/*Without bind(this), this inside handleClick would refer to the button element, 
and this.pk would be undefined since the button element doesn't have a property named pk. By using bind(this), 
you're explicitly setting that this inside handleClick
 should refer to the context of the use function, allowing you to access its properties such as pk */

 //to provve this -- do one thing use bind as above you have  done  above but do one thing instead of calling 
 //this.names call only console.log(this) with bind method attached in eventlistener 
 //you will notice it will give window object beacuse it set this of function to this of button
/*use();*/


/*example show about call method 
//here we are showing that we use this of createuser to set this of users so when
//user call create user they get all the valuses 
//by the way check version 2 we can achieve this thing without call also

*/

function users(user){
    console.log(user,"not",this)
this.name=user
console.log(this)
return this
}


function createUser(user,password,age){

    console.log(this)

 const a=users.call(this,"kk")
 console.log(this)
    this.pass=password
    this.age=age
    return this
}


const n=new createUser(1,2,3)

console.log(n)
/*
By using call(this, "kk"), you're explicitly setti

ext of the users function to be the same as the this context of the createUser function. This 
allows this.name = user inside users to correctly set the name property on the object created by new createUser(1, 2, 3)
*/

//version-2 without using call setting export value 
/**
 function users(user){
//  console.log(user,"not",this)
this.name=user
return this
}


function createUser(user,password,age){
 const b= users("ankit")
// console.log(b.name)
//const a=users.call(this,"kk") 
this.bb=b.name
  this.pass=password
  this.age=age
  return this
}


const n=new createUser(1,2,3)

console.log(n)
 





const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7
const array = ['a', 'b'];
const elements = [0, 1, 2];

array.push.apply(array, elements); //[a,b,0,1,2]
*/
