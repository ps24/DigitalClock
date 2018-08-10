const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// wrap script in a function so clock updates regularly
function runTheClock(){
    // use javaScript to tell current time
    // create a date object
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    // set degrees we want to turn the arms
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// use "setInterval" command to run the clock every second.
// 1000 is used b/c setInterval has a default of millisecond.
// 1000 reduces the calls to every second (vs. every millisecond) 
var interval = setInterval(runTheClock, 1000);
