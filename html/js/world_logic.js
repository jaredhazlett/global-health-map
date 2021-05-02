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

L.geoJson(worldData).addTo(myMap);

      //basically you have a bunch of arguments that go within the L.geoJson after
      //you've created a d3.json to read the url. We don't need to go through this
      //if you're already able to do it. Basically you create a bunch of functions
      //for the L.geoJson arguments. This can tighten up your code.

