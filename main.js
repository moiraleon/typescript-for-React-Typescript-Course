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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
