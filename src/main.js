// mobile nav

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon =  document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
})

// Slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  });

// faq
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const faqBtn = item.querySelector('.faq__btn');

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' :'ri-add-line';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  })

  
}) 

// scroll reveals animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  reset: true //resers animation
});

// hero
sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.hero__img');

// stats
sr.reveal('.stast__item', {
  delay: 500,
  distance: '100px',
  interval: 100,
  origin: 'top',
});

// services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  delay:600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
}); 

// appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

// team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// faq
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  delay: 600,
  distance: '100px',
   interval: 100,
   origin: 'bottom'
});


// departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

// blogs
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
delay: 600,
distance: '100px',
interval: 100,
origin: 'bottom',
});

// brands
sr.reveal('.brands', {
delay: 600,
distance: '100px',
interval: 100,
origin: 'bottom',
});

// newslatter
sr.reveal('.newsletter');
sr.reveal('.newslatter__container');

sr.reveal('.footer__item', {
delay: 600,
distance: '100px',
interval: 100,
origin: 'bottom',
});