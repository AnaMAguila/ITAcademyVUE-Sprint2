'use strict';



function init(){
  // Menú desplegable azul
  let ancho = document.getElementById("menuDesktop");
  let movil = document.getElementById("desplegaMenu");

  ancho.style.display = "block";
  movil.style.display = "none";
}

function showMenu() {
  let ancho = document.getElementById("menuDesktop");
  let movil = document.getElementById("desplegaMenu");
  
  if (movil.style.display === "none") {
      movil.style.display = "block";
      ancho.style.display = "none";  
  } else {
      movil.style.display = "none";
      ancho.style.display = "none";
      
  }    
}

function closeMenu() {
  let ancho = document.getElementById("menuDesktop");
  let movil = document.getElementById("desplegaMenu");

  if (ancho.style.display === "none") {
      ancho.style.display = "block";
      movil.style.display = "none";
  } else {
      movil.style.display = "none";
      ancho.style.display = "none";      
  }
}

init();

(function() {    
    window.addEventListener('load', function() {
      // Obtener todos los formularios de Bootstrap
      var forms = document.getElementsByClassName('needs-validation');
      // Busca ancho previene el envío errónea
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();