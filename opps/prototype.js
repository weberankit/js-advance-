function user(){
    this.userName="aman"
    this.age=3
}
user.prototype.say=function(){
    console.log("hi i am king")
}


//now globally addding prototype
Object.prototype.normal=function(){
    console.log("jai ram ji ki jai")
}
//now adding protoypt toavail onlly aarrays
Array.prototype.men=function(){ ///we can do with String and also with others
    console.log("jjjj")
}

const a=new user()
console.log(a.say())
console.log(a.normal())
const string="ddd"
console.log(string.normal())

const arr=[3,4,5]
console.log(arr.men())