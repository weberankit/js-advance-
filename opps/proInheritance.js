console.log("ddd")
/*
function food(d){
    this.dish=d
}
console.log(food)
food.prototype.ans=function(){
    console.log("ddd")
}

const a=new food("d")
console.log(a.ans())*/

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

