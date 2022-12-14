(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Obtener todos los formularios de Bootstrap
      var forms = document.getElementsByClassName('needs-validation');
      // Busca y previene el envío errónea
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