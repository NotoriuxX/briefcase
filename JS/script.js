
//crea una clase al bajar 
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY>50);
});

//crea una clase alprecionar toggle
const toggle = document.querySelector('.toggle')
const link = document.querySelector('header')
const puro = document.querySelector('.items')

toggle.addEventListener('click', () => {
  link.classList.toggle('active')
})
puro.addEventListener('click', ()=>{
  link.classList.toggle('active')
})

// efecto moverce con suavidad 
let button = document.querySelectorAll('.text__navbar');
  button.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  




  (function () {
    var slidersContainer = document.querySelector(".sliders-container");
  
    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--numbers",
      range: [1, 4],
      rangeContent: function (i) {
        return "0" + i;
      },
      style: {
        transform: [{ scale: [0.4, 1] }],
        opacity: [0, 1]
      },
      interactive: false
    });
  
    // Initializing the titles slider
    var titles = [
      "King of the Ring Fight",
      "Sound of Streets",
      "Urban Fashion",
      "Windy Sunset"
    ];
    var msTitles = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--titles",
      range: [0, 3],
      rangeContent: function (i) {
        return "<h3>" + titles[i] + "</h3>";
      },
      vertical: true,
      reverse: true,
      style: {
        opacity: [0, 1]
      },
      interactive: false
    });
  
    // Initializing the links slider
    var msLinks = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--links",
      range: [0, 3],
      rangeContent: function () {
        return '<a class="ms-slide__link">View Case</a>';
      },
      vertical: true,
      interactive: false
    });
  
    // Get pagination items
    var pagination = document.querySelector(".pagination");
    var paginationItems = [].slice.call(pagination.children);
  
    // Initializing the images slider
    var msImages = new MomentumSlider({
      // Element to append the slider
      el: slidersContainer,
      // CSS class to reference the slider
      cssClass: "ms--images",
      // Generate the 4 slides required
      range: [0, 3],
      rangeContent: function () {
        return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
      },
      // Syncronize the other sliders
      sync: [msNumbers, msTitles, msLinks],
      // Styles to interpolate as we move the slider
      style: {
        ".ms-slide__image": {
          transform: [{ scale: [1.5, 1] }]
        }
      },
      // Update pagination if slider change
      change: function (newIndex, oldIndex) {
        if (typeof oldIndex !== "undefined") {
          paginationItems[oldIndex].classList.remove("pagination__item--active");
        }
        paginationItems[newIndex].classList.add("pagination__item--active");
      }
    });
  
    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener("click", function (e) {
      if (e.target.matches(".pagination__button")) {
        var index = paginationItems.indexOf(e.target.parentNode);
        msImages.select(index);
      }
    });
  })();
  

  //GOOGLE MAPS
  function iniciarMap(){
    var coord = {lat: -34.177751 , lng: -70.773652};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom:12,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }