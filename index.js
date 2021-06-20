let dateTime = new Date();
let hours = dateTime.getHours();
let min = dateTime.getMinutes();
let sec = dateTime.getSeconds();
let timeFormatted = String(hours) + ":" + String(min) + ":" + String(sec);
let timeShow = document.getElementById('time')
timeShow.innerHTML = timeFormatted;
setTimeout(function(){
    window.location.reload(1);
 }, 1000);