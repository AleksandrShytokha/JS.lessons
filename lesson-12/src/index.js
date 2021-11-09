let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [49.9915458, 36.2285552],
    zoom: 15,
});

function runDirection(start, end) {

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [49.9915458, 36.2285552],
        zoom: 15,
    });

    let dir = MQ.routing.directions();

    dir.route({
        locations: [
            start,
            end
        ]
    });


    customRouteLayer = MQ.Routing.RouteLayer.extend({
        createStartMarker: (location) => {
            let custom_icon;
            let marker;

            custom_icon = L.icon({
                iconUrl: 'img/red.png',
                iconSize: [20, 29],
                iconAnchor: [10, 29],
                popupAnchor: [0, -29]
            });

            marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
            marker.bindPopup(`You'r start location.`).openPopup();

            return marker;
        },

        createEndMarker: (location) => {
            let custom_icon;
            let marker;

            custom_icon = L.icon({
                iconUrl: 'img/blue.png',
                iconSize: [20, 29],
                iconAnchor: [10, 29],
                popupAnchor: [0, -29]
            });

            marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
            marker.bindPopup(`You'r end distanation`).openPopup();

            return marker;
        }
    });

    map.addLayer(new customRouteLayer({
        directions: dir,
        fitBounds: true
    }));
}

function submitForm(event) {
    event.preventDefault();

    map.remove();

    start = document.getElementById("start-point").value;
    end = document.getElementById("end-point").value;

    runDirection(start, end);

    document.getElementById("form").reset();
}

const form = document.getElementById('form');

form.addEventListener('submit', submitForm);