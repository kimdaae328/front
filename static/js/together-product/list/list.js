NodeList.prototype.filter = Array.prototype.filter;

// 리스트 페이지 필터
const filterSelect = document.querySelectorAll(
    ".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]"
);
const resetButton = document.querySelector(".btn-reset");

filterSelect.forEach((input) => {
    input.addEventListener("change", (e) => {
        // 초기화 버튼 on/off
        const isFilterSelected =
            document.querySelectorAll(".filter-sidebar input:checked").length >
            0;
        resetButton.classList.toggle("on", isFilterSelected);
        resetButton.disabled = !isFilterSelected;

        // 라디오 값 중복확인
        const isRadio = input.type === "radio";
        const isChecked = input.checked;

        if (isRadio && isChecked) {
            const groupName = input.name;
            const allGroupRadios = document.querySelectorAll(
                `.filter-sidebar input[type=radio][name="${groupName}"]`
            );

            allGroupRadios.forEach((radio) => {
                const label = radio.closest("label");
                const labelTitle = label.querySelector(".title").textContent;
                const activeTag =
                    document.querySelectorAll(".active-filter-tag");

                activeTag.forEach((tag) => {
                    if (tag.textContent === labelTitle) {
                        tag.closest(".active-filter-item").remove();
                    }
                });
            });
        }

        // 중복체크
        const title = input
            .closest("label")
            .querySelector(".title").textContent;
        let isDuplicated = false;

        document.querySelectorAll(".active-filter-tag").forEach((tag) => {
            if (tag.textContent === title) {
                isDuplicated = true;
            }
        });

        // tag 추가
        const activeFilterBox = document.querySelector(
            ".active-filter-container"
        );

        if (isChecked && !isDuplicated) {
            let filterActiveBox = activeFilterBox.querySelector(
                ".active-filter-list"
            );

            // 생성
            if (!filterActiveBox) {
                filterActiveBox = document.createElement("div");
                filterActiveBox.className = "active-filter-list";
                activeFilterBox.appendChild(filterActiveBox);
            }

            // 필터 태그 추가
            const div = document.createElement("div");
            div.className = "active-filter-item";
            div.innerHTML = `
                <span class="active-filter-tag">${title}</span>
                <button class="remove-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.55566 5.55566L14.4446 14.4446" stroke="#ccc"></path>
                    <path d="M14.4443 5.55566L5.55545 14.4446" stroke="#ccc"></path>
                </svg>
                </button>
                `;
            filterActiveBox.appendChild(div);

            // 필터안 태그 remove버튼 클릭시
            if (filterActiveBox) {
                const removeBtns =
                    document.querySelectorAll("button.remove-btn");

                removeBtns.forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        e.target.closest(".active-filter-item").remove();

                        const filterActiveBox = document.querySelector(
                            ".active-filter-list"
                        );

                        if (filterActiveBox) {
                            const allTagsCount =
                                filterActiveBox.querySelectorAll(
                                    ".active-filter-item"
                                );
                            filterActiveBox.style.display =
                                allTagsCount.length > 0 ? "flex" : "none";
                        }

                        // input박스 초기화
                        const item = e.target.closest(".active-filter-item");
                        const title =
                            item.querySelector(
                                ".active-filter-tag"
                            ).textContent;

                        document
                            .querySelectorAll("input:checked")
                            .forEach((input) => {
                                const checkedTitle = input
                                    .closest("label")
                                    .querySelector(".title").textContent;

                                if (checkedTitle === title) {
                                    input.checked = false;
                                }
                            });
                    });
                });
            }
        }

        // 태그 삭제
        if (!isChecked) {
            removeTag(title);
        }

        // 태그 없을때
        noTag();
    });
});

// 태그 삭제
function removeTag(title) {
    const tag = document.querySelectorAll(".active-filter-tag");
    tag.forEach((tag) => {
        if (tag.textContent === title) {
            tag.closest(".active-filter-item").remove();
        }
    });
}

// 태그 없을때
function noTag() {
    const filterActiveBox = document.querySelector(".active-filter-list");

    if (filterActiveBox) {
        const allTagsCount = filterActiveBox.querySelectorAll(
            ".active-filter-item"
        );
        filterActiveBox.style.display =
            allTagsCount.length > 0 ? "flex" : "none";
    }
}

// 라디오 두 번 클릭 시 해제
const radios = document.querySelectorAll('input[type="radio"]');
let selected = null;

radios.forEach((radio) => {
    const title = radio.closest("label").querySelector(".title").textContent;

    radio.addEventListener("click", (e) => {
        if (selected === radio) {
            radio.checked = false;
            selected = null;

            // 태그 삭제
            removeTag(title);

            // 태그 없을때
            noTag();
        } else {
            selected = radio;
        }
    });
});

// 리셋 클릭시 전체 필터 초기화
resetButton.addEventListener("click", () => {
    filterSelect.forEach((input) => {
        input.checked = false;

        const title = input
            .closest("label")
            .querySelector(".title").textContent;

        removeTag(title);
        noTag();
    });
});

// 상단 메뉴 버튼 on/off
const menuButtons = document.querySelectorAll(".menu-item .menu-btn");
document.querySelector(".menu-list .menu-item").classList.add("on");

menuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        document
            .querySelectorAll(".menu-item")
            .forEach((item) => item.classList.remove("on"));
        e.target.closest(".menu-item").classList.add("on");
    });
});

// 제품 상단 필터 버튼 on/off
const productFilterButtons = document.querySelectorAll(
    ".product-sort-options .sort-button"
);
document
    .querySelector(".product-sort-options .product-sort-item")
    .classList.add("on");

productFilterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        document
            .querySelectorAll(".product-sort-item")
            .forEach((item) => item.classList.remove("on"));
        e.target.closest(".product-sort-item").classList.add("on");
    });
});

// 사이드 필터 버튼 on/off
const categorySortButtons = document.querySelectorAll(
    ".category-sort-options .category-sort-btn"
);

categorySortButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document
            .querySelectorAll(".category-sort-item")
            .forEach((item) => item.classList.remove("on"));

        button.closest(".category-sort-item").classList.add("on");
    });
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
