const cur_url = "https://latest.currency-api.pages.dev/v1/currencies" ///usd.json"
const rest_country="https://restcountries.com/v3.1/all"
const dropdowns=document.querySelectorAll(".dropdown select")

const fromSelect = document.querySelector(".from select")
const toSelect = document.querySelector(".to select")

const btn = document.querySelector("button");


async function restCountry(){
    let currencies,code;
    try {
        let restData = await (await fetch(rest_country)).json()
        for (const select of dropdowns) {
            for (const idx in restData) {
                let data = restData[idx]
                if(data.currencies !=null){
                    let currencies = Object.keys(data.currencies)[0];
                     code = data.cca2;
                    // console.log(currencies,code);
                    let newOption = document.createElement("option")
                    newOption.value=code
                    newOption.innerText=currencies

                    if (select.name === "from" && currencies === 'USD') {
                        newOption.selected='selected'
                        
                    } else if (select.name === "to" && currencies === 'INR') {
                        newOption.selected='selected'
                    }
                    select.append(newOption)

                }
            }
            select.addEventListener('change',(evt)=>{
                 flagUpdate(evt.target);
            })
        }
        
    } catch (error) {   
            console.log(error);
    }
}

const flagUpdate = async (element)=> {
     let newSrc=`https://flagsapi.com/${element.value}/flat/64.png`
    // console.log( element.parentElement);
    let img=element.parentElement.querySelector('img')
    img.src=newSrc;
    
}


btn.addEventListener('click',(event)=>{
    event.preventDefault();
    let amt = document.querySelector(".amount input");
    let amtVal=amt.value;
    if (amtVal === '' || amtVal < 1) {
        amtVal=1
        amt.value=amtVal
    }
    console.log(amtVal);
    // console.log(toSelect.value,fromSelect.innerText);
     const currencyUrl = `${cur_url}/${toSelect.value}.json`
     console.log(currencyUrl);
})


 restCountry()





























// // async function restCountry(){
// //     let currencies,code;
// //     try {
// //         let rest = await (await fetch(rest_country)).json()
    
// //         rest.forEach((element,index ) => {
// //                 if(element.currencies !=null ){
// //                     currencies=Object.keys(element.currencies)[0];
// //                     code = element.cca2
// //                     //  console.log(currencies ," => ",code);
// //                     enableOption(currencies,code)
// //                 }       
// //         })
// //     } catch (error) {   
// //             console.log(error);
// //     }
// // }

// const enableOption = async (cur,cd) => {
//     for ( let select of dropdowns) {
//         let option=document.createElement("option")
//         option.value=cur
//         option.innerText=cur 
//         if(select.name === "from" && cur === "USD"){
//             option.selected="selected"
//         } else if (select.name === "to" && cur === "INR"){
//             option.selected="selected"
//         }
        
//         select.append(option)
        
//     }
    
// }

// // console.log(cur);    

// const  updateFlag= (element) => {
//     // <img src="https://flagsapi.com/IN/flat/64.png" alt="">
//     let img = document.querySelector("img");
//     img.src
//     console.log(element);

// }
// restCountry()