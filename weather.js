//NIVEL 2
//Ejercicio 4

const iconHtml = document.querySelector(".weather-icon");
const temperatureHtml = document.querySelector(".temperature-value p");
const descripctionHtml = document.querySelector(".temperature-description p");
const notificationHtml = document.querySelector(".notification");

// Data weather y la unidad celsius
const weather = {};
weather.temperature = {
    unit : "celsius"
}
// Valor de 1 grado ºC a Kelvin 
const KELVIN = 273;
// API KEY generada en openWeather
const key = "c4c1a08e76efd1c8975fbe8c7a002ad8";


// Localización en browser
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// Posición latitud-longitud usuario
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
    
}

// Mostrar error cuando hay problema con geolocalización
function showError(error){
    notificationHtml.style.display = "block";
    notificationHtml.innerHTML = `<p> ${error.message} </p>`;
}

// Get-obtener data de clima de API 
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    console.log(api);
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            console.log(data);
        })
        .then(function(){
            displayWeather();
        });
}

// Mostrar data de API en html
function displayWeather(){
    iconHtml.innerHTML = `<img class="icon-img" src="icons/${weather.iconId}.png"/>`;
    temperatureHtml.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descripctionHtml.innerHTML = weather.description;
    
}
// C to F conversion
/*function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}*/


