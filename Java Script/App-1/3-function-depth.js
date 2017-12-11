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

/*console.log('sum is '+add(12,12));

function add(n1,n2){
    return n1+n2;
}
*/

// 2 function-expression

var add=function(n1,n2){
    return n1+n2;
}

var sum=add(100,200);
console.log('Expression sum is '+sum);














