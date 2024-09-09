const moon = document.querySelector("#img1");
const sun = document.querySelector("#img2");
const container = document.querySelector("#container");

moon.addEventListener("click", (e) => {
  container.style.backgroundColor = "black";
  container.style.color = "white";
  moon.style.display = "none";
  sun.style.display = "block";
});

sun.addEventListener("click", (e) => {
  container.style.backgroundColor = "white";
  container.style.color = "black";
  moon.style.display = "block";
  sun.style.display = "none";
});
