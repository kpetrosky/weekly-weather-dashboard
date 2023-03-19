

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
// temperature feels like
      var feelsLike = document.createElement('p');
      feelsLike.textContent = `Feels like: ${data.main.feels_like} °F`
   //humidity
      var humidity =document.createElement ('p');
      humidity.textContent = `Humidity: ${data.main.humidity} %`
      //wind 
      var windSpeed = document.createElement('p');
      windSpeed.textContent = `Wind:${data.wind.speed} MPH`
      currentWeather.innerHTML ="";
      currentWeather.append(location,temp,feelsLike,humidity,windSpeed);
      //after creating new p tags dont forget to add in ln 22
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
        var feelsLike = document.createElement('p');
      feelsLike.textContent = `Feels like: ${element.main.feels_like} °F`
      //humidity
      var humidity =document.createElement ('p');
      humidity.textContent = `Humidity: ${element.main.humidity} %`
      //wind 
      var windSpeed = document.createElement('p');
      windSpeed.textContent = `Wind:${element.wind.speed} MPH`
        article.append (date,temp,feelsLike,humidity,windSpeed);
        forecast.append (article);
          //after creating new p tags dont forget to add in ln 57
      }
    }


  })
}


  // var fetchCities = document.getElementById('fetchCities');
  // fetchCities.addEventListener("click", function() { // uncommented this line
  //   var city = document.querySelector(".city").value;
  //   var apiKey = "30286bdb0d1bd12bbf351dc0bda01e86"; // replace with your actual API key
  //   var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  //   fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //           console.log(data);
  //           weekForcast(data.coord.lat, data.coord.lon);
  //           var currentWeather = document.getElementById('current-weather');
  //           var location = document.createElement('h2');
  //           location.textContent = data.name;
  //           var temp = document.createElement('p');
  //           temp.textContent = `Temperature: ${data.main.temp} °F`;
  //           // same code for humidity, wind speed and anything else needed
  //           // temperature feels like
  //           var feelsLike = document.createElement('p');
  //           feelsLike.textContent = `Feels like: ${data.main.feels_like} °F`;
  //           // humidity
  //           var humidity = document.createElement('p');
  //           humidity.textContent = `Humidity: ${data.main.humidity} %`;
  //           // wind 
  //           var windSpeed = document.createElement('p');
  //           windSpeed.textContent = `Wind: ${data.wind.speed} MPH`;
  //           currentWeather.innerHTML = "";
  //           currentWeather.append(location, temp, feelsLike, humidity, windSpeed);
  //       })
  //       .catch(error => console.log(error));
  // });

