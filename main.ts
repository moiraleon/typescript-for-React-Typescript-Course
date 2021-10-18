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

//type assertions

 let messages; //assigned as type any will not allow functions to be called so must be cast as string or converted
 messages = 'abc';

 let endsWithC = (<string>messages).endsWith('c'); //casts as string, ends with method returns a boolean
 let alternativeWay = (message as string).endsWith('c');//converts to string in function and returns boolean //only changes it to allow intellisense to understand what way to acces the variable type but does no specific conversion of the variable

 //arrow functions or in C# is referred to as a lambda expression

 let log(message){
     console.log(message);
 }

 //or written as arrow function

 let doLog(message)=>console.log(message);//if you only have one parameter you can omit the parenthesis as well//or if not parameters you can simply put empty parenthesis 
 //or
//  let doLog(message)=>{
//      console.log(message); if you only have one line of code you don't need curly braces
//  }
