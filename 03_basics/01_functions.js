function myName(){
    console.log("r");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}
// myName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 7)
// console.log("Result :",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    } // or if(!username)
    return `${username} just logged in`
}
// console.log(loginUserMessage("Rahul"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500, 600, 1000))

const user = {
    username: "rahul",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue([200, 400, 100, 600])); -- OR
console.log(returnSecondValue(myNewArray));