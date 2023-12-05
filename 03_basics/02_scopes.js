// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}

// console.log(a);


//  {} - this is called scope in JS
/* Means everything present in {} this is scope*/

// {{...}} - this is  called nested scope ,
// means scope under scope.

function one(){
    const username = "Rahul"

    function two(){
        const website = "youtube"
        console.log(username);

        function three(){
            const index = "hello"
            console.log(website);
        }
        three()
    }
    
    two()
}
one()

if (true){
    const username = "rahul"
    if (username == "rahul"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website); -- request out of scope
}
// console.log(username); -- request out of scope

// ------------------------- INteREstINg ---------------------------

console.log(addone(5))
function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));