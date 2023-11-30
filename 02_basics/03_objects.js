// Singleton - using constructor
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Thakur",
    [mySym]: "myKey1",
    age: "22",
    location:"Himachal",
    email: "rahul.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"],
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rahuldon@gmail.com"
console.log(JsUser["email"]);
// Object.freeze(JsUser)
JsUser.email = "havsi.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user"); 
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());