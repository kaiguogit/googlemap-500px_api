var map;
var allMarkers = [];
function initMap() {
  
  var myLatLng = {lat: 49.256, lng: -123.193};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });

  google.maps.event.addListener(map,'click',function(event) {
    
    for (var i = 0; i < allMarkers.length; i++) {
        allMarkers[i].infoWindow.close(map);
      }
    var positionStr = event.latLng.lat() + "," + event.latLng.lng();
    searchPhoto(positionStr);
  });

  pinMyLocation();
  dropMarkers();
  
}



