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

// showing all pictures after the click on the All Category
weAllTab.addEventListener("click", showAllCategoryContent);

function showAllCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.remove("hidden");
  }
  weButton.classList.add("hidden");
}

// showing all pictures of Graphic Design Category after the click on the Graphic Design Category
weGraphDesignTab.addEventListener("click", showGraphDesignCategoryContent);

function showGraphDesignCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }

  for (let i of picturesGraphDesign) {
    i.classList.remove("hidden");
  }
  weButton.classList.add("hidden");
}

// showing all pictures of Web Design Category after the click on the Web Design Category
weWebDesignTab.addEventListener("click", showWebDesignCategoryContent);

function showWebDesignCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }

  for (let i of picturesWebDesign) {
    i.classList.remove("hidden");
  }
  weButton.classList.add("hidden");
}

// showing all pictures of Landing Category after the click on the Landing Category
weLandingTab.addEventListener("click", showLandingCategoryContent);

function showLandingCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }

  for (let i of picturesLandingDesign) {
    i.classList.remove("hidden");
  }
  weButton.classList.add("hidden");
}

// showing all pictures of Landing Category after the click on the Landing Category
weWordpressTab.addEventListener("click", showWordpressCategoryContent);

function showWordpressCategoryContent() {
  for (let i of weAllTabsContent) {
    i.classList.add("hidden");
  }

  for (let i of picturesWordpressDesign) {
    i.classList.remove("hidden");
  }
  weButton.classList.add("hidden");
}
