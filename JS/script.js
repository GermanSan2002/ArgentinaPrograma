const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = "ASSETS/ICON/sun.svg";
        toggleText.textContent = "Light mode";
    }
    else {
        toggleIcon.src = "ASSETS/ICON/moon.svg";
        toggleText.textContent = "Dark mode";
    }
});