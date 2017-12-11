/*

Execution Context(Scope)

memory / statck frame with local var and given arguments  to execute instructions

Phase-1: creation

any variable declared with var keyword
any-where in the context will get hoisted (lifted up) to the top with default value
'indefined'

Phase -2 : execution
instuctions will get in sequence
//-------------------------------------------------


b y default js-runtime has one global-context  & global object


global-object
--------------
browser-envi ==> window
Node.js ==> process

//------------------------------------
best - practice: always declare variable in top

every function invocation also creates new-context which is a child of
in which context that fun has declared
*/

function fun(){
    console.log(name);
}

var name='Praveen';

fun(); // fun-context ==> global-context

//--------------------------------------------
//problems with var key word

//console.log("I= "+i);
//var i=10;

// prob-2: No block scope
//var i=100
//{
  //  var i=200;
//}

//console.log(i);

// prob -3: we can re-declare sample var multiples within same context
//var i=100;
//var i=200;

// Solutions: using 'let' & 'const; keywords ==> ES6 spec

//console.log('I value is '+i);
//let i=12;

//var i=100;
//{
  //  let i=200;
//}
//console.log('I value is '+i);

//let i=100;
//let i=200;

//------------------------------------------

// const  PI=3.141;

const person={
    name:'Praveen'
};

//-----------------------------------
var i=13;
function f1(){
    function f2(){
        console.log(i)
    }
    f2();
}
f1();



















