let apikey ="77daecc0d4191acbcf59939ea2558575" ;  
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector(".search-icon input");
let searchbutton = document.querySelector(".search-icon button");
let weathericon = document.querySelector(".rain");

async function apicall(cityname){
    let response = await fetch(apiurl + cityname + `&appid=${apikey}`);
    let data = await response.json();

    if (response.status == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".details").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";

        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".weatherstate h2").innerHTML = data.name;
        document.querySelector(".wind p").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".humidity p").innerHTML = data.main.humidity + "%";

        if (data.weather[0].main === "Snow") {
            weathericon.src = "snow.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weathericon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "mist.png";
        } 
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "clear.png";
        } 
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "drizzle.png";
        } 
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "rain.png";
        }

        document.querySelector(".details").style.display = "block";
    }
}

searchbutton.addEventListener("click", () => {
    apicall(searchbox.value);
});
