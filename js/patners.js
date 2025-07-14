document.addEventListener('DOMContentLoaded', () => {
  // Fetch partners data
  fetch('/assets/partners.json')
    .then((response) => {
      if (!response.ok) throw new Error('Failed to load partners data');
      return response.json();
    })
    .then((partners) => {
      // Get section
      const patnersSection = document.getElementById('mercury-patners');
      
      // Generate Swiper HTML
      const slides = partners
        .map(
          (partner) => `
            <div class="swiper-slide">
              <figure class="text-center">
                <img class="img-fluid" src="${partner.logo}" alt="${partner.alt}" loading="lazy">
                <figcaption class="mt-2 small text-muted">${partner.name}</figcaption>
              </figure>
            </div>
          `
        )
        .join('');

      // Inject HTML
      patnersSection.innerHTML = `
        <div class="container showcase-text lead my-auto">
          <h2 class="text-center  mb-4">Our Trusted Partners & Affiliations</h2>
          <p class="text-center">
            Mercury Marine Services collaborates with key maritime authorities and professional bodies to maintain operational excellence and regulatory compliance.
          </p>
          <div class="swiper patnersSwiper">
            <div class="swiper-wrapper">${slides}</div>
            <div class="swiper-pagination mt-3"></div>
          </div>
        </div>
      `;

      // Initialize Swiper
      new Swiper('.patnersSwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.patnersSwiper .swiper-pagination',
          clickable: true,
        },
        autoplay:true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
    })
    .catch((error) => {
      console.error('Error loading partners:', error);
      document.getElementById('mercury-patners').innerHTML = `
        <div class="container text-center">
          <p class="text-danger">Failed to load partners. Please try again later.</p>
        </div>
      `;
    });
});