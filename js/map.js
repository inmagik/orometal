function initMap() {
  var uluru = {lat: 45.365351, lng: 10.161708};
  var map = new google.maps.Map(document.getElementById('map'), {
    gestureHandling: "none",
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
