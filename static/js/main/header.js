// 알림 버튼

const icon = document.querySelector("div.alarm-icon");
const alarmTap = document.querySelector(".alarm-icon-wrap");

icon.addEventListener("click", (e) => {
    if (alarmTap.classList.contains("showIcon")) {
        alarmTap.classList.remove("showIcon");
    } else {
        alarmTap.classList.add("showIcon");
    }
});
