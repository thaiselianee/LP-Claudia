document.addEventListener("DOMContentLoaded", function () {

    const formularios = document.querySelectorAll("form");

    formularios.forEach(function (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            formulario.reset();

        });

    });

});