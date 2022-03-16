// event listeners

const img = document.querySelector('#img');
const avatar = document.querySelector('#avatar');

// addEventListener(event , callback);
// onchange , oninput
// narada@mail.com

img.addEventListener('change' , function(){
    const image = img.files[0];
    avatar.src = URL.createObjectURL(image);
});

// state

// zurag oruulna
// 3s tursh loader ajilluulaad
// 3s daraa zurag n haragdana