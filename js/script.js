document.addEventListener("DOMContentLoaded", function () {

    const formularios = document.querySelectorAll("form");

    formularios.forEach(function (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            formulario.reset();

        });

    });

});


/* =====================================================
   FAQ - DESKTOP ABERTO / MOBILE FECHADO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    function ajustarFAQ() {

        if (window.innerWidth > 768) {

            /* DESKTOP: deixa todos os FAQs abertos */
            faqItems.forEach(function (item) {
                item.setAttribute("open", "");
            });

        } else {

            /* MOBILE: deixa os FAQs fechados inicialmente */
            faqItems.forEach(function (item) {
                item.removeAttribute("open");
            });

        }

    }

    ajustarFAQ();

    window.addEventListener("resize", ajustarFAQ);

});


/* =====================================================
   BOTÃO DA SEGUNDA CHAMADA - MOBILE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const ctaButton = document.querySelector(".cta-form button");

    if (ctaButton) {

        ctaButton.addEventListener("click", function (event) {

            /* MOBILE */
            if (window.innerWidth <= 768) {

                /*
                   Impede o envio do formulário e a
                   validação dos campos required escondidos.
                */
                event.preventDefault();

                /* Procura o HERO */
                const hero = document.querySelector(".hero");

                /* Vai para o HERO */
                if (hero) {

                    hero.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    }

});