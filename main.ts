// function logFunction(message) {
//     console.log(message);
// }
// var message = 'Hello World';
// //var and let are both applicable for defining functions
// function doSomething() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// doSomething();
// //not running unless commenting out typescript
// //changing var to let in the above function is the proper way of creating scope in a function 
// //ES 5 and later don't use let key word so it is changed when running tsc to var

// //only use VAR key word

// //enum

// enum Color {Red = 0, Green = 1, Blue = 2}; 

// let backgroundColor = Color.Red;

// //type assertions

//  let messages; //assigned as type any will not allow functions to be called so must be cast as string or converted
//  messages = 'abc';

//  let endsWithC = (<string>messages).endsWith('c'); //casts as string, ends with method returns a boolean
//  let alternativeWay = (message as string).endsWith('c');//converts to string in function and returns boolean //only changes it to allow intellisense to understand what way to acces the variable type but does no specific conversion of the variable

//  //arrow functions or in C# is referred to as a lambda expression

//  let log(message){
//      console.log(message);
//  }

//  //or written as arrow function

//  let doLog(message)=>console.log(message);//if you only have one parameter you can omit the parenthesis as well//or if not parameters you can simply put empty parenthesis 
//  //or
// //  let doLog(message)=>{
// //      console.log(message); if you only have one line of code you don't need curly braces
// //  }

// //INTERFACES


// let drawPoint =(point)=>{
// //...
// }
// //pass in an object as opposed to passing in multiple parameters
// drawPoint({
//     x=1,
//     y=2//to prevent passing in values of strings or incompatible we can do something called in line annotations in the parameters themselves
// })
// let drawPoint2 =(point: {x:number, y:number})=>{
//     //...
//     }
//     //however if we want to incorporate the point object into many problems we wouldn't want to type this out each time so we can create something called an interface


//     interface Point{ //capital P not lowercase because for interfaces we want to use Pascal naming convention which capitalizes all first letters
//         x:number,
//         y:number
//     }
//     //then you can pass in an interface by giving it a parameter name with its type just as before

//     let drawPoint3 = (point: Point)=>{}


//     //additional problem

//     let getDistance =(pointA:Point, pointB: Point)=>{
//         //...
//     }

//this violates the rule of cohesion to have all these functions spaced out like this

     //CLASS 
     //a class groups properties and functions that are highly related


//we can't add actual code in an interface but we can make a declaration of what can access the interface what we call the signature of a function

class Point{
//fields
x:number;
y:number;

//methods

draw(){
    console.log('X: '+this.x +', Y: '+this.y)
}

getDistance(another:Point){
    //...
}


} 

// let point: Point = new Point();
let point =  new Point(); //point is an instance of the class Point
point.x =1;
point.y =2;
point.draw();

