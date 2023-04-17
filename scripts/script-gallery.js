/* BLOCK 8 - GALLERY */
let loadButton = document.querySelector(".gallery__load-button");
let loadButtonImg = document.querySelector(".gallery__load-button-img");
let loadButtonText = document.querySelector(".gallery__load-button-text");

loadButton.addEventListener("click", showLoadProcess);

// // someFunction - show pictures after a click
// function showLoadProcess() {
//   show(loadButton, loadButtonImg, loadButtonText, 2000, someFunction);
// }

function showLoadProcess() {
  setTimeout(startProcess, 0);
  function startProcess() {
    loadButton.classList.add("button-loading", "button-loading::after");
    loadButtonImg.classList.add("button-loading__img");
    loadButtonText.classList.add("button-loading__text");
  }

  setTimeout(stopProcess, 2000);
  function stopProcess() {
    loadButton.classList.remove("button-loading", "button-loading::after");
    loadButtonImg.classList.remove("button-loading__img");
    loadButtonText.classList.remove("button-loading__text");
  }
}
