//  전체선택

const selectAllCheckbox = document.querySelector("#aa");
const productCheckboxes = document.querySelectorAll(".product-input");

document.addEventListener("DOMContentLoaded", () => {
    // 전체 선택 클릭 시 → 모든 개별 체크박스 상태 변경
    selectAllCheckbox.addEventListener("change", (e) => {
        productCheckboxes.forEach((checkbox) => {
            checkbox.checked = e.target.checked;
        });
    });

    // 개별 체크박스 클릭 시 → 전부 체크되어 있으면 전체도 체크
    productCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const allChecked = Array.from(productCheckboxes).every(
                (cb) => cb.checked
            );
            selectAllCheckbox.checked = allChecked;
        });
    });
});
