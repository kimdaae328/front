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
const totalAmount = document.querySelectorAll(".total-amount");

// 수량 카운트 - 마이너스 버튼 disabled 초기화
quantityBoxes.forEach((box) => {
    const count = Number(box.querySelector(".count").textContent);
    const minusBtn = box.querySelector(".quantity-btn.minus");
    minusBtn.disabled = count <= 0;
});

// 수량 카운트 - 모든 상품 정보 수집
const productItems = Array.from(
    document.querySelectorAll(".product-option-item")
).map((item) => ({
    countEl: item.querySelector(".count"),
    finalPriceEl: item.querySelector(".final-price"),
    unitPrice: Number(
        item.querySelector(".final-price").textContent.replace(/[^0-9]/g, "")
    ),
}));

// 수량 카운트 - 모든 상품 수량 동기화
const updateAllCounts = (newCount) => {
    productItems.forEach((item) => {
        item.countEl.textContent = newCount;
    });
};

// 수량 카운트 - 모든 total-amount 업데이트
const updateTotal = (count) => {
    let total = 0;
    productItems.forEach((item) => {
        total += item.unitPrice * count;
    });
    totalAmount.forEach((el) => {
        el.textContent = total.toLocaleString();
    });
};

// 수량 카운트 - 버튼 클릭 이벤트 연결
quantityBoxes.forEach((box) => {
    const plusBtn = box.querySelector(".quantity-btn.plus");
    const minusBtn = box.querySelector(".quantity-btn.minus");

    plusBtn.addEventListener("click", () => {
        let current = Number(box.querySelector(".count").textContent);
        current++;
        updateAllCounts(current);
        quantityBoxes.forEach(
            (b) =>
                (b.querySelector(".quantity-btn.minus").disabled = current <= 0)
        );
        updateTotal(current);
    });

    minusBtn.addEventListener("click", () => {
        let current = Number(box.querySelector(".count").textContent);
        if (current > 0) current--;
        updateAllCounts(current);
        quantityBoxes.forEach(
            (b) =>
                (b.querySelector(".quantity-btn.minus").disabled = current <= 0)
        );
        updateTotal(current);
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
    e.target.classList.toggle("active");
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
const moreBtns = document.querySelectorAll(".btn-more");

moreBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        button.classList.toggle("on");
    });
});

// 상품문의 드롭다운
const inquiryButtons = document.querySelectorAll(".btn-title");

inquiryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("secret")) return;

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

// textarea 글자수 카운트
const textarea = document.querySelector("textarea");
const textEnter = document.querySelector(".text-enter");
const max = document.querySelector(".maxLength");
const maxLength = max.innerText;

textarea.addEventListener("keyup", (e) => {
    if (textarea.value.length > maxLength) {
        textarea.value = textarea.value.slice(0, maxLength);
    }
    const result = textarea.value.length;
    textEnter.innerText = `${result}`;
});

// 팝업 등록 버튼 disabled
const btnInputActive = document.querySelector(".btn-input-active");
const titleInput = btnInputActive.querySelector(".title");
const contentTextarea = btnInputActive.querySelector(".content");
const submitBtn = btnInputActive.querySelector(".popup-footer .btn-primary");

function toggleSubmitButton() {
    const isTitleFilled = titleInput.value.trim().length > 0;
    const isContentFilled = contentTextarea.value.trim().length > 0;
    submitBtn.disabled = !(isTitleFilled && isContentFilled);
}

titleInput.addEventListener("input", toggleSubmitButton);
contentTextarea.addEventListener("input", toggleSubmitButton);

toggleSubmitButton();

// btn-wish 버튼
const wishButtons = document.querySelectorAll(".btn-wish");

wishButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isActive = button.classList.contains("on");

        wishButtons.forEach((btn) => {
            if (isActive) {
                btn.classList.remove("on");
            } else {
                btn.classList.add("on");
            }
        });
    });
});

// btn-helpful 버튼
const helpfulButtons = document.querySelectorAll(".btn-helpful");

helpfulButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("on");
    });
});

// 사진후기 미리보기 이미지
const reviewImgButtons = document.querySelectorAll(
    ".pop-preview-item .btn-img"
);

reviewImgButtons.forEach((button) => {
    button.addEventListener("click", () => {
        reviewImgButtons.forEach((btn) => btn.classList.remove("on"));
        button.classList.add("on");
    });
});
