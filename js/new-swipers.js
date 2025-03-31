const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000, // 5 seconds per slide
        disableOnInteraction: false,
    },
    speed: 1000, // 1-second transition for slow effect
    loop: true,
    allowTouchMove: true, // Enables touch swipe navigation
});