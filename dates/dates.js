
//year-month-day-hrs-min-sec

//this will gives times in ms from 1 jan 1970
let dates=Date.now()
console.log(dates) 
//this fives times from from 1jan 1970 to your provided date//
let dates2=new Date("2024-01-23") //not 0 index
console.log(dates2.getTime())
//now to print today date
let dates3=new Date()
console.log(dates3)
///to provide soe dates
let dates4=new Date(2024,0,21) //0-indexd   
console.log(dates4)


/*
const dates= Date.now()
console.log(dates)
*/
const dates20= Date()
console.log(dates20.split(" "),dates20)
const date3=new Date()
console.log(date3.toDateString())
