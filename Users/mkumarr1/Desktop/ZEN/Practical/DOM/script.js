var ele1 =  document.createElement("div")
var ele2 = document.createElement("div")
var ele3 = document.createElement("div")

ele1.setAttribute('class','container');
ele2.setAttribute('class','row');
ele3.setAttribute('class','col');

ele3.innerHTML="<p> this is column </p>"
ele1.append(ele2)
ele2.append(ele3);
document.body.append(ele1)