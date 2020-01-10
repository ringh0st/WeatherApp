const data = `www.google.com/q=london.com`
const weather = {};
weather.request = new XMLHttpRequest()
weather.request.open('GET', 'api.openweathermap.org/data/2.5/forecast?q=${city name},{country code}', true)
weather.start=()=>{
    searchWeather()
}

const searchWeather = ()=>{
    let city = document.querySelector('.cityName');
    let currentTime = document.querySelector('.currentTimeName');
    let weeklyWeather = document.querySelector('.weeklyWeatherName');
    let inputValue = document.querySelector('#searchBar');

    const btn = document.querySelector('.btn');
    const introPage = document.querySelector(".hero");
    let mainPage = document.querySelector(".mainPage");
    btn.addEventListener("click", enterPage=()=>{
        // introPage.style.display = "none"
        // mainPage.style.display = "block"
        // // fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'7cf2ce9913cb1e81c5f1070de180744a',{mode:'no-cors'})
        // fetch('https://api.aerisapi.com/forecasts/55415?client_id=sF3acNgrpJAlMVvDmmlIM&client_secret=LJ4BlKxyxHaSFhr8tPS0BUmKxUrTpn2gIDUxFUGh')
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(err => alert("wrong city name!"))
        
        // console.log(fetch)
        // load the latest observation for Seattle, WA
aeris.api().endpoint('observations').place('seattle,wa').get().then((result) => {
    const data = result.data.ob;
    document.getElementById('obs').innerHTML = `The current weather is ${data.weatherPrimary.toLowerCase()} and ${data.tempF} degrees.`;
});

// load the latest radar image for Seattle, WA at 500x300 pixels
aeris.map().layers('flat,radar,counties,admin').center('seattle,wa').zoom(9).size(500, 300).get().then((result) => {
    // append result image to a DOM target
    document.getElementById('map-target').appendChild(result.image);
    
    // output image valid time to a DOM target
    document.getElementById('map-metadata').innerHTML = `Valid: ${result.metadata.validDate}`;
});
    })
}
weather.start()
// fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?units=M&lang=en&lat=-78&lon=37", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
// 		"x-rapidapi-key": "1ca9a95402mshee05a170c9b108bp1d363djsn3328a6420e74"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
