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
