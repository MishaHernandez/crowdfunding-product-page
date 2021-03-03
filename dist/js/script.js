const menuIcon = document.getElementById("menu");
const btnBack = document.getElementById("btnBack");
const modalDeault = document.getElementById("modalDefault");
const closeModalSuccess = document.getElementById("closeModalSuccess");
const overlay = document.getElementById("overlay");

menuIcon.addEventListener("click", ()=> {
    const menu = menuIcon.nextElementSibling;
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        menuIcon.setAttribute("src", "images/icon-hamburger.svg");
        overlay.classList.add("hidden");
    } else {
        menuIcon.setAttribute("src", "images/icon-close-menu.svg");
        overlay.classList.remove("hidden");
    }
})

btnBack.addEventListener("click", ()=> {
    modalDeault.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

modalDeault.firstElementChild.addEventListener("click", ()=> {
    modalDeault.classList.add("hidden");
    overlay.classList.add("hidden");
})

closeModalSuccess.addEventListener("click", ()=> {
    closeModalSuccess.parentElement.classList.add("hidden");
    overlay.classList.add("hidden");
})