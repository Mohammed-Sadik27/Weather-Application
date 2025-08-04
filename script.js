// General Variables 
const apiKey="10dfdb67ae1e6fda268551797529edd0"; // Api Key from open weather map.
const searchBox=document.querySelector(".search_box");
const searchButton=document.querySelector(".search_button");
const weather_icon=document.querySelector(".weather_icon");
const error=document.querySelector(".error");
const first_div =document.querySelector(".first_div");
const weather_details=document.querySelector(".weather_details");
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// define function getWeather to get weather of city using API.
async function getWeatther(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    if(!response.ok){ 
       weather_details.style.display="none";
       first_div.style.display="none";
       error.style.display="Block";
    }
    else{
    weather_details.style.display="block";
    error.style.display="none";
    first_div.style.display="none";
    // Update data
    document.querySelector(".city_name").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".description").innerHTML=data.weather[0].main;
    document.querySelector(".wind_value").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".humidity_value").innerHTML=data.main.humidity+"%";
    // Update weather Icon 
    if(data.weather[0].main =="Clouds"){
        weather_icon.src="App_images/cloudy.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weather_icon.src="App_images/clear-sky.png";
    }
    else if(data.weather[0].main =="Rain"){
        weather_icon.src="App_images/heavy-rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src="App_images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src="App_images/mist.png";
    }
    }
}
// Execute the function if we submit.
document.querySelector(".weather_form").addEventListener("submit",function(e){
    e.preventDefault();
    const city=searchBox.value;
    getWeatther(city);
})
