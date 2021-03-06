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
    modalDeault.querySelectorAll("div.px-6.py-5.border-t-2").forEach(elem => elem.classList.add("hidden"));
    overlay.classList.remove("hidden");
    menuIcon.classList.remove("z-20");
    document.querySelector("header img").classList.remove("z-20");
})

modalDeault.firstElementChild.addEventListener("click", ()=> {
    modalDeault.classList.add("hidden");
    overlay.classList.add("hidden");
    menuIcon.classList.add("z-20");
    document.querySelector("header img").classList.add("z-20");
    modalDeault.querySelectorAll("section article").forEach(elem => {
        elem.className = "mb-6 border-gray-300 card-modal";
        elem.lastElementChild.classList.add("hidden");
        elem.querySelector("span.w-3.h-3").classList.add("hidden");
    });
})

products.addEventListener("click", (e)=> {
    if (e.target.matches("button")) {
        overlay.classList.remove("hidden");
        modalDeault.classList.remove("hidden");

        const modalCardSelected = modalDeault.querySelectorAll(`section article:nth-of-type(${e.target.dataset.card})`)[0];
        modalCardSelected.className = "mb-6 border-2 border-cyan-100 card-modal";
        modalCardSelected.lastElementChild.classList.remove("hidden");
        modalCardSelected.querySelector("span.w-3.h-3").classList.remove("hidden");
    }
})

modalDeault.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        overlay.classList.remove("hidden");
        modalSuccess.classList.remove("hidden");
        modalDeault.classList.add("hidden");
        modalDeault.querySelectorAll("section article").forEach(elem => {
            elem.className = "mb-6 border-gray-300 card-modal";
            elem.querySelector("span.w-3.h-3").classList.add("hidden");
            elem.lastElementChild.classList.add("hidden");
        });

    } else if (e.target.matches("input[type='radio']")) {
        modalDeault.querySelectorAll("section article").forEach(elem => elem.className = "mb-6 border-gray-300 card-modal");
        modalDeault.querySelectorAll("input[type='radio']").forEach(elem => elem.nextElementSibling.firstElementChild.classList.add("hidden"));
        e.target.parentElement.parentElement.parentElement.className = "mb-6 border-2 border-cyan-100 card-modal";
        e.target.parentElement.querySelector("span.w-3.h-3").classList.remove("hidden");
        
        if (e.target.checked) {
            modalDeault.querySelectorAll("div.px-6.py-5.border-t-2").forEach(elem => elem.classList.add("hidden"));
            e.target.parentElement.parentElement.nextElementSibling.classList.remove("hidden");
        }
    }
})

closeModalSuccess.addEventListener("click", ()=> {
    closeModalSuccess.parentElement.classList.add("hidden");
    overlay.classList.add("hidden");
    menuIcon.classList.add("z-20");
    document.querySelector("header img").classList.add("z-20");
})