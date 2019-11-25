var modal = document.getElementsByClassName("popUpBk")[0];
var btn = document.getElementById("clickMe");
var span = document.getElementsByClassName("popUp__close")[0];
var cancel = document.getElementsByClassName("button--cancel")[0];
var uninstal = document.getElementsByClassName("button--uninstal")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
cancel.onclick = function() {
  modal.style.display = "none";
}
uninstal.onclick = function() {
  modal.style.display = "none";
  alert("DONE");
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
