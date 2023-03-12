// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//Tamaños de pantalla

const screenSize = {
  tablet: 640,
  laptop: 1024,
  desktop: 1440
};

// Obtén todos los elementos de la lista
const menuElements = document.querySelectorAll('.menu__element');
const blueBackgroundElement = document.querySelectorAll('.container');
const footerElement = document.getElementById('footer');
const contactButtonElement = document.getElementById('contact-button');

// Función para verificar el ancho de la pantalla
function checkWidth() {
  //console.log(menuElements[0]);
  if (window.innerWidth >= screenSize.desktop && contactButtonElement.classList.contains('active-element')) {
    contactButtonElement.classList.add('hide');
  }
  if (window.innerWidth < screenSize.desktop) {
    footerElement.classList.add('hide-footer');
    contactButtonElement.classList.remove('hide-footer');
  }
  if (window.innerWidth >= screenSize.desktop) {
    footerElement.classList.remove('hide-footer');
    contactButtonElement.classList.add('hide-footer');
  }

  if (window.innerWidth < screenSize.tablet) {
    // Si el ancho es menor de 700px, agrega la clase CSS "hide-span" a todos los elementos span
    menuElements.forEach(element => {
      element.querySelector('.element--span').classList.add('hide-span');
    });
    blueBackgroundElement.forEach(element => {
      element.classList.remove('bg-main-color');
    });
  } else {
    // Si el ancho es mayor o igual a 700px, elimina la clase CSS "hide-span" de todos los elementos span
    menuElements.forEach(element => {
      element.querySelector('.element--span').classList.remove('hide-span');
    });
    blueBackgroundElement.forEach(element => {
      element.classList.add('bg-main-color');
    });
  }
}

// Agrega un evento de escucha de cambio de tamaño de ventana
window.addEventListener('resize', function () {
  checkWidth();
});

// Verifica el ancho de la pantalla en la carga de la página
checkWidth();

// Selecciona todos los elementos <li> del menú

// Agrega un evento de clic a cada elemento <li>
menuElements.forEach(element => {
  element.addEventListener('click', () => {
    // Remueve la clase 'active-element' de todos los elementos <li>
    menuElements.forEach(el => el.classList.remove('active-element'));

    // Agrega la clase 'active-element' al elemento <li> clickeado
    element.classList.add('active-element');
  });
});

const menuElement = document.getElementById('menu');
const sections = document.querySelectorAll('.article');

menuElement.addEventListener('click', e => {
  console.log(e.target);
  if (!e.target.classList.contains('menu__element')) return;

  sections.forEach(sections => sections.classList.add('hide'));

  document.getElementById(e.target.dataset.menu).classList.remove('hide');
});

