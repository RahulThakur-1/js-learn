// Accumulators

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, cur_val){
//     console.log(`acc: ${acc} and current value: ${cur_val}`);
//     return acc + cur_val
// }, 0)


const myTotal = myNums.reduce( (acc, cur) => acc + cur, 0)
console.log(myTotal);