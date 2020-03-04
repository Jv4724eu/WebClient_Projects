let centerOfUSA = [39.8097343, -98.5556199];// array of latitude and longitude

let zoomLevel = 4; // 1 = whole world 10 = large city, 20 = city blocks

//create the map
let map = L.map('bridge-map').setView(centerOfUSA, zoomLevel);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5,
    id:'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2l0dHlzdGlmZiIsImEiOiJjazZ2aDF3ZzcwMXNxM2hvMmJiZTlvaTI5In0.oEO-8s7LpbrCHJatQnXVKg'
}).addTo(map);

//array of bridge objects
let bridges = [
    {name:'Verrazano-Narrows Bridge', city_state:'New York, NY', meters:'1298.4', location:'[40.6066, -74.0447]' },
    {name:'Golden Gate Bridge', city_state:'San Francisco and Marin, CA', meters:'1280.2', location:'[37.8199, -122.4783]' },
    {name:'Mackinac Bridge', city_state:'Mackinaw and St Ignace, MI', meters:'1158.0', location:'[45.8174, -84.7278]' },
    {name:'George Washington Bridge', city_state:'New York, NY and New Jersey, NJ', meters:'1067.0', location:'[40.8517, -73.9527]' },
    {name:'Tacoma Narrows Bridge', city_state:'Tacoma and Kitsap, WA', meters:'853.44', location:'[47.2690, -122.5517]' }
];

//icon creation
let icon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [50,50],
    iconAnchor: [25, 25]
})


//loop over array of bridge objects to access lat/long and create multiple markers at once
//cannot get this feature to work

bridges.forEach(function (element) {
    // let bridgeCoordinates = [element.location];
    // let bridgeMarker = L.marker(bridgeCoordinates,{icon: icon}).addTo(map)
        let stPaulCoordinates = [44.94839, -93.1099]; //test marker
        let stpMarker = L.marker(stPaulCoordinates, {icon: icon}).addTo(map) //test marker
        .bindPopup('NAME: ' + element.name + ' SPAN: '+ element.meters) //pop up with bridge name & span
        .addTo(map)
});



