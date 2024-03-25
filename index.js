let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:41.64847996800162, lng: 41.64134453062122},
    zoom: 17,
  });
 

  new google.maps.Marker({
    position:{ lat: 41.6475, lng: 41.6453},
    map:map,
  
    icon:"logonotext.png"

  })
}

window.initMap = initMap;