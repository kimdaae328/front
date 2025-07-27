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

// 이메일 선택

const mails = document.querySelectorAll(".dropdown__item");
let mailValue = document.querySelector(".btn-text");

mails.forEach((mail) => {
    mail.addEventListener("click", (e) => {
        const selectedText = e.target.innerText;

        if (selectedText === "직접 입력") {
            mailValue.outerHTML = `<input type="text" class="self" placeholder="직접 입력">`;

            mailValue = document.querySelector(".self");
            mailValue.focus();
        } else {
            if (mailValue.tagName === "BUTTON") {
                mailValue.innerText = selectedText;
                mailValue.style.color = "black";
            }
            if (mailValue.tagName === "INPUT") {
                mailValue.value = selectedText;
            }
        }
    });
});

// 이메일 선택 박스

const chooseButton = document.querySelector(".emailchoose");
const mailForm = document.querySelector(".e-mail-form-wrap");

// 열기
chooseButton.addEventListener("click", (e) => {
    mailForm.style.display = "block";
});

// 각 항목 누르면 닫기
mails.forEach((mail) => {
    mail.addEventListener("click", (e) => {
        mailForm.style.display = "none";
    });
});

// 이메일 형식 오류 메세지
const mailError = document.querySelector(".mail-error");

const printMailError = () => {
    mailError.innerHTML = `<p class="error-message">이메일을 입력해주세요.</p>`;
};

// 비밀번호 형식 오류 메세지
const passwordError = document.querySelector(".password-error");

const printPasswordError = () => {
    passwordError.innerHTML = `<p class="error-message">영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>`;
};

// 비밀번호 최소 형식 오류 메세지

const printPasswordMinError = () => {
    passwordError.innerHTML = `<p class="error-message">최소 10자이상 입력</p>`;
};

// 비밀번호 확인 오류 메세지
const passwordCheckError = document.querySelector(".password-error");

const printPasswordCheckError = () => {
    passwordCheckError.innerHTML = `<p class="error-message">동일한 비밀번호를 입력</p>`;
};

// 이름 오류 메세지
const nameError = document.querySelector(".name-error");

const printNameError = () => {
    nameError.innerHTML = `<p class="error-message">이름을 입력해 주세요.</p>`;
};

// 생년월일 오류메세지

// 미래일 때
const brithError = document.querySelector(".brith-error");

const printBrithFutureError = () => {
    brithError.innerHTML = `<p class="error-message">생년월일이 미래로 입력 되었습니다.</p>`;
};

// 형식에 맞지 않을 때
const printBrithRecheckError = () => {
    brithError.innerHTML = `<p class="error-message"생년월일을 다시 확인해주세요.</p>`;
};

// 년도 오류일 때
const printBrithYearError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 년도 4자리를 정확하게 입력해주세요.</p>`;
};

// 월 오류일 때
const printBrithMonthError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 월을 정확하게 입력해주세요.</p>`;
};

// 일 오류일 때
const printBrithDayError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 일을 정확하게 입력해주세요.</p>`;
};

// 동의 체크박스
NodeList.prototype.filter = Array.prototype.filter;
const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
const boxs = document.querySelectorAll(".box1");
const allBox = document.querySelector(".all-box");

// 전체동의 버튼 누를 때
all.addEventListener("change", (e) => {
    terms.forEach((term) => {
        term.checked = e.target.checked;
        if (e.target.checked) {
            boxs.forEach((box) => {
                box.classList.add("checked");
            });
        }
        if (!e.target.checked) {
            boxs.forEach((box) => {
                box.classList.remove("checked");
            });
        }
    });
});

// 버튼 다 선택했을때
terms.forEach((term) => {
    let countTerm = 0;
    term.addEventListener("change", (e) => {
        all.checked = countTerm = terms.filter((term) => term.checked).length;
        countTerm === terms.length;
        if (countTerm === terms.length) {
            allBox.classList.add("checked");
        } else if (countTerm < terms.length) {
            allBox.classList.remove("checked");
        }
    });
});

// 동의 체크하면 색 바뀜
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const donguibox = checkbox
            .closest(".all-donguilabel")
            .querySelector(".donguibox");

        if (checkbox.checked) {
            donguibox.classList.add("checked");
        } else {
            donguibox.classList.remove("checked");
        }
    });
});
