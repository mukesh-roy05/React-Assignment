var h2 = document.getElementById("h2_tag")

h2.innerHTML='Display the mouse X and Y coordinates in a  tag when you click on a  tag which contains a paragraph.'

var span=document.createElement("span")
span.setAttribute('id','span_id')

function showCoords(event){
    let x = event.clientX;
    let y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("span_id").innerHTML = text;

}

h2.addEventListener('click',showCoords)


document.body.append(span);