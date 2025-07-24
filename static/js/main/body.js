// 배너

// 배너 멈춤 시작 버튼

const button = document.querySelector(".start-stop");
button.classList.add("start-mode"); // 초기 상태

button.addEventListener("click", () => {
    button.classList.toggle("start-mode");
    button.classList.toggle("stop-mode");
});

// 배너 무한 슬라이드

const banner = document.querySelector("div.swiper-wrapper");
const arrows = document.querySelectorAll("button.banner-LR");

const slides = document.querySelectorAll(".swiper-slide"); // 복제 전 슬라이드 개수
const totalSlides = slides.length;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

banner.appendChild(firstClone);
banner.prepend(lastClone);

let count = 1;
const slideWidth = 1900;

banner.style.transform = `translate(-${slideWidth * count}px)`;

const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${slideWidth * count}px)`;
    banner.style.transition = `transform 0.5s`;

    if (count === totalSlides + 1) {
        setTimeout(() => {
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
};

let autoSlideInterval = setInterval(autoSlide, 3000);
let arrowCheck = true;

// 배너 화살표 클릭시 다음 페이지

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) return;
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        if (arrow.classList.contains("main-banner-button-left")) {
            count--;
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
            }
        } else {
            count++;
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
            }
        }

        autoSlideInterval = setInterval(autoSlide, 3000);

        setTimeout(() => {
            arrowCheck = true;
        }, 500);
    });
});

// 지금 가장 많이 담는 특가

const productList = document.querySelectorAll("div.product-card");
const listCount = Math.ceil(productList.length / 4);
const backButton = document.querySelector("button.product-list-button-left");
const nextButton = document.querySelector("button.product-list-button-right");
const showProduct = document.querySelector(".product-wrap");

let productCount = 0;
const productSlideWidth = 1050;

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
