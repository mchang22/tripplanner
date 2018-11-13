const mapboxgl = require('mapbox-gl');
const index = require('./index');
const icons = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
}

const buildMarker = function (type, coords) {

    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = `'url(${type})'`;
    new mapboxgl.Marker().serLngLat(`${coords}`).addTo(map);
}

buildMarker(icons.hotel, [-87.6354, 41.8885]);



module.exports = buildMarker; 