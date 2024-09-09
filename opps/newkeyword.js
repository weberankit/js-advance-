console.log("hi")


function user(food , price){
   
/*
   this will not overwrite but there is readbility isuue and also we have to return each thing and not object return
food= food
price=price
//var we can also use because we can do this
var aman=300
var aman=400 
console.log(aman)
but notpossible in let 
*/ // see if not nderstand above then read this
    // if we use var then we know parameter is  variable which is defined by var as we have used var for variable name
    //now now var can be used two times but that is not possible with let --can't be possible let food=food as already used 
    //for food parameter

   
this.food= food
this.price=price
return this

}
const p1= user(3,4)
const p2=user(4,5)
console.log(p2,p1)//4,5 overwite

//to overcome from overwrite // used new create copied of object
const p3= new user(99,44)
const p4= new user(299,244)
console.log(p3)
//constructor--- reference to itself i.e here function
console.log(p3.constructor) ///function :  user


