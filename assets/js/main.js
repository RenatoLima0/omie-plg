"use strict";var activeForms,initialForms,secForms,finishForms,secThanks,activeFormsClick,finishFormsFunc,btnActiveFit,fitCheckBoxes,_initialForms,initialFormsFit,_activeFormsClick,funcPreventDefault,avancaFit,validaCheck,screenWidth,checkDigital,cardMessage,_checkDigital,_cardMessage,arrowNext,arrowPrev,sectionsTab,tabList,index,changeSec,nextStepTab,prevStepTab;function tabSelected(e,t){t.forEach(function(e){e.getAttribute("id")===dataTarget?(e.classList.remove("d-none"),e.classList.add("active")):e.classList.add("d-none")})}document.querySelector(".main-forms .btn-active-forms")&&(activeForms=document.querySelector(".main-forms .btn-active-forms"),initialForms=document.querySelector(".initial-forms"),secForms=document.querySelector("section.section"),finishForms=document.querySelector(".cta.btn-finish"),secThanks=document.querySelector("section.sec-thanks"),finishFormsFunc=function(e){e.preventDefault(),secForms.classList.remove("active"),secThanks.classList.add("active")},activeForms.addEventListener("click",activeFormsClick=function(e){e.preventDefault(),initialForms.classList.remove("active"),secForms.classList.add("active")}),finishForms.addEventListener("click",finishFormsFunc)),document.querySelector(".btns-active-fit")&&(btnActiveFit=document.querySelector(".btns-active-fit .cta.inative"),fitCheckBoxes=document.querySelectorAll(".form-check-fit input"),_initialForms=document.querySelector(".initial-forms"),initialFormsFit=document.querySelector(".initial-forms-fit"),_activeFormsClick=function(e){e.preventDefault(),_initialForms.classList.remove("active")},funcPreventDefault=function(e){e.preventDefault()},validaCheck=function(e){!0===fitCheckBoxes[0].checked&&!0===fitCheckBoxes[1].checked&&(btnActiveFit.classList.remove("inative"),btnActiveFit.addEventListener("click",_activeFormsClick))},btnActiveFit.addEventListener("click",avancaFit=function(e){var t=document.querySelector(".sec-form-fit");e.preventDefault(),initialFormsFit.classList.remove("active"),t.classList.add("active")}),fitCheckBoxes.forEach(function(e){e.addEventListener("input",validaCheck)})),document.querySelector(".sec-digital-bank")&&(1320<=(screenWidth=window.innerWidth)?(checkDigital=document.querySelector(".form-fit-desktop input"),cardMessage=document.querySelector(".card-message-desktop"),checkDigital.addEventListener("input",function(){!0===checkDigital.checked?cardMessage.style.display="block":cardMessage.style.display="none"})):(console.log("Lárgura da tela: "+screenWidth),_checkDigital=document.querySelector(".form-fit-mobile input"),_cardMessage=document.querySelector(".card-message-mobile"),_checkDigital.addEventListener("input",function(){!0===_checkDigital.checked?_cardMessage.style.display="block":_cardMessage.style.display="none"}))),document.querySelector(".sec-tab")&&(arrowNext=document.querySelector(".sec-tab .seta-baixo"),arrowPrev=document.querySelector(".sec-tab .seta-cima"),sectionsTab=document.querySelectorAll("[data-tab]"),tabList=document.querySelectorAll("[data-tab-list]"),index=0,changeSec=function(e){sectionsTab[e].classList.add("active"),tabList[e].classList.add("active")},prevStepTab=function(e){0===index||(6===index&&--index,sectionsTab[index].classList.remove("active"),tabList[index].classList.remove("active"),changeSec(--index))},arrowNext.addEventListener("click",nextStepTab=function(e){index<=5&&(index+=1)<=5&&(sectionsTab[index-1].classList.remove("active"),tabList[index].classList.remove("active"),changeSec(index))}),arrowPrev.addEventListener("click",prevStepTab));