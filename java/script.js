function toggleNightMode() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const themeButton = document.getElementById("toggle-theme");
    const themeText = document.getElementById("theme-text");
    const themeIcon = document.getElementById("theme-icon");

    const isNightMode = themeText.innerText === "Día"; 
    themeText.innerText = isNightMode ? "Noche" : "Día"; 
    themeIcon.classList.toggle("fa-sun", !isNightMode); 
    themeIcon.classList.toggle("fa-moon", isNightMode);
    themeButton.classList.toggle("day-theme", !isNightMode); 
}

window.onload = toggleNightMode;

function iExtern(url) {
    window.open(url, '_blank');
}
