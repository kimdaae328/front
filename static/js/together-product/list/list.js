NodeList.prototype.filter = Array.prototype.filter;

const filterSelect = document.querySelectorAll(
    ".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]"
);
const filterActiveBox = document.querySelector(".active-filter-list");
const resetButton = document.querySelector(".btn-reset");
const removeButton = document.querySelector(".active-filter-list .remove-btn");

// 리스트 페이지 필터
filterSelect.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
        const title = checkbox
            .closest("label")
            .querySelector(".title").textContent;

        // 초기화 버튼 on/off
        const anyChecked =
            document.querySelectorAll(".filter-sidebar input:checked").length >
            0;
        resetButton.classList.toggle("on", anyChecked);

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

        const allTagsCount = document.querySelectorAll(".active-filter-item");
        filterActiveBox.style.display =
            allTagsCount.length > 0 ? "flex" : "none";
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
