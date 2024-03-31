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


///projects animation

// let options = {
//   root:document.body,
//   rootMargin: "0px",
//   threshold: 1.0,
  
// }

// const animateWhenVisible =(entries,observer)=>{
//   entries.forEach((entry)=>{
//     console.log(entry)
    
//   })

// }


const projects = document.querySelectorAll('.project')


const projContainer = document.getElementById('projects')

const options = {
  root:null,
  threshold:0,
  rootMargin:" 0px 0px 120% 0px"
 

}
const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      projects.forEach((project,idx)=>{
       
        project.style.transform="translateY(0)"
     })
     return
    }
    projects.forEach((project,idx)=>{
      project.style.transform="translateY(100%)"
      if(idx% 2 === 0){
        project.style.transform="translateY(-100%)"
      }
     
   })
   
  })
  
},options)

observer.observe(projContainer)





