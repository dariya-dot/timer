let counterelement=document.getElementById("counterValue");

function onIncrement(){
    let previousvalue=counterelement.textContent
    let  updatedvalue= parseInt(previousvalue)+1;
    counterelement.textContent =updatedvalue
    if (updatedvalue > 0){
        counterelement.style.color='green'
    } else if  (updatedvalue<0){
        counterelement.style.color='red'
    }else{
        counterelement.style.color='black'
    }
}
function onDecrement (){
    let previousvalue=counterelement.textContent
    let  updatedvalue= parseInt(previousvalue)-1;
    counterelement.textContent =updatedvalue
    if (updatedvalue > 0){
        counterelement.style.color='green'
    } else if  (updatedvalue<0){
        counterelement.style.color='red'
    }else{
        counterelement.style.color='black'
    }
}
function onReset(){
    let counterelement=document.getElementById("counterValue").textContent='0'
   counterelement.style.color='black'
}