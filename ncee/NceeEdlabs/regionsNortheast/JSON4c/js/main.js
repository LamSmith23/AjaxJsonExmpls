// JavaScript Document

var hotelInfo;
var request = new XMLHttpRequest();
request.responseType = 'text';

request.onload = function() {
  if (request.status === 200) {
    hotelInfo = JSON.parse(request.responseText);
    display(0);
  } // end if
} // end function

request.open('GET', "data.json", true);
request.send();

function display(x) {
  var roomName = document.getElementById("roomName");
  roomName.innerHTML = hotelInfo[x].name;

  var description = document.getElementById('desc');
  description.innerHTML = hotelInfo[x].description;

  var photos = document.getElementById('photo');
  photos.src = hotelInfo[x].photo;

  var weekDay = document.getElementById('weekday');
  weekDay.innerHTML = hotelInfo[x].cost.weekday;

  var weekEnd = document.getElementById('weekend');
  weekEnd.innerHTML = hotelInfo[x].cost.weekend;


  for (var i = 0; i < hotelInfo[x].details.length; i++) {
    var detailer = document.getElementById('details');
    detailer.innerHTML = "<p>" + hotelInfo[x].details[i] + "</p>";
  }

}
