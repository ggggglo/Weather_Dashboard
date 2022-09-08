var city = document.querySelector("#savecity")
var appid = "c827936063ee461a4cc089216c08d956"
var search = document.querySelector("button")

var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var uv = document.querySelector("#uv")

var temp1 = document.querySelector("#temp1")
var wind1 = document.querySelector("#wind1")
var humidity1 = document.querySelector("#humidity1")
var uv1 = document.querySelector("#uv1")

var temp2 = document.querySelector("#temp2")
var wind2 = document.querySelector("#wind2")
var humidity2 = document.querySelector("#humidity2")
var uv2 = document.querySelector("#uv1")

var temp3 = document.querySelector("#temp3")
var wind3 = document.querySelector("#wind3")
var humidity3 = document.querySelector("#humidity3")
var uv3 = document.querySelector("#uv3")

var temp4 = document.querySelector("#temp4")
var wind4 = document.querySelector("#wind4")
var humidity4 = document.querySelector("#humidity4")
var uv4 = document.querySelector("#uv4")

var temp5 = document.querySelector("#temp5")
var wind5 = document.querySelector("#wind5")
var humidity5 = document.querySelector("#humidity5")
var uv5 = document.querySelector("#uv5")

  search.addEventListener('click', function(){
    var searchsave = city.value; 
    localStorage.setItem("city", searchsave);
    window.location.reload();
  });

  var citysave = localStorage.getItem("city")

  $("#results").val(localStorage.getItem("city"));
  $("#history").val(localStorage.getItem("city"));


  console.log(citysave)

  var apiurl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ citysave +'&appid='+ appid +'';

  fetch(apiurl)
    .then((response) => response.json())
    .then((data)=> {
      var weather = data;
      console.log(weather)
      temp.textContent = weather.list[0].main.temp;
      temp1.textContent = weather.list[1].main.temp;
      temp2.textContent = weather.list[2].main.temp;
      temp3.textContent = weather.list[3].main.temp;
      temp4.textContent = weather.list[4].main.temp;
      temp5.textContent = weather.list[5].main.temp;

      wind.textContent = weather.list[0].wind.speed;
      wind1.textContent = weather.list[1].wind.speed;
      wind2.textContent = weather.list[2].wind.speed;
      wind3.textContent = weather.list[3].wind.speed;
      wind4.textContent = weather.list[4].wind.speed;
      wind5.textContent = weather.list[5].wind.speed;

      humidity.textContent = weather.list[0].main.humidity;
      humidity1.textContent = weather.list[1].main.humidity;
      humidity2.textContent = weather.list[2].main.humidity;
      humidity3.textContent = weather.list[3].main.humidity;
      humidity4.textContent = weather.list[4].main.humidity;
      humidity5.textContent = weather.list[5].main.humidity;


    });

    var temp = document.querySelector("#temp");

