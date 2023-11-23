
let container = document.querySelector('#container');
let loveBtn = document.querySelector('.ri-heart-3-fill');

container.addEventListener('dblclick',function(){

    loveBtn.style.transform = 'translate(-50%,-50%) scale(1)';
    loveBtn.style.opacity= 0.8;

    setTimeout(function(){
        loveBtn.style.opacity =0;
    },1000)
    setTimeout(function(){
        loveBtn.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 3000)
})