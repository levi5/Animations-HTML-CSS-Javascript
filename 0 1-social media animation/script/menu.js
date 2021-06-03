const btnToggle = document.querySelector("#btn-toggle")

btnToggle.addEventListener("click", () => {
 const wrapperMenu = document.querySelector('#wrapper-menu')
 wrapperMenu.classList.toggle('active')
})