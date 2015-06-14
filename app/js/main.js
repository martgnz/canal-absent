// Image overlay
var imageUrl = 'img/canal-infanta.jpg',
    imageBounds = L.latLngBounds([
        [41.327874, 1.980321],
        [41.393679, 2.186463]]);

map = new L.Map('map', {
  zoomControl: false,
  fitBounds: imageBounds,
}).setView([41.358670, 2.087876], 13);

var overlay = L.imageOverlay(imageUrl, imageBounds, {opacity: 0.4})
  .addTo(map);

// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();

// Disable cursor interaction
document.getElementById('map').style.cursor='default';

// retina detection & tiles
var attribution = {attribution: 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.'};
var retina = window.devicePixelRatio > 1;
if (retina) {
  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png',attribution).addTo(map);
} else {
  L.t
  }
