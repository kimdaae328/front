const checkbox = document.getElementById("auto-login-checkbox");
const icon = document.querySelector(".mdi.mdi-check");
checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked);
    console.log(icon);
    if (e.target.checked) {
        icon.style.display = "inline-block";
    } else {
        icon.style.display = "none";
    }
});
