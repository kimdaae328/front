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
            productSlideWidth * productCount - (productSlideWidth - 320);
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
