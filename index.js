function getTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let timeFormatted = String(hours) + ":" + String(min) + ":" + String(sec);
    return timeFormatted;

}
function timeout(){
    var refresh = 1000;
    mytime = setTimeout('changeTime()', refresh);
}
function changeTime(){
    let timeSend = getTime();
    document.getElementById('time').innerHTML = timeSend;
    timeout();
}

timeout();
