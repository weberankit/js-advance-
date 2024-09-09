const searchBox=document.querySelector(".searchBox")
console.log(searchBox)
const show=document.querySelector(".show")

/**
 * Here's how it works:
When inputVal changes, the effect is triggered.
If inputVal is truthy, a timer is set using setTimeout to call callingSuggestion() after a delay of 200ms.
If inputVal changes again before the 200ms delay is over, the previous timer is cleared using clearTimeout and a new timer is set.
This process continues until inputVal stops changing for a period of 200ms.
When the timer finally expires (i.e., the 200ms delay is over), callingSuggestion() is called.
 */





//plese use 2nd approch is the best for iterview and understnding 
//1st is mine not googd
/*for single function handle debounciing*/
async function called() {
  query = searchBox.value;
    console.log("Query:", query);
    const fetching = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + query);
    const data = await fetching.json();
    console.log(data[1]);

    const store = data[1].map(item => {
        return `<li>${item}</li>`;
    });
    console.log(store);
    show.innerHTML = store.join("");

}



   let timer
  function debounced( fun,delay) {
 
       // console.log(func)
         
          if (timer) {
              clearTimeout(timer);
          }
    
          timer = setTimeout(() => {
              fun(); // Call the passed function after the delay
          }, delay);
      
        
    
    }

      searchBox.addEventListener("input",() => {


        debounced(called,500)
        })
  
//for multiple debouncing--best



const select=document.querySelector(".in")
//apply debounce same function on 2-different function 

//1st function
async function calling() {
  query = select.value;
    console.log("Query:", query);
    const fetching = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + query);
    const data = await fetching.json();
    console.log(data[1]);

    const store = data[1].map(item => {
        return `<li>${item}</li>`;
    });
    console.log(store);
    show.innerHTML = store.join("");

}


//2nd function
let counter=0
   const petData = (extra) => {
    this.name="dd"
     // calls an API and gets Data
     console.log("petchg Data ..", counter++);
     console.log(extra)
   }
  //returning for best practisees for context and lexical and closure however without it here it not work for multiples
  function debounce (fn, d) {
  
    let timer;
    return function () { 
     //let context = this,
       //args = arguments;
       // console.log(context)
      clearTimeout(timer);
      timer = setTimeout(() => {
        //passing values for argments
        fn.apply(this,["ll"]);
      }, d);
    }
  
  }
  select.addEventListener("input",
     debounce(calling, 300)
  )
  select.addEventListener("input",
  debounce(petData, 300)
  
)


/**do not do this */
/*it does not dd eventlistnere r instead of it calll this function not use it
select.addEventListener("input",()=>{
  debounce(petData, 300)

}

)*/