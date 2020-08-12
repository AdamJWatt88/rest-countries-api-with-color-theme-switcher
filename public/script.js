const darkMode = document.getElementById("dark-mode-btn");
const body = document.querySelector('body');

const mode = JSON.parse(localStorage.getItem('darkMode'));

function switchDarkMode () {
    if (mode === true) {
        body.classList.add('dark')
    }
}

darkMode.addEventListener("click", () => {
    body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark') ? true : false)
})

window.onload = () => switchDarkMode();