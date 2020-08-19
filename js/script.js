"use strict";

document.addEventListener('DOMContentLoaded', () => {
   /* ---------------------------------------------- */
   // меню бургер
   const burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__menu'),
      body = document.querySelector('body'),
      header = document.querySelector('.header'),
      headerBody = document.querySelector('.header__body');

   burger.addEventListener('click', () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      body.classList.toggle("lock");
   });

   /* ---------------------------------------------- */
   //шапка при скроле
   window.addEventListener('scroll', () => {
      let scrollDown = document.documentElement.scrollTop;
      if (scrollDown != 0) {
         headerBody.classList.add("menuSlick");
         header.classList.add("menuSlick");
      } else {
         headerBody.classList.remove("menuSlick");
         header.classList.remove("menuSlick");
      }
   });


   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */
});