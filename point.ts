//Modules

//in order to make this a true module it needs to be accessible elsewhere so we need to export it - 
//adding the export key word in typescript is what causes typescript to define it as a module
//and import keyword with types in curly braces where needed

export class Point{
    //fields
   private x:number;
   private y:number;

    //constructor
    constructor(x?:number, y? :number){
        x=this.x;
        y=this.y;
    }
    
    //methods
    
    draw(){
        console.log('X: '+this.x +', Y: '+this.y)
    }

    get X(){
        return this.x;
    }

    set X(value){
        if (value<0)
            throw new Error('Value can not be less than 0.');
            this.x = value;
        
    }
}