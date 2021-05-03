var modal = document.getElementById('myModal');
url = window.location.href;
api = "https://api.pwmqr.com/qrcode/create/?url="+url;
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = api;
}
var span = document.getElementsByClassName("close")[0];
 
span.onclick = function() { 
  modal.style.display = "none";
}