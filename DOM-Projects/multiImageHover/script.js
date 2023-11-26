
const element = document.querySelectorAll('.elem');



// for a single item

// element.addEventListener('mousemove', function(dets){
//     imgSlide.style.left = dets.x+'px';
//     imgSlide.style.top = dets.y+'px';
   

// })

// element.addEventListener('mouseenter', function(dets){
   
//     imgSlide.style.opacity = 1;
// })
// element.addEventListener('mouseleave', function(dets){
   
//     imgSlide.style.opacity = 0;
// })


element.forEach((items)=>{

    console.log(items.childNodes)

    items.addEventListener('mouseenter',function(){
       items.childNodes[3].style.opacity =1;

    })
    items.addEventListener('mousemove', function(dets){

        items.childNodes[3].style.left = dets.x+'px';
    })
    items.addEventListener('mouseleave',function(){

        items.childNodes[3].style.opacity =0;

    })

})