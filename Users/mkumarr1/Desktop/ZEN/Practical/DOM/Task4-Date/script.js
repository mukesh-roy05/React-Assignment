var div=document.createElement("div")
div.className='main'

var input = document.createElement("input")
input.setAttribute("type","date");
input.id='dob'


var button = document.createElement('button')
button.setAttribute('type','button');
button.className="btn btn-primary"
button.innerHTML='Display Data';
button.addEventListener("click",dateGenerator);
div.append(input,button)

document.body.append(div)


function dateGenerator(){
    var res = document.getElementById("dob").value
    var inputDate=new Date(res);
    console.log(inputDate);
    var currentDate = new Date();
    console.log(inputDate,currentDate);

    var milliSecdiff = parseInt(currentDate.getTime() - inputDate.getTime());
    console.log(milliSecdiff);

    var secDiff = Math.floor(milliSecdiff / 1000);
    console.log(secDiff);

    var minDiff = Math.floor(secDiff / 60);
    console.log(minDiff);

    var hrDiff = Math.floor(minDiff / 60);
    console.log(hrDiff);

    var dayDiff = Math.floor(hrDiff / 24);
    console.log(dayDiff);

    var yearDiff = currentDate.getFullYear() - inputDate.getFullYear();
    console.log(yearDiff);

    var monDiff = (yearDiff * 12) +  (currentDate.getDate() - inputDate.getDate());
    console.log(monDiff);

    
    var dynamically_element = document.createElement("div");
    dynamically_element.className="output"
    dynamically_element.innerHTML = `Given input is : ${inputDate} <br>
                            Year : ${yearDiff} <br>
                            Month : ${monDiff} <br>
                            Day : ${dayDiff} <br>
                            Hour : ${hrDiff} <br>
                            Minute : ${minDiff} <br>
                            Second : ${secDiff} <br>
                            MilliSecond : ${milliSecdiff}
    `;
    document.body.append(dynamically_element);
}


