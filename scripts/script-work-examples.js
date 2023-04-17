/* BLOCK 5 - WORK EXAMPLES */
let weTabTitle = document.querySelectorAll(".work-examples__tabs-title");
let weAllTab = document.querySelector(".we__tabs-title-one");
let weGraphDesignTab = document.querySelector(".we__tabs-title-two");
let weWebDesignTab = document.querySelector(".we__tabs-title-three");
let weLandingTab = document.querySelector(".we__tabs-title-four");
let weWordpressTab = document.querySelector(".we__tabs-title-five");

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

let weButton = document.querySelector(".we__load-button");
let weButtonImg = document.querySelector(".we__load-button-img");
let weButtonText = document.querySelector(".we__load-button-text");

// tabs
// take all tabs-content
let weAllTabsContent = document.querySelectorAll(".we__content");
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
showTabsContent(weAllTabsContent, 0, 12);

// make style for active tabs
weTabTitle.forEach((item) => {
  item.addEventListener("click", selectWorkExamplesTab);
});
function selectWorkExamplesTab() {
  weTabTitle.forEach((item) => item.classList.remove("aktive"));
  this.classList.add("aktive");
}

// pictures
// showing next 12 pictures after a click on button + last 12
let number = false;

function showNextTabsContent() {
  function showPictures() {
    //
    if (!number) {
      showTabsContent(weAllTabsContent, 12, 24);
      number = true;
    } else {
      showTabsContent(weAllTabsContent, 24, weAllTabsContent.length);
      weButton.classList.add("hidden");
      number = false;
    }
  }
  // for showing a process of downloading using the pattern below
  weButton.addEventListener("click", showLoadProcess);
  function showLoadProcess() {
    show(weButton, weButtonImg, weButtonText, 2000, showPictures);
  }
}
showNextTabsContent();

// pattern
function show(a, b, c, time, func) {
  setTimeout(startProcess, 0);
  function startProcess() {
    a.classList.add("button-loading", "button-loading::after");
    b.classList.add("button-loading__img");
    c.classList.add("button-loading__text");
  }

  setTimeout(stopProcess, time);
  function stopProcess() {
    a.classList.remove("button-loading", "button-loading::after");
    b.classList.remove("button-loading__img");
    c.classList.remove("button-loading__text");
    func();
  }
}
//

// showing all pictures after the click on each of the Category
weAllTab.addEventListener("click", showAllCategoryContent);
function showAllCategoryContent() {
  weButton.classList.remove("hidden");
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }
  showTabsContent(weAllTabsContent, 0, 12);
}

// a pattern
function showCategoryContent(arrCategory) {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }

  for (let i of arrCategory) {
    i.classList.remove("hidden");
  }
  weButton.classList.add("hidden");
}
//

// showing all pictures on each of the Catagiry after a click using the pattern above
weGraphDesignTab.addEventListener("click", showGraphDesignCategoryContent);
function showGraphDesignCategoryContent() {
  showCategoryContent(picturesGraphDesign);
}

weWebDesignTab.addEventListener("click", showWebDesignCategoryContent);
function showWebDesignCategoryContent() {
  showCategoryContent(picturesWebDesign);
}

weLandingTab.addEventListener("click", showLandingCategoryContent);
function showLandingCategoryContent() {
  showCategoryContent(picturesLandingDesign);
}

weWordpressTab.addEventListener("click", showWordpressCategoryContent);
function showWordpressCategoryContent() {
  showCategoryContent(picturesWordpressDesign);
}
