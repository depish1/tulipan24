const hamburger = document.querySelector("#hamburger");
const navUl = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  console.log(navUl.classList);
  navUl.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener("scroll", function (event) {
    const windowOffsetTop = window.innerHeight * 0.7 + window.scrollY;
    const windowOffsetTop2 = window.pageYOffset + window.innerHeight / 2;
    const animatedBoxesH3 = document.querySelectorAll(".headline3__box");
    const animatedBoxesH4 = document.querySelectorAll(".headline4__box");
    const buttons = document.querySelectorAll(".offer__button");
    const navbar = document.querySelector("header");
    const logo = document.querySelector(".logo");

    const main = document.querySelector("#main");
    const offers = document.querySelector("#offers");
    const gMap = document.querySelector("#gMap");
    const contact = document.querySelector("#contact");
    console.log(offers);

    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky + 100) {
      navbar.classList.add("sticky");
      logo.classList.add("sticky-logo");
    } else {
      navbar.classList.remove("sticky");
      logo.classList.remove("sticky-logo");
    }

    if (offers != null) {
      [main, offers, gMap, contact].forEach((el) => {
        const menuElement = document.querySelector(`#${el.id}Link`);
        console.log(menuElement);
        if (
          windowOffsetTop2 >= el.offsetTop &&
          windowOffsetTop2 <= el.offsetTop + el.clientHeight
        ) {
          menuElement.classList.add("link--selected");
        } else {
          menuElement.classList.remove("link--selected");
        }
      });
    }

    Array.prototype.forEach.call(animatedBoxesH4, (animatedBox) => {
      const animatedBoxOffsetTop = animatedBox.offsetTop;
      if (windowOffsetTop >= animatedBoxOffsetTop) {
        animatedBox.classList.add("headline4__box--animate");
      } else {
        animatedBox.classList.remove("headline4__box--animate");
      }
    });

    Array.prototype.forEach.call(buttons, (button) => {
      const buttonOffsetTop = button.offsetTop;
      if (windowOffsetTop >= buttonOffsetTop) {
        button.classList.add("offer__button--animate");
      } else {
        button.classList.remove("offer__button--animate");
      }
    });

    Array.prototype.forEach.call(animatedBoxesH3, (animatedBox) => {
      const animatedBoxOffsetTop = animatedBox.offsetTop;
      if (windowOffsetTop >= animatedBoxOffsetTop) {
        animatedBox.classList.add("headline3__box--animate");
      } else {
        animatedBox.classList.remove("headline3__box--animate");
      }
    });
  });
});
