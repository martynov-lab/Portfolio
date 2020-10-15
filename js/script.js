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

         const blockID = anchor.getAttribute('href').substr(1);

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
   //анимация при скроеле

   const animItems = document.querySelectorAll('.anim-item');

   //if (animItem.length > 0){
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active-anim');
         } else {
            if (!animItem.classList.contains('anim-no-hide')) {
               animItem.classList.remove('active-anim');
            }
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
   //}
   /* ---------------------------------------------- */
   // счетчик чисел
   //проверяем элемент, если он имеет класс active-anim, то выполняем увеличение переменной которая дальше изменяет код HTML


   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */

   /* ---------------------------------------------- */
});