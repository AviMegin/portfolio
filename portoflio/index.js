const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const enableDarkModeText = document.querySelector('.theme-switch-wrapper em');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        enableDarkModeText.style.display = 'none'; // Hide the text when dark mode is enabled
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        enableDarkModeText.style.display = 'none'; // Hide the text when dark mode is enabled
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        enableDarkModeText.style.display = 'block'; // Show the text when switching back to light mode
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
