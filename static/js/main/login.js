const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        const htmlScroll = document.querySelector("html");
        const failMessage = document.querySelector("div.fail-login");

        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
            if ((targetModal.contain = "popup2")) {
                failMessage.innerHTML = `<div class="fail-login-inner">
                                            <p class="fail-login-p">이메일/비밀번호가 일치하지 않습니다.</p>
                                        </div>`;
            }
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const targetModal = btn.closest(".popup-wrapper");
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});
