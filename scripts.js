var submit = document.getElementById("submit");
var apiKey = '6c954c4894d6ffe51fdd55233b4b58b5';
var displayText = document.getElementById('display')
submit.addEventListener('click', function() {
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat={32.2540° N}&lon={110.9742° W}&appid=${apiKey}`;
    console.log ("i made this");
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.JSON();
        } else {
            throw new Error("Something isn't working!");
        }
    })
    .then((data) => {
        render(data);
    });
});

function render(data) {
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Tucson&limit=5&appid={API key}';
    fetch(geoUrl)
    .then((response) => {
        if (response.ok) {
            return response.JSON();
        } else {
            throw new Error("Something isn't working!");
        }
    })
    .then((data) => {
        displayText.textContent = JSON.stringify(data);
    });
}

