const menuIcon = document.getElementById("menu");
const body = document.getElementsByTagName("body");
const btnBack = document.getElementById("btnBack");
const modalDeault = document.getElementById("modalDefault");
const closeModalSuccess = document.getElementById("closeModalSuccess");

menuIcon.addEventListener("click", ()=> {
    const menu = menuIcon.nextElementSibling;
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        body.classList.add("cover");
    }
})

btnBack.addEventListener("click", ()=> {
    modalDeault.classList.remove("hidden");
})

modalDeault.firstElementChild.addEventListener("click", ()=> {
    modalDeault.classList.add("hidden");
})

closeModalSuccess.addEventListener("click", ()=> {
    closeModalSuccess.parentElement.classList.add("hidden");
})