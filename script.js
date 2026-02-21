let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

 let currentSlide = 0;
        const itemsPerRow = 1; // Number of items to show per row
        const serviceItems = document.querySelectorAll('.service-item');
        const totalSlides = Math.ceil(serviceItems.length / itemsPerRow); // Total number of "slides" (pairs of images)
        const carousel = document.querySelector('.service-carousel');
        
        function moveSlide(direction) {
            currentSlide += direction;
        
            // Ensure currentSlide stays within bounds
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
        
            // Calculate width of a service item and translate the carousel
            const slideWidth = document.querySelector('.service-item').offsetWidth;
            carousel.style.transform = `translateX(-${currentSlide * slideWidth * itemsPerRow}px)`;
        }
        
        // Add window resize event listener to ensure proper carousel width on resize
        window.addEventListener('resize', () => {
            const slideWidth = document.querySelector('.service-item').offsetWidth;
            carousel.style.transform = `translateX(-${currentSlide * slideWidth * itemsPerRow}px)`;
        });


         // Get the button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show the button when the user scrolls down 300px from the top of the page
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll to the top of the page when the user clicks the button
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Wait for the page to fully load
window.addEventListener("load", function () {
    // Hide the preloader
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  
    // Show the main content
    const content = document.getElementById("content");
    content.style.display = "block";
  });
  


  // قفل المنيو لما تختار قسم من الأقسام
window.onscroll = () => {
    Navbar.classList.remove('active');
};



// تحديد كل الأقسام وكل لينكات الـ Navbar
const sections = document.querySelectorAll('section, .home');
const navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // بنشوف أنت واقف في أنهي جزء دلوقتي
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link'); // نشيل الخط من الكل
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active-link'); // نحط الخط للي أنت واقف عنده
        }
    });
});



// تشغيل السلايدر (Home Slider)
var swiper = new Swiper(".home-slid", {
    loop: true,              // يخلي السلايدر يلف ميعملش ستوب
    grabCursor: true,        // شكل الماوس يتغير لما تقف عليه
    autoplay: {
        delay: 4000,         // يغير الصورة كل 4 ثواني
        disableOnInteraction: false, // يفضل شغال حتى لو المستخدم حرك السلايد بيده
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,     // النقط اللي تحت تبقي قابلة للضغط
    },
});