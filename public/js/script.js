var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});

var video_slide = document.querySelector('#uts-video-carousel')

if (video_slide != null) {
    var sd = new Splide('#uts-video-carousel', {
        perPage: 3,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
        classes: {
          arrows: 'splide__arrows',
          arrow: 'splide__arrow_vid',
          prev: 'splide__arrow--prev',
          next: 'splide__arrow--next',
        },
      }).mount(); 
} 

var sync_slide = document.querySelector('#uts-sync-carousel')

if (sync_slide != null) {

    var main = new Splide( '#main-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#uts-sync-carousel', {
    gap         : 30,
    rewind      : true,
    pagination  : false,
    perPage    : 4,
    isNavigation: true,
    breakpoints : {
      600: {
        perPage: 2,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();

}

var portfolio_carousel = document.querySelector('#uts-portfolio-carousel')

if (portfolio_carousel != null) {

      new Splide( '#uts-portfolio-carousel', {
    perPage    : 4,
    breakpoints: {
        640: {
            perPage: 1,
        },
    }, 
    classes: {
            arrows: 'splide__arrows',
            arrow : 'splide__arrow_vid',
            prev  : 'splide__arrow--prev',
            next  : 'splide__arrow--next',
    },        
} ).mount();

}


// document.body.classList.remove('sidebar-open')
// var body = document.querySelector('body')
// document.querySelector('.side-close').onclick = function () {
//     body.classList.remove('sidebar-open')
// }

// document.querySelector('.mobile-tap').onclick = function () {
//     body.classList.add('sidebar-open')
// }

// document.querySelector('.menu .plus').onclick = function () {
//     this.parentNode.nextSibling.classList.toggle('show-sub')
// }

// var mobile_expand = document.querySelectorAll('.mobile-navigation .is-parent')

// mobile_expand.forEach((item, index) => {
//     let _parent = item.querySelector(".plus");
//     _parent.onclick = function () {
//         this.parentNode.nextSibling.classList.toggle('show-sub')
//     }

// })

//******* */

var next_post = document.querySelector('.blog-navigation .next')
if (next_post != null) {
  next_post.addEventListener('click', fetchData)
  async function fetchData() {
    var res = await fetch('https://webangon.com/abr/wp-json/wp/v2/uts_posts',{
      //mode: 'no-cors'
    })
    const xyz =  await res.json();
    console.log(xyz)
  }
}

window.onscroll = function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > 0) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
};


document.querySelector('.menuBtn').onclick = function () {
  this.parentNode.parentNode.classList.toggle('showMenu')
}

var sliderItems = document.querySelector('.sliderItems')
if (sliderItems != null) {
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("sliderItem");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
          slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }
}



var clientSliders = document.querySelector('.clientSliders')
if (clientSliders != null) {
  let slideIndex1 = 1;
  showSlides1(slideIndex1);
  
  function clientSlider(n) {
      showSlides1(slideIndex1 = n);
  }
  
  function showSlides1(n) {
      let i;
      let slides = document.getElementsByClassName("clientSlider");
      let dots = document.getElementsByClassName("dotitm");
      if (n > slides.length) {
          slideIndex1 = 1
      }
      if (n < 1) {
          slideIndex1 = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active1", "");
      }
      slides[slideIndex1 - 1].style.display = "block";
      dots[slideIndex1 - 1].className += " active1";
  }
}



var tabLinks = document.querySelectorAll(".tablinks");
if (tabLinks != null) {
  var tabContent = document.querySelectorAll(".tabcontent");
  tabLinks.forEach(function (el) {
      el.addEventListener("click", openTabs);
  });
  
  function openTabs(el) {
      var btn = el.currentTarget;
      var electronic = btn.dataset.electronic;
      tabContent.forEach(function (el) {
          el.classList.remove("active");
      });
      tabLinks.forEach(function (el) {
          el.classList.remove("active");
      });
      document.querySelector("#" + electronic).classList.add("active");
      btn.classList.add("active");
  }
}

