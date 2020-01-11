const data = `www.google.com/q=london.com`
const weather = {};
weather.start=()=>{
    searchWeather()
    shuffleImages()
}

const searchWeather = ()=>{
    let inputValue = document.querySelector('#searchBar');
    const btn = document.querySelector('.btn');
    const hero = document.querySelector(".hero");
    const mainPage = document.querySelector('.mainPage')
    mainPage.style.display = "none";
    btn.addEventListener("click", enterPage=()=>{
        mainPage.style.display = "flex";
        hero.style.display = "none";
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=7cf2ce9913cb1e81c5f1070de180744a')
            .then(response =>{
                let data = response.json()
            return data;
        })
            .then(blob =>{
                let feelsLike = blob.main.feels_like -273.15;
                let temp = blob.main.temp -273.15;
                let name = blob.name;
                let weatherDescription = (blob.weather[0].description);
                let windSpeed = blob.wind.speed
                let humidity = (blob.main.humidity)

                document.querySelector('.humidity').innerHTML = "humidity :" + humidity +"%"
                document.querySelector('.weatherDescription').innerHTML = "The sky with " + weatherDescription
                document.querySelector('.cityName').innerHTML = name
                document.querySelector('.temp').innerHTML = "The current tempature is " + Math.floor(temp) + "c"
                document.querySelector(".feelsLike").innerHTML = "Probably feels like " + Math.floor(feelsLike) + "c";
                document.querySelector('.windSpeed').innerHTML = "wind Speed " + windSpeed + "ms"
        })
            .catch(error =>{
                document.querySelector('.error').innerHTML = "please enter a valid city name"
        })
})
}

const shuffleImages = () =>{
    
        var random= Math.floor(Math.random() * 15) + 0;
        var bigSize = ["url('./images/backImg/1.jpeg')",
                       "url('./images/backImg/2.jpeg')",
                       "url('./images/backImg/3.jpeg')",
                       "url('./images/backImg/4.jpeg')",
                       "url('./images/backImg/5.jpeg')",
                       "url('./images/backImg/6.jpeg')",
                       "url('./images/backImg/7.jpeg')",
                       "url('./images/backImg/8.jpeg')",
                       "url('./images/backImg/9.jpeg')",
                       "url('./images/backImg/10.jpeg')",
                       "url('./images/backImg/11.jpeg')",
                       "url('./images/backImg/12.jpeg')",
                       "url('./images/backImg/13.jpeg')",
                       "url('./images/backImg/14.jpeg')",
                       "url('./images/backImg/15.jpeg')",
                    ];
        document.querySelector(".mainPage").style.backgroundImage=bigSize[random];
      }

weather.start()
