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
var str = "this is dummy strin.";
var str1 = "Another String data"
// index - 0 , 1 , 2

// chatAt(index) - Тухайн индекс дээр ямар тэмдэгт байгааг харуулна
// slice(startIndex , endIndex) - тэмдэгт мөрийн тодорхой хэсгийг тасдаж авна
// [startIndex , endIndex[  

// toUpperCase() , toLowerCase();

// trim() - Тэмдэгт мөрийн эхэнд болон сүүлд байгаа хоосон зайнуудыг арилгаж өгнө
// concat(anotherString) - хоёр сринг төрлийн өгөгдлийг нэгтгэнэ

// replace(solih gej bgaa heseg , shineer orluulah heseg)

// гэрт давталт судлах
// Гараас нэр оруулаад, Бүх эгшиг үсгүүдийг concat хийгээд консолд 
// хэвлэ /aeiou/