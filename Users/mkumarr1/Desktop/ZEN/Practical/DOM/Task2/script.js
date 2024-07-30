function label_create(tagName,attname,attval,content){
    var ele = document.createElement(tagName);
    ele.setAttribute(attname,attval);
    ele.innerHTML= content;
    return ele;
}

function br_create(){
    var break_ele = document.createElement("br")
    return break_ele;
}

function input_create(tagName,attname,attval,attname1,attval1){
    var input_ele = document.createElement(tagName);
    input_ele.setAttribute(attname,attval);
    input_ele.setAttribute(attname1,attval1);
    return input_ele;
}


function button_create(tagName,attname,attval,attname1,attval1,content){
    var button_ele = document.createElement(tagName);
    button_ele.setAttribute(attname,attval);
    button_ele.setAttribute(attname1,attval1);
    button_ele.innerHTML=content
    return button_ele;
}


function foo(){
    var fname = document.getElementById ("fname").value
    var mname = document.getElementById ("mname").value
    var lname = document.getElementById ("lname").value
    var email = document.getElementById ("email").value
    var pass = document.getElementById ("pass").value

console.log(fname , mname, lname, email, pass);
var input1 = document.createElement("p")
    input1.innerHTTML = (fname , mname, lname, email, pass);
}


var line_brk1= br_create();
var line_brk2= br_create();
var line_brk3= br_create();
var line_brk4= br_create();
var line_brk5= br_create();
var line_brk6= br_create();
var line_brk7= br_create();
var line_brk8= br_create();
var line_brk9= br_create();
var line_brk10= br_create();
var line_brk11= br_create();
var line_brk21= br_create();
var line_brk31= br_create();
var line_brk41= br_create();
var line_brk51= br_create();


var fName = label_create("label","for","fname","FirstName");
var fname_inp = input_create("input","type","text","id","fname");
// document.body.append(fName,line_brk,fname_inp)

var mName = label_create("label","for","mname","MiddleName");
var mname_inp = input_create("input","type","text","id","mname");
// document.body.append(mName,line_brk,mname_inp)

var lName = label_create("label","for","lname","LastName");
var lname_inp = input_create("input","type","text","id","lname");
// document.body.append(lName,line_brk,lname_inp)

var email = label_create("label","for","email","Email");
var email_inp = input_create("input","type","email","id","email");
// document.body.append(email,line_brk,email_inp)

var password = label_create("label","for","pass","Password");
var pass_inp = input_create("input","type","text","id","pass");
// document.body.append(password,line_brk,pass_inp)

var button_click = button_create("button","type","button","onclick","foo()","Click me")

document.body.append(
    fName,line_brk1,fname_inp,line_brk2,line_brk11,
    mName,line_brk3,mname_inp,line_brk4,line_brk21,
    lName,line_brk5,lname_inp,line_brk6,line_brk31,
    email,line_brk7,email_inp,line_brk8,line_brk41,
    password,line_brk9,pass_inp,line_brk10,line_brk51,
    button_click
)


