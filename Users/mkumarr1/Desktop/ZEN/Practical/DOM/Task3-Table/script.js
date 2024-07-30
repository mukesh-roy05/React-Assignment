
function create_tr(tagname){
    var row = document.createElement("tr")
    return row
}

function create_th(tagname,scope,val,content){
    var th_ele = document.createElement(tagname);
    th_ele.setAttribute(scope,val)
    th_ele.innerHTML=content
    return th_ele
}

function create_td(tagname,content){
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML=content
    return td_ele
}


var tabel = document.createElement("table")
tabel.className = "table";

var thead = document.createElement("thead")

var thead_tr = create_tr();

var th1 = create_th("th","scope","col","#")
var th2 = create_th("th","scope","col","First")
var th3 = create_th("th","scope","col","Last")
var th4 = create_th("th","scope","col","Handle")

thead_tr.append(th1,th2,th3,th4)
thead.append(thead_tr);


var tbody= document.createElement("tbody");
var tbody_tr = create_tr();

var td1=create_th("th","scope","row",1)
var td2=create_td("td","Mark");
var td3=create_td("td","Otto");
var td4=create_td("td","@odo");

tbody_tr.append(td1,td2,td3,td4)
tbody.append(tbody_tr);


tabel.append(thead,tbody);
document.body.append(tabel)


// document.body.append(tabel,thead,thead_tr,th1,th2,th3,th4)