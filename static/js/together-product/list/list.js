NodeList.prototype.filter = Array.prototype.filter;

const filterSelect = document.querySelectorAll(
    ".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]"
);
const resetButton = document.querySelector(".btn-reset");

// 라디오 두번 클릭
const radioLabels = document.querySelectorAll(".btn-radio-box label");
const radioInputs = document.querySelectorAll(
    ".btn-radio-box input[type=radio]:checked"
);
let lastClickedRadio = null;

radioLabels.forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');

    label.addEventListener("click", (e) => {
        if (radio.checked) {
            lastClickedRadio = radio;
            console.log(lastClickedRadio);
        }

        if (lastClickedRadio === radio) {
            setTimeout(() => {
                radio.checked = false;
                lastClickedRadio = null;
                console.log("같은 라디오??");
            }, 0);
        }
    });
});

// let currentCheckedRadio = null;

// 라디오 전체 선택
// const radios = document.querySelectorAll('.filter-list input[type="radio"]');

// radios.forEach((radio) => {
//     radio.addEventListener("click", function (e) {
//         if (currentCheckedRadio === this) {
//             // 같은 걸 다시 클릭했을 때 → 해제
//             setTimeout(() => {
//                 this.checked = false;
//                 currentCheckedRadio = null;
//                 console.log("✅ 해제됨:", this.value);
//             }, 0);
//         } else {
//             // 새로 선택 → 이걸 기억
//             currentCheckedRadio = this;
//             console.log("🔄 선택됨:", this.value);
//         }
//     });
// });

// 리스트 페이지 필터
filterSelect.forEach((input) => {
    input.addEventListener("change", (e) => {
        // 초기화 버튼 on/off
        const isFilterSelected =
            document.querySelectorAll(".filter-sidebar input:checked").length >
            0;
        resetButton.classList.toggle("on", isFilterSelected);
        resetButton.disabled = !isFilterSelected;

        // 라디오 값 중복없이
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

                // if (radio.checked) {
                //     console.log("asdasdasd");
                // }
            });

            // const selected = document.querySelector(
            //     `.filter-sidebar input[name="${groupName}"]:checked`
            // );

            // const selectedValue = selected.value;
            // const selectedLabel = selected
            //     ?.closest("label")
            //     .querySelector(".title").textContent;

            // console.log(`[${groupName}] 현재 선택된 값:`, selectedValue);
            // console.log(`[${groupName}] 선택된 라벨 제목:`, selectedLabel);
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
        if (isChecked && !isDuplicated) {
            // 생성
            let filterActiveBox = document.querySelector(".active-filter-list");
            if (!filterActiveBox) {
                filterActiveBox = document.createElement("div");
                filterActiveBox.className = "active-filter-list";

                const productList = document.querySelector(".product-list");
                productList.parentNode.insertBefore(
                    filterActiveBox,
                    productList
                );
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
        }

        // tag 삭제
        if (!isChecked) {
            document.querySelectorAll(".active-filter-tag").forEach((tag) => {
                if (tag.textContent === title) {
                    tag.closest(".active-filter-item").remove();
                }
            });
        }

        // 태그 없을때
        const filterActiveBox = document.querySelector(".active-filter-list");

        if (filterActiveBox) {
            const allTagsCount = filterActiveBox.querySelectorAll(
                ".active-filter-item"
            );
            filterActiveBox.style.display =
                allTagsCount.length > 0 ? "flex" : "none";
        }
    });
});

// 필터 섹션에서 삭제
document.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".remove-btn");
    if (!removeBtn) return;

    const filterItem = removeBtn.closest(".active-filter-item");
    const title = filterItem.querySelector(".active-filter-tag").textContent;
    const filterSelect = document.querySelectorAll(
        ".filter-sidebar input:checked"
    );
    const removeCount = document.querySelectorAll(".remove-btn").length;

    filterSelect.forEach((input) => {
        const label = input.closest("label");
        const labelTitle = label.querySelector(".title")?.textContent;

        if (labelTitle === title) {
            input.checked = false;

            if (input.type === "radio") {
                const groupName = input.name;
                const radios = document.querySelectorAll(
                    `.filter-sidebar input[type=radio][name="${groupName}"]`
                );

                radios.forEach((radio) => {
                    const label = radio.closest("label");
                    const labelTitle =
                        label.querySelector(".title")?.textContent;

                    document
                        .querySelectorAll(".active-filter-tag")
                        .forEach((tag) => {
                            if (tag.textContent === labelTitle) {
                                tag.closest(".active-filter-item")?.remove();
                            }
                        });
                });
            }
        }
    });

    filterItem.remove();

    const filterActiveBox = document.querySelector(".active-filter-list");
    const tagCount = filterActiveBox.querySelectorAll(
        ".active-filter-item"
    ).length;
    if (tagCount === 0) {
        filterActiveBox.remove();
    }

    const isFilterSelected =
        document.querySelectorAll(".filter-sidebar input:checked").length > 0;
    resetButton.classList.toggle("on", isFilterSelected);
    resetButton.disabled = !isFilterSelected;
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

    console.log("초기 count:", countEl.textContent);

    plusBtn.addEventListener("click", () => {
        let count = parseInt(countEl.textContent, 10);
        count++;
        countEl.textContent = count;
    });

    minusBtn.addEventListener("click", () => {
        let count = parseInt(countEl.textContent, 10);
        if (count > 0) count--;
        countEl.textContent = count;
    });
});

// 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        if (targetModal) {
            targetModal.style.display = "block";
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetModal = btn.closest(".popup-wrapper");
        if (targetModal) {
            targetModal.style.display = "none";
        }
    });
});
