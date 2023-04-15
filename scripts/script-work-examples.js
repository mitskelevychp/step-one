/* BLOCK 5 - WORK EXAMPLES */
let weTabTitle = document.querySelectorAll(".work-examples__tabs-title");
let weAllTab = document.querySelector(".we__tabs-title-one");
let weGraphDesignTab = document.querySelector(".we__tabs-title-two");
let weWebDesignTab = document.querySelector(".we__tabs-title-three");
let weLandingTab = document.querySelector(".we__tabs-title-four");
let weWordpressTab = document.querySelector(".we__tabs-title-five");

// take all tabs-content
let weAllTabsContent = document.querySelectorAll(".we__content");
// make all tabs hidden
// take first 11 tabs-content for good lookung the page and + class active
for (let i of weAllTabsContent) {
  i.classList.add("hidden");
}
function showTabsContent(mainArray, first, last) {
  const arr = [];
  for (let i = first; i < last; i++) {
    arr.push(mainArray[i]);
  }
  arr.forEach(showFirstItems);
  function showFirstItems(elem) {
    elem.classList.remove("hidden");
  }
}
showTabsContent(weAllTabsContent, 0, 11);

// make style for active tabs
weTabTitle.forEach((item) => {
  item.addEventListener("click", selectWorkExamplesTab);
});
function selectWorkExamplesTab() {
  weTabTitle.forEach((item) => item.classList.remove("aktive"));
  this.classList.add("aktive");
}

// create attributes for categories of pictures
let picturesGraphDesign = document.querySelectorAll(
  "[data-category='graph-design']"
);
let picturesWebDesign = document.querySelectorAll(
  "[data-category='web-design']"
);
let picturesLandingDesign = document.querySelectorAll(
  "[data-category='landing']"
);
let picturesWordpressDesign = document.querySelectorAll(
  "[data-category='wordpress']"
);

// showing next 12 pictures after a click on button + last 12
// take button
let weButton = document.querySelector(".purchase-section__button");
//  make function for first and second clic on the batton + show next 12 pictures (№12 - 23)
// make a pattern for all categories of tabs
function chooseCategory(
  showFunction,
  arr,
  nextFirst,
  nextLast,
  lastFirst,
  lastLast
) {
  if (!number) {
    showFunction(arr, nextFirst, nextLast);
    number = true;
  } else {
    showFunction(arr, lastFirst, lastLast);
    weButton.classList.add("hidden");
    number = false;
  }
}

// use the pattern
let number = false;

function showNextTabsContent() {
  function showPictures() {
    chooseCategory(
      showTabsContent,
      weAllTabsContent,
      11,
      23,
      23,
      weAllTabsContent.length
    );
  }
  weButton.addEventListener("click", showPictures);
}
showNextTabsContent();

// showing first 11 after the click on the All Category
// showing next 12 pictures + last 12 pictures after the click on the button
weAllTab.addEventListener("click", showAllCategoryContent);

function showAllCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }
  showTabsContent(weAllTabsContent, 0, 11);
  weButton.classList.remove("hidden");
}

// showing first 11 after the click on the Graphic Design Category
// showing next 12 pictures + last 12 pictures after the click on the button
weGraphDesignTab.addEventListener("click", showGraphDesignCategoryContent);

function showGraphDesignCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }

  for (let i of picturesGraphDesign) {
    i.classList.remove("hidden");
  }

  if (picturesGraphDesign.length < 12) {
    weButton.classList.add("hidden");
  }
  // else {
  //   if (!number) {
  //     showFunction(arr, nextFirst, nextLast);
  //     number = true;
  //   } else {
  //     showFunction(arr, lastFirst, lastLast);
  //     weButton.classList.add("hidden");
  //     number = false;
  //   }
  // }
}

// function func() {
//   const arr = [];
//   for (let i = 0; i < weGraphDesignTab.length; i++) {
//     arr.push(weGraphDesignTab[i]);
//   }
//   arr.forEach((elem) => elem.classList.remove("hidden"));
// }
// func();

// if (picturesGraphDesign.length < 12) {
//   weButton.classList.remove("hidden");
// }

//

// showing first 11 after the click on the Web Design Category
// showing next 12 pictures + last 12 pictures after the click on the button
// weGraphDesignTab.addEventListener("click", showAllCategoryContentDELETE);

// function showAllCategoryContentDELETE() {
//   for (let i of weAllTabsContent) {
//     i.classList.add("hidden");
//   }
//   showTabsContent(picturesGraphDesign, 0, 11);
//   weButton.classList.remove("hidden");
// }

// Общая функция для всех, кроме All
// function showContent(a) {
//   weAllTabsContent.forEach((item) => item.classList.remove("active"));
//   a.forEach((item) => item.classList.add("active"));
// }

// weGraphDesignTab.addEventListener("click", () =>
//   showContent(picturesGraphDesign)
// );

// weWebDesignTab.addEventListener("click", () => showContent(picturesWebDesign));

// weLandingTab.addEventListener("click", () =>
//   showContent(picturesLandingDesign)
// );

// weWordpressTab.addEventListener("click", () =>
//   showContent(picturesWordpressDesign)
// );
