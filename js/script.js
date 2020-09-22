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
   //плавный скролинг до якоря
   const anchors = document.querySelectorAll('a[href*="#"]');

   anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });

         window.scrollBy(0, -50);
      });
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
   //portfolio
   // const link = document.querySelectorAll('.portfolio__nav-link'),
   //    tab = document.querySelectorAll('.portfolio__item'),
   //    landingPage = document.querySelectorAll('[data-type = "landingPage"]'),
   //    storesWebsite = document.querySelectorAll('[data-type = "storesWebsite"]'),
   //    publicPage = document.querySelectorAll('[data-type = "publicPage"]');

   // landingPage.forEach((e, i) => {
   //    if ()
   // });

   // function showTab() {

   // }


   // link.forEach(element => {
   //    element.addEventListener('click', (e) => {
   //       if (e.classList.contains("landing-page")) {
   //          e.classList.add("_active");
   //       }
   //       tab.forEach(item => {
   //          if (item.classList.contains())
   //       });
   //       landingPage.forEach(item => {
   //          item.add("_show");
   //       });
   //    });
   // });
   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */
});