/* BLOCK 5 - WORK EXAMPLES */

//
// Variables
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
let picturesLanding = document.querySelectorAll("[data-category='landing']");
let picturesWordpress = document.querySelectorAll(
  "[data-category='wordpress']"
);

let weButton = document.querySelector(".we__load-button");
let weButtonImg = document.querySelector(".we__load-button-img");
let weButtonText = document.querySelector(".we__load-button-text");

//
// Tabs
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
  item.addEventListener("click", selectWEtab);
});
function selectWEtab() {
  weTabTitle.forEach((item) => item.classList.remove("aktive"));
  this.classList.add("aktive");
}

//
// Pictures
// Showing next 12 pictures after a click on button + last 12
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

// a pattern
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

//
// Showing all pictures after the click on each of the Category
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
weGraphDesignTab.addEventListener("click", showGraphDesignContent);
function showGraphDesignContent() {
  showCategoryContent(picturesGraphDesign);
}

weWebDesignTab.addEventListener("click", showWebDesignContent);
function showWebDesignContent() {
  showCategoryContent(picturesWebDesign);
}

weLandingTab.addEventListener("click", showLandingContent);
function showLandingContent() {
  showCategoryContent(picturesLanding);
}

weWordpressTab.addEventListener("click", showWordpressContent);
function showWordpressContent() {
  showCategoryContent(picturesWordpress);
}

//
//
// let pictureOne = document.querySelector(".picture-one");
// let center = document.querySelector(".center");
// let pictureTwoHTML =
//   "<div class='overlay'><div class='overlay__icons-wrapper'><div class='overlay__icons-background'><img src='./images/icons/our-amazing-work-icon-2.svg' alt='icon2'/></div><div class='overlay__icons-background'><div class='overlay__icon'></div></div></div><p>creative design</p><a href='#'>landing pages</a></div>";

// center.insertAdjacentHTML("beforeend", pictureTwoHTML);
// let pictureTwo = center.querySelector(".overlay");
// pictureTwo.style.display = "none";

// pictureOne.addEventListener("mouseover", funcOne);
// center.addEventListener("mouseout", funcTwo);

// function funcOne() {
//   pictureTwo.style.display = "block";
// }

// function funcTwo(event) {
//   if (!event.relatedTarget || !event.relatedTarget.closest(".overlay")) {
//     pictureTwo.style.display = "none";
//   }
// }
