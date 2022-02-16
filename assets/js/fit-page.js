// ######################## PÁGINA FIT ############################################ 

if(document.querySelector('.btns-active-fit')){
  const btnActiveFit = document.querySelector('.btns-active-fit .cta.inative');
  const fitCheckBoxes = document.querySelectorAll('.form-check-fit input');
  const initialForms = document.querySelector('.initial-forms');
  const initialFormsFit = document.querySelector('.initial-forms-fit');
  const secTab = document.querySelector('.sec-tab');

  const activeFormsClick = (e) => {
    e.preventDefault();
    initialForms.classList.remove('active');
    secTab.classList.remove('d-none');
    // secForms.classList.add('active');
  }
  
  const avancaFit = (e) => {
    const secFormFit = document.querySelector('.sec-form-fit');
    e.preventDefault();
    initialFormsFit.classList.remove('active');
    secFormFit.classList.add('active');
    
  }
  
  const validaCheck = (e) => {
    // console.log(e.currentTarget);
    if((fitCheckBoxes[0].checked === true)){
      btnActiveFit.classList.remove('inative');
      btnActiveFit.addEventListener('click', activeFormsClick);
    } else {
      btnActiveFit.classList.add('inative');
    }
  }

  btnActiveFit.addEventListener('click', avancaFit);
  
  fitCheckBoxes.forEach(fitCheck => {
    fitCheck.addEventListener('input', validaCheck)
  })
}

if(document.querySelector('.sec-digital-bank')){
  // alert('aqui');
  const screenWidth = window.innerWidth;
  
  if(screenWidth >= 1320){
    // console.log(`Lárgura da tela: ${screenWidth}`);
    const checkDigital = document.querySelector('.form-fit-desktop input');
    const cardMessage = document.querySelector('.card-message-desktop');

    checkDigital.addEventListener('input', () => {
      if(checkDigital.checked === true){
        cardMessage.style.display = 'block'
      } else {
        cardMessage.style.display = 'none'
      }
    })
  } else {
    console.log(`Lárgura da tela: ${screenWidth}`);
    const checkDigital = document.querySelector('.form-fit-mobile input');
    const cardMessage = document.querySelector('.card-message-mobile');

    checkDigital.addEventListener('input', () => {
      if(checkDigital.checked === true){
        cardMessage.style.display = 'block'
      } else {
        cardMessage.style.display = 'none'
      }
    })
  }
}

// NAVEGAÇÃO ENTRE TABS PÁGINA DE FIT
if(document.querySelector('.sec-tab')){
  const arrowNext = document.querySelector('.sec-tab .seta-baixo');
  const arrowPrev = document.querySelector('.sec-tab .seta-cima');
  const sectionsTab = document.querySelectorAll('[data-tab]');
  const tabList = document.querySelectorAll('[data-tab-list]');
  let index = 0;
  
  const changeSec = (value) => {
    // console.log(value);
    sectionsTab[value].classList.add('active');
    tabList[value].classList.add('active');
  }
  
  const nextStepTab = (e) => {
    if(index <= 5) {
      index += 1;
      if(index <= 5) {
        sectionsTab[index - 1].classList.remove('active');
        tabList[index].classList.remove('active');
        changeSec(index);
      }
    }
  }
  
  const prevStepTab = (e) => {
    if(index === 0) {
      // console.log('nada');
    } else {
      if(index === 6){
        index -= 1;
      }
      // console.log(index);
      sectionsTab[index].classList.remove('active');
      tabList[index].classList.remove('active');
      index -= 1;
      changeSec(index);
    }
  }
  
  arrowNext.addEventListener('click', nextStepTab);
  arrowPrev.addEventListener('click', prevStepTab);
}
// ######################## FIM PÁGINA FIT ###########################
