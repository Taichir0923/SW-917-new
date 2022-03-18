    // Regular Expressions - Хайлт хийхэд ашиглагддаг стринг

    // tom useg, temdegt
    // My name is Narada. And he is my friend. His name is blabla... 

    // is gdg ug hed bgaag olj butsaa...

    var sentence = "My na123me is abla";
    var regEx = /is\.| is |\.is/ig;

    // 3/18/2022 => 3-18-2022

    var case1 = "3/18/2022";

// i - ingore the case
// g - taarch bui buh temdegtiig massiv bolgon butsaana
// | - or logic
// . - duriin temdegtiig orlono
// regExp.test(string) : boolean
// string.match(regExp) : obj | array
// [is]
// ^ - haaltan dotorh temdegtuudiig algasna
// \W - [^a-zA-Z0-9_] - special char haih pattern
// \w - [a-zA-Z0-9_] - spec char-s busad temdegtiig haina
// \S - [^ ] - white space-s busad buh temdegt
// \s - [ ] - white space-g haih
// \d - [0-9] - toog haina...
// \D - [^0-9] - toonoos busad temdegtiig haina
// {10} - 
// ^ - temdegt moriin ehleliig zaana...
// $ - temdegt moriin togsgoliig zaana...
// ?
// +
// *
    var reg1 = /a(?=[0-9])/g;

// 

// buh toog aguulsan massiv butsaa

function countCase(sentence , word){
    const regEx = new RegExp(word);
    console.log(sentence.match(regEx));
}

// Гэрт: Хэрэглэгч бүртгэх форм хийх...
// овог нэр, утас , имэйл , нууц үг
// овог нэр - тоо орсон байх ёсгүй, 2 үеэс бүрдэх ёстой
// утас - ямар нэг үсэг орох ёсгүй. 8 ширхэг тооноос бүрдсэн байх ёстой
// имэйл - @ .com ямар бодит имэйл байх
// нууц үг - багадаа 8 тэмдэгт, том үсэг, жижиг үсэг, тоо , тэмдэгт багтаасан байх
// OOP - object oriented programming language