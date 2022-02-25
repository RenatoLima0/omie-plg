// if(document.querySelector('[data-banner]')) {
//   const bannerHome = document.querySelector('[data-banner]');
//   const title = bannerHome.querySelector('.nav-banner .titles-banner .title-1');
//   const titleText = bannerHome.querySelector('.nav-banner .titles-banner p');
//   const namePersona = bannerHome.querySelector('.nav-banner .name');
//   const role = bannerHome.querySelector('.nav-banner .role');
//   const bullets = bannerHome.querySelectorAll('.bullet');
//   const arrows = bannerHome.querySelectorAll('.arrows [data-arrow]');
  
//   const limpaBullets = () => {
//     bullets.forEach(bullet => bullet.classList.remove('ativo'));
//   }
  
//   const changeBanner = (value) => {
//     switch (value) {
//       case 0:
//         bannerHome.classList.remove('banner-3');
//         bannerHome.classList.add('banner-1');
  
//         title.classList = 'title-1';
//         titleText.innerText = 'Aprimorou suas habilidades de gestão através dos cursos da Omie.Academy';
//         namePersona.innerText = 'Luana Santana';
//         limpaBullets();
//         bullets[0].classList.add('ativo');
//         // role.innerText = 'Empresária Omie';
  
//         break;
  
//       case 1:
//         bannerHome.classList.remove('banner-1');
//         bannerHome.classList.add('banner-2');
//         title.classList = 'title-2';
//         titleText.innerText = 'Investiu no sistema de gestão da Omie e viu sua empresa crescer rapidamente';
//         namePersona.innerText = 'Maria Oliveira';
//         limpaBullets();
//         bullets[1].classList.add('ativo');
//         break;
  
//       case 2:
//         bannerHome.classList.remove('banner-2');
//         bannerHome.classList.add('banner-3');
//         title.classList = 'title-3';
//         titleText.innerText = 'Se tornou um Franqueado Omie e em pouco tempo viu seus lucros aumentarem';
//         namePersona.innerText = 'Renan Gomes';
//         limpaBullets();
//         bullets[2].classList.add('ativo');
//         break;
  
//       default:
//         break;
//     }
//   }
  
//   const numArray = [0, 1, 2];
//   const rodaBanner = setInterval(callback, 7000);

//   function callback() {
//     let primeiro = numArray.shift();
//     changeBanner(primeiro);
//     numArray.push(primeiro);
//   }

//   const carouselBannerHome = (e) => {
//     clearInterval(rodaBanner);
//     let primeiro = numArray.shift();
//     changeBanner(primeiro);
//     numArray.push(primeiro);
//   }

//   arrows.forEach(arrow => {
//     arrow.addEventListener('click', carouselBannerHome)
//   })
// }

if(document.querySelector('.col-contabilidade') && tela >= 1024){
  const colContabilidade = document.querySelector('.col-contabilidade');
  const rowSegmentos = document.querySelector('.row-segmentos');

  rowSegmentos.appendChild(colContabilidade);
}

if(document.querySelector('.col-solutions-fixed') && tela >= 1020){
  const animaCol = () => {
    const sectionColFixa = document.querySelector('.sec-main-col-fixed');
    const colFixa = document.querySelector('.col-solutions-fixed');
    const colFixaTop = sectionColFixa.getBoundingClientRect().bottom;
    
    if(colFixaTop < 1730 && colFixaTop > 630){
      colFixa.classList.remove('initial');
      colFixa.classList.remove('absolute');
      colFixa.classList.add('fixa');
    } else if (colFixaTop < 650) {
      colFixa.classList.remove('fixa');
      colFixa.classList.remove('initial');
      colFixa.classList.add('absolute');
    } else if (colFixaTop > 1730) {
      colFixa.classList.remove('fixa');
      colFixa.classList.remove('absolute');
      colFixa.classList.add('initial');
    }
  }

  window.addEventListener('scroll', animaCol);
}