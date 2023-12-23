const menu = document.querySelector('.nav__bar');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav_link');

// alert("este es mi portafolio por favor ignora el imagen es intercambiable ; )");

menu.addEventListener('click', ()=>{
    menuList.classList.toggle('nav__list--show');
});

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        menuList.classList.remove('nav__list--show');
    });
});



function scrollSuave(selector) {
  const destino = document.querySelector(selector);
  // console.log(destino);
  if (destino) {
    const contenedor = document.querySelector('body'); 
    const offset = 85; 

    
    if (selector !== '#Contacto') {
      contenedor.style.marginTop = `-${offset}px`;

      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

   
      setTimeout(() => {
        contenedor.style.marginTop = '0';
      }, 500); 
    } else {
     
      destino.scrollIntoView({
        block: 'start',
      });
    }
  } else {
    console.error('Destino no encontrado');
  }
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', function () {
  // Puedes ajustar el selector según tu estructura HTML
  const links = document.querySelectorAll('.nav_link');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const targetId = this.getAttribute('href');
      scrollSuave(targetId);
    });
  });
});





// para escrivir el texto automatica mente.
   var textoCompleto = "Hola, Soy Junior";
    var velocidadEscritura = 50;
    var tiempoEspera = 1000; 
    var elementoTexto = document.getElementById('textoAutomatico');

    function escribirTextoRecursivo(i) {
      if (i === textoCompleto.length) {
        setTimeout(function() {
          borrarTextoRecursivo(i);
        }, tiempoEspera);
        return;
      }

      elementoTexto.innerHTML += textoCompleto[i];

      setTimeout(function() {
        escribirTextoRecursivo(i + 1);
      }, velocidadEscritura);
    }

    function borrarTextoRecursivo(i) {
      if (i === 0) {
        setTimeout(function() {
          escribirTextoRecursivo(0);
        }, tiempoEspera);
        return;
      }

      elementoTexto.innerHTML = textoCompleto.substring(0, i - 1);

      setTimeout(function() {
        borrarTextoRecursivo(i - 1);
      }, velocidadEscritura);
    }

    window.onload = function() {
      escribirTextoRecursivo(0);
    };


