// event listeners

const img = document.querySelector('#img');
const avatar = document.querySelector('#avatar');
const loader = document.querySelector('.loader');

// addEventListener(event , callback);
// onchange , oninput
// narada@mail.com

img.addEventListener('change' , function(){
    const image = img.files[0];
    loader.classList.remove('hide');
    loader.classList.add('show');
    setTimeout(function(){
        avatar.src = URL.createObjectURL(image);
        loader.classList.remove('show');
        loader.classList.add('hide');
    } , 3000)
});

// state

// zurag oruulna
// 3s tursh loader ajilluulaad
// 3s daraa zurag n haragdana