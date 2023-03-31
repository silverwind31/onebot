"use strict";

console.log("JS проверка");

//  другой способ добавлять модули
console.log("Здесь буду писать скрипты")
// const hamburger = document.querySelector(".header__hamburger");
// const navMenu = document.querySelector(".header__lists");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }


// Jquery version

$(".header__hamburger").on("click", function (e) {
    e.preventDefault();
    $(".header__hamburger").toggleClass("active");
    $(".header__lists").toggleClass("active");
});

var itemsLblock = $(".allneeds__l__side--item");
var itemsRblock = $(".allneeds__r__side--item");
itemsLblock.on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass("item__01")) {
    itemsLblock.not(".item__01").removeClass("visible");
    itemsRblock.not(".item__01").removeClass("visible");
    $(".item__01").addClass("visible");
  } else if ($(this).hasClass("item__02")) {
    itemsLblock.not(".item__02").removeClass("visible");
    itemsRblock.not(".item__02").removeClass("visible");
    $(".item__02").addClass("visible");
  } else if ($(this).hasClass("item__03")) {
    itemsLblock.not(".item__03").removeClass("visible");
    itemsRblock.not(".item__03").removeClass("visible");
    $(".item__03").addClass("visible");
  } else if ($(this).hasClass("item__04")) {
    itemsLblock.not(".item__04").removeClass("visible");
    itemsRblock.not(".item__04").removeClass("visible");
    $(".item__04").addClass("visible");
  } else if ($(this).hasClass("item__05")) {
    itemsLblock.not(".item__05").removeClass("visible");
    itemsRblock.not(".item__05").removeClass("visible");
    $(".item__05").addClass("visible");
  } else if ($(this).hasClass("item__06")) {
    itemsLblock.not(".item__06").removeClass("visible");
    itemsRblock.not(".item__06").removeClass("visible");
    $(".item__06").addClass("visible");
  } else if ($(this).hasClass("item__07")) {
    itemsLblock.not(".item__07").removeClass("visible");
    itemsRblock.not(".item__07").removeClass("visible");
    $(".item__07").addClass("visible");
  } else if ($(this).hasClass("item__08")) {
    itemsLblock.not(".item__08").removeClass("visible");
    itemsRblock.not(".item__08").removeClass("visible");
    $(".item__08").addClass("visible");
  } else if ($(this).hasClass("item__09")) {
    itemsLblock.not(".item__09").removeClass("visible");
    itemsRblock.not(".item__09").removeClass("visible");
    $(".item__09").addClass("visible");
  } else if ($(this).hasClass("item__10")) {
    itemsLblock.not(".item__10").removeClass("visible");
    itemsRblock.not(".item__10").removeClass("visible");
    $(".item__10").addClass("visible");
  }
});

// range

var changingRange = $(".rates__input__range");
var from = $(".border__ranges01");
var allborders = $(".ranges__border");
var ratesFollowers = $(".rates__followers");
var ratesPrice = $(".rates__price");
changingRange.on("input", function (e) {
  console.log(changingRange.val());
  switch (changingRange.val()) {
    case "1":
      from.addClass("visible").next().removeClass("visible");
      break;
    case "2":
      $(".border__ranges02").addClass("visible").next().removeClass("visible");
      break;
    case "3":
      $(".border__ranges03").addClass("visible").next().removeClass("visible");
      break;
    case "4":
      $(".border__ranges04").addClass("visible").next().removeClass("visible");
      break;
    case "5":
      $(".border__ranges05").addClass("visible").next().removeClass("visible");
      break;
    case "6":
      $(".border__ranges06").addClass("visible").next().removeClass("visible");
      break;
    case "7":
      $(".border__ranges07").addClass("visible").next().removeClass("visible");
      break;
    case "8":
      $(".border__ranges08").addClass("visible").next().removeClass("visible");
      break;
  }
});