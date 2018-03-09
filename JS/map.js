function initMap() {
  var uluru = {lat: 43.46472, lng: -3.80444};
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
