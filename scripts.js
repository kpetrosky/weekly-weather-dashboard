var submit = document.getElementById("submit");
var apiKey = '6c954c4894d6ffe51fdd55233b4b58b5'
submit.addEventListener('click', function() {
    var url = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
    console.log ("i made this")
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Something isn't working!");
        }
    })
    .then((data) => {
        // handle successful response
    })
});

render ()
