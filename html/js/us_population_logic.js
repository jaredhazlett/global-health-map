// Creating map object
var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v9",
  accessToken: API_KEY
}).addTo(myMap);

L.geoJson(statesData).addTo(myMap);

      //basically you have a bunch of arguments that go within the L.geoJson after
      //you've created a d3.json to read the url. We don't need to go through this
      //if you're already able to do it. Basically you create a bunch of functions
      //for the L.geoJson arguments. This can tighten up your code.

function getColor(d) {
  return d > 1000 ? '#800026':
         d > 500  ? '#BD0026':
         d > 200  ? '#E31A1C':
         d > 100  ? '#FC4E2A':
         d > 50   ? '#FD8D3C':
         d > 20   ? '#FEB24C':
         d > 10   ? '#FED976':
                    '#FFEDA0';
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2, 
    opacity: 1,
    color: 'white',
    dashArray: '1',
    fillOpacity: 0.7
  };
}


function highlightFeature(e) {
  var layer = e.target;
  info.update(layer.feature.properties)

  layer.setStyle({
    weight: 5, 
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && ~L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target)
  info.update();
}


function zoomToFeature(e) {
  myMap.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

var geojson; 
geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(myMap);

//custom infor control
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class 'info'
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>' 
    : 'Hover over a state');
};

info.addTo(myMap);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);