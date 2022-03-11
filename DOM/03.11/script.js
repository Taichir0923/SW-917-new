// js selectors
// querySelector

// querySelectorAll
// getElementsByClassName
// getELementById
// []
// const paragraph1 = document.querySelector('.paragraph');
// const paragraph2 = document.querySelector('.paragraph:nth-child(2)');
// const paragraph3 = document.querySelector('.paragraph:nth-child(3)');
// const getParagraphs = document.getElementsByClassName('paragraph');
// paragraphs.forEach(function(el , index){
//     // if(index%2 == 1) el.classList.add('red');
// })

// innerHTML - html tag oruulj ogno
// innerText - text oruulna
// textContent - text oruulna

// paragraph1.innerHTML = "This is <em id=\"bla\">text</em> from JS";

// paragraph2.innerText = "This is <em id=\"bla\">text</em> from JS";

// paragraph3.textContent = "This is <em id=\"bla\">text</em> from JS";

const textInput = document.querySelector("#text");
const color = document.querySelector("#color");
const container = document.querySelector(".container");

function insertTextValue(){
    container.innerHTML += `<p style="color: ${color.value}">${textInput.value}</p>`;
    textInput.value = '';
}