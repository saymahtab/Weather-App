const fetchBtn = document.querySelector('.button');
const cityName = document.querySelector('#cityname');

let apikey = '256156d28a4575e841a3cce2fdfc060b';

async function fetchWeather(){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error(`Unable to Fetch the info ${response.status}`);
        }
        const data = await response.json();
        outCreator(data);
        console.log(data)


    }catch(err){
        console.log(`Error : ${err.message}`);
    }
}


fetchBtn.addEventListener('click', fetchWeather)


function outCreator(data){
    const outputBox = document.querySelector('.output-box');
    outputBox.innerHTML = ''
    outputBox.appendChild(cityN(data));
    outputBox.appendChild(cityTemp(data));
    outputBox.appendChild(weather(data));
    outputBox.appendChild(windSpeed(data));
}

function cityN(data){
    const city = document.createElement('p');
    city.textContent=`City : ${data.name}`
    return city;
}


function cityTemp(data){
    const temp = document.createElement('p');
    temp.textContent= `Temp : ${data.main.temp}`;
    return temp;
}

function weather(data){
    const cityWeather = document.createElement('p');
    cityWeather.textContent = `Weather : ${data.weather[0].description}`;
    return cityWeather;
}

function windSpeed(data){
    const speed = document.createElement('p');
    speed.textContent = `Wind : ${data.wind.speed}`;
    return speed;
}

