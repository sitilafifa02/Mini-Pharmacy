// =========================
// SPLASH SCREEN
// =========================

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
    }, 2000);
});

// =========================
// PAGE NAVIGATION
// =========================

const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

// Tombol buka apotek
const startButton = document.getElementById('startButton');

if (startButton) {
    startButton.addEventListener('click', () => {
        showPage('home-page');
    });
}

// Klik menu keluhan
const menuCards = document.querySelectorAll('.menu-card');

menuCards.forEach(card => {
    card.addEventListener('click', () => {
        const target = card.dataset.target;

        // sementara tampil alert dulu
        alert('Halaman "' + target + '" akan kita buat di Part berikutnya 🤍');
    });
});
