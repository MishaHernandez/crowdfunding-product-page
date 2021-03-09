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

// menu icon
modalDeault.firstElementChild.addEventListener("click", ()=> {
    modalDeault.classList.add("hidden");
    overlay.classList.add("hidden");
    menuIcon.classList.add("z-20");
    document.querySelector("header img").classList.add("z-20");
    modalDeault.querySelectorAll("section article").forEach(elem => {
        elem.className = "relative mb-6 border-gray-300 card-modal lg:pt-2 lg:rounded-lg";
        elem.lastElementChild.classList.replace("h-32", "h-0");
        elem.lastElementChild.classList.replace("px-6", "px-0");
        elem.lastElementChild.classList.replace("py-5", "py-0");
        elem.lastElementChild.classList.replace("border-t-2", "border-t-0");
        elem.querySelector("span.w-3.h-3").classList.add("hidden");
    });
})

products.addEventListener("click", (e)=> {
    if (e.target.matches("button")) {
        overlay.classList.remove("hidden");
        modalDeault.classList.remove("hidden");

        const modalCardSelected = modalDeault.querySelectorAll(`section article:nth-of-type(${e.target.dataset.card})`)[0];
        modalCardSelected.className = "relative mb-6 border-2 border-cyan-100 card-modal lg:pt-2 lg:rounded-lg";
        modalCardSelected.lastElementChild.classList.replace("h-0", "h-32");
        modalCardSelected.lastElementChild.classList.replace("px-0", "px-6");
        modalCardSelected.lastElementChild.classList.replace("py-0", "py-5");
        modalCardSelected.lastElementChild.classList.replace("border-t-0", "border-t-2");
        modalCardSelected.querySelector("span.w-3.h-3").classList.remove("hidden");
    }
})

modalDeault.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        overlay.classList.remove("hidden");
        modalSuccess.classList.remove("hidden");
        modalDeault.classList.add("hidden");
        modalDeault.querySelectorAll("section article").forEach(elem => {
            elem.className = "relative mb-6 border-gray-300 card-modal lg:pt-2 lg:rounded-lg";
            elem.lastElementChild.classList.replace("h-32", "h-0");
            elem.lastElementChild.classList.replace("px-6", "px-0");
            elem.lastElementChild.classList.replace("py-5", "py-0");
            elem.lastElementChild.classList.replace("border-t-2", "border-t-0");
            elem.querySelector("span.w-3.h-3").classList.add("hidden");
        });

    } else if (e.target.matches("input[type='radio']")) {
        modalDeault.querySelectorAll("section article").forEach(elem => elem.className = "relative mb-6 border-gray-300 card-modal lg:pt-2 lg:rounded-lg");
        modalDeault.querySelectorAll("input[type='radio']").forEach(elem => elem.nextElementSibling.firstElementChild.classList.add("hidden"));
        e.target.parentElement.parentElement.parentElement.className = "relative mb-6 border-2 border-cyan-100 card-modal lg:pt-2 lg:rounded-lg";
        e.target.parentElement.querySelector("span.w-3.h-3").classList.remove("hidden");
        
        if (e.target.checked) {
            modalDeault.querySelectorAll("div.pledge").forEach(elem => {
                elem.classList.replace("h-32", "h-0");
                elem.classList.replace("px-6", "px-0");
                elem.classList.replace("py-5", "py-0");
                elem.classList.replace("border-t-2", "border-t-0");
            });
            e.target.parentElement.parentElement.nextElementSibling.classList.replace("h-0", "h-32");
            e.target.parentElement.parentElement.nextElementSibling.classList.replace("border-t-0", "border-t-2");
            e.target.parentElement.parentElement.nextElementSibling.classList.replace("px-0", "px-6");
            e.target.parentElement.parentElement.nextElementSibling.classList.replace("py-0", "py-5");
        }
    }
})

closeModalSuccess.addEventListener("click", ()=> {
    closeModalSuccess.parentElement.classList.add("hidden");
    overlay.classList.add("hidden");
    menuIcon.classList.add("z-20");
    document.querySelector("header img").classList.add("z-20");
})