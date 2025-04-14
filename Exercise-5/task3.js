function text3() {
  flag=true;
  document.getElementById("oops").textContent = "Oops!";
  intervalofdiv=setInterval(colorChangeDiv4, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  alert("welcome");
  intervalofdiv=setInterval(colorChange, 3000);
});

let color = 0;
let color2 = 0;
let flag=false;
const colorArr = ["red", "blue", "yellow", "lime", "gray"];
function colorChange() {
  document.getElementById("div2").style.backgroundColor = colorArr[color];
  color++;
  if (color == 3) color = 0;
}
function colorChangeDiv4() {

  document.getElementById("div4").style.backgroundColor = colorArr[color2];
  color2++;
  if (color2 == 5) color2 = 0;
}
let intervalofdiv;
document.addEventListener("keydown", function (event) {
    if(flag===true){
  if (event.key === "ArrowUp" || event.key==="ArrowRight") {
    document.getElementById("div4").style.backgroundColor = colorArr[color2];
    color2++;
    if (color2 == 5) {
      color2 = 0;
    }
    clearInterval(intervalofdiv);
    intervalofdiv=setInterval(colorChangeDiv4, 5000);
  } else if (event.key === "ArrowDown" || event.key==="ArrowLeft") {
    document.getElementById("div4").style.backgroundColor = colorArr[color2];
    color2--;
    if (color2 < 0) {
      color2 = 5;
    }
    clearInterval(intervalofdiv);
    intervalofdiv=setInterval(colorChangeDiv4, 5000);
  }}
});
