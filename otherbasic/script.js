console.log("hi i love you js")
const array=[1,2,3,4]

const aman= array.reduce((acc,curr)=>{
    console.log(acc,curr)
  if(curr>acc){
    acc=curr
  }

  return acc
},0)
console.log(aman)


const user=[
{name:"amki ",age:33},
{name:"janki",age:44},
{name:"tanki",age:33}
]
//console.log(user[0].name,user[0]["name"])

const v2=user.reduce(function(acc,curr){
console.log(acc)
if(acc[curr.age]){
 acc[curr.age]= ++acc[curr.age]
}else{
    acc[curr.age]=1
}
return acc
},{})
console.log(v2)


const age=user.filter((item)=>{
if(item.age<44){
    console.log(item.name)
    return item
}
}).map((item)=>item.name)
console.log(age)

const reduce=user.reduce((acc,curr)=>{
if(curr.age<34){
    acc.push(curr.name)
}
return acc
},[])
console.log(reduce)