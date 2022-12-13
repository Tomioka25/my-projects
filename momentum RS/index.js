import playList from './playList.js';
const time = document.querySelector('.time');
const dat = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum = randomInteger();
const timeOfDay = getTimeOfDay();
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const err = document.querySelector('.weather-error');
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let isPlay = false;
const prevPlay = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const nextPlay = document.querySelector('.play-next');
let playNum = 0;
const playListContainer = document.querySelector('.play-list');
const songName = document.querySelector('.songName');
const progress = document.querySelector('.duration');
const allTime = document.querySelector('.allTime');
const chnTime = document.querySelector('.chnTime');
const progressBar = document.querySelector('.progress');
const volumeProgress = document.querySelector('.volProgress');
const volumeBar = document.querySelector('.audioVolume');
const volume = document.querySelector('.icon-sound');
const test = document.querySelector('.test');

let lang = 'en';
const translate = {
    en: {
        language: 'en-EN',
        morning: 'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening',
        night: 'Good night',
        placeholder: '[Enter name]',
        city: 'Minsk',
        windSpeed: 'Wind speed',
        windSpeedUnits: 'm/s',
        humidity: 'Humidity'
    },
    ru: {
        language: 'ru-RU',
        morning: 'Доброе утро',
        afternoon: 'Добрый день',
        evening: 'Добрый вечер',
        night: 'Доброй ночи',
        placeholder: '[Введите имя]',
        city: 'Минск',
        windSpeed: 'Скорость ветра',
        windSpeedUnits: 'м/с',
        humidity: 'Влажность воздуха'
    }
};

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    playListContainer.append(li);
  }

//time and date function
function showTime(){
    const date = new Date();
    time.textContent= date.toLocaleTimeString();

    const options = {weekday: 'long', month: 'long', day: 'numeric',  timeZone: 'UTC'};
    dat.textContent= date.toLocaleDateString(translate[lang].language, options);

    getTimeOfDay();
    setTimeout(showTime, 1000);
}
showTime();
//time and date function

test.addEventListener('click', () => {
    lang === 'en' ? lang = 'ru' : lang = 'en';
    showTime();
    showGreeting();
    getWeather();
    cityValue();
    name.placeholder = translate[lang].placeholder;
    if (city.value === 'Minsk' || city.value === 'Минск') {
        city.value = translate[lang].city;
    }
})



//greeting
function getTimeOfDay(){
    const newDate = new Date();
    const hours = newDate.getHours();
    let timeDay;

    if (hours >= 6 && hours < 12){
        return timeDay = 'morning';
    } else if (hours >= 12 && hours < 18) {
        return timeDay = 'afternoon';
    } else if (hours >= 18 && hours < 24) {
        return timeDay = 'evening';
    } else if (hours >= 0 && hours < 6){
        return timeDay = 'night';
    } else {
        return 'Falls';
    }
}


function showGreeting() {
    name.value = '';
    const greetingText = `${translate[lang][timeOfDay]},`;
    greeting.textContent = greetingText;
}
showGreeting(); 
//greeting

//name
function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('language', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
    }
    cityValue();
}
window.addEventListener('load', getLocalStorage)

function cityValue () {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = translate[lang].city;
    }
}
cityValue();
//name


//slider
function randomInteger(min, max) {
    min = 1;
    max = 20;
    let rndomNum = min + Math.random() * (max + 1 - min);
    return Math.floor(rndomNum);
  }
 randomInteger(); 

function setBg() {
    let bgNum = String(randomNum).padStart(2, '0');
    const img = new Image();
    img.src =  `https://raw.githubusercontent.com/tomioka25/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
    body.style.backgroundImage = `url(https://raw.githubusercontent.com/tomioka25/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`
    };
}
setBg();

function getSlideNext () {
    if (randomNum < 20) {
        randomNum = randomNum + 1;
    } else if (randomNum === 20){
        randomNum = 1;
    } 
    setBg();
}

slideNext.addEventListener('click', () => {
    getSlideNext();
}) 

function getSlidePrev () {
    if (randomNum > 1) {
        randomNum = randomNum - 1;
    } else if (randomNum === 1) {
        randomNum = 20;
    }
    setBg();
}

slidePrev.addEventListener('click', () => {
    getSlidePrev();
}) 
//slider

//weather
city.value = 'Minsk';

async function getWeather() {  
    try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=18c22855d48f16ba9954b292c3dcb9b2&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${translate[lang].windSpeed}: ${data.wind.speed} ${translate[lang].windSpeedUnits}`;
    humidity.textContent = `${translate[lang].humidity}: ${data.main.humidity}%`;
    err.textContent = '';
  } catch { 
    err.textContent = `${translate[lang].weatherError1} '${city.value}'!`;
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = ''; 
    weatherIcon.className = 'weather-icon owf';
} } 
  getWeather();

city.addEventListener('change', () => {
    getWeather(); 
})

function Enter(event) {
    if (event.code === "Enter"){
        getWeather();
    }
}

city.addEventListener('keypress', Enter)
//weather

//quote of day
async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let randomQuote1 = Math.floor(Math.random() * data.length);
    function randomQuote() { 
       let p = Math.floor(Math.random() * data.length);
       if (randomQuote1 === p){
        console.log('lox')
        randomQuote();
       } else {
        p = randomQuote1;
        quote.textContent = data[p].text;
        author.textContent = data[p].author;
       }
    }
    randomQuote()
}

  getQuotes();

  changeQuote.addEventListener('click', getQuotes)
  //quote of day

  //audio player
  const playItems = document.querySelectorAll('.play-item');
  const audio = new Audio();
  audio.src =  playList[playNum].src;

  function playPause() {
    songName.textContent =  playList[playNum].title;
    if(!isPlay){
        play.classList.toggle('pause');
        isPlay = true;
        audio.play();
    } else {
        play.classList.toggle('pause')
        isPlay = false;
        audio.pause();
    }
    playItems[playNum].classList.add('item-active');
}

play.addEventListener('click', playPause);

function getPlayNext () {
    if (playNum >= playList.length - 1) {
        playNum = - 1;
        playItems[playList.length - 1].classList.remove('item-active');
    }
    playNum += 1; 
    audio.src =  playList[playNum].src;
    if ( playItems[playNum - 1]){
        playItems[playNum - 1].classList.remove('item-active');
    }
    playPause();
    if (play.classList.contains('pause')) {
        console.log('<3')
    } else {
        play.classList.toggle('pause');
        isPlay = true;
        audio.play();
    }
    
}

nextPlay.addEventListener('click', () => {
    getPlayNext();
}) 

function getPlayPrev () {
    if (playNum > 0) {
        playNum = playNum - 1;
    } else if (playNum === 0) {
        playNum = 3;
    } else if (isPlay){
       isPlay = true;
    }
    audio.src =  playList[playNum].src;
    playPause();
    if (play.classList.contains('pause')) {
        console.log('<3')
    } else {
        play.classList.toggle('pause');
        isPlay = true;
        audio.play();
    }
}

prevPlay.addEventListener('click', () => {
    getPlayPrev();
})
//audio player

//advanced player
function updateProgress(){
    const duration =  audio.duration;
    const currentTime = audio.currentTime;
    const timeInPercent = (currentTime / duration) * 100;
    progress.style.width = `${timeInPercent}%`;
    let minutes = ~~(~~duration / 60);
    let seconds =  ~~duration - minutes * 60;
    let secondss = String(seconds).padEnd(2, '0');
    let durationForm = `${minutes}:${secondss}`;
    let currentMins = ~~(~~currentTime / 60);
    let currentSeconds =  ~~currentTime - currentMins * 60;
    let currentSecondss = String(currentSeconds).padStart(2, '0');
    let currentForm = `${currentMins}:${currentSecondss}`
    allTime.textContent = durationForm;
    chnTime.textContent = currentForm;
}

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
    const barWidth = this.clientWidth;
    const clickAxisX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickAxisX / barWidth) * duration
}

progressBar.addEventListener('click', setProgress);

function setVolume(e) {
    const soundBarWidth = this.clientWidth;
    const clickAxisX = e.offsetX;
    audio.volume = (clickAxisX / soundBarWidth)
    volumeProgress.style.width = `${audio.volume * 100}%`;
    if (volume.classList.contains('mute')){
        volume.classList.remove('mute')
    }
    console.log(audio.volume)
}

volumeBar.addEventListener('click', setVolume);

audio.volume = 0.2;
volumeProgress.style.width = '20%';
let currentVolume;

volume.addEventListener('click', () =>{
    if (volume.classList.contains('mute')){
        volume.classList.remove('mute')
        audio.volume = currentVolume;
        volumeProgress.style.width = `${audio.volume * 100}%`;
    } else {
        volume.classList.add('mute');
        volumeProgress.style.width = '0%';
        currentVolume = audio.volume;
        audio.volume = 0;
    }    
})
//advanced player






  


