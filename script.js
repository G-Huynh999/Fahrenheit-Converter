//Eventlistener
document.getElementById("convert").addEventListener("click", convert);
//Function
function convert() {
  let fahrenheit = document.getElementById("Fahrenheit").value;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  celsius = Math.round(celsius);
  document.getElementById("output").innerHTML = celsius;
  document.getElementById("Fahrenheit").value = "";
  document.getElementById("convert").style.backgroundColor = "#26d978";
  document.getElementById("img").src = "thermometer-icon_172976-2548.avif";
}
