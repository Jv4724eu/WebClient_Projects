let canvas = document.getElementById('bridge-chart');
let ctx = canvas.getContext('2d');

//array of bridge objects
let bridges = [
    {name:'Verrazano-Narrows Bridge', city_state:'New York, NY', meters:'1298.4', location:'[40.6066, -74.0447]' },
    {name:'Golden Gate Bridge', city_state:'San Francisco and Marin, CA', meters:'1280.2', location:'[37.8199, -122.4783]' },
    {name:'Mackinac Bridge', city_state:'Mackinaw and St Ignace, MI', meters:'1158.0', location:'[45.8174, -84.7278]' },
    {name:'George Washington Bridge', city_state:'New York, NY and New Jersey, NJ', meters:'1067.0', location:'[40.8517, -73.9527]' },
    {name:'Tacoma Narrows Bridge', city_state:'Tacoma and Kitsap, WA', meters:'853.44', location:'[47.2690, -122.5517]' }
];

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge','George Washington Bridge','Tacoma Narrows Bridge'],
        datasets: [{
            label: 'Span of Bridge',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'orange']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

