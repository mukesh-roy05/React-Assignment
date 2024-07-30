

function colorChange(event){
    event.target.style.color='red';
}

function revertChange(event){
    event.target.style.color='';
}



var div_ele=document.createElement("div")
div_ele.setAttribute("class","min_div")
document.body.append(div_ele)


var span_ele=document.createElement("span")
span_ele.innerHTML="This is SPAN HTMl TAG"
document.body.append(span_ele)

div_ele.addEventListener('mouseover',colorChange)
div_ele.addEventListener('mouseout',revertChange)


span_ele.addEventListener('mouseover',colorChange)
span_ele.addEventListener('mouseout',revertChange)




