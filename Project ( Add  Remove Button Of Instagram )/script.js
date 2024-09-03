var btn = document.getElementById("btn");
var h2 = document.getElementById("h2head");

var check = 0;

    btn.addEventListener("click",function(){
        if(check == 0){
        btn.innerHTML = "Remove";
        btn.style.backgroundColor = "rgb(66, 179, 255)"
        h2.style.color="rgb(0, 153, 8)"
        h2.innerHTML = "Now, We are friends"
        check = 1;
    }
    else{
        btn.innerHTML = "Follow";
        btn.style.backgroundColor = "rgb(34, 67, 255)"
        h2.style.color="red"
        h2.innerHTML = "Stranger"
        check = 0;
    }
    });
