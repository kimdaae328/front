// 상단으로 이동
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

// 수량 카운트
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
    btn.addEventListener("click", (e) => {
        e.preventDefault();

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

// 상품선택 플로팅바
const floatingBar = document.querySelector(".floating-purchase-bar");
const floatingButton = document.querySelector(".floating-btn");
const productSection = document.querySelector(".product-tab-content");

floatingButton.addEventListener("click", (e) => {
    e.target.classList.toggle("on");
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const productTop = productSection.offsetTop;
    const pageBottom = window.innerHeight + scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollY >= productTop && pageBottom < pageHeight) {
        floatingBar.classList.remove("hidden");
    } else {
        floatingBar.classList.add("hidden");
    }
});

// 탭 선택
const tabButtons = document.querySelectorAll(".tab-link");

tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        tabButtons.forEach((btn) => btn.classList.remove("on"));
        e.currentTarget.classList.add("on");
    });
});

// 자세히보기 드롭다운
const moreBtns = document.querySelectorAll(".more-btn");

moreBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        const guideItem = button.closest(".guide-item");
        const guideBottoms = guideItem.querySelectorAll(".guide-bottom");

        button.classList.toggle("on");
        guideBottoms.forEach((button) => {
            button.classList.toggle("hidden");
        });
    });
});

// 상품문의 드롭다운
const inquiryButtons = document.querySelectorAll(".title-btn");

inquiryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const tr = button.closest("tr");
        const answerTr = tr.nextElementSibling;

        answerTr.classList.toggle("hidden");
    });
});

// 추천순 버튼
const sortBtns = document.querySelectorAll(".sort-btn");

sortBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        sortBtns.forEach((btn) => btn.classList.remove("on"));
        e.currentTarget.classList.add("on");
    });
});

// 스크롤감지 탭버튼 활성화
const tabLinks = document.querySelectorAll(".tab-link");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 80;

    tabLinks.forEach((link) => {
        const targetId = link.getAttribute("href");
        const section = document.querySelector(targetId);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
            document
                .querySelectorAll(".tab-link")
                .forEach((el) => el.classList.remove("on"));
            link.classList.add("on");
        }
    });
});
