var likee = document.getElementById("like-img");
var img = document.getElementById("cuti-img");

img.addEventListener("dblclick",function(){
    likee.style.transform = 'translate(-50%,-50%) scale(1.3)';
    likee.style.opacity = '80%';
    setTimeout(function(){
        likee.style.transform = 'translate(-50%,-50%) scale(0)';
        likee.style.opacity = '0%';
    },2300)
    
})