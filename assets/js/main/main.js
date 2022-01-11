const activeForms = document.querySelector('.main-forms .btn-active-forms');
const initialForms = document.querySelector('.initial-forms');
const secForms = document.querySelector('section.section');
const finishForms = document.querySelector('.cta.btn-finish');
const secThanks = document.querySelector('section.sec-thanks');

const activeFormsClick = (e) => {
  e.preventDefault();
  initialForms.classList.remove('active');
  secForms.classList.add('active');
}

const finishFormsFunc = (e) => {
  e.preventDefault();
  secForms.classList.remove('active');
  secThanks.classList.add('active');
}

activeForms.addEventListener('click', activeFormsClick);
finishForms.addEventListener('click', finishFormsFunc);

// #################################################################### 

