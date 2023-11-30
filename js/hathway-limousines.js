var swiper1 = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {

    },

    navigation: {
      nextEl: ".my-swiper-button-next",
      prevEl: ".my-swiper-button-prev",
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
    
    
  });
  var swiper2 = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev2",
    },

 
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
    
    
  });
  
  const boc = document.getElementById('boc');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
boc.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});
