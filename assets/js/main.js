"use strict";var activeForms=document.querySelector(".main-forms .btn-active-forms"),initialForms=document.querySelector(".initial-forms"),secForms=document.querySelector("section.section"),finishForms=document.querySelector(".cta.btn-finish"),secThanks=document.querySelector("section.sec-thanks"),activeFormsClick=function(e){e.preventDefault(),initialForms.classList.remove("active"),secForms.classList.add("active")},finishFormsFunc=function(e){e.preventDefault(),secForms.classList.remove("active"),secThanks.classList.add("active")};activeForms.addEventListener("click",activeFormsClick),finishForms.addEventListener("click",finishFormsFunc);