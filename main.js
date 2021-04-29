const form = document.querySelector('form');
const btnSubmit = document.querySelector('.submit-btn');
form.addEventListener('submit', handleSubmit);
btnSubmit.addEventListener('click', handleSubmit);
// const formResult = document.querySelector('.form-result');


//SEGUIR CON EL DISPLAY

function handleSubmit(e) {
    e.preventDefault();
    sendWeather();
  }

async function getWeather (city){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=510eed397a7bb08387fc38dc40a92440&units=metric`, {mode: 'cors'});
    const weatherData = await response.json();
    const processedData = processData(weatherData);
    displayData(processedData);
    reset();
    console.log(weatherData);
}




function processData(weatherData){
    const myWeatherData = {
        temp: weatherData.main.temp,
        tempMin: weatherData.main.temp_min,
        tempMax: weatherData.main.temp_max,
        place: weatherData.name,
        humidity: weatherData.main.humidity,
        feelsLike: weatherData.main.feels_like,
        // description = weatherData.weather[0].description,
    };

    return myWeatherData;
};



function displayData(processedData){
    // const formclass = document.createElement('div');
    // formclass.classList.add('form-result-active');

    document.getElementById('city-name').textContent = processedData.place;
    document.getElementById('temp').textContent = `${processedData.temp}°`;
    document.getElementById('tempMin').textContent = `Temp. Mín.: ${processedData.tempMin}°` ;
    document.getElementById('tempMax').textContent = `Temp. Max.: ${processedData.tempMax}°` ;
    document.getElementById('humidity').textContent = `Humedad: ${processedData.humidity} %` ;
    document.getElementById('feels-like').textContent = `Sensación térmica: ${processedData.feelsLike}°`;

    // formResult.appendChild(formclass);
};


function reset() {
    form.reset();
  }

function sendWeather(){
    const input = document.getElementById('search');
    const cityInput = input.value;
    getWeather(cityInput);
}






// const weather = () => {
//     async function getWeather () {
//         const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=madrid&appid=510eed397a7bb08387fc38dc40a92440',  {mode: 'cors'});
//         const weatherData = await response.json();

//         const place = weatherData.name;
//         const temp = weatherData.main.temp;
//         const humidity = weatherData.main.humidity;
//         const description = weatherData.weather[0].description
//         console.log(weatherData);
//         console.log(place);
//         console.log(temp);
//         console.log(description);



//         return {place, temp, humidity, description};
//     }
//     getWeather();
// };

// weather();

// async function getWeather () {
//     const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=madrid&appid=510eed397a7bb08387fc38dc40a92440',  {mode: 'cors'});
//     const weatherData = await response.json();
//     console.log(weatherData);
// }

// getWeather();


