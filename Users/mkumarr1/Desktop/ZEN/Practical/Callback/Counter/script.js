
var div_container=document.createElement("div")
div_container.classList.add("container" )
var countdown = document.createElement("h3")
// countdown.innerHTML=10
var p=document.createElement("p")



setTimeout(function(){
    countdown.innerHTML=10;
    setTimeout(function(){
        countdown.innerHTML=9;
        setTimeout(function(){
            countdown.innerHTML=8;
            setTimeout(function(){
                countdown.innerHTML=7;
                setTimeout(function(){
                    countdown.innerHTML=6;
                    setTimeout(function(){
                        countdown.innerHTML=5;
                        setTimeout(function(){
                            countdown.innerHTML=4;
                            setTimeout(function(){
                                countdown.innerHTML=3;
                                setTimeout(function(){
                                    countdown.innerHTML=2;
                                    setTimeout(function(){
                                        countdown.innerHTML=1;
                                        setTimeout(function(){                                            
                                            countdown.innerHTML=''
                                            setTimeout(function(){
                                                div_container.append(p)
                                                p.innerHTML="Happy Independence";                                            
                                            },10)                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
div_container.append(countdown)
document.body.append(div_container)