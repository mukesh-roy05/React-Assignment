// const base_url = "https://latest.currency-api.pages.dev/v1/currencies/eur.json"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };


  btn.addEventListener('click',(event)=>{
    event.preventDefault();
    exchangeButton()
})


async function exchangeButton(){
    let amt = document.querySelector(".amount input");
    let amtVal=amt.value;
    if (amtVal === '' || amtVal < 1) {
        amtVal=1
        amt.value=amtVal
    }
    const base_url=` https://latest.currency-api.pages.dev/v1/currencies/${fromCurr.value.toLowerCase()}.json`

    let res = await (await fetch(base_url)).json()
    let from_cur = fromCurr.value.toLowerCase()
    let to_cur = toCurr.value.toLowerCase();
    let rate = res[from_cur][to_cur]; 
    let finalAmount = rate * amtVal;
    msg.innerText=`$amt`
    // console.log(finalAmount);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

}