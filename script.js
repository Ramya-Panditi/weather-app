const apiKey = "6b36b5e85161667757b0cc66f820e15b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city){
    const raw = await fetch(apiurl + `&appid=${apiKey}` + `&q=${city}`);
    const data = await raw.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".des").innerHTML = data.weather[0].description;
    if(data.weather[0].main === "Clouds"){
        document.querySelector(".wimg").src = "clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
        document.querySelector(".wimg").src = "clear.png";
    }
    else if(data.weather[0].main === "Mist"){
        document.querySelector(".wimg").src = "mist.png";
    }
    else if(data.weather[0].main === "Rain"){
        document.querySelector(".wimg").src = "rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        document.querySelector(".wimg").src = "drizzle.png";
    }
    else{
        document.querySelector(".wimg").src = "snow.png";   
     }

}
document.querySelector(".find").addEventListener("click", () => {
    const city = document.querySelector(".search").value;
    checkWeather(city);
});
document.querySelector(".search").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const city = event.target.value;
        checkWeather(city);
    }
});

