// OOP - Object Oriented Programming Language;

// ES5 , ES6 - ES12

// es5 var 
// es6 let
// let x = 5;
// const y = 23;
// console.log(x);

// ... - spread operatir
// ... - rest params
// let arr = [1 , 2 , 3];
// let arrCopy = [...arr , 4];

// function restParam(...args){
//     console.log(args)
// }

// let str1 = "string1";
// let str2 = "string2";
// let newString = `${str1} ${str2}`;

// Constructor function;

// new 
// function Person (ner , mergejil) {
//     this.ner = ner;
//     this.mergejil = mergejil;
// }

// Person.prototype.sayYourName = function(){
//     return this.ner
// }


// const p1 = new Person('Narada' , "Designer");
// const p2 = new Person('Muni' , "Programmer");
// const p3 = new Person('John' , "Photographer");

var arr = [12 , 32 , 54 , 76];

// arr.forEach(function(ymrNgParam , index){
//     console.log(index , ymrNgParam);
// })

Array.prototype.myForEach = function(param){
    for(var i = 0; i < this.length; i++){
        param(this[i] , i);
    }
}

Array.prototype.customMap = function(fn){
    var result = [];

    for(var i = 0; i < this.length; i ++){
        result.push(fn(this[i] , i));
    }

    return result;
}
// map

// var tst = function(){

// }

// tst()

// filter
// find
// reduce
// findIndex
// sort
// some
// every

// true => 
// falsy => null , undefined , 0 , false