document.querySelector('#add').addEventListener('click', function() {
    const cityInput = document.querySelector('#cityinput').value;
    const apiKey = '5c51d7f9ea0032e696b7be13debdffcb'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const description = data.weather[0].description;
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;

                document.querySelector('#cityoutput').innerHTML = `Weather of <span>${cityName}</span>`;
                document.querySelector('#description').innerHTML = `Sky Conditions: <span>${description}</span>`;
                document.querySelector('#temp').innerHTML = `Temperature: <span>${temperature} °C</span>`;
                document.querySelector('#wind').innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(err => alert('An error occurred. Please try again later.'));
});
