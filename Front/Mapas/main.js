const map = L.map('map').setView([-22.95, -43.21], 16);

const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
});

layer.addTo(map);