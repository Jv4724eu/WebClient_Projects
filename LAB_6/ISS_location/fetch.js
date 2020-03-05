let url = 'https://api.wheretheiss.at/v1/satellites/25544';

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let timeElement = document.querySelector('#time')

let issMarker; //leaflet marker  `
let update = 10000; //10 seconds

let map = L.map('iss-map').setView([0, 0], 1); // center at 0,0 and max zoom out
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 7,
        id:'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoia2l0dHlzdGlmZiIsImEiOiJjazZ2aDF3ZzcwMXNxM2hvMmJiZTlvaTI5In0.oEO-8s7LpbrCHJatQnXVKg'
}).addTo(map);

iss(); //initial call to function
setInterval(iss, update); //call the iss function every update seconds

let icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50,50],
    iconAnchor: [25, 25]
})

function iss(){
    fetch(url)
        .then( res => res.json() )
        .then( issData => {
            console.log(issData);
            let lat = issData.latitude;
            let long = issData.longitude;
            issLat.innerHTML = lat;
            issLong.innerHTML = long;

            if(!issMarker){
                issMarker = L.marker([lat, long], {icon: icon}).addTo(map)
            } else {
                issMarker.setLatLng([lat, long])
            }
            //update time element
            let date = Date()
            timeElement.innerHTML = date

        })
        .catch( err => {
            console.log(err)
        })
}



