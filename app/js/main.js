// scrollify the sections
$(function() {
    $.scrollify({
        section : "section",
    });
});

// leaflet stuff
var map = L.map('map', {
    center: [41.375433, 2.086588],
    zoom: 13,
    layers:[
      L.tileLayer('http://{s}.tiles.mapbox.com/v4/martgnz.mgo71j3d/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibWFydGdueiIsImEiOiJkSkl4M2cwIn0.0v-HWEKDWZX8Qnadnkbrow'),
      L.tileLayer('http://mapwarper.net/maps/tile/9810/{z}/{x}/{y}.png', {
        opacity: 0.6,
        attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox © OpenStreetMap</a> | <a href="https://www.mapbox.com/map-feedback/"><strong>Improve this map</strong></a> | <a href="http://cartotecadigital.icc.cat/cdm/ref/collection/catalunya/id/1602">Institut Cartogràfic i Geològic de Catalunya</a>.'
      })
    ]
});

// map listeners
map.on('drag', function () {
    $(".mapIntro").fadeOut();
});

map.on("zoomend", function() {
    if (map.getZoom() > 13) {
        $(".mapIntro").fadeOut();
    }
    else {
        $(".mapIntro").fadeIn();
    }
})

// Disable scrollwheel handler.
map.scrollWheelZoom.disable();

// Awesome markers
var marker1 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>1</span>'
});

var marker2 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>2</span>'
});

var marker3 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>3</span>'});

var marker4 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>4</span>'});

var marker5 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>5</span>'});

var marker6 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>6</span>'});

var marker7 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>7</span>'});

var marker8 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>8</span>'});

var marker9 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>9</span>'});

var marker10 = L.AwesomeMarkers.icon({
    icon: '',
    markerColor: 'red',
    html: '<span>10</span>'});

L.marker([41.409616, 2.017407], {icon: marker1})
    .bindPopup("<h3>Casa de les Aigües / Molins de Rei</h3><br /><img src='img/casa-aigues.jpg'><p>El canal es va construir aprofitant les aigües del Rec Vell, que agafava les aigües del Llobregat al Papiol. En aquest edifici es controlava quanta aigua del anava al canal i quanta tornava al riu, marcant l’inici del canal. La infanta Luisa Carlota de Borbón va obrir les comportes.</p>").addTo(map);

L.marker([41.408553, 2.015695], {icon: marker2})
    .bindPopup("<h3>Carrer del General Castaños / Molins de Rei</h3><p>El capità general de Catalunya, Francisco Javier Castaños, va ser un gran impulsor d’aquest canal.</p><p>S’havia de dir “Canal de Castaños”, però es va acabar dedicant a la infanta Carlota perquè, aprofitant que visitava Barcelona, se la va convidar a inaugurar el canal tot i no estar acabat. A canvi, se li va dedicar un carrer. També hi havia l’ordre de plantar castanyers a la riba, tot i que no es va arribar a fer.</p>").addTo(map);

L.marker([41.403519, 2.027182], {icon: marker3})
    .bindPopup("<h3>Avinguda Barcelona / Molins de Rei</h3><br /><img src='img/avinguda-bcn.jpg'><p>Després que es cobrís totalment al seu pas per Molins de Rei, aquest és el primer punt on el canal veu la llum, a l’inici del polígon industrial el Pla. En bona part del polígon passa per dins de les fàbriques o als seus terrenys.</p>").addTo(map);

L.marker([41.400489, 2.031935], {icon: marker4})
    .bindPopup("<h3>Pont de Can Capellans / Molins de Rei</h3><br /><img src='img/can-capellans.jpg'><p>Un dels ponts més singulars, que permet el pas de vehicles a la part superior i el de persones per les escales. Foto: Esther Hachuel</p>").addTo(map);

L.marker([41.397207, 2.035329], {icon: marker5})
    .bindPopup("<h3>Pont de Can Sant Feliu del Camí / Sant Feliu de Llobregat</h3><br /><iframe width='465' height='290' src='https://www.youtube.com/embed/Vu5qW7h9gYA' frameborder='0' allowfullscreen></iframe><p>Aquest és un dels pocs trams que es conserven tal i com devien ser en un principi. Esther Hachuel, arqueòloga del Centre d’Estudis Comarcals del Baix Llobregat, ens l’ensenya.</p>").addTo(map);

L.marker([41.374994, 2.051414], {icon: marker6})
    .bindPopup("<h3>Salt de l'Erasme / Sant Joan Despí</h3><br /><img src='img/salt-erasme.jpg'><p>A partir d’aquest punt l’aigua del canal es desvia cap a sèquies menors fins a Can Trabal, a l’Hospitalet. Foto: Esther Hachuel</p>").addTo(map);

L.marker([41.356575, 2.081490], {icon: marker7})
    .bindPopup("<h3>Parc de Can Mercader / Cornellà de Llobregat</h3><br /><img src='img/can-mercader.jpg'><p>Gràcies a que la lluita veïnal va fer que Can Mercader fos una zona verda lliure d’edificacions, s’ha pogut conservar un pont del canal.</p>").addTo(map);

L.marker([41.361226, 2.090673], {icon: marker8})
    .bindPopup("<h3>Rambla Solanes / Cornellà de Llobregat</h3><br /><img src='img/rambla-solanes.jpg'><p>Fins fa ben poc la Remunta tenia un aspecte similar al d’aquesta zona, que es troba a molt pocs metres però en terme municipal de Cornellà, sense interès a urbanitzar la zona.</p>").addTo(map);

L.marker([41.36136, 2.09208], {icon: marker9})
    .bindPopup("<h3>La Remunta / l’Hospitalet de Llobregat</h3><br /><iframe width='465' height='290' src='https://www.youtube.com/embed/k5JECTcvClU' frameborder='0' allowfullscreen></iframe><p>La plataforma “Protegim el canal de la infanta”, encapçalada per l’historiador Ireneu Castillo, va aconseguir que es preservés el pont i el canal que hi havia dins l’antiga caserna de la Remunta. Tot i això, els criteris per restaurar-lo han estat més estètics que històrics.</p>").addTo(map);

L.marker([41.352807, 2.151551], {icon: marker10})
    .bindPopup("<h3>Cementiri de Montjuïc / Barcelona</h3><br /><img src='img/cementiri-montjuic.jpg'><p>L’últim punt on es conserva el canal, per estar adossat al mur del cementiri de Montjuïc. Desembocava als peus del far de Montjuïc, però l’ampliació del port i la construcció d’infraestructures ho han esborrat.</p>").addTo(map);
