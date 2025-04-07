const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open'); // تغییر وضعیت دکمه همبرگری
});

// گرفتن دکمه
const goToTopButton = document.getElementById("goToTop");

// نمایش دکمه هنگام اسکرول به پایین
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        goToTopButton.style.display = "flex"; // نمایش دکمه
    } else {
        goToTopButton.style.display = "none"; // مخفی کردن دکمه
    }
});

// اسکرول به بالا با کلیک
goToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // حرکت نرم به بالا
    });
});


document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // مقدار اسکرول از بالا
    const docHeight = document.body.scrollHeight - window.innerHeight; // ارتفاع کل اسکرول
    const progressPercentage = Math.round((scrollTop / docHeight) * 100); // محاسبه درصد پیشرفت
    const progressBar = document.getElementById("progress-bar");

    // به‌روزرسانی عرض نوار پیشرفت و نمایش درصد
    progressBar.style.width = progressPercentage + "%";
    //  progressBar.textContent = progressPercentage + "%"; // نمایش درصد
});



// انتخاب تمام دکمه‌هایی که کلاس ripple-button دارند
const buttons = document.querySelectorAll('.ripple-button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // محاسبه مکان کلیک
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // ساختن المان ripple
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // افزودن افکت به دکمه
        button.appendChild(ripple);

        // حذف افکت پس از اتمام انیمیشن
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

function toggleSearch() {
    let searchContainer = document.querySelector(".search-container");
    searchContainer.classList.toggle("active");

    if (searchContainer.classList.contains("active")) {
        setTimeout(() => {
            document.querySelector(".search-input").focus();
        }, 300);
    }
}

