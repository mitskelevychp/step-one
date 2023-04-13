/* BLOCK 3 - OUR SERVICES */
let tab = function () {
  // 1. take elements
  let tabTitle = document.querySelectorAll(".services__tabs-title");
  let tabContent = document.querySelectorAll(".tabs-content__text");
  // variable for compare
  let activeTab;

  // 2. create Event for click on tab
  tabTitle.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  function selectTabNav() {
    // first delete active class
    tabTitle.forEach((item) => item.classList.remove("active"));
    // add active class after click
    this.classList.add("active");
    //take values of tabs's children attributes ("tab+number")
    activeTab = this.getAttribute("tabs-title-number");
    selectTabContent(activeTab);
  }

  // 3. create connection with content
  /* look at tabContent:
  - take values of tabs children attributes;
  - if attribute "class" of element tabContent has value === value attribute activeTab (tabs-title-number) ==> add class "active", no ==> remove
  */
  function selectTabContent(activeTab) {
    tabContent.forEach((item) => {
      item.classList.contains(activeTab)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};
tab();
/* BLOCK 3 - OUR SERVICES */

/* BLOCK 5 - WORK EXAMPLES */
let workExamplesButton = document.querySelector(".purchase-section__button");
let workExamplesHidePicturesOne = document.querySelectorAll(
  ".work-examples__content-hidden-part1"
);
let workExamplesHidePicturesTwo = document.querySelectorAll(
  ".work-examples__content-hidden-part2"
);
let number = false;

function func() {
  if (!number) {
    for (let i = 0; i < workExamplesHidePicturesOne.length; i++) {
      workExamplesHidePicturesOne[i].classList.remove(
        "work-examples__content-hidden-part1"
      );
    }
    number = true;
  } else {
    for (let i = 0; i < workExamplesHidePicturesTwo.length; i++) {
      workExamplesHidePicturesTwo[i].classList.remove(
        "work-examples__content-hidden-part2"
      );
    }
    workExamplesButton.classList.add("purchase-section__button-nonvisible");
  }
}

workExamplesButton.addEventListener("click", func);

/* BLOCK 5 - WORK EXAMPLES */
