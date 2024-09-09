
/*
console.log("hi")
console.log("Start");

setTimeout(function () {
  console.log("Step 1");
  setTimeout(function () {
    console.log("Step 2");
    setTimeout(function () {
      console.log("Step 3");
      setTimeout(function () {
        console.log("Step 4");
        setTimeout(function () {
          console.log("Step 5");
          console.log("End");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

setTimeout(function (){
    console.log("1")
    setTimeout(function(){
        console.log("kaam e kar tan bani")
    },1000)
},1000)
console.log("ddd")

*/
//bad approach
function a(b,c){
  console.log(b)
c()
}
a("mm",()=>{
  setTimeout(()=>{
    console.log("1")
    a("ll",()=>{
      setTimeout(() => {
       console.log("2") 
      }, 1000);
    })
  },1000)
})



//best approach

function call(str,callback){
  setTimeout(()=>{
  console.log(str)
  callback()
  },1000)
  }
  
  call("ankit",()=>{
    call("aman",()=>{
      call("joker",()=>{
        call("poker",()=>{
          call("toking",()=>{
            console.log("done")
          })
        })
      })
    })
  })
  





  function recursion (a,m){
    console.log(a)
  setTimeout(()=>{m()},1000)
  }

recursion("d",()=>{
  recursion("m",()=>{

  })
})