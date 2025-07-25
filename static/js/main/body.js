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
console.log(nowPage);
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

const now = new Date();
const date = new Date(datetime);

const timeShow = document.querySelector("show-timer");

let gap = Math.floor((date.getTime() - now.getTime()) / 1000);

let second = gap % 60;
let minute = second % 60;
let hour = minute % 24;

const restTime = () => {};

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
