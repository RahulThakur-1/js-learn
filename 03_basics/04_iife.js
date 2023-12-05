// IMMEDIATLEY INVOKED FUNCTION EXPRESSIONS (IIFE)
// used to remove the pollution of global scope
// ; - must

(function chai(){ 
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('don');