// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " "){            // ---- This thing removes space from outcome
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// MAPS

const map = new Map()
map.set('IN', "India")
map.set('US', "United states of America")
map.set('SA', "South Africa")

// console.log(map);

for (const [key, value] of map){
    // console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'PUBG',
    'game3': 'Spiderman',
}

// for (const [key, value] of myObj){
//     console.log(key,value);
// }