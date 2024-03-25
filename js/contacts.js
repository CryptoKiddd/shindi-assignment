let map2;


function initMap2() {
  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat:41.6479575859589,  lng:41.62400523224419,},
    zoom: 17,
  });
 

  new google.maps.Marker({
    position:{ lat:41.64865101754841,    lng: 41.62502376090812 },
    map:map2,
  
    icon:"../logonotext.png"

  })
}

window.initMap2 = initMap2;