// arrays

const myArr = [1, 2, 3, 4, 5, "Rahul", 4.5, true]
const myHeros = ["Rahul", "Thakur"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);  // for indexing
console.log(typeof myArr2);

// Array Methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr, typeof newArr);

// --- Slice , Splice --- //
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

// console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myn2);