import{Point} from'./point';
//on quotations included path to that file from the calling file
//this is the information needed to move forward with angular framework

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

// class Point{
// //fields
// x:number;
// y:number;

// //methods

// draw(){
//     console.log('X: '+this.x +', Y: '+this.y)
// }

// getDistance(another:Point){
//     //...
// }


// } 

// let point: Point = new Point();
// let point =  new Point(); //point is an instance of the class Point
// point.x =1;
// point.y =2;
// point.draw();

//constructors

//is basically a method that is called when we make an instance of the class
//adding a constructor allows us to simplify the code and calling of the method from the previous to the following\

// class Point{
//     //fields
//    private x:number;
//    private y:number;

//     //constructor
//     constructor(x?:number, y? :number){
//         x=this.x;
//         y=this.y;
//     }
    
//     //methods
    
//     draw(){
//         console.log('X: '+this.x +', Y: '+this.y)
//     }

//     get X(){
//         return this.x;
//     }

//     set X(value){
//         if (value<0)
//             throw new Error('Value can not be less than 0.');
//             this.x = value;
        
//     }
// }

let point =  new Point(1,2);
point.draw();

//C# can have multiple constructors but typescript can not so we can not pass an empty constructor but we can make the parameters optional//we add a ? after to make that it is optional
//if you make one parameter optional ALL parameters to the right side should also be optional to make sure they do not pass into the wrong values


//ACCESS MODIFIERS
//public -default
//private
//protected

//once initialized values can not be modified


//ACCESS MODIFIERS IN CONSTRUCTOR PARAMETERS

//instead of initializing fields we can initialize them in the constructor as such

// constructor(private x?:number, private y? :number){
// }
//this will generate and initialize the fields as the value of the arguments


//PROPERTIES

//GETTERS AND SETTERS
//get x and set x methods

//let x = point.getX();//can be simplified
// let x = point.X;
// point.X = 10;

//a property looks like a field in the class but it is a method