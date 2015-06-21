// sections
$(function() {
    $.scrollify({
        section : "section",
    });
});

// wow
new WOW().init();

// leaflet stuff - TODO: Load map tiles on demand
var map = L.map('map', {
    center: [41.380432, 2.086341],
    zoom: 13,
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
    icon: 'university',
    markerColor: 'blue'
});

var marker2 = L.AwesomeMarkers.icon({
    icon: 'tree',
    markerColor: 'green'
});

var marker3 = L.AwesomeMarkers.icon({
    icon: 'building-o',
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
  .bindPopup("<b>Casa de les Aigües / Molins de Rei</b><br /> El canal es va construir aprofitant les aigües del Rec Vell, que agafava les aigües del Llobregat al Papiol. En aquest edifici es controlava quanta aigua del anava al canal i quanta tornava al riu, marcant l’inici del canal. La infanta Luisa Carlota de Borbón va obrir les comportes.").addTo(map);

L.marker([41.40351729938136, 2.027182289462256], {icon: marker2})
  .bindPopup("<b>Carrer del General Castaños</b><br />El capità general de Catalunya, Francisco Javier Castaños, va ser un gran impulsor d’aquest canal. S’havia de dir “Canal de Castaños”, però es va acabar dedicant a la infanta Carlota perquè, aprofitant que visitava Barcelona, se la va convidar a inaugurar el canal tot i no estar acabat. A canvi, se li va dedicar un carrer. També hi havia l’ordre de plantar castanyers a la riba, tot i que no es va arribar a fer.").addTo(map);

L.marker([41.39955601615708, 2.0330283274126733], {icon: marker3})
.bindPopup("<b>Avinguda Barcelona / Molins de Rei</b><br />Després de la cobertura que es va fer l’any (????), aquest és el primer punt on el canal veu la llum, a l’inici del polígon industrial el Pla. En bona part del polígon passa per dins de les fàbriques o als seus terrenys.").addTo(map);

L.marker([41.39720862932588, 2.035329974258218], {icon: marker4})
.bindPopup("<b>Pont de Can Capellans</b><br />I am a popup.").addTo(map);

L.marker([41.37628589811898, 2.0487785445566775], {icon: marker5})
.bindPopup("<b>Ciutat esportiva FC Barcelona</b><br />Aquest era un dels pocs punts on el canal encara es conservava, però la construcció de la ciutat esportiva del FC Barcelona ho va destruir.").addTo(map);

L.marker([41.35823979330778, 2.0846497816289085], {icon: marker6})
.bindPopup("<b>Ciutat esportiva FC Barcelona</b><br />I am a popup.").addTo(map);

L.marker([41.36129181647807, 2.0921319431464958], {icon: marker7})
.bindPopup("<b>Parc de Can Mercader</b><br />I am a popup.").addTo(map);

L.marker([41.352521887365626, 2.1521511626534315], {icon: marker8})
  .bindPopup("<b>Pont Cornellà/Hospitalet</b><br />I am a popup.").addTo(map);

// Disable scrollwheel handler.
map.scrollWheelZoom.disable();
