const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const time = document.getElementById("time");

setInterval(() => {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    time.innerHTML = new Date().toLocaleTimeString();

    hour.style.transform = `rotate(${hr * 30 + min/2}deg)`;
    minute.style.transform = `rotate(${min * 6 + sec/10 }deg)`;
    second.style.transform = `rotate(${sec * 6}deg)`;
}, 1000);   