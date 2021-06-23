var d = document.querySelectorAll(".sample");
var interval = null;

function startFlashing (func, time) {
    interval = setInterval(func, time, { once: true });
}

function myTimer () {
    for (let i = 0; i < d.length; i++) {
        let x = Math.random();
        d[i]["style"].opacity = x;
    }
}

function stopFlashing () {
    clearInterval(interval);
    for (let i = 0; i < d.length; i++) {
        d[i]["style"].opacity = "1";
    }
}

