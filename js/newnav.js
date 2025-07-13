
(function () {
    "use strict";

  // function toggleScrolled() {
  //   const selectBody = document.querySelector('body');
  //   const selectHeader = document.querySelector('#header');
  //   if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  //   window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  // }

  // document.addEventListener('scroll', toggleScrolled);
  // window.addEventListener('load', toggleScrolled);


      //HIDING

        const ZohoemailLink = "info" + "@mercurymarineservices.com";
        const GmailemailLink = "ops.mercurymarine" + "@hotmail.com";
    document.getElementById("zoho-email").href = "mailto:" + ZohoemailLink;
    document.getElementById("zoho-email").innerText = ZohoemailLink;

    document.getElementById("gmail-email").href = "mailto:" + GmailemailLink;
    document.getElementById("gmail-email").innerText = GmailemailLink;

    //PATNERS swiper
    const patners = document.getElementById("mercury-patners");
    patners.innerHTML = `<div class="container">
    <h2 class="text-center text-primary mb-4">Our Trusted Partners & Affiliations</h2>
    <p class="text-center text-muted mb-4">
      Mercury Marine Services collaborates with key maritime authorities and professional bodies to maintain operational excellence and regulatory compliance.
    </p>
    
    <div class="swiper patnersSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure class="text-center">
            <img class="img-fluid lazyload " src="assets/patners/kpa-logo-mercury-marine-services.png" alt="Kenya Ports Authority Logo">
            <figcaption class="mt-2 small text-muted">Kenya Ports Authority</figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="text-center">
            <img class="img-fluid lazyload " src="assets/patners/kma-logo-mercury-marine-services.png" alt="Kenya Maritime Authority Logo">
            <figcaption class="mt-2 small text-muted">Kenya Maritime Authority</figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="text-center">
            <img class="img-fluid lazyload " src="assets/patners/imgs-logo-mercury-marine-services.png" alt="Institute of Marine Surveying Logo">
            <figcaption class="mt-2 small text-muted">Institute of Marine Surveying</figcaption>
          </figure>
        </div>
      </div>
      <div class="swiper-pagination mt-3"></div>
    </div>
  </div>`;

    var swiper = new Swiper("patnersSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });



/**
   * Mobile nav toggle
   */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});


/**
   * Scroll top button
   */
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);



  })();