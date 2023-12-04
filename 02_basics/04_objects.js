// const tinderUser = new Object() --- Singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "Thakur",
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {
    1: "A", 2: "B",
}
const obj2 = {
    3: "C", 4: "D",
}
const obj4 = {5: "E", 6: "F",}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "123@gmail.com",
    },
    {
        id: 1,
        email: "123@gmail.com",
    },{
        id: 1,
        email: "123@gmail.com",
    },{
        id: 1,
        email: "123@gmail.com",
    },
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const cource = {
    courcename : "learning JS",
    price : "999",
    courceInstructor : "rahul",
}

// cource.courceInstructor

const {courceInstructor: instructor} = cource // destructuring
console.log(instructor);

// {
//     name: "rahul",
//     courcename: "js learn",
//     price: "free",
// } -----------------Json format


// [
//     {},
//     {},
//     {},
// ]      ---------- Json fromat
