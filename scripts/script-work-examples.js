/* BLOCK 5 - WORK EXAMPLES */
let workExamplesTabTitle = document.querySelectorAll(
  ".work-examples__tabs-title"
);
let workExamplesAllTab = document.querySelector(
  ".work-examples__tabs-title-one"
);
let workExamplesGraphDesignTab = document.querySelector(
  ".work-examples__tabs-title-two"
);
let workExamplesWebDesignTab = document.querySelector(
  ".work-examples__tabs-title-three"
);
let workExamplesLandingTab = document.querySelector(
  ".work-examples__tabs-title-four"
);
let workExamplesWordpressTab = document.querySelector(
  ".work-examples__tabs-title-five"
);

let workExamplesAllTabsContent = document.querySelectorAll(".we__content-one");
for (let i of workExamplesAllTabsContent) {
  i.classList.add("work-examples__content-hidden");
}

let picturesGraphDesign = document.querySelectorAll(".graph-design");
let picturesWebDesign = document.querySelectorAll(".web-design");
let picturesLandingDesign = document.querySelectorAll(".landing");
let picturesWordpressDesign = document.querySelectorAll(".wordpress");

// установка стиля активного состояния кнопок-табов
workExamplesTabTitle.forEach((item) => {
  item.addEventListener("click", selectWorkExamplesTab);
});
function selectWorkExamplesTab() {
  workExamplesTabTitle.forEach((item) =>
    item.classList.remove("work-examples-aktive")
  );
  this.classList.add("work-examples-aktive");
}

// показ следующих 12 при клике на кнопку Загрузить больше ДО перехода по вкладкам - ?

// показ первых 11 All при клике на All ПОСЛЕ ПЕРЕХОДА ПО ВКЛАДКАМ
workExamplesAllTab.addEventListener("click", showAllTabsContent);
function showAllTabsContent() {
  workExamplesAllTabsContent.forEach((item) => item.classList.add("active"));

  // работа с кнопкой Загрузить больше - показ следующих 12 + снова 12
  let workExamplesButton = document.querySelector(".purchase-section__button");
  let workExamplesHidePicturesOne =
    document.querySelectorAll(".we__content-two");
  let workExamplesHidePicturesTwo =
    document.querySelectorAll(".we__content-three");
  let number = false;

  function func() {
    if (!number) {
      for (let i = 0; i < workExamplesHidePicturesOne.length; i++) {
        workExamplesHidePicturesOne[i].classList.remove("we__content-two");
      }
      number = true;
    } else {
      for (let i = 0; i < workExamplesHidePicturesTwo.length; i++) {
        workExamplesHidePicturesTwo[i].classList.remove("we__content-three");
      }
      workExamplesButton.classList.add("purchase-section__button-nonvisible");
    }
  }

  workExamplesButton.addEventListener("click", func);
}

//
// Общая функция для всех, кроме All.
function showContent(a) {
  workExamplesAllTabsContent.forEach((item) => item.classList.remove("active"));
  a.forEach((item) => item.classList.add("active"));
}

workExamplesGraphDesignTab.addEventListener("click", () =>
  showContent(picturesGraphDesign)
);

workExamplesWebDesignTab.addEventListener("click", () =>
  showContent(picturesWebDesign)
);

workExamplesLandingTab.addEventListener("click", () =>
  showContent(picturesLandingDesign)
);

workExamplesWordpressTab.addEventListener("click", () =>
  showContent(picturesWordpressDesign)
);

// Button
// Логика: если нажата кнопка Общее - при нажатии на кнопку открывать все картинки (общий класс группы 1, общий класс группы 2);
// Если нажата кнопка конкретной группы - открывать при нажатии группу 3
// По кажой из групп добавлять классы, чтоб они не нагромождались в неактивном коде
// let workExamplesButton = document.querySelector(".purchase-section__button");
// let workExamplesHidePicturesOne = document.querySelectorAll(".we__content-two");
// let workExamplesHidePicturesTwo =
//   document.querySelectorAll(".we__content-three");
// let number = false;

// function func() {
//   if (!number) {
//     for (let i = 0; i < workExamplesHidePicturesOne.length; i++) {
//       workExamplesHidePicturesOne[i].classList.remove("we__content-two");
//     }
//     number = true;
//   } else {
//     for (let i = 0; i < workExamplesHidePicturesTwo.length; i++) {
//       workExamplesHidePicturesTwo[i].classList.remove("we__content-three");
//     }
//     workExamplesButton.classList.add("purchase-section__button-nonvisible");
//   }
// }

// workExamplesButton.addEventListener("click", func);
