console.log("promise")
const promise=fetch("https://api.github.com/users/weberankit")
console.log(promise)
promise.then(function(item){
    console.log(item)
    return item
}).then((item)=>{
    console.log(item)
})



const prsec=new Promise((resolve,reject)=>{
    

})

    const fetching= new XMLHttpRequest()
    fetching.open("GET","https://api.github.com/users/weberankit" , true)
    fetching.onreadystatechange=function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
    }
    


prsec.then(function(item){
    console.log(item)
})
