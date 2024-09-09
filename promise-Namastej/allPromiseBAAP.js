
//to unnderstand microtask and macrotask and promise and settimout
//link of source is below
let print3 = async()=>{
    return new Promise((resolve,reject)=>{ // This line executes 7th and add callback function to the mictotask queue.
    setTimeout(()=>{ // microtask queue content: console.log(2) and setTimeout(console.log("3"), 100)
    console.log("3"); // this line moved to the end of the macrotask,
    resolve();
    },300) // macrotask queue content: console.log("5") in 200ms console.log("3") in 100ms
    })
   
   }
   
   let print = async () => {
    console.log("1"); // This line executes 3rd and print 1
    setTimeout(() => { // This line executes 4th and add call back function inside macrotask queue.
    console.log("5"); // macrotask queue content: console.log("5")
    }, 200);
    return new Promise(async (resolve,reject)=>{ // This line executes 5th and add callback function to microtask queue.
    console.log("2"); // microtask queue content: console.log("2")
    print3(); // This line executes 6th and call print3 function
    resolve();
    console.log("4"); // this line executes 8th and print 4
    })
   };
   
   let start=async()=>{
   print(); // This line executes 2nd and call print function
    console.log("done") // this line executes 9th and print done
   };
   
   start(); // This line executes 1st and call start function
//outppit
   //1
//2
//4
//done
//3
//5

//for more //reffer this https://www.encora.com/insights/javascript-settimeout-and-promise-under-the-hood

//but a/c to chatgpt 
/*
In JavaScript, when a Promise is resolved or rejected, the callbacks added by then, 
catch, or finally are added to the microtask queue. These microtasks are executed after
 the current task has completed but before the event loop continues to process any additional macrotasks.

Now, concerning your code:

javascript
Copy code
let print3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3");
            resolve();
        }, 200);
    });
}
The setTimeout callback inside print3() indeed resolves 
the promise after 200ms and logs "3". This callback is a part of the macrotask queue, not the microtask queue.

Here's the clarification:

The setTimeout function schedules a macrotask, not a microtask. 
So, the callback (console.log("3")) is indeed a macrotask.
When the timer of setTimeout expires, it places its callback (console.log("3") and resolve())
 into the macrotask queue.
Since the microtask queue is processed before the macrotask queue,
 the resolve() will execute after any microtasks that may exist, but the logging of "3" will happen in the macrotask queue.
In summary, setTimeout schedules macrotasks, and Promise resolution and rejection callbacks are queued as microtasks. This is why you might see microtask-related code executed before macrotask-related code in certain scenarios.
*/