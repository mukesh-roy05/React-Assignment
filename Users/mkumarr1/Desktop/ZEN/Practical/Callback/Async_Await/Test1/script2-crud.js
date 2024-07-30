let url = "https://65decdeeff5e305f32a07e6e.mockapi.io/user"

var newbtn = document.getElementById("newbtn");
var getbtn = document.getElementById("getbtn");

getbtn.addEventListener("click", getUser);


async function getUser(){
    try {
        let data = await fetch(url);
        if(!data.ok){
            throw new Error(`Network response was not ok: ${data.statusText}`);
        }
         data=await data.json()
         let tbody=document.getElementById("table_body")
         tbody.innerHTML=''
        let tr=document.createElement('tr')
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element.id,element.name,element.email);
            tr.innerHTML=`
                <td id="td-${i}">${element.id}</td>
                tr.append(td-${i})
            `
            tbody.append(tr)
        }
    } catch (error) {
        console.log('Fetch Error',error);
    }
}