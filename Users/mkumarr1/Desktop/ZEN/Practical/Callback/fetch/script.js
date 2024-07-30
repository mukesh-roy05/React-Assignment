var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => {
     return data.json()
})  
    .then((data1) => console.log(data1))
    .catch((data2) => console.log(data2))



    const url = "https://66a08c177053166bcabbc6cc.mockapi.io/comments";
    // using POST:
    var data = {
        name:"microsoft",
        country:"usa"
    }
    var res = fetch(url,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((data)=>{
       return data.json()
    }).then((data1)=>console.log(data1))