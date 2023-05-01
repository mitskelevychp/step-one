/* BLOCK 8 - GALLERY */

//
// Grid Mansory
// connection
var grid = document.querySelector(".gallery");
var msnry = null;

// without the Window object pictures are showing not correctly
window.addEventListener("load", function () {
  msnry = new Masonry(grid, {
    itemSelector: ".gallery-item",
    columnWidth: ".gallery-sizer",
    gutter: 19,
  });
});

//
// button
let loadButton = document.querySelector(".gallery__load-button");
let galleryPictures = document.querySelectorAll(".gallery-item");
let loadButtonImg = document.querySelector(".gallery__load-button-img");
let loadButtonText = document.querySelector(".gallery__load-button-text");

loadButton.addEventListener("click", showLoadProcess);

//
// show pictures after a click using a pattern from "work-examples.js"
function showLoadProcess() {
  show(loadButton, loadButtonImg, loadButtonText, 2000, showRandomPictures);
}

function showRandomPictures() {
  function func() {
    let elems = [];
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
      let elem = getItemElement();
      fragment.appendChild(elem);
      elems.push(elem);
    }
    // append elements to container
    grid.appendChild(fragment);
    // add and lay out newly appended elements
    msnry.appended(elems);

    function getItemElement() {
      let elem = document.createElement("div");
      let rand = Math.random();
      let randPictures =
        rand > 0.9
          ? 1
          : rand > 0.8
          ? 2
          : rand > 0.7
          ? 3
          : rand > 0.6
          ? 4
          : rand > 0.5
          ? 5
          : rand > 0.4
          ? 6
          : rand > 0.3
          ? 7
          : rand > 0.2
          ? 8
          : rand > 0
          ? 9
          : "";
      let img = `<img src="./images/other/gallery-of-best-images-${randPictures}.jpg" alt="" />`;
      elem.className = "gallery-item";
      elem.insertAdjacentHTML("afterbegin", img);
      return elem;
    }
  }
  func();
}
