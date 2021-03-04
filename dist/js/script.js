const menuIcon = document.getElementById("menu");
const btnBack = document.getElementById("btnBack");
const modalDeault = document.getElementById("modalDefault");
const closeModalSuccess = document.getElementById("closeModalSuccess");
const overlay = document.getElementById("overlay");
const modalSuccess = document.getElementById("modalSuccess");
const products = document.getElementById("products");

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
    menuIcon.classList.remove("z-20");
    document.querySelector("header img").classList.remove("z-20");
})

modalDeault.firstElementChild.addEventListener("click", ()=> {
    modalDeault.classList.add("hidden");
    overlay.classList.add("hidden");
    menuIcon.classList.add("z-20");
    document.querySelector("header img").classList.add("z-20");
})

products.addEventListener("click", (e)=> {
    if (e.target.matches("button")) {
        overlay.classList.remove("hidden");
        modalDeault.classList.remove("hidden");
    }        
})

modalDeault.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        overlay.classList.remove("hidden");
        modalSuccess.classList.remove("hidden");
        modalDeault.classList.add("hidden");
    }
})

closeModalSuccess.addEventListener("click", ()=> {
    closeModalSuccess.parentElement.classList.add("hidden");
    overlay.classList.add("hidden");
    menuIcon.classList.add("z-20");
    document.querySelector("header img").classList.add("z-20");
})