function logFunction(message) {
    console.log(message);
}
var message = 'Hello World';
//var and let are both applicable for defining functions
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
//not running unless commenting out typescript
//changing var to let in the above function is the proper way of creating scope in a function 
//ES 5 and later don't use let key word so it is changed when running tsc to var

//only use VAR key word

//enum

enum Color {Red = 0, Green = 1, Blue = 2}; 

let backgroundColor = Color.Red;
