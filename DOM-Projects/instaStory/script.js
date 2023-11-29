/*

    1.create an array and store the values

    2.iterate through array  using for each and append them in a dom


*/


const dataArr = [
    {
        dp:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story : 
                "https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",

        story:
            "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdGllc3xlbnwwfHwwfHx8MA%3D%3D"
    
    },
    {
        dp:
                "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww",
        story : 
                "https://images.unsplash.com/photo-1618503551238-7df2c50d2236?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:
                "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : 
                "https://images.unsplash.com/photo-1593000666643-c7b641bbecaf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },        

]

const storyDiv = document.querySelector('#story-Div');
let combinedDpVariableStr = "";
dataArr.forEach(function(elem,indx){
    combinedDpVariableStr +=  ` <div class='story'>
                <img id="${indx}" src="${elem.dp}" 
                alt="">
                </div>`

})

storyDiv.innerHTML = combinedDpVariableStr;
let statusImg = document.querySelector('#full-screen-story');

storyDiv.addEventListener('click', function(dets){

    const value = dets.target.id;
    statusImg.style.display = "block";
    statusImg.style.backgroundImage = `url(${dataArr[value].story})`
    setInterval(function(){
        statusImg.style.display = "none";
    },3000)

    

})
