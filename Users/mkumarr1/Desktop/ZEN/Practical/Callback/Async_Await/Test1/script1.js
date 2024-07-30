document.getElementById("btn1").addEventListener('click',foo)

async function foo(){
    var effect=document.getElementById('effect')
    effect.innerHTML= `
    <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    
    `
}


document.getElementById("btn2").addEventListener('click',cards);

async function cards(){

    try {
        var effect=document.getElementById('effect')
        effect.innerHTML=''
    for (let i = 0; i < 10; i++) {
    
        var newDiv=document.createElement("div")
        newDiv.classList=('main',"col-4")
    newDiv.innerHTML=
        `
            
            <div class="card text-center">
                <div class="card-header">
                Featured
                </div>
                <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                2 days ago
                </div>
            </div>
    `
    effect.appendChild(newDiv);
}
    } catch (error) {
            console.log(error);
    }
};




