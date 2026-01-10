const menu = document.getElementById("menu")
const menuOpenBtn = document.getElementById("open-menu")
const menuCloseBtn = document.getElementById("close-menu")

menuOpenBtn.addEventListener("click", () => {
    menu.classList.add("show")
})

menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("show")
})
