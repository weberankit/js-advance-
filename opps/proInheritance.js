console.log("ddd")

function food(d){
    this.dish=d
}
food.img='f'
console.log(food.img)
food.prototype.ans=function(){
    console.log("ddd")
}

const a=new food("d")

console.log(a.ans(),a.__proto__,"uu",food.prototype,food.__proto__)/**/
console.log(a.prototype,a.__proto__)
//so
console.log(a.__proto__,food.prototype)
//inheritance
const s1={
    name1:"Ankit"
}
const s2={
    name:"eee",
    __proto__:s1
}
console.log(s2.__proto__)
const s3={
    name:"33",
   
}
s3.__proto__=s2
console.log(s3.__proto__.__proto__)


// modern syntax

const user1={name:22}
const user2={name:33}

//imp
//settinng prototypeog user1 to user2
Object.setPrototypeOf(user1,user2)
console.log(Object.getPrototypeOf(user2))




//some more example onit


// Person is a constructor function
function Person() {}

// Create a personA object through the Person constructor function
const personA = new Person();

// Through the __proto__ method, view the prototype of personA
console.log(personA.__proto__ , Person.prototype); // {constructor: ƒ}

// personA object can be accessed to its prototype through the __proto__ method
personA.__proto__ === Person.prototype; // true
Object.getPrototypeOf(personA) === Person.prototype; // true
personA.__proto__ === Object.getPrototypeOf(personA); // true
