console.log("hi")
let count=0
function getData(){
    
    console.log("eeee" , count++)

}



  function applyDeboun(fn,t){
       let timer;
    return function(){ 
       // let context=this// Capture the current context (the 'this' value)
        //args=arguments// Capture the arguments passed to the function

    //clearing earlier
        clearTimeout(timer)
       timer=  setTimeout(()=>{
   //  getData().apply(context,arguments) // Invoke the debounced function with the captured context and arguments
   getData()
    //fn()
    
    } ,1000)}
}
// Create a debounced function using applyDebounce
const debouncedFunction = applyDeboun();




//const betterfunc=applyDeboun(getData , 1000)