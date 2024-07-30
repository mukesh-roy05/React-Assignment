function foo(){
    var fname = document.getElementById ("fname").value
    var mname = document.getElementById ("mname").value
    var lname = document.getElementById ("lname").value
    var email = document.getElementById ("email").value
    var pass = document.getElementById ("pass").value

console.log(fname , mname, lname, email, pass);
var input = document.createElement("p")
    input.innerText = (fname , mname, lname, email, pass);
}

