const loader = document.querySelector(".loader");

const weatherContainer = document.querySelector("main");
// const weatherBox = document.getElementById("weather");
// const weatherContainer = document.getElementById("weather-container");
// const errorElement = document.getElementById("error");

weatherContainer.classList.add("hide");

let userLocation = [];

getLocation();

function getLocation() {
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((geoRes) => {
      if (!geoRes.ok) throw new Error("Error receiving geolocation");
      return geoRes.json();
    })
    .then((locData) => {
      console.log(locData);

      const locLat = locData.latitude;
      const locLon = locData.longitude;

      if (locLat === 0 || locLon === 0)
        throw new Error(
          `Error receiving geolocation. Location is: ${locLat}, ${locLon}`
        );
      if (locData.latitude == null || locData.longitude == null)
        throw new Error("Coordinates missing");
      if (Number.isNaN(locLat) || Number.isNaN(locLon))
        throw new Error("Coordinates should be numbers");
      if (locLat < -90 || locLat > 90)
        throw new Error(
          `Impermissible latitude: ${locLat}. Must be between -90 и 90`
        );
      if (locLon < -180 || locLon > 180)
        throw new Error(
          `Impermissible longitude: ${locLon}. Must be between -180 и 180`
        );

      userLocation = [locLat, locLon];

      //console.log("Latitude:", locLat);
      //console.log("Longitude:", locLon);
      console.log("User location:", userLocation);

      getWeather(userLocation, locData); // Getting weather
      initMap(userLocation); // Loading Map
    })
    .catch((error) => {
      console.error("Geolocation data not found: " + error.message);
      loader.classList.add("hide");
    });
}

async function getWeather(userLocation, locData) {
  console.log(userLocation);

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${userLocation[0]}&longitude=${userLocation[1]}&current_weather=true`
    );
    const data = await res.json();
    //  console.log(data);

    loader.classList.add("hide");
    weatherContainer.classList.remove("hide");

    weatherData(data, locData); //!
  } catch (error) {
    console.error("Weather data not found: " + error.message);
    loader.classList.add("hide");
  }
}

function getWeatherDescription(code) {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "depositing rime fog";
    case 51:
      return "Drizzle: Light";
    case 53:
      return "Drizzle: moderate";
    case 55:
      return "Drizzle: dense intensity";
    case 56:
      return "Freezing Drizzle: Light";
    case 57:
      return "Freezing Drizzle: dense intensity";
    case 61:
      return "Rain: Slight";
    case 63:
      return "Rain: moderate ";
    case 65:
      return "Rain: heavy intensity";
    case 66:
      return "Freezing Rain: Light";
    case 67:
      return "Freezing Rain: heavy intensity";
    case 71:
      return "Snow fall: Slight";
    case 73:
      return "Snow fall: moderate";
    case 75:
      return "Snow fall:heavy intensity";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers: Slight";
    case 81:
      return "Rain showers: moderate";
    case 82:
      return "Rain showers: violent";
    case 85:
      return "Snow showers slight";
    case 86:
      return "Snow showers: heavy";
    case 95:
      return "Thunderstorm: Slight or moderate";
    case 96:
      return "Thunderstorm with slight hail";
    case 99:
      return "Thunderstorm with heavy hail";
    default:
      return "Unknown weather conditions or invalid code";
  }
}

function getWeatherDescriptionSymbol(code) {
  switch (code) {
    case 0:
      return "☀️"; // Clear sky
    case 1:
      return "🌤️"; // Mainly clear
    case 2:
      return "⛅"; // Partly cloudy
    case 3:
      return "☁️"; // Overcast
    case 45:
      return "🌫️"; // Fog
    case 48:
      return "🌫️❄️"; // Depositing rime fog
    case 51:
      return "🌧️💧"; // Drizzle: Light
    case 53:
      return "🌧️"; // Drizzle: moderate
    case 55:
      return "🌧️🌧️"; // Drizzle: dense intensity
    case 56:
      return "❄️🌧️"; // Freezing Drizzle: Light
    case 57:
      return "❄️🌧️🌧️"; // Freezing Drizzle: dense intensity
    case 61:
      return "🌦️"; // Rain: Slight
    case 63:
      return "🌦️🌧️"; // Rain: moderate
    case 65:
      return "🌧️🌧️🌧️"; // Rain: heavy intensity
    case 66:
      return "❄️🌧️"; // Freezing Rain: Light
    case 67:
      return "❄️🌧️🌧️"; // Freezing Rain: heavy intensity
    case 71:
      return "🌨️"; // Snow fall: Slight
    case 73:
      return "🌨️🌨️"; // Snow fall: moderate
    case 75:
      return "🌨️❄️"; // Snow fall: heavy intensity
    case 77:
      return "🌨️🌾"; // Snow grains
    case 80:
      return "🌧️🌦️"; // Rain showers: Slight
    case 81:
      return "🌧️🌦️🌧️"; // Rain showers: moderate
    case 82:
      return "🌧️🌩️"; // Rain showers: violent
    case 85:
      return "❄️🌨️"; // Snow showers slight
    case 86:
      return "❄️🌨️❄️"; // Snow showers: heavy
    case 95:
      return "⛈️"; // Thunderstorm: Slight or moderate
    case 96:
      return "⛈️🌧️"; // Thunderstorm with slight hail
    case 99:
      return "⛈️❄️"; // Thunderstorm with heavy hail
    default:
      return "❓"; // Unknown weather conditions or invalid code
  }
}

function weatherData(weatherData, locData) {
  const currentWeather = weatherData.current_weather;
  const units = weatherData.current_weather_units;

  const weatherDescription = getWeatherDescription(currentWeather.weathercode);
  const weatherDescriptionSymbol = getWeatherDescriptionSymbol(currentWeather.weathercode);

  console.log(weatherData);
  //console.log(weatherDescriptionSymbol);

  document.querySelector(".city-name").innerHTML = locData.city + "<br> " + locData.region;

  document.querySelector(".temperature").innerText = `${currentWeather.temperature} ${units.temperature}`;
  document.querySelector(".wind-speed").textContent = `${currentWeather.windspeed} ${units.windspeed}`;

  document.querySelector(".wind-direction").innerText = currentWeather.winddirection + " " + units.winddirection;

  document.querySelector(".weather-code").innerText = weatherDescription;

  document.querySelector(".weather-code-icon").innerText = weatherDescriptionSymbol;
    arrowRotation(weatherData);
    if (currentWeather.weathercode === 95 || currentWeather.weathercode === 99) {
  document.querySelector(".weather-code-extra").innerText =
    "* Thunderstorm forecast with hail is only available in Central Europe";
  }
}

function initMap(userLocation) {
  const map = document.querySelector(".gmap_canvas");
  map.src = `https://maps.google.com/maps?q=${userLocation[0]},${userLocation[1]}&z=10&output=embed`;
}

function arrowRotation(weatherData) {
    const direction = weatherData.current_weather.winddirection;
    console.log(weatherData.current_weather.winddirection);
    
    const arrow = document.querySelector(".arrow-pointer");
    
    if (arrow) {
    arrow.style.transform = `rotate(${direction}deg)`;
    }
    }