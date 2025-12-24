import AutoGraticule from "leaflet-auto-graticule";
import "leaflet.markercluster";

var map = L.map("map", {
  center: [36.067852, 138.121746],
  zoom: 5.5,
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
  [40.503662, 140.945005],
  [40.500806, 140.826866],
  [40.413986, 140.844014],
  [40.417121, 140.9453],
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
    lat: 35.36,
    lng: 138.72,
    name: "Fuji Dağı",
    photoURL: "https://japanupclose.web-japan.org/files/100462016.jpeg",
  },
  1: {
    lat: 35,
    lng: 135.67,
    name: "Araşiyama Bambu Ormanı",
    photoURL:
      "https://photos.smugmug.com/i-hFcX6RC/0/1c58ee68/L/famous-bamboo-grove-arashiyama-L.jpg",
  },
  2: {
    lat: 33.67,
    lng: 135.9,
    name: "Naçi Şelalesi",
    photoURL: "https://visitwakayama.jp/lsc/upfile/spot/0000/0491/491_10_l.jpg",
  },
  3: {
    lat: 32.884907,
    lng: 131.0823595,
    name: "Aso Volkanik Krateri",
    photoURL:
      "https://cdn.kyushuandtokyo.org/front_assets/images_other/spot/small/asokako1.jpg",
  },
  4: {
    lat: 40.499847,
    lng: 140.018719,
    name: "Şirakami Dağı",
    photoURL: "https://japanupclose.web-japan.org/files/100402719.jpeg",
  },
  5: {
    lat: 30.3466454,
    lng: 130.538176,
    name: "Yakuşima Adası",
    photoURL:
      "https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-09/yakushima-guide_10.jpg?itok=Ctf52Ne1",
  },
  6: {
    lat: 36.248751,
    lng: 137.638062,
    name: "Kamikoçi Vadisi",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Kamikochi_and_Mount_Hotaka_1999-05-22.jpg",
  },
  7: {
    lat: 40.467298,
    lng: 140.886608,
    name: "Towada Gölü",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Lake_Towada_from_Ohanabe_2008.jpg/1200px-Lake_Towada_from_Ohanabe_2008.jpg",
  },
};

let yapayLocations = {
  0: {
    lat: 35.6582626,
    lng: 139.74541,
    name: "Tokyo Kulesi",
    photoURL:
      "https://media.istockphoto.com/id/163749022/tr/foto%C4%9Fraf/tokyo-tower.jpg?s=612x612&w=0&k=20&c=7gpR40-yyWNTDZHrAO6wGm-JdeRzu4xw6g6ipGHzuns=",
  },
  1: {
    lat: 35.0395368,
    lng: 135.729609,
    name: "Kinkakuji (Altın Köşk) Tapınağı",
    photoURL:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/72/0f/2c/caption.jpg",
  },
  2: {
    lat: 34.8394685,
    lng: 134.6937911,
    name: "Himeji Kalesi",
    photoURL:
      "https://getjrpass.com/wp-content/uploads/2022/11/Mall-bilder-2022-04-28T160634.759-768x512-1.webp",
  },
  3: {
    lat: 34.9677154,
    lng: 135.779067,
    name: "Fuşimi İnari Tapınağı",
    photoURL:
      "https://media.istockphoto.com/id/1204291956/tr/foto%C4%9Fraf/kyoto-fushimi-inari-taisha-tap%C4%B1na%C4%9F%C4%B1-japonya.jpg?s=612x612&w=0&k=20&c=N09EC4I-fIpuKi9WGI2iBD-0Z5rdlh3C-AMiCiWMNRw=",
  },
  4: {
    lat: 34.6872964,
    lng: 135.5257491,
    name: "Osaka Kalesi",
    photoURL:
      "https://blog.obilet.com/wp-content/uploads/2018/03/osaka-kalesi.jpg",
  },
  5: {
    lat: 34.3954931,
    lng: 132.4534986,
    name: "Hiroşima Barış Anıtı",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Genbaku_Dome04-r.JPG",
  },
  6: {
    lat: 35.658273,
    lng: 139.70501,
    name: "Şibuya Kavşağı",
    photoURL:
      "https://images.pexels.com/photos/30296900/pexels-photo-30296900/free-photo-of-japonya-tokyo-daki-yogun-shibuya-kavsagi.jpeg",
  },
  7: {
    lat: 35.7147305,
    lng: 139.7966309,
    name: "Sensoji Tapınağı",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Cloudy_Sens%C5%8D-ji.jpg",
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
