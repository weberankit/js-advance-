//30 may 2024
//'use strict';
const user = {
  
  id: 551,
  name: 'Tom',
  getId() {
    
    return this.id;
  },
  credentials: {
    id: 120,
    username: 'tom',
    getId() {
      console.log(this.id)
      return this.id;
    }
  },
};

 const a=user.credentials.getId();
//console.log(getId());
console.log(a)

/*but this will be undefined in strict mode */
/*2nd most imp */

/* this will be undefined as invodeked function does not have invoked function
const getId = user.credentials.getId;
console.log(getId());
*/




//10jan 2024
//"use strict"
console.log(this)

const obj={
    name:"ll",
    b:this,

    a:function(){
    console.log(this)
        const ama=()=>{
            console.log(this,"nested arrow")
        }
        ama()
    },

    c:()=>{
        console.log(this,"arrow")
    }

}
console.log( obj.b)
obj.a()
obj.c()


const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
  ];
  
  function printAnimals(i) {
    console.log(this)
  //   const a = function() {
    this.print = function() {
        console.log(this);
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
   //  a.call(this)
    }

  animals.map((item,index)=>{
    printAnimals.call(item,index)
  })

