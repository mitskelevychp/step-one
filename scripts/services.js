/* BLOCK 3 - OUR SERVICES */

//
// Add elements
let allElementsTabsContent = document.querySelector(
  ".services__tabs-content"
).children;

// add class "tabs-content__text" for children "tabs-content"
for (let i of allElementsTabsContent) {
  i.classList.add("tabs-content__text");
}

// need this for connection with content and compare ==> add active class
for (let i = 0; i < allElementsTabsContent.length; i++) {
  allElementsTabsContent[i].classList.add(`tab-${i + 1}`);
}

// add attribute "tabs-title-number" + values for children "tabs"
let allElementsTabsTitle = document.querySelectorAll(".services__tabs-title");
allElementsTabsTitle.forEach((elem) =>
  elem.setAttribute("tabs-title-number", "")
);
// need this for connection with tubs and compare ==> add active class
for (let i = 0; i < allElementsTabsTitle.length; i++) {
  allElementsTabsTitle[i].setAttribute("tabs-title-number", `tab-${i + 1}`);
}

//
// Do code
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
