///deepcopy vs shallow copy

let obje={
    name:"Amkit",
    arrt:{
      age:{
        number:8888
      }
    }
  }/*
  console.log(Object.keys(obj))
  
  
  const clone={...obj}
  clone.arrt.age.number=999
  console.log(obj,clone,"ll")
  
  
  const firstMethod=JSON.parse(JSON.stringify(obj))
  console.log(firstMethod)
  firstMethod.arrt.age.number=88887665
  console.log(obj,clone,firstMethod)
  
  */
  
  
  //now long and interview method
  
  function check(obj){
  
  if(typeof obj !== "function" || obj !== null){
    console.log(obj)
    return obj
  }
  const copyObj=Array.isArray(obj)?[]:{}
  const keys=Object.keys(obj)
  for(let i=0;i<keys.length;i++){
   copyObj[keys[i]]= check(obj[keys[i]])
  }
  
  }
  
  
  
  
  const copied=check(obje)
  console.log(copied)
  
  