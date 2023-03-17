


var fetchWeather = document.getElementById('weather-button');

fetchWeather.addEventListener("click", function () {
  var city = document.getElementById("city").value;
  var apiKey = "30286bdb0d1bd12bbf351dc0bda01e86";
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let result = document.getElementById("result");
      result.innerHTML = `Temperature: ${data.main.temp} &deg;C`;
      var tempCelsius = data.main.temp; // Get the temperature in Celsius
      var tempFahrenheit = (tempCelsius * 9 / 5) + 32;
      console.log(`Temperature in Celsius: ${tempCelsius}`);
      console.log(`Temperature in Fahrenheit: ${tempFahrenheit}`);
      var weatherBox = document.createElement('p');
      weatherBox.innerHTML = `Temperature: ${tempCelsius} &deg;C / ${tempFahrenheit} &deg;F`;
      var weatherBoxes = document.querySelector('#weather-box');
      // weatherBoxes.appendChild(weatherBox);
    })
    .catch(error => console.log(error));
});

