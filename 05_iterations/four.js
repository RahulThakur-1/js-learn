// FOR IN loop

// Applying on objects
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rubi',
    py: 'python',
    swift: 'swift by apple',
}
for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

// applying on array
const programming = ["python", "java", "c++", "swift"]
for (const key in programming) {
    console.log(programming[key]);
}

