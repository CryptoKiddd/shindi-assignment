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







const activeIndicator = document.querySelector('.nav-underline')
const links = document.querySelectorAll('.nav-link')

function indicateActivePage(e){
    activeIndicator.style.left = e.offsetLeft + 'px'
    activeIndicator.style.width = e.offsetWidth +'px'
}

links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        indicateActivePage(e.target)
      })
   
  
   
})




const slider = document.querySelector('.slider');


function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


const menuBtn = document.querySelector(".menu-button")
const navigation = document.querySelector(".nav-container")
const menuline1=document.querySelector(".menu-line1")
const menuline2=document.querySelector(".menu-line2")
const menuline3=document.querySelector(".menu-line3")

menuBtn.addEventListener("click",()=>{
  navigation.classList.toggle('toggle-menu');
  menuBtn.classList.toggle('toggle-menubtn')
  
  menuline1.classList.toggle('rotate-menuline1')
  menuline2.classList.toggle('rotate-menuline2')
  menuline3.classList.toggle('rotate-menuline3')
})
