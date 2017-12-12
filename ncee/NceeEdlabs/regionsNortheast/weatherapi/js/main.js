/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var conditionsObj;
var forecastObj;

function getZip() {
  var zip = document.getElementById('zip').value;
  if(zip === '') {
    zip = "80304";
  }
var conditionsPath = "http://api.wunderground.com/api/536aea6e6adb313b/conditions/q/"+zip+".json";
var forecastPath = "http://api.wunderground.com/api/536aea6e6adb313b/forecast/q/"+zip+".json";

  weatherConditions.open('GET', conditionsPath, true);
  weatherConditions.send(null);

  weatherForecast.open('GET', forecastPath , true);
  weatherForecast.send();

}

// GET THE CONDITIONS
weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        conditionsObj = JSON.parse(weatherConditions.responseText);
        getConditions();
      }
};

function getConditions() {
  var location = document.getElementById("location");
  location.innerHTML = conditionsObj.current_observation.display_location.full;

  var weather = document.getElementById('weather');
  weather.innerHTML =  conditionsObj.current_observation.weather;

  var temperature =  document.getElementById('temperature');
  temperature.innerHTML = conditionsObj.current_observation.temp_f;
}

// GET THE FORECAST
weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	 forecastObj = JSON.parse(weatherForecast.responseText);
	 getWeather();
  }
};


function getWeather() {
  var description = document.getElementById('desc');
  description.innerHTML = forecastObj.forecast.txt_forecast.forecastday["0"].fcttext;

  var row1 = document.getElementById('r1c1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].date.weekday;
  var row2 = document.getElementById('r1c2').src = forecastObj.forecast.simpleforecast.forecastday[1].icon_url;
  var row3 = document.getElementById('r1c3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].high.fahrenheit+"*";
  var row4 = document.getElementById('r1c4').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].low.fahrenheit+"*";

  var row5 = document.getElementById('r2c1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].date.weekday;
  var row6 = document.getElementById('r2c2').src = forecastObj.forecast.simpleforecast.forecastday[2].icon_url;
  var row7 = document.getElementById('r2c3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].high.fahrenheit+"*";
  var row8 = document.getElementById('r2c4').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].low.fahrenheit+"*";

  var row9 = document.getElementById('r3c1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].date.weekday;
  var row10 = document.getElementById('r3c2').src = forecastObj.forecast.simpleforecast.forecastday[3].icon_url;
  var row11 = document.getElementById('r3c3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].high.fahrenheit+"*";
  var row12 = document.getElementById('r3c4').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].low.fahrenheit+"*";
}

getZip();
