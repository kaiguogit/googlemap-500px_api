// 49.2563993,-123.1939531
// google.maps.event.addListenerOnce(map, 'idle', function(){});
function dropMarkers(){
  var myLatLng = {lat: 49.256, lng: -123.193};
  var title = "Vancouver"
  var description="is a great city."
  createMarker(myLatLng, title, description);
  createMarkerCheckbox(title);

  var myLatLng = {lat: 49.253, lng: -123.146};
  var title = "Samurai"
  var description="is a great Japanese Resturant."
  createMarker(myLatLng, title, description);
  createMarkerCheckbox(title);

  var myLatLng = {lat: 49.224, lng: -123.110};
  var title = "Langara"
  var description="is where Crystal study accounting."
  createMarker(myLatLng, title, description);
  createMarkerCheckbox(title);
}

function createMarker(myLatLng, title, description){
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      title: title
    });

  allMarkers.push(marker);

  var contentString = '<div id="info_content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<h1 id="firstHeading" class="firstHeading">' + title +'</h1>'+
       '<div id="bodyContent">'+
       '<p><b>' + title + '</b>, ' + description +'</p>'+
       '<div class="info_image"></div>'+
       '</div>'+
       '</div>';

   var infowindow = new google.maps.InfoWindow({
     content: contentString
   });
   infowindow.setPosition(myLatLng);
   marker.infoWindow = infowindow;

  marker.addListener('click', toggleBounce);
  marker.addListener('click', toggleInfoWindow);
  marker.addListener('dragend', function(){
    for (var i = 0; i < allMarkers.length; i++) {
      allMarkers[i].infoWindow.close(map);
    }
     this.infoWindow.open(map, this);
    var pos = markerPosition(this);
    searchPhoto(pos);
  });
}

function toggleInfoWindow(){
  for (var i = 0; i < allMarkers.length; i++) {
    allMarkers[i].infoWindow.close(map);
  }
   this.infoWindow.open(map, this);
   // var pos = ;
   searchPhoto(markerPosition(this));
}

function markerPosition(marker){
  return marker.position.lat() + "," + marker.position.lng();
}

function toggleBounce() {
  for (var i = 0; i < allMarkers.length; i++) {
    allMarkers[i].setAnimation(null);
  }
  this.setAnimation(google.maps.Animation.BOUNCE);
   
 }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function pinMyLocation(){

   var myLocationWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  
    var title = "Your position";
    var description="";
    createMarker(pos, title, description);
    createMarkerCheckbox(title);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, myLocationWindow, map.getCenter());
          });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, myLocationWindow, map.getCenter());
  } 
}

function createMarkerCheckbox(name){
  var item = $('<div>').addClass("marker list-group-item active").attr("name", name).text(name);
      // item = $('<>').append(item);
  $('.marker_list').append(item);
}