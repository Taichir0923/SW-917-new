// Algorithm - flowchart
// JS Basics
// DOM - Document Object Model
// Jquery - 
// OOP - Object Oriented Programming
// Async JS
// NodeJS 

// Algorithm - Тодорхой үр дүнд хүрэх дарааллыг алгоритм гэж хэлнэ
// Pseudocode - Алгоритмыг үгээр илэрхийлэх
// Block Schema - Flowchart - Алгоритмыг схемээр илэрхийлэх

// Оролт: ямар нэг тоо
// Гаралт: Тэгш , сондгой

// % - Remainder Operator

// 0110100101111001010100 - 2тын тооллын систем

// boolean - true (1) , false (0) 
// console.log("Hey , all");

// ./
// ../

// ls , dir - Тухайн фолдерт байгаа зүйлсийг харуулна
// cd - change direction

// DataType - Primitive , Non-Primitive

// "" - Double quotation mark
// '' - Single
// `` - back qoute , backtic

// Primitive
// 1. Number - 1234567890
// 2. String - Текст төвтэй өгөгдөл - "gkdlfsjg;ldf"
// 3. Boolean - True(1) , False(0)
// 4. undefined - тодорхойгүй
// 5. null - Хоосон

// 6. NaN - тоон өгөгдөлтэй холбоотой алдаа гарах үед гарч ирнэ

// reserved word - Программчлалд ашиглагддаг тусгай
// түлхүүр үгс

// typeof - өгөгдлийн төрлийг шалгаж өгнө

// \ - escape operator

// console.log(typeof 123)
// console.log('Hi. I\'m James');
// console.log("gfdjk\"gdkl;");
// console.log(`gfjdk\`l''''"""`)

// ES1 - ES12
// ES5 - 2009

// ES6 - 2015
// ES6 - ES12

// var (ES5) - хувьсагч зарлахад ашиглагддаг түлхүүр үг
// let , const (ES6)

// хувьсагч зарлахад reserved words ашиглаж огт болохгүй
// хувьсагчийн нэр тоогоор эхэлж болохгүй

// var too = 123;
// console.log() - гаралтын функц
// prompt() - оролтын функц

// var urt = +prompt("Тэгш өнцөгтийн уртыг оруул");
// var urgun = +prompt('Тэгш өнцөгтийн өргөнийг оруул');
// var P = (urt + urgun) * 2;

// console.log(P);

// var radius = +prompt('Тойргийн радиусыг оруул');
// var PI = 3.14;
// var kvadrat  = radius * radius;
// var A = PI * kvadrat;

// console.log(A);

// toString() - toog string bolgoh
// parseInt() - стринг төрлийн өгөгдлийг тоо болгоно

// Integer - buhel toog ilerhiilne
// Float - Butarhai toog ilerhiilne

// var x = 12;
// var y = 23;

// x = 25;
// x = 'hfdjk'
// x = "123"
// x = y;

// Гэрт нөхцөл шалгах if statement судалж ирэх

// github.com/taichir0923/SW-917-new

// if statement
// if , if else , if else if , switch case , ternary operator

// == , === , ? : , && , || , < , > - true , false
// var x = 5;
// var boolean = true;
// var isBoolean = !boolean;
// === , !==
// {} - (block)

// if else

// if else if
// var x = 15;
// buhel , butarhai , sorog
// if(x < 10){
//     // true bh tohioldold ene block dotorh code ajillana
//     var isTrue = true;
// } else {
//     // false ur dun garsan tohioldold ene heseg ajillana
//     isTrue = false;
// }

// console.log(isTrue)
// var num = +prompt('number');
// if(num < 0){
//     console.log('sorog')
// } else if (num % 1 === 0) {
//     console.log('buhel')
// } else {
//     console.log('butarhai')
// }

// ternary operator
// num < 0 ? console.log('sorog') : num % 1 === 0 ? console.log('buhel') : console.log('butarhai')

// && logic

// num < 0 && console.log('sorog');
// string methods
// var str = "this is dummy strin.";
// var str1 = "Another String data"
// index - 0 , 1 , 2

// chatAt(index) - Тухайн индекс дээр ямар тэмдэгт байгааг харуулна
// slice(startIndex , endIndex) - тэмдэгт мөрийн тодорхой хэсгийг тасдаж авна
// [startIndex , endIndex[  

// toUpperCase() , toLowerCase();

// trim() - Тэмдэгт мөрийн эхэнд болон сүүлд байгаа хоосон зайнуудыг арилгаж өгнө
// concat(anotherString) - хоёр сринг төрлийн өгөгдлийг нэгтгэнэ

// replace(solih gej bgaa heseg , shineer orluulah heseg)

// гэрт давталт судлах
// baatar - aaa
// Гараас нэр оруулаад, Бүх эгшиг үсгүүдийг concat хийгээд консолд 
// хэвлэ /aeiou/

// github.com/taichir0923/SW-917-new
// for - for(parameter zarlah ; nohtsol ; parametriig oorchloh)
// var ner = prompt("Ner");
// var vovels = "";
// for(var i = 0; i < ner.length; i++){
//     // davtaltiin nohtsol true bh uyd ene heseg ajillana
//     if(
//         ner[i].toLowerCase() === "a" || 
//         ner[i].toLowerCase() === "e" ||
//         ner[i].toLowerCase() === "i" ||
//         ner[i].toLowerCase() === "o" ||
//         ner[i].toLowerCase() === "u"
//     ){
//         vovels = vovels.concat(ner[i]);
//     }
// }
// && and logic , || or logic
// 1. 100 хүртэлх тоонуудаас бүх анхны тоонуудын нийлбэрийг ол.
// 2. 100 хүртэлх тоонуудаас бүх 7-д хуваагддаг тоонуудын нийлбэр.
// 3. Гараас тоо үсэг холилдсон текст өгөгдсөн бол, тухайн текстийн
// тоо болон үсгүүдийг салгаж , тус тусад нь стринг болгож хадгал
// жишээ: gjskld4324jk234hj4vg23hj123 => 
// 4324234423123 , gjskldjkhjvghj

// 4. Гараас тоо өгөгдсөн бол тухайн тооны сүүлээсээ 2 дахь цифр ямар тоо байгааг ол.
// 5. Гараас үг өгөгдсөн бол, тухайн үгэнд давтагдаагүй тоогоор
// хэдэн ширхэг эгшиг үсэг байгааг тоол
// Жишээ: presentation => e,a,i,o => 4 ширхэг эгшиг үсэг байна


// Non-Primitive Data types in JS
// Array , Object , /RegExp/ - Data structure

// var massiv = new Array(123 , 34 , 56);
// // []
// var massiv1 = [789 , "bjkgfd" , 234 , "gjfkl" , true];
// // var nestedMassiv = [[213 , 4324 , 432] , ["fkjsdk" , 321, 56]]
// // 
// massiv1[4] = "123";

// push -hamgiin suuld element nemj ogoh
// pop - hamgiin suuliin elementiig ustgah
// shift - hamgiin ehnii elementiig ustgah
// unshift - hamgiin ehend element nemeh
// slice - todorhoi hesgiig tasdaj avah
// splice - dundaas n todorhoi hesgiig n ustah
// reverse - ogogdluudiin bairlaliig urvuu bolgoh
// massiv1.push("blabla");
// massiv1.pop();

// TypeScript
// Tuple - massiv
// 3 ширхэг өгөдөл агуулсан tuple үүсгэнэ.
// өгөгдлүүдийн хувьд эхнийх нь тоо, 2 дахь нь стринг, 3 дахь нь бүүлеан байх...
// нөхцөл ашиглаж тухайн өгөгдлийг tuple мөн эсэхийг шалга

// NestJS
// React

// Async JS
// // ... - spread operator
// var mass = [123, 234, 345, 456];
// var arr = [23, 56, ...mass, 78, 93];

// var updatedArray = [...arr];

// // object
// var shiree = {
//     ongo: "tsagaan",
//     material: "Mod",
//     ondor: "1 meter",
//     orgon: "0.6 meter",
//     urt: "1.6 meter"
// }

// var hun = {
//     ner: "Narada",
//     utas: 976,
//     email: "narada@mail.com",
//     hayg: {
//         city: "Ulaanbaatar",
//         duureg: "SBD",
//         horoo: "10-r horoo"
//     }
// }
// hun.hobbies = ["Kino uzeh", "Duu sonsoh"]

// ["ner" , "ner1" , "ner2"]

// [{...} , {...} , {...}]

// var person = { 
//     ...hun,
//     mergejil: "Designer",
//     ner: "John",
//     email: "john@mail.com"
// };

// 5ш хэрэглэгчийн дата массив дотор хадгалаад, емэйлээр хэрэглэгч хайж олоод, нэрийг нь өөрчлөх программ бич

// var members = [hun , person];
// var email = prompt('email');

// for(var i = 0; i < members.length; i++){
//     if(members[i].email == email){
//         var ner = prompt('solih neree oruul...');
//         members[i].ner = ner;
//     }
// }
// for , for of , for in , do while

// var masss = [12 , 13 , 14 , 15];

// for(var el in masss){
//     console.log(masss[el])
// }

// for(var el in person){
//     console.log(person[el]);
// }
// var i = 0;
// var j = 0
// while(i < 10){
    // if(i%2 === 1){
    //     console.log(i);
    // }

    // i++;
// };

// do {
//     if(i%2 === 1){
//         console.log("i: " + i);
//     }

//     if(j%2 === 0){
//         console.log("j: " + j)
//     }

//     i++;
//     j++;
// } while (i < 10 && j < 20);

// Function - Программыг бүрдүүлж буй жижиг хэсгүүдийг функц гэж хэлнэ.

// функц нь тодорхой ажил гүйцэтгэх эсвэл тооцоолол хийх зохирлготой байж болно.
// var y;
// var a = 5;
// var b = a;
// // global variable
// function myFunction () {
//     var x = 5;
//     var z = 12;
//     return x + z;
// }
// Anonymous function 
// 7
// myFunction();

// y = myFunction

// function testDoM(){
//     console.log("hello...")
// }

// testDoM()

// parameter function

// @mixin myMixin ($color){ color: $color }
// @include myMixin(#fff)
// @include myMixin(#ff0)

// function testFunction(arg){
//     return arg;
// }

// callback function - parameter helbereer ashiglagdaj bgaa function

// function findDigit(num , i){
//     return Math.floor(Math.abs(num) / Math.pow(10 , i)) % 10
// }

// function twoMulti(num1 , num2){
//     var urjver = num1 * num2;
//     if(urjver >= 1000){
//         return urjver
//     } else {
//         return num1 + num2
//     }
// }

// 12321
// 100;
// sum = 0

// sum(n) = ((a(1) + a(n)) / 2) * n