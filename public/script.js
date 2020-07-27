const darkMode = document.getElementById("dark-mode-btn");


darkMode.addEventListener("click", () => {
    document.querySelector('body').classList.toggle('dark')
})