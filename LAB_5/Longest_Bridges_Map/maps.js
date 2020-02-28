let metroAreaCenterCoordinates = [44.96, -93.2]// array of latitude and longitude

let zoomLevel = 9 // 1 = whole world 10 = large city, 20 = city blocks

//create the map

let map = L.map('bridge-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id:'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2l0dHlzdGlmZiIsImEiOiJjazZ2aDF3ZzcwMXNxM2hvMmJiZTlvaTI5In0.oEO-8s7LpbrCHJatQnXVKg'
}).addTo(map);

//add some markers

let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates).addTo(map)
    .bindPopup("Minneapolis College<br><a href='https://minneapolis.edu'>Website</a>")
    .addTo(map)
let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates).add(map)

