// 1. Перемикач стилю (Темна/Світла тема)
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
});

// 2. Перемикання таблиць
function showTable(index) {
    // Ховаємо всі таблиці
    document.querySelectorAll('table').forEach(table => {
        table.style.display = 'none';
    });
    // Забираємо клас active у всіх кнопок
    document.querySelectorAll('.table-controls .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Показуємо обрану
    document.getElementById(`table-${index}`).style.display = 'table';
    document.querySelectorAll('.table-controls .btn')[index - 1].classList.add('active');
}

// 3. Слайд-шоу
const images = [
    "images/kremenchuk1.jpg",
    "images/kremenchuk2.jpg",
    "images/kremenchuk3.jpg",
    "images/kremenchuk4.jpg",
    "images/kremenchuk5.jpg"
];

let currentSlide = 0;
const slideImg = document.getElementById('slide-img');

function changeSlide(direction) {
    if (!slideImg) return; // Запобіжник для другої сторінки
    currentSlide += direction;
    
    // Перегортання по колу
    if (currentSlide >= images.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = images.length - 1;
    
    slideImg.src = images[currentSlide];
}