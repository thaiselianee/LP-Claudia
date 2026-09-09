/* =====================================================
   FAQ - DESKTOP ABERTO / MOBILE FECHADO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    function ajustarFAQ() {

        if (window.innerWidth > 768) {

            faqItems.forEach(function (item) {
                item.setAttribute("open", "");
            });

        } else {

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

            if (window.innerWidth <= 768) {

                event.preventDefault();

                const hero = document.querySelector(".hero");

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


/* =====================================================
   QUESTIONÁRIO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       ELEMENTOS
    ================================================= */

    const questionario =
        document.getElementById("questionario");


    if (!questionario) {
        return;
    }


    const fechar =
        questionario.querySelector(
            ".questionario-fechar"
        );


    const voltar =
        questionario.querySelector(
            ".btn-voltar"
        );


    const proxima =
        questionario.querySelector(
            ".btn-proxima"
        );


    const opcoesContainer =
        questionario.querySelector(
            ".questionario-opcoes"
        );


    const perguntaTitulo =
        questionario.querySelector(
            ".questionario-conteudo h1"
        );


    const progressoTexto =
        questionario.querySelector(
            ".progresso-texto"
        );


    const progressoPorcentagem =
        questionario.querySelector(
            ".progresso-porcentagem"
        );


    const progressoBarra =
        questionario.querySelector(
            ".progresso-barra"
        );


    /* =================================================
       WEBHOOK DO QUESTIONÁRIO
    ================================================= */

    const webhookQuestionario =
        "https://criadordigital-n8n-webhook.bbw7sv.easypanel.host/webhook/b94034fe-38d0-4eba-9432-6abc5602c8b7";


    /* =================================================
       DADOS DO LEAD
    ================================================= */

    let dadosLead = {

        nome: "",

        email: "",

        telefone: ""

    };


    /* =================================================
       PERGUNTAS
    ================================================= */

    const perguntas = [


        {
            pergunta:
                "Onde você está agora?",

            tipo: "opcao",

            opcoes: [
                "Ainda estou no relacionamento",
                "Estamos separados",
                "Estamos tentando voltar"
            ]
        },


        {
            pergunta:
                "Como você se sente hoje?",

            tipo: "opcao",

            opcoes: [
                "Confusa",
                "Triste",
                "Ansiosa",
                "Esperançosa"
            ]
        },


        {
            pergunta:
                "Seu (ex-)parceiro é:",

            tipo: "opcao",

            opcoes: [
                "Brasileiro",
                "Americano",
                "Outra nacionalidade"
            ]
        },


        {
            pergunta:
                "Conte um pouco sobre o que aconteceu.",

            tipo: "texto"
        },


        {
            pergunta:
                "O quanto essa situação está afetando você?",

            tipo: "escala"
        },


        {
            pergunta:
                "O que você mais gostaria de mudar neste momento?",

            tipo: "texto"
        },


        {
            pergunta:
                "Como você avalia sua relação atualmente?",

            tipo: "escala"
        },


        {
            pergunta:
                "Você acredita que ainda existe uma possibilidade?",

            tipo: "opcao",

            opcoes: [
                "Sim",
                "Não",
                "Não sei"
            ]
        },


        {
            pergunta:
                "O que você mais deseja para sua vida amorosa?",

            tipo: "texto"
        },


        {
            pergunta:
                "Quanto você está disposta a transformar essa situação?",

            tipo: "escala"
        },


        {
            pergunta:
                "Você sente que precisa de ajuda para tomar uma decisão?",

            tipo: "opcao",

            opcoes: [
                "Sim",
                "Não",
                "Talvez"
            ]
        },


        {
            pergunta:
                "Existe algo importante que você gostaria de compartilhar?",

            tipo: "texto"
        }

    ];


    /* =================================================
       CONTROLE
    ================================================= */

    let perguntaAtual = 0;

    let respostas = [];


    /* =================================================
       ABRIR QUESTIONÁRIO
    ================================================= */

    function abrirQuestionario() {

        questionario.style.display = "flex";

        document.body.style.overflow = "hidden";

        perguntaAtual = 0;

        respostas = [];

        mostrarPergunta();

    }


    /* =================================================
       FECHAR QUESTIONÁRIO
    ================================================= */

    function fecharQuestionario() {

        questionario.style.display = "none";

        document.body.style.overflow = "";

    }


    /* =================================================
       MOSTRAR PERGUNTA
    ================================================= */

    function mostrarPergunta() {

        const pergunta =
            perguntas[perguntaAtual];


        if (!pergunta) {
            return;
        }


        perguntaTitulo.textContent =
            pergunta.pergunta;


        const numero =
            perguntaAtual + 1;


        const total =
            perguntas.length;


        const porcentagem =
            Math.round(
                (numero / total) * 100
            );


        progressoTexto.textContent =
            "PERGUNTA " +
            numero +
            " DE " +
            total;


        progressoPorcentagem.textContent =
            porcentagem + "%";


        progressoBarra.style.width =
            porcentagem + "%";


        opcoesContainer.innerHTML = "";


        /* =================================================
           MÚLTIPLA ESCOLHA
        ================================================= */

        if (pergunta.tipo === "opcao") {


            pergunta.opcoes.forEach(
                function (opcaoTexto) {


                    const botao =
                        document.createElement(
                            "button"
                        );


                    botao.type = "button";


                    botao.className =
                        "questionario-opcao";


                    const radio =
                        document.createElement(
                            "span"
                        );


                    radio.className =
                        "radio";


                    const texto =
                        document.createElement(
                            "span"
                        );


                    texto.textContent =
                        opcaoTexto;


                    botao.appendChild(radio);

                    botao.appendChild(texto);


                    if (
                        respostas[perguntaAtual] &&
                        respostas[perguntaAtual].resposta ===
                            opcaoTexto
                    ) {

                        botao.classList.add(
                            "selecionada"
                        );

                    }


                    botao.addEventListener(
                        "click",
                        function () {


                            const todas =
                                opcoesContainer.querySelectorAll(
                                    ".questionario-opcao"
                                );


                            todas.forEach(
                                function (item) {

                                    item.classList.remove(
                                        "selecionada"
                                    );

                                }
                            );


                            botao.classList.add(
                                "selecionada"
                            );


                            respostas[perguntaAtual] = {

                                pergunta:
                                    pergunta.pergunta,

                                resposta:
                                    opcaoTexto

                            };

                        }
                    );


                    opcoesContainer.appendChild(
                        botao
                    );

                }
            );

        }


        /* =================================================
           TEXTO
        ================================================= */

        else if (pergunta.tipo === "texto") {


            const textarea =
                document.createElement(
                    "textarea"
                );


            textarea.className =
                "questionario-texto";


            textarea.placeholder =
                "Digite sua resposta...";


            textarea.rows = 5;


            if (
                respostas[perguntaAtual]
            ) {

                textarea.value =
                    respostas[
                        perguntaAtual
                    ].resposta;

            }


            textarea.addEventListener(
                "input",
                function () {


                    respostas[perguntaAtual] = {

                        pergunta:
                            pergunta.pergunta,

                        resposta:
                            textarea.value

                    };

                }
            );


            opcoesContainer.appendChild(
                textarea
            );

        }


        /* =================================================
           ESCALA 0 A 10
        ================================================= */

        else if (
            pergunta.tipo === "escala"
        ) {


            const escalaContainer =
                document.createElement(
                    "div"
                );


            escalaContainer.className =
                "questionario-escala";


            const numeros =
                document.createElement(
                    "div"
                );


            numeros.className =
                "escala-numeros";


            /*
             * Cria os números de 0 até 10.
             */

            for (
                let i = 0;
                i <= 10;
                i++
            ) {


                const botao =
                    document.createElement(
                        "button"
                    );


                botao.type = "button";


                botao.textContent = i;


                botao.className =
                    "escala-opcao";


                if (
                    respostas[perguntaAtual] &&
                    respostas[perguntaAtual].resposta == i
                ) {

                    botao.classList.add(
                        "selecionada"
                    );

                }


                botao.addEventListener(
                    "click",
                    function () {


                        const todas =
                            numeros.querySelectorAll(
                                ".escala-opcao"
                            );


                        todas.forEach(
                            function (item) {

                                item.classList.remove(
                                    "selecionada"
                                );

                            }
                        );


                        botao.classList.add(
                            "selecionada"
                        );


                        respostas[perguntaAtual] = {

                            pergunta:
                                pergunta.pergunta,

                            resposta:
                                i

                        };

                    }
                );


                numeros.appendChild(
                    botao
                );

            }


            escalaContainer.appendChild(
                numeros
            );


            const legenda =
                document.createElement(
                    "div"
                );


            legenda.className =
                "escala-legenda";


            legenda.innerHTML =
                "<span>0 — Nada</span>" +
                "<span>10 — Muito</span>";


            escalaContainer.appendChild(
                legenda
            );


            opcoesContainer.appendChild(
                escalaContainer
            );

        }


        /* =================================================
           BOTÃO VOLTAR
        ================================================= */

        if (perguntaAtual === 0) {

            voltar.style.visibility =
                "hidden";

        } else {

            voltar.style.visibility =
                "visible";

        }


        /* =================================================
           ÚLTIMA PERGUNTA
        ================================================= */

        if (
            perguntaAtual ===
            perguntas.length - 1
        ) {

            proxima.innerHTML =
                'Finalizar <span>↗</span>';

        } else {

            proxima.innerHTML =
                'Próxima <span>↗</span>';

        }

    }


    /* =================================================
       PRÓXIMA / FINALIZAR
    ================================================= */

    proxima.addEventListener(
        "click",
        async function () {


            const respostaAtual =
                respostas[perguntaAtual];


            /*
             * Verifica se a pergunta foi respondida.
             */

            if (
                !respostaAtual ||
                respostaAtual.resposta === ""
            ) {

                alert(
                    "Por favor, responda esta pergunta antes de continuar."
                );

                return;

            }


            /*
             * Se for a última pergunta,
             * envia tudo para o n8n.
             */

            if (
                perguntaAtual ===
                perguntas.length - 1
            ) {

                await enviarQuestionario();

                return;

            }


            perguntaAtual++;

            mostrarPergunta();

        }
    );


    /* =================================================
       VOLTAR
    ================================================= */

    voltar.addEventListener(
        "click",
        function () {


            if (perguntaAtual > 0) {

                perguntaAtual--;

                mostrarPergunta();

            }

        }
    );


    /* =================================================
       FECHAR
    ================================================= */

    fechar.addEventListener(
        "click",
        function () {

            fecharQuestionario();

        }
    );


    /* =================================================
       FECHAR CLICANDO FORA
    ================================================= */

    questionario.addEventListener(
        "click",
        function (event) {


            if (
                event.target === questionario
            ) {

                fecharQuestionario();

            }

        }
    );


    /* =================================================
       TELA DE SUCESSO
    ================================================= */

    function mostrarSucesso() {


        const card =
            questionario.querySelector(
                ".questionario-card"
            );


        card.innerHTML = `

            <div class="questionario-sucesso">

                <div class="sucesso-icone">
                    ✓
                </div>


                <h1>
                    Parabéns! Seus dados foram
                    enviados com sucesso!
                </h1>


                <p>
                    Suas respostas foram recebidas.
                    <br>
                    Obrigada por participar!
                </p>


                <button
                    type="button"
                    class="sucesso-botao"
                    id="btnVoltarLP"
                >
                    VOLTAR PARA A PÁGINA
                    <span>↗</span>
                </button>

            </div>

        `;


        const btnVoltarLP =
            card.querySelector(
                "#btnVoltarLP"
            );


        btnVoltarLP.addEventListener(
            "click",
            function () {

                fecharQuestionario();

            }
        );

    }


    /* =================================================
       ENVIAR QUESTIONÁRIO
    ================================================= */

    async function enviarQuestionario() {


        const dados = {

            nome:
                dadosLead.nome,

            email:
                dadosLead.email,

            telefone:
                dadosLead.telefone,

            respostas:
                respostas

        };


        try {


            proxima.disabled = true;


            proxima.innerHTML =
                "Enviando...";


            await fetch(
                webhookQuestionario,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(dados),

                    mode: "no-cors"

                }
            );


            /*
             * NÃO fecha mais o questionário.
             *
             * NÃO mostra alert.
             *
             * Mostra a tela de sucesso.
             */

            mostrarSucesso();


        } catch (erro) {


            console.error(erro);


            alert(
                "Não foi possível enviar suas respostas. Tente novamente."
            );


        } finally {


            proxima.disabled = false;


            proxima.innerHTML =
                'Finalizar <span>↗</span>';

        }

    }


    /* =================================================
       FORMULÁRIO PRINCIPAL → N8N
    ================================================= */

    const formulario =
        document.querySelector(
            ".hero-form"
        );


    if (formulario) {


        formulario.addEventListener(
            "submit",
            async function (event) {


                event.preventDefault();


                const nome =
                    document
                        .getElementById("nome")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const telefone =
                    document
                        .getElementById("telefone")
                        .value
                        .trim();


                dadosLead = {

                    nome:
                        nome,

                    email:
                        email,

                    telefone:
                        telefone

                };


                const botao =
                    formulario.querySelector(
                        "button"
                    );


                try {


                    if (botao) {

                        botao.disabled = true;

                        botao.textContent =
                            "Enviando...";

                    }


                    /*
                     * Pega os dados do formulário principal.
                     */

                    const dadosFormulario =
                        new FormData(
                            formulario
                        );


                    /*
                     * Envia para o action
                     * configurado no formulário.
                     */

                    await fetch(
                        formulario.action,
                        {

                            method: "POST",

                            body:
                                dadosFormulario,

                            mode: "no-cors"

                        }
                    );


                    /*
                     * Depois do envio,
                     * abre o questionário.
                     */

                    abrirQuestionario();


                } catch (erro) {


                    console.error(
                        "Erro no envio:",
                        erro
                    );


                    alert(
                        "Não foi possível enviar seus dados. Tente novamente."
                    );


                } finally {


                    if (botao) {

                        botao.disabled = false;

                        botao.textContent =
                            "QUERO RECEBER O GUIA";

                    }

                }

            }
        );

    }


    /* =================================================
       COMEÇA FECHADO
    ================================================= */

    questionario.style.display =
        "none";

});