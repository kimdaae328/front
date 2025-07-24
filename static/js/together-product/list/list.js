NodeList.prototype.filter = Array.prototype.filter;

const filterSelect = document.querySelectorAll(
    ".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]"
);
const resetButton = document.querySelector(".btn-reset");

// 리스트 페이지 필터
filterSelect.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
        const title = checkbox
            .closest("label")
            .querySelector(".title").textContent;

        // 초기화 버튼 on/off
        const isFilterSelected =
            document.querySelectorAll(".filter-sidebar input:checked").length >
            0;
        resetButton.classList.toggle("on", isFilterSelected);
        resetButton.disabled = !isFilterSelected;

        const isRadio = checkbox.type === "radio";
        const isChecked = checkbox.checked;

        if (isRadio) {
            const groupName = checkbox.name;
            const allGroupRadios = document.querySelectorAll(
                `.filter-sidebar input[type=radio][name="${groupName}"]`
            );

            allGroupRadios.forEach((radio) => {
                const label = radio.closest("label");
                const labelTitle = label.querySelector(".title").textContent;

                document
                    .querySelectorAll(".active-filter-tag")
                    .forEach((tag) => {
                        if (tag.textContent === labelTitle) {
                            tag.closest(".active-filter-item").remove();
                        }
                    });
            });
        }

        // 중복체크
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

// 필터 섹션에서 remove
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
