// Your code here
class Polygon{
    constructor(array){
this.array = array
    }
    get countSides(){
     return this.array.length
    }

   get perimeter(){
       return this.array.reduce(function(a,b){
           return a + b
       })
   
    }
}

class Triangle extends Polygon{

    get isValid(){
       let threeSides = this.array.length === 3
       let valid = this.array[0] + this.array[1] > this.array[2] &&
       this.array[1] + this.array[2] > this.array[0] &&
       this.array[0] + this.array[2] > this.array[1]
       if(threeSides && valid ){
           return true
       }
       else
       {
           return false
       }
    }
}

class Square extends Polygon{
get isValid(){
    let fourSides = this.array.length === 4  
    let valid = this.array[0] === this.array[1] &&
    this.array[1] === this.array[2] && 
    this.array[2] === this.array[3] && 
    this.array[0] === this.array[2] && 
    this.array[0] === this.array[3] &&
    this.array[1] === this.array[3]
    if(fourSides && valid){
        return true
    } 
    else 
    {
        return false
    }

 }
get area(){
    return this.array[0] * this.array[1]
}

}   


