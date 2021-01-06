/* eslint-disable no-console */
const content = document.querySelector('#content');
// Function that holds all the logic to retrieve data and append it to the main page
const checkWeather = async (cityInput) => {
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=1a6c4a4f79fcabdc0967f0e5d8bdbbbb`, { mode: 'cors' });
    const log = await weatherData.json();
    // Function for appending all the data retrieved and converted by checkData()
    const dataDiv = (city, country, temp, weather) => {
        const div = document.createElement('div');
        const locationElement = document.createElement('p');
        const tempElement = document.createElement('p');
        const weatherElement = document.createElement('p');

        div.className = ('dataDiv');
        locationElement.className = ('locationElement');
        tempElement.className = ('tempElement');
        weatherElement.className = ('weatherElement');

        locationElement.textContent = `${city}, ${country}`;
        tempElement.textContent = `${temp}`;
        weatherElement.textContent = `${weather}`;

        div.appendChild(locationElement);
        div.appendChild(tempElement);
        div.appendChild(weatherElement);
        content.appendChild(div);
    };
    // Grabs the data from log, and then runs the function above which appends the data to the DOM
    const checkData = () => {
        const { temp } = log.main;
        const weather = (log.weather[0].description);
        const city = (log.name);
        const { country } = log.sys;
        const newTemp = temp.toFixed(0);
        dataDiv(city, country, newTemp, weather);
    };
    checkData();
};

document.addEventListener('click', (e) => {
    const inputValue = document.querySelector('#inputBox').value;
    if (e.target.matches('#inputBtn')) checkWeather(inputValue);
});

// main > temp
// weather > 0 > description;

/* const temp = console.log(log.main.temp);
    const weather = console.log(log.weather[0].description);
    const city = console.log(log.name);
    const country = console.log(log.sys.country);
*/
