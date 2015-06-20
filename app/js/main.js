// sections
$(function() {
    $.scrollify({
        section : "section",
    });
});

// leaflet stuff
var map = L.map('map', {
    center: [41.380432, 2.086341],
    zoom: 13,
    zoomControl: false,
    layers:[
      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'),
      L.tileLayer('http://mapwarper.net/maps/tile/9810/{z}/{x}/{y}.png', {
        opacity: 0.3,
        attribution: 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL. | <a href="http://cartotecadigital.icc.cat/cdm/ref/collection/catalunya/id/1602">Institut Cartogràfic i Geològic de Catalunya</a>.'
      })
    ]
});

// Awesome markers
var marker1 = L.AwesomeMarkers.icon({
    icon: 'car',
    markerColor: 'red'
});

var marker2 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var marker3 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var marker4 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var marker5 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var marker6 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var marker7 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});

var marker8 = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
});


L.marker([41.40961103874989, 2.0174024933567725], {icon: marker1})
  .bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.40351729938136, 2.027182289462256], {icon: marker2})
  .bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.39955601615708, 2.0330283274126733], {icon: marker3})
.bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.39720862932588, 2.035329974258218], {icon: marker4})
.bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.37628589811898, 2.0487785445566775], {icon: marker5})
.bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.35823979330778, 2.0846497816289085], {icon: marker6})
.bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.36129181647807, 2.0921319431464958], {icon: marker7})
.bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

L.marker([41.352521887365626, 2.1521511626534315], {icon: marker8})
  .bindPopup("<b>Hello world</b><br />I am a popup.").addTo(map);

// Disable scrollwheel handler.
map.scrollWheelZoom.disable();
