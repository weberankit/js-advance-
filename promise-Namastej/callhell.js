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









