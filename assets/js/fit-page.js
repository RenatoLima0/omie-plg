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
// ######################## FIM PÁGINA FIT ###########################
