const mainDiv = document.querySelector('.main');

const cursor  = document.querySelector('#cursor');

mainDiv.addEventListener('mousemove',function(dets){

    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
    cursor.style.background = 'white';
    
    
})