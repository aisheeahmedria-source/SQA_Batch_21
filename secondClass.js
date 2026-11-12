//function sum (){
   // return 5+6;
//}
//const result = sum ();
//console.log (sum () );
//const add =(a,b)=>{
    //return a+b;
//}
//console.log(add(10,3));
function sum (x){
    if(x<5){
        return x+2;
    }else if (x>5){
        return x-2;
    }else{
        return 0;
    }
}

const result =sum (10);

console.log(result);
