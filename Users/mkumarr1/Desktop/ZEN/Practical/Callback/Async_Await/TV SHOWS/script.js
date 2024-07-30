document.querySelector("button").addEventListener("click",result);

async function result(){
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        var col=document.getElementById("collabel")
        col.innerHTML=`<div class="card-columns">
  <div class="card">
    <img src="${res[0].show.image.medium}" class="card-img-top" alt="image" style="width:344px;height:400px">
    <div class="card-body">
      <h3 class="card-title">${res[0].show.name}</h3>
      <p class="card-text"><b>Genre : </b> ${res[0].show.genres}</p>
      <p class="card-text"><b>Premiered : </b> ${res[0].show.premiered}</p>
      <p class="card-text"><b>Rating : </b> ${res[0].show.rating.average}</p>
      <p class="card-text"><b>Runtime : </b> ${res[0].show.averageRuntime}</p>
      <p class="card-text"><b>Show Schedule : </b> ${res[0].show.schedule.days},${res[0].show.schedule.time}</p>
      <p class="card-text"><b>Official Site : </b> ${res[0].show.officialSite}</p>
      <p class="card-text"><b>Network : </b> ${res[0].show.network.name}</p>
      <p class="card-text"><b>Summary : </b> ${res[0].show.summary}</p>
    </div>
  </div>`
    } catch (error) {
        console.log(error);
    }
}