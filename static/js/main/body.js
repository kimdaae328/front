const button = document.querySelector(".start-stop");
button.classList.add("start-mode"); // 초기 상태

button.addEventListener("click", () => {
    button.classList.toggle("start-mode");
    button.classList.toggle("stop-mode");
});

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

banner.style.transform = `translateX(-${slideWidth * count}px)`;

const autoSlide = () => {
    count++;
    banner.style.transform = `translateX(-${slideWidth * count}px)`;
    banner.style.transition = `transform 0.5s`;

    if (count === totalSlides + 1) {
        setTimeout(() => {
            banner.style.transform = `translateX(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
};

let autoSlideInterval = setInterval(autoSlide, 3000);
let arrowCheck = true;

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) return;
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        if (arrow.classList.contains("main-banner-button-left")) {
            count--;
            banner.style.transform = `translateX(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0.5s`;
            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translateX(-${
                        slideWidth * count
                    }px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = totalSlides;
            }
        } else {
            count++;
            banner.style.transform = `translateX(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0.5s`;

            if (count === totalSlides + 1) {
                setTimeout(() => {
                    banner.style.transform = `translateX(-${
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
