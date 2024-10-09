//  primitive

// 7 types : string ,number , boolean , null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isloggedIn = false
const outsidetemp = null
let userEMail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 13564164514255545n






// Reference (Non Primitive)

// Array, Objects, Functions


// const heros = ["shaktiman","nagraj","doga"]
// let myObj ={
//     name:harshit,
//     age:22,
// }

const myfunction= function(){
    console.log("hello world");
    
}
console.log(typeof bigNumber);



//+++++++++++++++++

// stack(primitive) ,heap(non primitive)

let myname = "harshit"
let anothername = myname
anothername = "hs"
console.log(anothername);
console.log(myname);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "harshit@google.com"
console.log(userOne.email);
console.log(userTwo.email);

