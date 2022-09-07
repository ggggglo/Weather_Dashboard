var city = document.querySelector("#savecity")
var appid = "c827936063ee461a4cc089216c08d956"
var search = document.querySelector("button")

  search.addEventListener('click', function(){
    var searchsave = city.value; 
    localStorage.setItem("city", searchsave)
  });

  var citysave = localStorage.getItem("city")

  console.log(citysave)

  var apiurl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ citysave +'&appid='+ appid +'';

  fetch(apiurl)
    .then((response) => response.json())
    .then((data) => console.log(data));
  