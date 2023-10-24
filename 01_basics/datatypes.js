// Premitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const logIn = false
const Outside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
const bigNumber = 123456789098765432n // bigInt


// Reference or Non-Premitive Datatypes
// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"] // array

let myObj = {                     // Object
    name: "Rahul",
    age: 22,
}

const myFunction = function(){             // Function
    console.log("Hello World !")
}


