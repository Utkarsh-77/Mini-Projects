var array = [
    {
        dp:"Ms dhoni.jpeg",story:"https://statico.sportskeeda.com/editor/2024/03/eca57-17096159475997-1920.jpg?w=640",
    },
    {
        dp:"New Hairstyle.jpeg",story:"https://i.pinimg.com/564x/78/23/21/7823211d2e22d9b905fd7c024d71f2df.jpg",
    },
    {
        dp:"cute girl.jpg",story:"https://i.pinimg.com/236x/d4/20/cb/d420cbc8ce07cca0c3fc279ef06257b0.jpg",
    },
    {
        dp:"sai pallvi.png",story:"https://i.pinimg.com/564x/e8/27/da/e827da93fd5a8f43684d847b934cf63b.jpg",
    },
    {
        dp:"beautiful teenage actress in india.jpeg",story:"https://i.pinimg.com/564x/1f/b3/64/1fb364c7f858feb3789a6e2cba36df6d.jpg",
    },
];
 var cult = ""
 var storya = document.querySelector("#box-top");

array.forEach(function(elem,idx){
       cult += `<div id="img-box">
        <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;
});

document.querySelector("#box-top").innerHTML = cult;

storya.innerHTML = cult;

storya.addEventListener("click",function(dets){
        document.querySelector("#full-screen").style.display = "block";
        document.querySelector("#full-screen").style.backgroundImage = `url(${array[dets.target.id].story})`
        setTimeout(function(){
            document.querySelector("#full-screen").style.display = "none";
        },3000)

    });