
let addBtn = document.querySelector('#add');
let statusUpdate = document.querySelector('h5');
var flag = 0;
addBtn.addEventListener('click', function(){

    if(flag ==0){
       
        statusUpdate.textContent = 'Friends';
        statusUpdate.style.color = 'green';
        addBtn.textContent = 'Remove';
        addBtn.style.backgroundColor = '#dadada';
        addBtn.style.color = '#111';
        flag=1;
       
    }else if(flag ==1){
       
        statusUpdate.textContent = 'Strangers';
        statusUpdate.style.color = 'red';
        addBtn.textContent = 'Add';
        addBtn.style.backgroundColor = 'cadetblue';
        addBtn.style.color = '#fff';
        flag=0;
        
    }

})

// removeBtn.addEventListener('click', function(){

//     status.textContent = 'Strangers';
//     status.style.color = 'red'
   

// })


