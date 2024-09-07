var container = document.querySelector("#container");
var mouse = document.querySelector("#mouse");

container.addEventListener("mousemove" ,function(dets){
    mouse.style.left = dets.x+"px";
    mouse.style.top = dets.y+"px";
    container.addEventListener("mouseleave",function(){
        mouse.style.opacity = "0";
    })
    container.addEventListener("mouseenter",function(){
        mouse.style.opacity = "1";
    })
})