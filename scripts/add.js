/* BLOCK 3 - OUR SERVICES */
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
/* BLOCK 3 - OUR SERVICES */
