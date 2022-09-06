var city = "new york"
var appid = "c827936063ee461a4cc089216c08d956"

var apiurl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid='+ appid +'';

fetch(apiurl)
  .then((response) => response.json())
  .then((data) => console.log(data));

  console.log(apiurl)