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

// 알림 목록 만들기
const alarmWindow = document.querySelector("div.section_notice_preview");

const createAlarm = (text, callback1, callback2) => {
    alarmWindow.innerHTML += `<div class="comp_card comp_notice">
                                <a href="" class="link_notice">
                                    <div class="group_source">
                                        <div class="source_box">
                                            <div class="thumb">
                                                <img width="26" height="26" src="../../static/images/main/logo.png">
                                            </div>
                                            <span class="span-title">너도먹고나도먹고</span>
                                        </div>
                                        <div class="info_box">
                                            <span class="info-text">7월 25일</span>
                                        </div>
                                        <div class="alarm-remove">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M5.55566 5.55566L14.4446 14.4446" stroke="#ccc"></path>
                                                <path d="M14.4443 5.55566L5.55545 14.4446" stroke="#ccc"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="group_info">
                                        <strong class="info-title">${text}</strong>
                                        <div class="info_area">
                                            <div class="info_box">
                                                <p class="desc"></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>`;
    if (callback1 && callback2) {
        return callback1(alarmWindow), callback2(alarmWindow);
    }
};

// 알림 삭제 버튼
const removeAlarm = (alarmWindow) => {
    const removeButtons = alarmWindow.querySelectorAll(".alarm-remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const card = button.closest(".comp_card");
            if (card) {
                card.remove();
                alarmNull();
            }
        });
    });
};

// 알림 없을때

const alarmNull = () => {
    const alarms = alarmWindow.querySelectorAll(".comp_card");

    if (!alarms.length) {
        alarmWindow.innerHTML = ` <p class="empty-message">알림이 없습니다.</p>`;
    }
};

createAlarm("배송 알림", removeAlarm, alarmNull);

// 팝업 창
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        const htmlScroll = document.querySelector("html");
        const failMessage = document.querySelector("div.fail-login");

        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
            if ((targetModal.contain = "popup2")) {
                failMessage.innerHTML = `<div class="fail-login-inner">
                                            <p class="fail-login-p">이메일/비밀번호가 일치하지 않습니다.</p>
                                        </div>`;
            }
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const targetModal = btn.closest(".popup-wrapper");
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});

// 구매 로그인 누를때
const buyerButton = document.querySelector(".login-buyer");
const sellerButton = document.querySelector(".login-seller");
const buyerForm = document.querySelector(".buyer-login");
const sellerForm = document.querySelector(".seller-login");

buyerButton.addEventListener("click", () => {
    buyerButton.classList.add("login-choice-active");
    sellerButton.classList.remove("login-choice-active");
    buyerForm.style.display = "block";
    sellerForm.style.display = "none";
});

// 판매 로그인 누를 때

sellerButton.addEventListener("click", () => {
    sellerButton.classList.add("login-choice-active");
    buyerButton.classList.remove("login-choice-active");
    sellerForm.style.display = "block";
    buyerForm.style.display = "none";
});
