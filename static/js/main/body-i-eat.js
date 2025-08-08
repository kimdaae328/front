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
                                                <img width="26" height="26" src="/images/main/logo.png">
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

// 배너

// 배너 무한 슬라이드

const banner = document.querySelector("div.swiper-wrapper");
const arrows = document.querySelectorAll("button.banner-LR");

const allPageSize = document.querySelector("span.all-page-color");
const nowPage = document.querySelector("span.now-page");

const slides = document.querySelectorAll(".swiper-slide");
const totalSlides = slides.length;

allPageSize.textContent = `${totalSlides}`;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

banner.appendChild(firstClone);
banner.prepend(lastClone);

let count = 1;
const slideWidth = 1900;
let pageNumber = 1;

banner.style.transform = `translate(-${slideWidth * count}px)`;
const autoSlide = () => {
    count++;
    pageNumber++;
    banner.style.transform = `translate(-${slideWidth * count}px)`;
    banner.style.transition = `transform 0.5s`;
    if (count === totalSlides + 1) {
        setTimeout(() => {
            count = 1;
            pageNumber = 1;
            banner.style.transition = `transform 0s`;
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            nowPage.textContent = `${pageNumber}`;
        }, 500);
    } else {
        nowPage.textContent = `${pageNumber}`;
    }
};

let autoSlideInterval = setInterval(autoSlide, 3000);
let arrowCheck = true;

// 배너 화살표 클릭시 다음 페이지

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) {
            return;
        }
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        if (arrow.classList.contains("main-banner-button-left")) {
            count--;
            pageNumber--;
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0.5s`;
            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translate(-${
                        slideWidth * count
                    }px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = totalSlides;
                pageNumber = 4;
            }
            nowPage.textContent = `${pageNumber}`;
        } else {
            count++;
            pageNumber++;
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0.5s`;

            if (count === totalSlides + 1) {
                setTimeout(() => {
                    banner.style.transform = `translate(-${
                        slideWidth * count
                    }px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 1;
                pageNumber = 1;
            }
            nowPage.textContent = `${pageNumber}`;
        }

        autoSlideInterval = setInterval(autoSlide, 3000);

        setTimeout(() => {
            arrowCheck = true;
        }, 500);
    });
});

// 배너 멈춤 시작 버튼

const button = document.querySelector(".start-stop");
button.classList.add("stop-mode");

button.addEventListener("click", () => {
    button.classList.toggle("start-mode");
    button.classList.toggle("stop-mode");

    if (button.classList.contains("start-mode")) {
        clearInterval(autoSlideInterval);
    } else {
        autoSlideInterval = setInterval(autoSlide, 3000);
    }
});

// 지금 가장 많이 담는 특가

const productList = document.querySelectorAll("div.product-card");
const listCount = Math.ceil(productList.length / 4);
const backButton = document.querySelector("button.product-list-button-left");
const nextButton = document.querySelector("button.product-list-button-right");
const showProduct = document.querySelector(".product-wrap");

let productCount = 0;
const productSlideWidth = 1068;

// 다음 슬라이드로 이동
nextButton.addEventListener("click", (e) => {
    if (productCount < listCount - 1) {
        productCount++;
        showProduct.style.transform = `translate(-${
            productSlideWidth * productCount
        }px)`;
        showProduct.style.transition = `transform 0.5s`;

        backButton.style.display = productCount > 0 ? "block" : "none";
        nextButton.style.display =
            productCount >= listCount - 1 ? "none" : "block";
    }

    if (productCount === listCount - 1) {
        const move =
            productSlideWidth * productCount - (productSlideWidth - 265);
        showProduct.style.transform = `translate(-${move}px)`;
    }
});

// 이전 슬라이드로 이동
backButton.addEventListener("click", (e) => {
    if (productCount > 0) {
        productCount--;
        showProduct.style.transform = `translate(-${
            productSlideWidth * productCount
        }px)`;
        showProduct.style.transition = `transform 0.5s`;
    }
    if (productCount <= 0) {
        backButton.style.display = "none";
    }
    if (productCount < listCount - 1) {
        nextButton.style.display = "block";
    }
});

// 일일특가 시간

const timeShow = document.querySelector(".show-timer");

const restTime = (datetime) => {
    const date = new Date(datetime);

    const update = () => {
        const now = new Date();
        let gap = Math.floor((date.getTime() - now.getTime()) / 1000);

        if (gap <= 0) {
            timeShow.innerHTML = "다음에 또 만나요🥲";
            clearInterval(timer);
            return;
        }

        const hours = String(Math.floor(gap / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((gap % 3600) / 60)).padStart(2, "0");
        const seconds = String(gap % 60).padStart(2, "0");

        timeShow.innerHTML = `<span>${hours}</span><span>${minutes}</span><span>${seconds}</span>`;
    };

    update();
    const timer = setInterval(update, 1000);
};

restTime("2026-07-28T00:00:00");

// restTime("2025-07-18");

// 실시간 인기랭킹

const rankingList = document.querySelectorAll("div.ranking-swiper-slide");
const rankingCount = Math.ceil(rankingList.length / 5);
const rankingBackButton = document.querySelector("button.ranking-button-left");
const rankingNextButton = document.querySelector("button.ranking-button-right");
const rankingShowProduct = document.querySelector(".ranking-swiper-wrapper");

let rankingProductCount = 0;
const rankingSlideWidth = 1075;

// 다음 슬라이드로 이동
rankingNextButton.addEventListener("click", (e) => {
    if (rankingProductCount < rankingCount - 1) {
        rankingProductCount++;

        const move = rankingSlideWidth * rankingProductCount;
        rankingShowProduct.style.transform = `translateX(-${move}px)`;
        rankingShowProduct.style.transition = "transform 0.5s";

        rankingBackButton.style.display =
            rankingProductCount > 0 ? "block" : "none";
        rankingNextButton.style.display =
            rankingProductCount >= rankingCount ? "none" : "block";
    } else if (rankingProductCount === rankingCount - 1) {
        const move =
            rankingSlideWidth * rankingProductCount -
            (rankingProductCount - 200);
        rankingShowProduct.style.transform = `translate(-${move}px)`;
        rankingNextButton.style.display = "none";
    }
});

// 이전 슬라이드로 이동
rankingBackButton.addEventListener("click", (e) => {
    if (rankingProductCount > 0) {
        rankingProductCount--;
        rankingShowProduct.style.transform = `translate(-${
            rankingSlideWidth * rankingProductCount
        }px)`;
        rankingShowProduct.style.transition = `transform 0.5s`;
    }
    if (rankingProductCount <= 0) {
        rankingBackButton.style.display = "none";
    }
    if (rankingProductCount < rankingCount - 1) {
        rankingNextButton.style.display = "block";
    }
});

// 타임 세일 인기랭킹 카드

// 남은 시간

const timeShow2 = document.querySelector(".show-timer2");

const restTime2 = (datetime) => {
    const date = new Date(datetime);

    const update2 = () => {
        const now = new Date();
        let gap = Math.floor((date.getTime() - now.getTime()) / 1000);

        if (gap <= 0) {
            timeShow2.innerHTML = "다음에 또 만나요🥲";
            clearInterval(timer2);
            return;
        }

        const hours = String(Math.floor(gap / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((gap % 3600) / 60)).padStart(2, "0");
        const seconds = String(gap % 60).padStart(2, "0");

        timeShow2.innerHTML = `<span>${hours}</span><span>${minutes}</span><span>${seconds}</span>`;
    };

    update2();
    const timer2 = setInterval(update2, 1000);
};

restTime2("2026-07-28T00:00:00");

const rankingList2 = document.querySelectorAll("div.ranking-swiper-slide2");
const rankingCount2 = Math.ceil(rankingList2.length / 5);
const rankingBackButton2 = document.querySelector(
    "button.ranking-button-left2"
);
const rankingNextButton2 = document.querySelector(
    "button.ranking-button-right2"
);
const rankingShowProduct2 = document.querySelector(".ranking-swiper-wrapper2");

let rankingProductCount2 = 0;
const rankingSlideWidth2 = 1075;

// 다음 슬라이드로 이동
rankingNextButton2.addEventListener("click", (e) => {
    if (rankingProductCount2 < rankingCount2 - 1) {
        rankingProductCount2++;

        const move = rankingSlideWidth2 * rankingProductCount2;
        rankingShowProduct2.style.transform = `translateX(-${move}px)`;
        rankingShowProduct2.style.transition = "transform 0.5s";

        rankingBackButton2.style.display =
            rankingProductCount2 > 0 ? "block" : "none";
        rankingNextButton2.style.display =
            rankingProductCount2 >= rankingCount2 ? "none" : "block";
    } else if (rankingProductCount2 === rankingCount2 - 1) {
        const move =
            rankingSlideWidth2 * rankingProductCount2 -
            (rankingProductCount2 - 200);
        rankingShowProduct2.style.transform = `translate(-${move}px)`;
        rankingNextButton2.style.display = "none";
    }
});

// 이전 슬라이드로 이동
rankingBackButton2.addEventListener("click", (e) => {
    if (rankingProductCount2 > 0) {
        rankingProductCount2--;
        rankingShowProduct2.style.transform = `translate(-${
            rankingSlideWidth2 * rankingProductCount2
        }px)`;
        rankingShowProduct2.style.transition = `transform 0.5s`;
    }
    if (rankingProductCount2 <= 0) {
        rankingBackButton2.style.display = "none";
    }
    if (rankingProductCount2 < rankingCount2 - 1) {
        rankingNextButton2.style.display = "block";
    }
});

// 사이드 필터 드롭다운
const filterDropdownButtons = document.querySelectorAll(
    ".filter-category-list .dropdown-btn"
);
filterDropdownButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.closest(".filter-category-list").classList.toggle("up");
    });
});
const scrollTopButton = document.querySelector(".scroll-top-btn");
scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 최근본 상품
const recentlyButtons = document.querySelectorAll(
    ".recently-viewed-section button"
);
const container = document.querySelector(".recently-viewed-scroll");

recentlyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (btn.classList.contains("prev")) {
            container.scrollBy({ top: -150, behavior: "smooth" });
        } else if (btn.classList.contains("next")) {
            container.scrollBy({ top: 150, behavior: "smooth" });
        }
    });
});

// 팝업 수량 카운트
const quantityBoxes = document.querySelectorAll(".product-quantity-box");

quantityBoxes.forEach((box) => {
    const plusBtn = box.querySelector(".quantity-btn.plus");
    const minusBtn = box.querySelector(".quantity-btn.minus");
    const countEl = box.querySelector(".count");
    minusBtn.disabled = true;

    plusBtn.addEventListener("click", () => {
        let count = Number(countEl.textContent);
        count++;
        countEl.textContent = count;
        minusBtn.disabled = count <= 0;
    });

    minusBtn.addEventListener("click", () => {
        let count = Number(countEl.textContent);
        if (count > 0) count--;
        countEl.textContent = count;
        minusBtn.disabled = count == 0;
    });
});
// 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetModal = btn.closest(".popup-wrapper");
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});
