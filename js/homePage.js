$(document).ready(function () {
  $(".slider").slick({
    adaptiveHeight: true,
    dots: true, // Show navigation dots
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    // Add other settings and options as needed

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1027,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 378,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

// var video = document.getElementById("myVideo");
// var playButton = document.getElementById("playButton");

// playButton.addEventListener("click", function () {
//   if (video.paused) {
//     video.play();
//     playButton.innerHTML = "Pause Video";
//   } else {
//     video.pause();
//     playButton.innerHTML = "Play Video";
//   }
// });
// Use jQuery to handle Bootstrap carousel events
// Get the total number of slides and display it
$(document).ready(function () {
  var totalSlides = $(".carousel-item").length;
  $("#total-slides").text(totalSlides);
  var currentIndex = 1;

  $("#carouselExampleControls").on("slid.bs.carousel", function (e) {
    currentIndex = $(".carousel-item.active").index() + 1;
    $("#current-slide").text(currentIndex);
  });

  $("#prev-slide").click(function () {
    if (currentIndex === 1) {
      currentIndex = totalSlides;
    } else {
      currentIndex--;
    }
    $("#current-slide").text(currentIndex);
  });

  $("#next-slide").click(function () {
    if (currentIndex === totalSlides) {
      currentIndex = 1;
    } else {
      currentIndex++;
    }
    $("#current-slide").text(currentIndex);
  });
});
