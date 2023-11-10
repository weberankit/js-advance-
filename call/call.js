const food={
    dish:"vada",
    printfood:function(x,y){
        console.log(this.dish +" " +" "+ x + y)
    }
}
console.log(food.printfood('m','n'))


const newFood={
    dish:"mushroom"
}

//call-method- boorrowing function from other object

food.Rrintfood.call(newFood,"tomato","paorr")
 
let printveg=function(x,y){
    console.log(this.dish+""+ y, x )
}
printveg.call(newFood ,"dd" ,33)


///now apply -- pass argument as array

const applyFood={
    dish:"444"
}
printveg.apply(applyFood,["ddd","this is apply"])

///bind ---it crete copy of printveg and it will bind coppiedmethod with object and return copiemethodmethod

let bind=printveg.bind(applyFood,"bind","it will also return")
bind()