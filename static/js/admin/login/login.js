document.querySelectorAll(".boot-check-box").forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("checked");
    });
});
