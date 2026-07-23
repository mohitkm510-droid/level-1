function showtime(){

let d = new Date();

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

 if(h < 10){
        h = "0" + h;
    }

    if(m < 10){
        m = "0" + m;
    }

    if(s < 10){
        s = "0" + s;
    }




document.getElementById("time").innerText = h +":"+ m + ":"+ s ;

}
  
showtime();
setInterval(showtime,1000)



let hr = 0;
let min = 0;
let sec = 0;

let timer = null;

function updateStopwatch() {

    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hr++;
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    document.getElementById("stopwatch").innerText = h + ":" + m + ":" + s;
}

function start() {
    if (timer !== null) return;
    timer = setInterval(updateStopwatch, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;

    hr = 0;
    min = 0;
    sec = 0;

    document.getElementById("stopwatch").innerText = "00:00:00";
}
