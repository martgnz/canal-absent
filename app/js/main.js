var map = L.map('map', {
    center: [41.351891, 2.119625],
    zoom: 15,
    zoomControl: false,
    layers:[
      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'),
      L.tileLayer('http://mapwarper.net/maps/tile/9810/{z}/{x}/{y}.png', {
        opacity: 0.4,
        attribution: 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL. | <a href="http://cartotecadigital.icc.cat/cdm/ref/collection/catalunya/id/1602">Institut Cartogràfic i Geològic de Catalunya</a>.'
      })
    ]
});

// Awesome markers
var marker1 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

L.marker([41.401435, 2.025298], {icon: marker1})
  .bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();

// Disable cursor interaction
document.getElementById('map').style.cursor='default';
