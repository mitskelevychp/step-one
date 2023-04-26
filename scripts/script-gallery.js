/* BLOCK 8 - GALLERY */
// var grid = document.querySelector(".grid");
// var msnry = new Masonry(grid, {
//   // options
//   // itemSelector: '.grid-item',
//   // columnWidth: 5,
//   gutter: 18,
//   horizontalOrder: true,
// });

var grid = document.querySelector(".grid");
var msnry = null;

window.addEventListener('load', function() {
  msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 19,
    // horizontalOrder: true,
  });
});

//
// button
let loadButton = document.querySelector(".gallery__load-button");
let galleryPictures = document.querySelectorAll(".grid-item");
let loadButtonImg = document.querySelector(".gallery__load-button-img");
let loadButtonText = document.querySelector(".gallery__load-button-text");

loadButton.addEventListener("click", showLoadProcess);

// someFunction - show pictures after a click using a pattern "script-work-examples.js"
function showLoadProcess() {
  show(loadButton, loadButtonImg, loadButtonText, 2000, someFunction);
}

function someFunction() {
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
      let randPictures = rand > 0.9 ? 1 : rand > 0.8 ? 2 : rand > 0.7 ? 3 : rand > 0.6 ? 4 : rand > 0.5 ? 5 : rand > 0.4 ? 6 : rand > 0.3 ? 7 : rand > 0.2 ? 8 : rand > 0 ? 9 : "";
      let img = `<img src="./images/other/gallery-of-best-images-${randPictures}.jpg" alt="" />`;
      elem.className = "grid-item";
      elem.insertAdjacentHTML("afterbegin", img);
      return elem;
    }
  }
  func();
}
