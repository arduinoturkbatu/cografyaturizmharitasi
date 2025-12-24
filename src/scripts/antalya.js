import AutoGraticule from "leaflet-auto-graticule";
import "leaflet.markercluster";

var map = L.map("map", {
  center: [36.7, 31],
  zoom: 8.5,
});

L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 19,
    attribution: "Arcgis Online",
  },
).addTo(map);

L.control.scale().addTo(map);

new AutoGraticule().addTo(map);

var popup = L.popup();

function onMapClick(e) {
  popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
}

map.on("click", onMapClick);

// --- marker clusters ---
var dogalMarkers = L.markerClusterGroup({
  spiderfyOnMaxZoom: false,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: false,
  removeOutsideVisibleBounds: false,
  disableClusteringAtZoom: true,
});
var yapayMarkers = L.markerClusterGroup({
  spiderfyOnMaxZoom: false,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: false,
  removeOutsideVisibleBounds: false,
  disableClusteringAtZoom: true,
});

// --- polygons ---
var polygon = L.polygon([
  [37.096677, 31.097278],
  [37.096814, 31.086331],
  [37.087634, 31.08719],
  [37.08712, 31.096076],
]).addTo(map);

var polygon2 = L.polygon(
  [
    [36.885631, 30.699941],
    [36.879293, 30.703998],
    [36.882812, 30.70917],
    [36.885173, 30.708548],
    [36.887019, 30.707539],
  ],
  { color: "green" },
).addTo(map);

var polyline = L.polyline(
  [
    [36.842896, 30.615311],
    [36.86685, 30.647694],
    [36.883609, 30.677265],
  ],
  { color: "red" },
).addTo(map);

var polyline2 = L.polyline(
  [
    [36.600642, 30.570319],
    [36.612771, 30.559417],
    [36.628545, 30.557182],
    [36.638954, 30.558549],
  ],
  { color: "red" },
).addTo(map);

var polyline3 = L.polyline(
  [
    [36.540895, 30.48688],
    [36.536657, 30.442337],
  ],
  { color: "black" },
).addTo(map);

// --- icons ---
const redDivIcon = L.divIcon({
  className: "",
  html: '<div style="background:#e53935;width:18px;height:18px;display:block;border-radius:50%;border:2px solid #fff;box-shadow:0 0 2px rgba(0,0,0,0.4)"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});
const blueDivIcon = L.divIcon({
  className: "",
  html: '<div style="background:#0055ff;width:18px;height:18px;display:block;border-radius:50%;border:2px solid #fff;box-shadow:0 0 2px rgba(0,0,0,0.4)"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// --- data ---
let dogalLocations = {
  0: {
    lat: 36.8129911,
    lng: 31.454824,
    name: "Manavgat Şelalesi",
    photoURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/20/55/fb/photo0jpg.jpg?w=900&h=500&s=1",
  },
  1: {
    lat: 36.85105,
    lng: 30.783321,
    name: "Aşağı Düden Şelalesi",
    photoURL: "https://www.kulturportali.gov.tr/contents/images/logolu(3).jpg",
  },
  2: {
    lat: 36.541791,
    lng: 31.988766,
    name: "Damlataş Mağarası",
    photoURL: "https://www.kulturportali.gov.tr/contents/images/l.jpg",
  },
  3: {
    lat: 36.9434357,
    lng: 30.5512188,
    name: "Güver Uçurumu",
    photoURL: "https://thisisantalya.com/wp-content/uploads/IMG_1817.jpg",
  },
  4: {
    lat: 36.162484,
    lng: 29.818241,
    name: "Kekova Adası",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Kekova_island_and_Kalekoey_village.jpg",
  },
  5: {
    lat: 37.262019,
    lng: 31.147768,
    name: "Köprülü Kanyon",
    photoURL:
      "https://www.side-tours.com/public/content/images/Blogs/big/K%C3%B6pr%C3%BCl%C3%BC-Kanyon-nerede_1608755915.jpeg",
  },
  6: {
    lat: 37.0777778,
    lng: 30.568253,
    name: "Karain Mağarası",
    photoURL:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2018/07/22/thumbs_b_c_cd2f7077a79b2c3f0b4c3ac7a930f462.jpg",
  },
  7: {
    lat: 37.090753,
    lng: 31.092299,
    name: "Akbaş Göleti",
    photoURL:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2330000/akbas-goleti-trt-2330485.jpg",
  },
};

let yapayLocations = {
  0: {
    lat: 36.9389411,
    lng: 31.172157,
    name: "Aspendos Antik Tiyatrosu",
    photoURL:
      "https://imagedelivery.net/Yw_SVblNotg-H4OIK8cT8g/0860f601-5def-46c8-2dd5-02185b216d00/sliderlg",
  },
  1: {
    lat: 36.7680172,
    lng: 31.3881453,
    name: "Side Antik Kenti",
    photoURL:
      "https://www.kulturportali.gov.tr/contents/images/ANTALYA--S%C4%B0DE-%20SERVET%20UYGUN%2020190513_2%20(4).jpg",
  },
  2: {
    lat: 36.866445,
    lng: 30.646295,
    name: "Konyaaltı Plajı",
    photoURL:
      "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/konyaalti-49826.webp",
  },
  3: {
    lat: 36.8863167,
    lng: 30.7034712,
    name: "Kaleiçi",
    photoURL:
      "https://www.regnumhotels.com/media/giziobx4/kalei%C3%A7i-slider-2.png",
  },
  4: {
    lat: 36.885272,
    lng: 30.708864,
    name: "Hadrian (Üçkapılar)",
    photoURL:
      "https://www.antalya.gov.tr/kurumlar/antalya.gov.tr/Site/sehir_kartlari/kaleici/05_kaleici.png",
  },
  5: {
    lat: 36.225841,
    lng: 29.955534,
    name: "Likya Uygarlıkları Müzesi",
    photoURL:
      "https://antalya.ktb.gov.tr/Resim/376381,likya-uygarliklari-muzesi5jpg.png?0",
  },
  6: {
    lat: 36.611773,
    lng: 30.560188,
    name: "Kemer Plajı",
    photoURL:
      "https://cdn.hellovillam.com/HelloVillam/Images/2022-07/kemer-plajlari_UFOZL4PCDHGI3RXR8MI5SJCD0PX6I8.jpg",
  },
  7: {
    lat: 36.5410001,
    lng: 30.4847585,
    name: "Olympos Teleferik",
    photoURL: "https://cdn.getyourguide.com/img/tour/5aab9d348697e.jpeg/99.jpg",
  },
};

// map of normalized name -> marker instance for quick lookup
const nameToMarker = new Map();

// --- helper to normalize labels ---
function normalizeLabel(s) {
  if (!s) return "";
  return s
    .toString()
    .replace(/\s+/g, " ")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase();
}

// --- populate functions (store markers in nameToMarker) ---
function addDogalMarkers() {
  dogalMarkers.clearLayers();
  Object.values(dogalLocations).forEach((loc) => {
    const marker = L.marker([loc.lat, loc.lng], {
      icon: blueDivIcon,
      title: loc.name,
    }).bindPopup(
      `<h6>${loc.name}</h6><img src='${loc.photoURL}' width="250" />`,
    );
    dogalMarkers.addLayer(marker);
    nameToMarker.set(normalizeLabel(loc.name), marker);
  });
}

function addYapayMarkers() {
  yapayMarkers.clearLayers();
  Object.values(yapayLocations).forEach((loc) => {
    const marker = L.marker([loc.lat, loc.lng], {
      icon: redDivIcon,
      title: loc.name,
    }).bindPopup(
      `<h6>${loc.name}</h6><img src='${loc.photoURL}' width="250" />`,
    );
    yapayMarkers.addLayer(marker);
    nameToMarker.set(normalizeLabel(loc.name), marker);
  });
}

// --- initial populate & add to map ---
addDogalMarkers();
addYapayMarkers();

let dogalState = true;
let beseriState = true;

if (dogalState) dogalMarkers.addTo(map);
if (beseriState) yapayMarkers.addTo(map);

// --- utility to ensure a marker is visible and open its popup ---
// uses markerClusterGroup.zoomToShowLayer so clustered markers expand as needed
function showMarkerAndPopup(marker, options = { zoom: 14, flyDuration: 0.6 }) {
  if (!marker) return;
  // determine which cluster group contains the marker
  const inDogal = dogalMarkers.hasLayer(marker);
  const inYapay = yapayMarkers.hasLayer(marker);

  // ensure clusters are on the map
  if (inDogal && !map.hasLayer(dogalMarkers)) map.addLayer(dogalMarkers);
  if (inYapay && !map.hasLayer(yapayMarkers)) map.addLayer(yapayMarkers);

  const callback = function () {
    try {
      // first center/zoom to marker for a nicer UX, then open popup
      map.flyTo(marker.getLatLng(), options.zoom, {
        duration: options.flyDuration,
      });
      // open the popup after a short delay to let the map move
      setTimeout(
        () => {
          marker.openPopup();
        },
        Math.max(200, options.flyDuration * 300),
      );
    } catch (e) {
      // fallback: open popup directly
      marker.openPopup();
    }
  };

  // prefer using the cluster group's helper so the marker is made visible
  if (inDogal) {
    dogalMarkers.zoomToShowLayer(marker, callback);
  } else if (inYapay) {
    yapayMarkers.zoomToShowLayer(marker, callback);
  } else {
    // marker not in either group (maybe cleared) -- simply set view and open popup
    map.flyTo(marker.getLatLng(), options.zoom, {
      duration: options.flyDuration,
    });
    setTimeout(() => marker.openPopup(), 300);
  }
}

// --- click-to-zoom handlers for legend items ---
function findMarkerByLabelText(labelText) {
  const key = normalizeLabel(labelText);
  if (nameToMarker.has(key)) return nameToMarker.get(key);

  // fallback: try to find by partial match
  for (const [nameKey, marker] of nameToMarker.entries()) {
    if (nameKey === key) return marker;
    if (nameKey.includes(key) || key.includes(nameKey)) return marker;
  }
  return null;
}

function getVisibleLabelFromLi(li) {
  // prefer the first text node to avoid child span text (like icons)
  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = node.nodeValue.trim();
      if (t) return t;
    }
  }
  // fallback to textContent
  return li.textContent.trim();
}

function attachListClickHandlers() {
  const items = document.querySelectorAll(
    "#dogalSections li, #beseriSections li",
  );
  items.forEach((li) => {
    // ensure pointer cursor for clarity
    li.style.cursor = "pointer";
    li.addEventListener("click", (e) => {
      // read label without markup
      const label = getVisibleLabelFromLi(li);
      const marker = findMarkerByLabelText(label);
      if (marker) {
        showMarkerAndPopup(marker, { zoom: 14, flyDuration: 0.7 });
      } else {
        console.warn("No marker found for legend label:", label);
      }
    });
  });
}

// Attach handlers when DOM is ready. In Astro the script is imported after DOM in many cases,
// but guard here in case.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", attachListClickHandlers);
} else {
  attachListClickHandlers();
}

// --- checkbox toggles (keep existing behavior) ---
var dogalCheckbox = document.querySelector("input#dogal");
if (dogalCheckbox) {
  dogalCheckbox.checked = dogalState;
  dogalCheckbox.addEventListener("change", () => {
    dogalState = dogalCheckbox.checked;
    if (dogalState) {
      if (dogalMarkers.getLayers().length === 0) addDogalMarkers();
      if (!map.hasLayer(dogalMarkers)) dogalMarkers.addTo(map);
    } else {
      if (map.hasLayer(dogalMarkers)) map.removeLayer(dogalMarkers);
    }
  });
}

var beseriCheckbox = document.querySelector("input#beseri");
if (beseriCheckbox) {
  beseriCheckbox.checked = beseriState;
  beseriCheckbox.addEventListener("change", () => {
    beseriState = beseriCheckbox.checked;
    if (beseriState) {
      if (yapayMarkers.getLayers().length === 0) addYapayMarkers();
      if (!map.hasLayer(yapayMarkers)) yapayMarkers.addTo(map);
    } else {
      if (map.hasLayer(yapayMarkers)) map.removeLayer(yapayMarkers);
    }
  });
}

// --- utility to clear markers (keeps nameToMarker as-is; you can also clear that if desired) ---
function clearAllMarkers() {
  if (map.hasLayer(dogalMarkers)) map.removeLayer(dogalMarkers);
  if (map.hasLayer(yapayMarkers)) map.removeLayer(yapayMarkers);
  dogalMarkers.clearLayers();
  yapayMarkers.clearLayers();
}

// export helpers for debugging / other scripts
window._antalyaMapHelpers = {
  clearAllMarkers,
  addDogalMarkers,
  addYapayMarkers,
  dogalMarkers,
  yapayMarkers,
  dogalLocations,
  yapayLocations,
  redDivIcon,
  blueDivIcon,
  findMarkerByLabelText,
  showMarkerAndPopup,
};
