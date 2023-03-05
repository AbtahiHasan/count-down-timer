const endDate = "31 december 2023 12:00 PM";
document.getElementById("main-date").innerText = `(${endDate})`;
const showTime = document.querySelectorAll(".show-counter");

const timerRuner = () => {
    const end = new Date(endDate);
    const realTimeDate = new Date();
    const totalSecound = (end - realTimeDate) / 1000;
    if(end < realTimeDate) {
        return
    }
    showTime[0].innerText = Math.floor(totalSecound / 3600 / 24) ;
    showTime[1].innerText = Math.floor((totalSecound / 60) % 24) ;
    showTime[2].innerText = Math.floor((totalSecound / 60) % 60);
    showTime[3].innerText = Math.floor(totalSecound % 60) ;
}
setInterval(() => {
    timerRuner()
}, 1000)