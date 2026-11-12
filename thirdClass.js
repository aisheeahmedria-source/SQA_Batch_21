//function numPrint (){
    //for (let i =1;i<6;i++){
       // console.log("Aishee");
    //}
//}
//numPrint();
//class shape{
    //numPrint(){
        //for(let i=0;i<6;i++){
            //console.log(i);
        //}
   // }
//}
//const result = new shape();
//esult.numPrint();
class Shape{
    constructor(){
        this.width =10;
        this.height =15;
    }
showShape(){
    console.log(`Width:${this.width},Height:${this.height}`);
}

}

export {Shape};
