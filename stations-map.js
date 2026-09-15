/* ==========================================================
   PETROGEN — All Stations live map
   Reads the PETROGEN_STATIONS array from data-stations.js and
   plots every station on a Leaflet map, grouped into clusters
   so 471 pins stay smooth and readable at every zoom level.
   ========================================================== */

// 1. Create the map, centered on Saudi Arabia
var map = L.map("stationsMap").setView([23.8859, 45.0792], 6);

// Satellite imagery + a labels/roads overlay on top — a "hybrid"
// look like Google Maps' satellite view. Both layers are Esri's
// free ArcGIS tile services, no API key or account needed.
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  attribution: "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
  maxZoom: 19
}).addTo(map);

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
  attribution: "Labels &copy; Esri",
  maxZoom: 19
}).addTo(map);

// 2. Build one branded pin icon (crimson teardrop + Petrogen logo).
// Every marker reuses the same divIcon — cheap and consistent.
var petrogenIcon = L.divIcon({
  className: "",
  html:
    '<div class="petrogen-pin">' +
    '<div class="pin-drop"></div>' +
    '<div class="pin-logo"><img src="images/petrogen_logo.png" alt=""></div>' +
    "</div>",
  iconSize: [34, 34],
  iconAnchor: [17, 32],
  popupAnchor: [0, -30]
});

// 3. A cluster group with a custom bubble style matching the brand
var clusterGroup = L.markerClusterGroup({
  maxClusterRadius: 50,
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<div class="petrogen-cluster">' + cluster.getChildCount() + "</div>",
      className: "",
      iconSize: [44, 44]
    });
  }
});

// 4. One marker per station, with a popup built fresh each time it
// opens so it always shows the language currently active on the page.
var allMarkers = [];

PETROGEN_STATIONS.forEach(function (station) {
  var marker = L.marker([station.lat, station.lng], { icon: petrogenIcon });

  marker.bindPopup(function () {
    var arabic = document.documentElement.getAttribute("dir") === "rtl";
    var name = arabic ? station.name_ar : station.name_en;
    var city = arabic ? station.city_ar : station.city_en;
    var district = arabic ? station.district_ar : station.district_en;
    var type = arabic ? station.type_ar : station.type_en;

    var mapsUrl =
      "https://www.google.com/maps/search/?api=1&query=" + station.lat + "," + station.lng;
    var directionsLabel = arabic ? "فتح في خرائط جوجل" : "View on Google Maps";

    return (
      '<div class="station-popup">' +
      '<span class="station-city">' + city + "</span>" +
      "<h4>" + name + "</h4>" +
      "<p>" + district + "</p>" +
      "<p>" + station.region + " &middot; " + station.code + "</p>" +
      '<span class="station-type">' + type + "</span>" +
      '<a class="station-directions" href="' + mapsUrl + '" target="_blank" rel="noopener">' +
      directionsLabel +
      ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
      "</a>" +
      "</div>"
    );
  });

  marker.stationData = station;
  allMarkers.push(marker);
  clusterGroup.addLayer(marker);
});

map.addLayer(clusterGroup);

// 5. Region filter dropdown — filled from the unique regions in the data
var regionSelect = document.getElementById("regionFilter");
var regions = [];

PETROGEN_STATIONS.forEach(function (station) {
  if (regions.indexOf(station.region) === -1) {
    regions.push(station.region);
  }
});
regions.sort();

regions.forEach(function (region) {
  var option = document.createElement("option");
  option.value = region;
  option.textContent = region;
  regionSelect.appendChild(option);
});

// 6. Search + region filter, working together
var searchInput = document.getElementById("stationSearch");
var countLabel = document.getElementById("stationCount");

function applyFilters() {
  var query = searchInput.value.trim().toLowerCase();
  var region = regionSelect.value;

  clusterGroup.clearLayers();
  var visibleCount = 0;

  allMarkers.forEach(function (marker) {
    var s = marker.stationData;
    var matchesRegion = !region || s.region === region;
    var matchesQuery =
      !query ||
      s.name_en.toLowerCase().indexOf(query) !== -1 ||
      s.city_en.toLowerCase().indexOf(query) !== -1 ||
      s.name_ar.indexOf(query) !== -1 ||
      s.city_ar.indexOf(query) !== -1;

    if (matchesRegion && matchesQuery) {
      clusterGroup.addLayer(marker);
      visibleCount++;
    }
  });

  countLabel.textContent = visibleCount + " / " + allMarkers.length;
}

searchInput.addEventListener("input", applyFilters);
regionSelect.addEventListener("change", applyFilters);

// initial count
countLabel.textContent = allMarkers.length + " / " + allMarkers.length;
