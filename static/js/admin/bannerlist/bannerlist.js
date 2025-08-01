const menubtn1 =document.getElementById("menubtn1")
const sublist1 =document.getElementById("sublist1")
const menubtn2 =document.getElementById("menubtn2")
const sublist2 =document.getElementById("sublist2")
const menubtn3 =document.getElementById("menubtn3")
const sublist3 =document.getElementById("sublist3")
const menubtn4 =document.getElementById("menubtn4")
const usermenubtn=document.getElementById("usermenubtn")
const usermenu=document.getElementById("usermenu")
const submenus=document.querySelectorAll('.boot-link')
submenus.forEach(submenu=>{
    submenu.addEventListener('click',(e)=>{
        e.preventDefault();
        submenus.forEach(active=>active.classList.remove('active'));
        submenu.classList.add('active');
    })
})
usermenubtn.addEventListener("click",(e)=>{
    usermenu.classList.toggle("show")

    
})
menubtn1.addEventListener("click", (e) => {
    sublist1.classList.toggle("show");
    event.preventDefault()
});
menubtn2.addEventListener("click", (e) => {
    sublist2.classList.toggle("show");
    event.preventDefault()
});

menubtn3.addEventListener("click", (e) => {
    sublist3.classList.toggle("show");
    event.preventDefault()
});
menubtn4.addEventListener("click", (e) => {
    sublist4.classList.toggle("show");
    event.preventDefault()
});
const bannerFile = document.getElementById("banner-file");
const bannerContainer = document.querySelector("ul.pg-list");
bannerFile.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        let text = `
            <li class="pg-list-item show">
                <div class="pg-logo-wrapper">
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                    <img src="${e.target.result}" class="pg-logo" ">
                </div>
            </li>
        `;

        bannerContainer.innerHTML += text;
    });
});
bannerContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete-btn")){

        e.target.parentElement.parentElement.remove();
    }

})