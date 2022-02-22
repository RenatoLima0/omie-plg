// BLOCO PARA INICIAR E FECHAR PÁGINA DE FORMULÁRIO

// PRECISARÁ DE AJUSTES PARA VALIDAÇÃO DE LOGIN VIA E-MAIL, GOOGLE E LINKEDIN
if(document.querySelector('.main-forms .btn-active-forms')){
  const activeForms = document.querySelector('.main-forms .btn-active-forms');
  const initialForms = document.querySelector('.initial-forms');
  const secForms = document.querySelector('section.section');
  const finishForms = document.querySelector('.cta.btn-finish');
  const secThanks = document.querySelector('section.sec-thanks');
  const secTab = document.querySelector('.sec-tab');
  
  const activeFormsClick = (e) => {
    e.preventDefault();
    initialForms.classList.remove('active');
    secForms.classList.add('active');
    secTab.classList.remove('d-none');
  }
  
  const finishFormsFunc = (e) => {
    e.preventDefault();
    secForms.classList.remove('active');
    secThanks.classList.add('active');
  }
  
  activeForms.addEventListener('click', activeFormsClick);
  finishForms.addEventListener('click', finishFormsFunc);

}

function tabSelected(tablniks, boxTab) {
  boxTab.forEach((e) => { 
    var id = e.getAttribute('id');
    if (id === dataTarget) {
      e.classList.remove("d-none")
      e.classList.add('active');
    } else {
      e.classList.add("d-none");
    }
  });
}
// ######################## FIM PÁGINA FIT ###########################

//MENU MOBILE 
const tela = window.innerWidth;

if(tela <= 1024){
  const menuMobile = () => {
    const menuHamburger = document.querySelector('.menu-hamburguer');
    const itemsMenu = document.querySelector('.items-menu');
    
    const clickMenu = () => {
      menuHamburger.classList.toggle('ativo');
      itemsMenu.classList.toggle('ativo');
    }

    ['touchstart', 'click'].forEach(userEvent => {
      menuHamburger.addEventListener(userEvent, clickMenu);
    });
  }

  menuMobile();  
} else {
  
  if(document.querySelector('nav.nav-desktop')){
    const animaScroll = () => {
      const menuDesktop = document.querySelector('nav.nav-desktop');
      const banner = document.querySelector('.banner');
      const bannerBottom = banner.getBoundingClientRect().top;
      
      if(!(bannerBottom < -350)){
        menuDesktop.classList.remove('ativo');
      } else {
        menuDesktop.classList.add('ativo');
      }
    }
  
    window.addEventListener('scroll', animaScroll);
  }
}
//FIM MENU MOBILE