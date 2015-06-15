// FIXME: need to adjust coordinates for not stretching the img
var map = L.map('map', {
    center: [41.351891, 2.119625],
    zoom: 15,
    zoomControl: false,
    layers:[
      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'),
      L.tileLayer('http://mapwarper.net/maps/tile/9810/{z}/{x}/{y}.png', {
        opacity: 0.2,
        attribution: 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL. | <a href="http://cartotecadigital.icc.cat/cdm/ref/collection/catalunya/id/1602">Institut Cartogràfic i Geològic de Catalunya</a>.'
      })
    ]
});
// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();

// Disable cursor interaction
document.getElementById('map').style.cursor='default';
