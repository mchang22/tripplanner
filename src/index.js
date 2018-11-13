const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoibWNoYW5nMjIiLCJhIjoiY2pvZzd2ZzZsMGNlMTNwcWg5ZWVrM3RhZSJ9.oXOJfY0RxiBKibUMueK4gw';
const buildMarker = require('./marker');

const map = new mapboxgl.Map({
    container: 'map',
    center: [-87.6354, 41.8885],
    zoom:12,
    style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = buildMarker('activity', [-87.6354, 41.8885]);
marker.addTo(map);

new mapboxgl.Marker().serLngLat([-87.641, 41.895]).addTo(map);