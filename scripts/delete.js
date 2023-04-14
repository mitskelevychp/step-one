let tabTitle = document.querySelectorAll(".services__tabs-title");
let firstTab = document.querySelectorAll(".services__tabs-title")[0];
let secondTab = document.querySelectorAll(".services__tabs-title")[1];

let allElementsTabsContent = document.querySelectorAll(
  ".services__tab-content"
);
for (let i of allElementsTabsContent) {
  i.classList.add("tabs-content__text");
}

let twoGroupElementsTabsContent = document.querySelectorAll(
  ".services__tab-content-two"
);

// //

tabTitle.forEach((item) => {
  item.addEventListener("click", selectTabNav);
});
function selectTabNav() {
  tabTitle.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

// функция активации таба 1 для всех постов
firstTab.addEventListener("click", showAllTabsContent);
function showAllTabsContent() {
  allElementsTabsContent.forEach((item) => item.classList.add("active"));
}
// функция активации таба 2 для избранных постов
secondTab.addEventListener("click", showTwoTabsContent);
function showTwoTabsContent() {
  allElementsTabsContent.forEach((item) => item.classList.remove("active"));
  twoGroupElementsTabsContent.forEach((item) => item.classList.add("active"));
}
