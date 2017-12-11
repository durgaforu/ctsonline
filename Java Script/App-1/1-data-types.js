/*
    data types
    -----------

    1. simple/primitives ==> values
        a. string
        b. number
        c. boolean
        d. undefined
        e. symbol

    2. complex/refetnce ==> objects
*/

//--------------------------------------------------------------

    // 1. primitives

//--------------------------------------------------------------

// a.string

var name="Praveen";
var selection='a';
//--------------------------

//b. number

var count=12;
var cost=12.12;

//-----------------------------------

// c. boolean

var found=true;
// imp-note:

/*

falsy values ==> false,0,"",null,undefined,NAN


*/



// d. undefined

var v;

/*
 How to create objects in .js-lang?

 syntax

 var ref=new Constructor();

*/

var person=new Object();
/*
by default, .js objects are extensible & configurable
*/

person.name="Praveen";
person.age=33;
person.doWork=function(){
    console.log('work...');
    delete person.age;
    console.log('Age is '+person.age); // undefined
}

//  literal style of objests

// 1. Object

emp={
    empid:10,
    ename:'Praveen',
    age:65
}

// 2. Arrays
var menu=new Array();
menu[0]='Biryani';
menu[1]='Fish';
menu.push('Egg');

// 3. RegExp

var re=new RegExp("\\d{10}");
// or
var newR=/\{10}/;

//4. Functions

var add=Function("n1","n2","var r=n1+n2;return r;");

// or

function newAdd(n1,n2){
    var r=n1+n2;
    return r;
}

newAdd.prop1=12;
newAdd.prop2=13;
newAdd.m=function(){
    // BL
}
//-----------------------------------------------

// How to access object properties?

var person={
    name:'Praveen',
    "full_name":'Praveen Reddy S',
    'age':87
}

console.log(person.name);
console.log(person.full_name);



































