const form = document.querySelector("section.top-banner form"); 
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section ul.cities");      

localStorage.setItem(
  "tokenKey",
  "F5ZsF5dOfCrGn8vL81OsBpW5ObOHW1OYmDiFCwcBXHR4RseeE/UGWWnR3DWalcC8"
);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getWeatherDataFromApi();

});
const getWeatherDataFromApi = ()=>{
    const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
    const inputValue = input.value
    const units ="metric"
    const lang = "tr"
    const url `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}ankara&appid=${tokenKey}&unitsjson&${units}&lang`

}










     

  


