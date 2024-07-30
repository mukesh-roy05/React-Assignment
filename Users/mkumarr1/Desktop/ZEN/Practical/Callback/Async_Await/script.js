// ##################### HTML Element ##############################
var container = document.createElement("div")
container.className="container"

var row = document.createElement("div")
row.className="row"
// ##################### restCountry #################

async function restCountry(){
    try {
        let res= await (await fetch("https://restcountries.com/v3.1/all")).json();
        containerFunction(res);
    } catch (error) {
        console.log(error);
    }
}



// #################  Country Wheather Temperature Function  #######################
async function wheatherData(lat,lon){
    try {
        let wheatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1fad12a685f4bdd2480a6a2978959fa4&units=metric`)
        let wheatherData1= await wheatherData.json();
        
        
        return wheatherData1.main.temp;

    } catch (error) {
        
    }
}


async function containerFunction(res){

       try {
        for (let i = 0; i < res.length; i++) {
                    // let latlngVal = res[i].latlng;
                    let [lat,lng] = res[i].latlng;
                    let name=res[i].name.common
                    let cap = res[i].capital
                    let code = res[i].cca2
                    let region = res[i].region
                    let flag = res[i].flags.png
        let col = document.createElement("div")
        col.className="col-lg-4"
        col.innerHTML = `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${name}</div>
        
        <div class="card-body text-primary">
        <img src="${flag}" alt=""  width="200" height="120">
          <h6 class="card-title">Capital : ${cap}</h6>
          <h6 class="card-title">Country Code : ${code}</h6>
          <h6 class="card-title">Region : ${region}</h6>
          <h6 class="card-title">LatIng : ${lat}</h6>
          <h6 class="card-title">LatIng : ${lng}</h6>
          <button type="button" class="btn btn-primary" id="w_btn-${i}"> Open Whether  
          
          </button>
          <h6 class="card-title" id="weatherDetails-${i}"></h6>
        </divid>
      </div>
       `
       
       
                
       row.append(col);
       container.append(row)
       document.body.append(container)
         
        let weather_container=document.getElementById(`weatherDetails-${i}`)
        
        let w_btn=document.getElementById(`w_btn-${i}`);
        w_btn.addEventListener('click', async(event) => {
        event.preventDefault();
        let temp = await wheatherData(lat,lng);
        // w_btn.textContent=temp
        weather_container.textContent=`Weather ${temp} °C`
        console.log(temp);
       })
       }
    } 
       catch (error) {
            console.log(error);
       }

    

       
    
}


// async function foo(lat,lng){
//     try {
//         var temp = await wheatherData(lat,lng)
//           var weatherDetail = document.getElementById("weatherDetails")
//          weatherDetail.innerHTML = `<p><strong>Temperature:</strong> ${temp} °C</p>`;
//          console.log(result);
//     } catch (error) {
        
//     }
// }

restCountry()
