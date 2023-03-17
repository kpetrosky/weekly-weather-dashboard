

var apiKey = "30286bdb0d1bd12bbf351dc0bda01e86";
var fetchWeather = document.getElementById('weather-button');

fetchWeather.addEventListener("click", function () {
  var city = document.getElementById("city").value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      weekForcast(data.coord.lat,data.coord.lon)
      var currentWeather = document.getElementById('current-weather');
      var location =document.createElement('h2');
      location.textContent = data.name;
      var temp = document.createElement('p');
      temp.textContent = `Temperature: ${data.main.temp} °F`;
// same code for humidity, wind speed and anything else needed
      currentWeather.innerHTML ="";
      currentWeather.append(location,temp)
      //after creating new p tags dont forget to add in ln 22
      // let result = document.getElementById("result");
      // // result.innerHTML = `Temperature: ${data.main.temp} &deg;C`;
      // var tempCelsius = data.main.temp; // Get the temperature in Celsius
      // var tempFahrenheit = (tempCelsius * 9 / 5) + 32;
      // // console.log(`Temperature in Celsius: ${tempCelsius}`);
      // console.log(`Temperature in Fahrenheit: ${tempFahrenheit}`);
      // var weatherBox = document.createElement('p');
      // weatherBox.textContent = `Temperature: ${tempCelsius} &deg;C / ${tempFahrenheit} &deg;F`;
      // var weatherBoxes = document.querySelector('#weather-box');
      // // weatherBoxes.appendChild(weatherBox);
    })
    .catch(error => console.log(error));
});


function weekForcast(lat, lon) {
  var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var forecast = document.querySelector ('.forecast');
    forecast.innerHTML = "";
    for (let i = 0; i < data.list.length; i++) {
      const element = data.list[i];
      if (element.dt_txt.includes('15:00:00')) {
        let article = document.createElement ('article');
        article.setAttribute('class', 'day-forecast');
        var date = document.createElement('h3')
        date.textContent = element.dt_txt.split(' ')[0];
        var temp =document.createElement('p')
        temp.textContent = `Temperature: ${element.main.temp} °F`
        // same code for humidity, wind speed and anything else needed
        article.append (date,temp);
        forecast.append (article);
          //after creating new p tags dont forget to add in ln 57
      }
    }


  })
}


