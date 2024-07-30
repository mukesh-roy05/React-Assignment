var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => {
     return data.json()
})  
    .then((data1) => foo(data1))
    .catch((error) => console.log(error))


var container = document.createElement("div")
container.className="container"

var row = document.createElement("div")
row.className="row"

var apiKey ='1fad12a685f4bdd2480a6a2978959fa4'

function foo(data1){
    for(let i=0; i<data1.length; i++){
        let col = document.createElement("div")
        col.className="col-lg-4"
        col.innerHTML = `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        
        <div class="card-body text-primary">
        <img src="${data1[i].flags.png}" alt=""  width="200" height="120">
          <h6 class="card-title">Capital : ${data1[i].capital}</h6>
          <h6 class="card-title">Country Code : ${data1[i].cca2}</h6>
          <h6 class="card-title">Region : ${data1[i].region}</h6>
          <h6 class="card-title">LatIng : ${data1[i].latlng}</h6>
          
          <a href="https://api.openweathermap.org/data/2.5/weather?q=${data1[i].name.common}&appid=${apiKey}" 
              class="btn btn-primary" target="_blank">Open Whether</a>
        </div>
      </div>
       `
      //  <h6 class="card-title">Latitude : ${data1[i].latlng[0]}</h6>
      //   <h6 class="card-title">Longitude : ${data1[i].latlng[1]}</h6>
      //  console.log(data1[i].capital);
       row.append(col);
       container.append(row)
       document.body.append(container)


    }
}

  
// console.log(openweathermap_url); 

