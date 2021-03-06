// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);

// using alternative map object method to setView()
// module said add it after the base layer?

// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
    //"type":"Feature",
    //"properties":{
        //"id":"3469",
        //"name":"San Francisco International Airport",
        //"city":"San Francisco",
        //"country":"United States",
        //"faa":"SFO",
        //"icao":"KSFO",
        //"alt":"13",
        //"tz-offset":"-8",
        //"dst":"A",
        //"tz":"America/Los_Angeles"},
        //"geometry":{
            //"type":"Point",
            //"coordinates":[-122.375,37.61899948120117]}}
//]};

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    //pointToLayer: function(feature, latlng) {
      //console.log(feature);
      //return L.marker(latlng)
      //.bindPopup("<h2>"+ feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
    //}
    //}).addTo(map);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
    //onEachFeature: function(feature, layer) {
      //console.log(layer);
      //layer.bindPopup("<h2>"+ "Airport code:" + feature.properties.faa + "</h2><hr><h3>" + "Airport name:" + feature.properties.name + "</h3>");
    //}
    //}).addTo(map);






// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// commenting out, modules says will add later
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
// center of US
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// accessing earthquake data for the past seven days
let quakesPast7Days = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/ltmurphy/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/ltmurphy/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
//let myStyle = {
  //olor: "blue",
  //fillColor: "yellow",
  //weight: 1
//}

// Grabbing our GeoJSON data.
d3.json(quakesPast7Days).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
    console.log(layer);
    //layer.bindPopup("<h3>Neighborhood: "+ layer.feature.properties.AREA_NAME + "</h3>");
    }
  }).addTo(map);
});










// Grabbing our GeoJSON data.
//d3.json(torontoData).then(function(data) {
    //console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJSON(data, {
    //style: myStyle,
    //onEachFeature: function(feature, layer) {
      //layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3> Destination: " + feature.properties.dst + "</h3>");
      //}
  //}).addTo(map);
//});






// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/ltmurphy/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
    //console.log(data);
  
  // code without popups
  // creating a GeoJSON layer with the retrieved data
  //L.geoJson(data).addTo(map);
//});
    
    // Creating a GeoJSON layer with the retrieved data.
    // using the earlier code for popup
  //L.geoJSON(data, {
    //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h3>Airport code: "+ layer.feature.properties.faa + "</h3><hr><h3>Airport name: " + layer.feature.properties.name + "</h3>");
    //}
  //}).addTo(map);
//});
