/*

console.log("hi")
const delay = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('Hello');
        }, 1000)
    });
}

const sayHello = (item) => {
    console.log('Helvvlo',item);
}
/*

delay().then((item)=>{
    console.log(item)
});*/
/*
delay().then(sayHello)

const secondPromise = new Promise((resolve, reject) => {
    resolve('Second!');
});

const firstPromise = new Promise((resolve, reject) => {
    resolve(secondPromise);
})

firstPromise
    .then(promise => promise)
    .then(value => console.log(value));

    const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve("kingh")
        },3000)
    })
    

const p3=new Promise((resolve,reject)=>{
    resolve(p2)
})


p3.then(item=>item).then(p=>console.log(p))


const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
  ]

function makeApi(i){
const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve(fakePeople[i])
    },4000)

})
return pr
}
Promise.all([makeApi(0),makeApi(1),makeApi(2)]).then((item)=>{
console.log(item)
})

*/



const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  console.log(promise)
  promise.then((res) => {
    console.log(res);
  });
  console.log(4);;
  async function getData() {
    return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);