function initMap() {
  var uluru = {lat: 41.390205, lng: 2.154007};
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
