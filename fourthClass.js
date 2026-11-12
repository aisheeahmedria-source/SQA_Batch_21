import {Shape as Data} from './thirdClass.js';


class Rectangle extends Data{
    printStar(){
        for(let i=0;i<10;i++){
        let res = "";
        for(let j=0;j<=i;j++){
            res = res + "*";
           
        }
         console.log(res);  
    }  
    }
}
const result = new Rectangle();

result.printStar();
