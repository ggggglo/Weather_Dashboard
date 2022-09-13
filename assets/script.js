var city = document.querySelector("#savecity")
var appid = "c827936063ee461a4cc089216c08d956"
var search = document.querySelector("button")

var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var uvtext = document.querySelector("#uv")

var temp1 = document.querySelector("#temp1")
var wind1 = document.querySelector("#wind1")
var humidity1 = document.querySelector("#humidity1")
var uvtext1 = document.querySelector("#uv1")

var temp2 = document.querySelector("#temp2")
var wind2 = document.querySelector("#wind2")
var humidity2 = document.querySelector("#humidity2")
var uvtext2 = document.querySelector("#uv2")

var temp3 = document.querySelector("#temp3")
var wind3 = document.querySelector("#wind3")
var humidity3 = document.querySelector("#humidity3")
var uvtext3 = document.querySelector("#uv3")

var temp4 = document.querySelector("#temp4")
var wind4 = document.querySelector("#wind4")
var humidity4 = document.querySelector("#humidity4")
var uvtext4 = document.querySelector("#uv4")

var temp5 = document.querySelector("#temp5")
var wind5 = document.querySelector("#wind5")
var humidity5 = document.querySelector("#humidity5")
var uvtext5 = document.querySelector("#uv5")

var today = document.querySelector("#today")
var day1 = document.querySelector("#day1")
var day2 = document.querySelector("#day2")
var day3 = document.querySelector("#day3")
var day4 = document.querySelector("#day4")
var day5 = document.querySelector("#day5")

  search.addEventListener('click', function(){
    var searchsave = city.value; 
    localStorage.setItem("city", searchsave);
    window.location.reload();
  });

  var citysave = localStorage.getItem("city")

  $("#results").val(localStorage.getItem("city"));
  $("#history").val(localStorage.getItem("city"));


  console.log(citysave)

  var apiurl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ citysave +'&appid='+ appid +'&units=imperial';

  fetch(apiurl)
    .then((response) => response.json())
    .then((data)=> {
      var weatherdata = data;
      console.log(weatherdata)
      temp.textContent = weatherdata.list[0].main.temp;
      temp1.textContent = weatherdata.list[1].main.temp;
      temp2.textContent = weatherdata.list[2].main.temp;
      temp3.textContent = weatherdata.list[3].main.temp;
      temp4.textContent = weatherdata.list[4].main.temp;
      temp5.textContent = weatherdata.list[5].main.temp;

      wind.textContent = weatherdata.list[0].wind.speed;
      wind1.textContent = weatherdata.list[1].wind.speed;
      wind2.textContent = weatherdata.list[2].wind.speed;
      wind3.textContent = weatherdata.list[3].wind.speed;
      wind4.textContent = weatherdata.list[4].wind.speed;
      wind5.textContent = weatherdata.list[5].wind.speed;

      humidity.textContent = weatherdata.list[0].main.humidity;
      humidity1.textContent = weatherdata.list[1].main.humidity;
      humidity2.textContent = weatherdata.list[2].main.humidity;
      humidity3.textContent = weatherdata.list[3].main.humidity;
      humidity4.textContent = weatherdata.list[4].main.humidity;
      humidity5.textContent = weatherdata.list[5].main.humidity;

      var lat = weatherdata.city.coord.lat
      var lon = weatherdata.city.coord.lon

      var icon1 =  weatherdata.list[0].weather[0].icon
      var icon2 =  weatherdata.list[1].weather[0].icon
      var icon3 =  weatherdata.list[2].weather[0].icon
      var icon4 =  weatherdata.list[3].weather[0].icon
      var icon5 =  weatherdata.list[4].weather[0].icon
      var icon6 =  weatherdata.list[5].weather[0].icon

      var iconapi1 = 'http://openweathermap.org/img/wn/'+ icon1 +'@2x.png'
      var iconapi2 = 'http://openweathermap.org/img/wn/'+ icon2 +'@2x.png'
      var iconapi3 = 'http://openweathermap.org/img/wn/'+ icon3 +'@2x.png'
      var iconapi4 = 'http://openweathermap.org/img/wn/'+ icon4 +'@2x.png'
      var iconapi5 = 'http://openweathermap.org/img/wn/'+ icon5 +'@2x.png'
      var iconapi6 = 'http://openweathermap.org/img/wn/'+ icon6 +'@2x.png'
      
      var iconcontent1 = document.querySelector("#icon1")
      var iconcontent2 = document.querySelector("#icon2")
      var iconcontent3 = document.querySelector("#icon3")
      var iconcontent4 = document.querySelector("#icon4")
      var iconcontent5 = document.querySelector("#icon5")
      var iconcontent6 = document.querySelector("#icon6")

      iconcontent1.src = iconapi1
      iconcontent2.src = iconapi2
      iconcontent3.src = iconapi3
      iconcontent4.src = iconapi4
      iconcontent5.src = iconapi5
      iconcontent6.src = iconapi6
     

      console.log(lat)
      console.log(lon)

      var uvapi= 'https://api.openweathermap.org/data/2.5/uvi?appid='+ appid +'&lat='+ lat +'&lon='+ lon +'';

      fetch(uvapi)
      .then((response) => response.json())
      .then((data)=> {
        var uv = data
        var uvval = uv.value
        console.log(uvval)
        if (uvval >= 1, uvval <= 2) {
          uvtext.style.color = "green";
          uvtext1.style.color = "green";
          uvtext2.style.color = "green";
          uvtext3.style.color = "green";
          uvtext4.style.color = "green";
          uvtext5.style.color = "green";

        } else if (uvval >= 3, uvval <= 5) {
          uvtext.style.color = "yellow";
          uvtext1.style.color = "yellow";
          uvtext2.style.color = "yellow";
          uvtext3.style.color = "yellow";
          uvtext4.style.color = "yellow";
          uvtext5.style.color = "yellow";  
        
        } else if (uvval >= 6, uvval <= 7 ){
          uvtext.style.color = "orange";
          uvtext1.style.color = "orange";
          uvtext2.style.color = "orange";
          uvtext3.style.color = "orange";
          uvtext4.style.color = "orange";
          uvtext5.style.color = "orange";

        } else if (uvval >= 8, uvval <= 10) {
          uvtext.style.color = "red";
          uvtext1.style.color = "red";
          uvtext2.style.color = "red";
          uvtext3.style.color = "red";
          uvtext4.style.color = "red";
          uvtext5.style.color = "red";

        } 

        }
    )});
    



    today.textContent = moment().calendar()
    day1.textContent = moment().add(1, 'days').calendar()
    day2.textContent = moment().add(2, 'days').calendar()
    day3.textContent = moment().add(3, 'days').calendar()
    day4.textContent = moment().add(4, 'days').calendar()
    day5.textContent = moment().add(5, 'days').calendar()
    
    var temp = document.querySelector("#temp");

