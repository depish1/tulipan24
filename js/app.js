import images from "./images";
import { categoryList } from "./images";
const hamburger = document.querySelector("#hamburger");
const navUl = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  document.querySelector(".icon-menu").classList.toggle("none");
  document.querySelector(".icon-cancel").classList.toggle("none");
  navUl.classList.toggle("show");
});

const renderImages = (dest, categories, images) => {
  categories.forEach(({ categoryName, nameToShow }) => {
    const section = document.getElementById(categoryName);
    const newContainer = document.createElement("article");

    newContainer.classList.add("gallery__photo-container");
    images
      .filter((image) => image.category == categoryName)
      .forEach((filteredImage) => {
        newContainer.insertAdjacentHTML(
          "beforeend",
          `<img src="./assets/gallery/${categoryName}/light/${filteredImage.fileName}" data-fileName="${filteredImage.fileName}" data-category="${filteredImage.category}" alt="Zdjęcie kwiatów" class="gallery__photo">`
        );
      });
    section.appendChild(newContainer);
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  const gallery = document.querySelector(".gallery");

  if (gallery) {
    renderImages(gallery, categoryList, images);

    let isModalOpen = false;
    const modal = document.getElementById("modal");
    const showImgInModal = (e) => {
      if (e.target.tagName != "IMG") return;
      if (isModalOpen) return;
      isModalOpen = true;
      const imgWeight = window.innerWidth < 1000 ? "mobile" : "full";
      const path = `./assets/gallery/${e.target.dataset.category}/${imgWeight}/${e.target.dataset.filename}`;
      const modalContent = document.getElementById("modalContent");
      modalContent.innerHTML = `<span id='close' class="gallery__modal-close">&times;</span><img src="${path}">`;
      modal.classList.toggle("none");
    };

    const closeModal = (e) => {
      console.log(e.target.id);
      if (!isModalOpen) return;
      if (!["modal", "close"].includes(e.target.id)) return;
      isModalOpen = false;
      modal.classList.toggle("none");
    };

    modal.addEventListener("click", (e) => {
      closeModal(e);
    });
    gallery.addEventListener("click", (e) => {
      showImgInModal(e);
    });
  }

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
