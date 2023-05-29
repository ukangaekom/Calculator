const menubar = document.querySelector(".menu_bar");
const accordionbar = document.querySelector(".accordion_1");
const mountain1 = document.querySelector(".mountain1");
const mountain2 = document.querySelector(".mountain2");
const rightslide = document.querySelector(".next_arrow");
const leftslide = document.querySelector(".previous_arrow");
const slideImages = document.querySelectorAll(".slideimg");
const slideContainer = document.querySelector(".photo_content");
const slideButtons = document.querySelectorAll(".button");
const navLinks = document.querySelectorAll(".nav_link");
const navLists = document.querySelectorAll(".nav_list");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const linkbar = link.parentElement.parentElement.parentElement;
    let classAttributes = linkbar.getAttribute("class").split(" ");
    classAttributes[1] == "nav_list1"
      ? MenuBarAnimation()
      : AccrodionBarAnimation();
  });
});

const MenuBarAnimation = () => {
  document.querySelector(".bar1").classList.toggle("bar1_rotate");
  document.querySelector(".bar2").classList.toggle("bar2_vanish");
  document.querySelector(".bar3").classList.toggle("bar3_rotate");
  document.querySelector(".nav_list1").classList.toggle("hide");
};

const AccrodionBarAnimation = () => {
  document.querySelector(".nav_list2").classList.toggle("hide");
  document.querySelector(".accordion_1").classList.toggle("show_close");
};

menubar.addEventListener("click", MenuBarAnimation);
accordionbar.addEventListener("click", AccrodionBarAnimation);

mountain1.addEventListener("click", function () {
  document.querySelector(".team").style.background = "url(/img/team_peak.png)";
});
mountain2.addEventListener("click", function () {
  document.querySelector(".team").style.background = "url(/img/mountain2.png)";
});

// Let first image width
let firstImg = slideImages[0];
let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth =
  firstImg.parentElement.clientWidth + firstImg.parentElement.clientWidth / 10;
let slide_tracker = 0;
let max_scrollWidth = firstImgWidth * (slideImages.length - 1);

slideButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    scroll = index * firstImgWidth;
    slide_tracker = -scroll;

    slideContainer.style.transform = `translate(${slide_tracker}px)`;
    hideSlideBar();
    slideButton();
  });
});

const slideButton = () => {
  slideButtons.forEach((button, index) => {
    let buttonSlide = index * firstImgWidth;
    if (buttonSlide == -slide_tracker) {
      button.classList.add("glow");
    } else {
      button.classList.remove("glow");
    }
  });
};

rightslide.addEventListener("click", function () {
  if (slide_tracker <= -max_scrollWidth) {
    slide_tracker = -max_scrollWidth;
  } else {
    slide_tracker -= firstImgWidth;
  }

  slideContainer.style.transform = `translate(${slide_tracker}px)`;

  console.log(slide_tracker);
  hideSlideBar();
  slideButton();
});
leftslide.addEventListener("click", function () {
  if (slide_tracker >= 0) {
    slide_tracker = 0;
  } else {
    slide_tracker += firstImgWidth;
  }

  slideContainer.style.transform = `translate(${slide_tracker}px)`;
  console.log(slide_tracker);
  hideSlideBar();
  slideButton();
});

const hideSlideBar = () => {
  leftslide.style.display = slide_tracker == 0 ? "none" : "flex";
  rightslide.style.display =
    slide_tracker == -max_scrollWidth ? "none" : "flex";
};

//  THIS IS FOR CURSOR SCROLLING

// const dragStart = (e) => {
//   //updating global variable value on mouse donw event
//   isDragStart = true;
//   prevPageX = e.pageX;
//   prevScrollLeft = slideContainer.scrollLeft;
// };

// const dragging = (e) => {
//   // scrolling images/carousel to left according to mouse pointer
//   if (!isDragStart) return;
//   e.preventDefault();
//   let positionDiff = e.pageX - prevPageX;
//   slideContainer.scrollLeft = positionDiff;
//   hideSlideBar();
// };

// const dragStop = () => {
//   isDragStart = false;
// };
// slideContainer.addEventListener("mousedown", dragStart);
// slideContainer.addEventListener("mousemove", dragging);
// slideContainer.addEventListener("mouseup", dragStop);

hideSlideBar();
