// let lat;
// let long;
let ipInput = document.getElementById('ipInput');
const searchBtn = document.getElementById('search');
let ipAdd = document.getElementById('ipAdd');
let loc = document.getElementById('location');
let timeZone = document.getElementById('timeZone');
let isp = document.getElementById('isp');
var map;

window.addEventListener('load', () => {
    console.log('window loaded');
    buildMap();
})

function buildMap(latitude = 32.69922, longitude = -117.11281) {
    if (map) {
        map.off();
        map.remove();
    }
    map = L.map('map').setView([`${latitude}`, `${longitude}`], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = L.marker([`${latitude}`, `${longitude}`]).addTo(map);
}


searchBtn.addEventListener('click', () => {

    let hello = ipInput.value;
    console.log(typeof hello);

    var api_key = "at_96Q9i3z1FC1BmAhmTGc5xUX6UjcnS";
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v2/country,city?",
            data: { apiKey: api_key, ipAddress: hello },
            success: function (data) {
                console.log(data);
                displayData(data);
            }
        });
    });
    ipInput.value = "";
})


function displayData(data) {
    let lat = data.location.lat;
    let long = data.location.lng;
    ipAdd.textContent = data.ip;

    let postalCode = data.location.postalcode;
    if (postalCode != undefined) {
        loc.innerHTML = data.location.city + "<br>" + data.location.region + "  " + postalCode;
    } else {
        loc.innerHTML = data.location.city + "<br>" + data.location.region;
    }

    timeZone.textContent = data.location.timezone;
    isp.textContent = data.isp;

    console.log(lat);
    console.log(long);
    console.log(ipAdd.textContent);
    console.log(loc.innerHTML);
    console.log(timeZone.textContent);
    console.log(isp.textContent);

    buildMap(lat, long);
} 