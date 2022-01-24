function fetchData(){
    let cityname=place.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error("failed to fetch data")
        }
    })
    .then(data=>displayValue(data)).catch(err=>alert(err))
}
function displayValue(data){
    let html_data=``;
    // console.log(data);
    let cityName=data.name
    let temperature=data.main.temp
    let mini_temp=data.main.temp_min
    let max_temp=data.main.temp_max
    let wind_speed=data.wind.speed
    let weather_type=data.weather[0].main

html_data+=`<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="./images/cloud4.jpg" id="img" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="card-img-overlay">
  <h5 class="card-title text-white large-font mr-3"><i class="fas fa-map-marker-alt"></i> ${cityName}</h5>

  <h1 class="card-title text-white large-font mr-3">${temperature}°C</h1>
  
  
</div>
  <div class="col-lg-8 col-sm-12" id="box1">
    <div class="card-body">
<ul>
        <h2 class="card-title text-white large-font mr-5" >${cityName}</h2>

</ul>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temperature:${temperature}</li>
      <li class="list-group-item">Minimum Temperature:${mini_temp}<br>Maxmimum Temperature:${max_temp}</li>
      <li class="list-group-item">Wind Speed:${wind_speed}</li>
      <li class="list-group-item">Weather Type:${weather_type}</li>


    </ul>
<ul>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

</ul>    </div>
  </div>
</div>
</div>
`
document.querySelector("#result").innerHTML=html_data
    
}
