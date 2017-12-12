/*
we can create fun-obj in js in 2 ways 

1. Function declaration/ named functions
    -> always get hoisted with function object
    -> fun obj will get created at context-creation - phase

2. function-expression
    -> fun obj will get created at context execution phase

*/

//--------------------------------------------
//1. function-declaration

/*
console.log('sum is '+add(12,12));

function add(n1,n2){
    return n1+n2;
}
*/

// 2 function-expression




/*var add=function(n1,n2){
  
    return n1+n2;
}

console.log('sum is '+add(100,200));

//console.log('K is '+k);
//var k=100;



//var sum=add(100,200);
//console.log('Expression sum is '+sum);
*/

// .js is Functional Pointer

// Functions can be assigned to any othet variables
/* function sayHello() {
    console.log('Hello..')
}

//sayHello();

let greet = sayHello;
greet(); */

// Function as arg
/* function greet(f){

        if(f){
            f();
            return;
        }
        console.log('Hello ...');

}

//greet();

greet(function(){console.log('How are you?')})

let arr=[1,3,5,7,9,3,4,6,8,10];
//arr.sort();
arr.sort(function(a,b){return b-a})
console.log(arr);
 */
// function as return type

/* function teach(){
    console.log('im teaching..');
    let learn=function(){
        console.log('im learning..')
    }
    return learn;
}

let learnFun=teach();
learnFun(); 
learnFun();  */

/* function reflect(){
    console.dir(arguments);
}
console.log(reflect(12,15,123,10)); */
/* 
function getFood(){
    return "No Food";
}

var getFood=new Function(); */

 /* function getFood(pay){
    if(!pay){
        return "No Food";
    }
    return "Biryani";
}
var food=getFood(20);

console.log(food); */
/* 
function sum(){
    let result=0,i=0,len=arguments.length;
    while(i<len){
        result+=arguments[i];
        i++;
    }

    return result;
}

console.log('sum is '+sum(100,200,3,4,10,34,76,34)); */

// ES6 features in functions

// Function with rest parameter
/* function func(arg1,arg2,...rest){
    // console.log(arg1);
    //console.log(arg2);
    //console.log(Array.isArray(rest));
    console.log(rest);

  }

  func(10,20,30,40,50,60); */

// default func params

function func(a=1,b=2){
   // if(!a) a=1;
   // if(!b) b=2;
   a=a||1;
   b=b||2;
    console.log('a -> '+a);
    console.log('b -> '+b);
}

func(undefined,undefined);
































































