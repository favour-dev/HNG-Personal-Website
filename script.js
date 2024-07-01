function updateTime() {
const showTime = document.getElementById('time');
const showDay = document.getElementById('day');
const now = new Date();
const utcTime = now.toUTCString();
const day = now.toLocaleString();

showTime.textContent = utcTime;
showDay.textContent = day;
}
setInterval(updateTime, 1000);
updateTime();
