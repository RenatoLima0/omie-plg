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
    
    menuHamburger.onclick = () => {
      console.log('aqui');
      menuHamburger.classList.toggle('ativo');
      itemsMenu.classList.toggle('ativo');
    }
    
    const fechaMenu = () => {
      menuHamburger.classList.remove('ativo');
    }
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
    animaScroll();
  }
}
//FIM MENU MOBILE

if(document.querySelector('[data-banner]')) {
  const bannerHome = document.querySelector('[data-banner]');
  const title = bannerHome.querySelector('.nav-banner .titles-banner .title-1');
  const titleText = bannerHome.querySelector('.nav-banner .titles-banner p');
  const namePersona = bannerHome.querySelector('.nav-banner .name');
  const role = bannerHome.querySelector('.nav-banner .role');
  const bullets = bannerHome.querySelectorAll('.bullet');
  
  const limpaBullets = () => {
    bullets.forEach(bullet => bullet.classList.remove('ativo'));
  }
  
  const changeBanner = (value) => {
    switch (value) {
      case 0:
        bannerHome.classList.remove('banner-3');
        bannerHome.classList.add('banner-1');
  
        title.classList = 'title-1';
        titleText.innerText = 'Aprimorou suas habilidades de gestão através dos cursos da Omie.Academy';
        namePersona.innerText = 'Luana Santana';
        limpaBullets();
        bullets[0].classList.add('ativo');
        // role.innerText = 'Empresária Omie';
  
        break;
  
      case 1:
        bannerHome.classList.remove('banner-1');
        bannerHome.classList.add('banner-2');
        title.classList = 'title-2';
        titleText.innerText = 'Investiu no sistema de gestão da Omie e viu sua empresa crescer rapidamente';
        namePersona.innerText = 'Maria Oliveira';
        limpaBullets();
        bullets[1].classList.add('ativo');
        break;
  
      case 2:
        bannerHome.classList.remove('banner-2');
        bannerHome.classList.add('banner-3');
        title.classList = 'title-3';
        titleText.innerText = 'Se tornou um Franqueado Omie e em pouco tempo viu seus lucros aumentarem';
        namePersona.innerText = 'Renan Gomes';
        limpaBullets();
        bullets[2].classList.add('ativo');
        break;
  
      default:
        break;
    }
  }
  
  const numArray = [0, 1, 2];
  
  setInterval(() => {
    let primeiro = numArray.shift();
    changeBanner(primeiro);
    numArray.push(primeiro);
  }, 7000)

}

if(document.querySelector('.card-summary')){ 
  const btnsAdd = document.querySelectorAll('.sec-form-fit .card-product button');
  const cartCardsContainer = document.querySelector('.sec-form-fit .card-summary .accordion');
  const cartCardsContainerConfirm = document.querySelectorAll('.sec-form-fit .card-summary.card-confirm .accordion');
  const totalPrice = document.querySelector('.sec-form-fit .total-price .price span');
  let products = [];
  
  const addCard = (e) => {

    // checkItem(e);

    let total = 0;
    cartCardsContainer.innerHTML = '';
    cartCardsContainerConfirm.forEach(card => {
      card.innerHTML = '';
    })

    products.push({
      id: e.currentTarget.dataset.id,
      price: +e.currentTarget.dataset.price,
      name: e.currentTarget.previousElementSibling.innerText,
      description: (e.currentTarget.parentElement.parentElement.children[1].innerHTML),
    })

    localStorage.produtos =  JSON.stringify(products);
    const pegarProdutos = JSON.parse(localStorage.produtos);

    pegarProdutos.forEach((product) => {
      let cardName = product.name.toLowerCase().split(' ').join(',').replaceAll(',', '').replaceAll('.', '');
      
      total = product.price + total;
      totalPrice.innerText = total;

      cartCardsContainer.innerHTML += `
        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cardName}" aria-expanded="false" aria-controls="collapse${cardName}">
            <span class="product-name">${product.name}<strong> + ${product.price === 0 ? "Grátis" : product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/mês</strong></span>

            <span class="remove" data-id="${product.id}">X</span>
          </button>
  
          <div id="collapse${cardName}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              ${product.description}
            </div>
          </div>
        </div>
      `;

      cartCardsContainerConfirm.forEach(card => {
        card.innerHTML += `
          <div class="accordion-item">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cardName}" aria-expanded="false" aria-controls="collapse${cardName}">
              <span class="product-name">${product.name}<strong> + ${product.price === 0 ? "Grátis" : product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/mês</strong></span>
              <span class="remove" data-id="${product.id}">X</span>
            </button>
    
            <div id="collapse${cardName}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${product.description}
              </div>
            </div>
          </div>
        `;

      })

    })

    // const removeItem = (event) => {
    //   console.log(event.currentTarget);
      
    // }

    const btnsRemove = document.querySelectorAll('.card-summary .remove');
    console.log(btnsRemove);
    btnsRemove.forEach(btn => btn.addEventListener('click', (event) => {
      console.log(event.currentTarget);
      console.log(event.currentTarget.dataset.id);
    }));
  }

  const checkItem = (item) => {
    const productName = item.currentTarget.previousElementSibling.innerText;
    
    if(products.length === 0) {
      addCard(item);
    }

    products.forEach(product => {
      if (product.name === `${productName}`){
        
      } else {
        // console.log('diferente');
        addCard(item);
      }
    })
    
  }

  btnsAdd.forEach(btn => btn.addEventListener('click', addCard));

}

let teste = {}





