class WeatherService{
    getWeatherByName(name){
        
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bca8bf36807a6c92331ff9a2ec4849bc&units=metric`)
    }
}

var service=new WeatherService()

function fetchWeather(){
    let city=id_city.value;
    service.getWeatherByName(city).then(res=>res.json()).then(data=>displayWeather(data))

}


function displayWeather(data){
    console.log(data.main.temp);
    console.log(data.weather[0].main);
    console.log(data.wind.speed);
    let htmlData=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Temparature${data.main.temp}</h6>
      <p class="card-text">cloud:${data.weather[0].main}</p>
      <p class="card-text">Windspeed:${data.wind.speed}</p>
     
    </div>
  </div>`
   document.querySelector("#id_result").innerHTML=htmlData
}