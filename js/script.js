/* =====================================================
   FAQ - DESKTOP ABERTO / TABLET E MOBILE FECHADOS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    function ajustarFAQ() {

        if (window.innerWidth > 1100) {

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
   BOTÃO DA SEGUNDA CHAMADA REDIRECIONANDO PARA O HERO- MOBILE
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
   WEBHOOKS DADOS E QUESTIONARIO
================================================= */

    const webhookDados =
    "https://criadordigital-n8n-webhook.bbw7sv.easypanel.host/webhook/3c22f0d6-f8c6-4f2a-ab25-918b9b25056a";

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
       PERGUNTAS VERDADEIRAS DO QUESTIONÁRIO
    ================================================= */

    const perguntas = [

        /* 1 */

        {
            pergunta:
                "Onde você está agora?",

            tipo: "multipla",

            opcoes: [

                "Ainda estou no relacionamento",

                "Estou me preparando para sair",

                "Saí recentemente (últimos 12 meses)",

                "Já saí, mas ainda me sinto presa emocionalmente",

                "Não tenho certeza se estou em um relacionamento abusivo/narcisista"

            ]

        },


        /* 2 */

        {
            pergunta:
                "Onde você mora hoje?",

            tipo: "texto",

            placeholder:
                "Ex: Destin, FL"

        },


        /* 3 */

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


        /* 4 */

        {
            pergunta:
                "Marque tudo o que você sente com frequência:",

            tipo: "multipla",

            opcoes: [

                "Piso em ovos para não provocar uma reação dele",

                "Sinto que estou sempre errada, mesmo quando tento acertar",

                "Já me chamaram de “louca”, “exagerada” ou “sensível demais”",

                "Não consigo tomar decisões sem pensar no que ele vai achar",

                "Me afastei de amigos e família por causa do relacionamento",

                "Sei que algo está errado, mas não consigo ir embora",

                "Tenho medo de não conseguir viver sem ele",

                "Tenho dificuldade em confiar em mim mesma",

                "Sinto que perdi minha identidade ao longo do relacionamento",

                "Afastada da minha família",

                "Isolada dos meus amigos",

                "Dependência financeira",

                "Medo de perder conexão com os filhos",

                "Esperança de que ele mude",

                "Culpa ou vergonha",

                "Não sei por onde começar"

            ]

        },


        /* 5 */

        {
            pergunta:
                "O quanto essa situação afeta sua vida hoje?",

            tipo: "escala"

        },


        /* 6 */

        {
            pergunta:
                "Descreva, com suas próprias palavras, o que você mais sente hoje em relação a essa situação.",

            tipo: "texto",

            placeholder:
                "Escreva sua resposta..."

        },


        /* 7 */

        {
            pergunta:
                "O que você já tentou fazer para superar essa situação?",

            tipo: "multipla",

            opcoes: [

                "Terapia",

                "Coach",

                "Livros",

                "Vídeos no YouTube",

                "Cursos",

                "Igreja/Espiritualidade",

                "Comunidades",

                "Mentorias em grupo",

                "Conversar com amigos ou familiares",

                "Nada ainda",

                "Outro"

            ]

        },


        /* 8 */

        {
            pergunta:
                "O que mais impede você de seguir em frente hoje?",

            tipo: "multipla",

            opcoes: [

                "Medo da solidão",

                "Dependência emocional",

                "Filhos",

                "Dependência financeira",

                "Questões jurídicas/divórcio",

                "Esperança de que ele mude",

                "Culpa",

                "Idioma",

                "Cultura",

                "Imigração",

                "Visto",

                "Não sei por onde começar",

                "Outro"

            ]

        },


        /* 9 */

        {
            pergunta:
                "Você tem renda própria hoje?",

            tipo: "opcao",

            opcoes: [

                "Sim, trabalho e tenho renda própria",

                "Tenho renda, mas dividida/controlada por ele",

                "Não tenho renda própria no momento"

            ]

        },


        /* 10 */

        {
            pergunta:
                "Imagine que daqui a três meses você acorda, e finalmente se sente livre emocionalmente. O que teria mudado na sua vida?",

            tipo: "texto",

            placeholder:
                "Escreva sua resposta..."

        },


        /* 11 */

        {
            pergunta:
                "Se existisse um acompanhamento para te ajudar nessa reconstrução, você estaria pronta para começar agora?",

            tipo: "opcao",

            opcoes: [

                "Sim, estou pronta",

                "Sim, mas preciso entender melhor como funciona",

                "Talvez, depende do investimento",

                "Ainda não, só quero entender o que estou vivendo"

            ]

        },


        /* 12 */

        {
            pergunta:
                "Se esse acompanhamento existisse, qual dessas faixas estaria dentro do que você poderia investir hoje?",

            tipo: "opcao",

            opcoes: [

                "Até U$ 500",

                "Entre U$ 500 e U$ 1.500",

                "Entre U$ 1.500 e U$ 3.000",

                "Acima de U$ 3.000",

                "Prefiro não responder agora"

            ]

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
           ESCOLHA ÚNICA
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


                    botao.appendChild(
                        radio
                    );


                    botao.appendChild(
                        texto
                    );


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
           MÚLTIPLA ESCOLHA
        ================================================= */

        else if (
            pergunta.tipo === "multipla"
        ) {

            let respostasSalvas = [];


            if (
                respostas[perguntaAtual] &&
                Array.isArray(
                    respostas[perguntaAtual].resposta
                )
            ) {

                respostasSalvas =
                    respostas[perguntaAtual].resposta;

            }


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


                    botao.appendChild(
                        radio
                    );


                    botao.appendChild(
                        texto
                    );


                    if (
                        respostasSalvas.includes(
                            opcaoTexto
                        )
                    ) {

                        botao.classList.add(
                            "selecionada"
                        );

                    }


                    botao.addEventListener(
                        "click",
                        function () {

                            botao.classList.toggle(
                                "selecionada"
                            );


                            const selecionadas =
                                Array.from(
                                    opcoesContainer.querySelectorAll(
                                        ".questionario-opcao.selecionada"
                                    )
                                ).map(
                                    function (item) {

                                        return item
                                            .querySelector(
                                                "span:last-child"
                                            )
                                            .textContent;

                                    }
                                );


                            respostas[perguntaAtual] = {

                                pergunta:
                                    pergunta.pergunta,

                                resposta:
                                    selecionadas

                            };

                        }
                    );


                    opcoesContainer.appendChild(
                        botao
                    );

                }
            );


            /* =================================================
               CAMPO "OUTRO"
            ================================================= */

            if (
                pergunta.opcoes.includes(
                    "Outro"
                )
            ) {

                const outro =
                    document.createElement(
                        "input"
                    );


                outro.type = "text";


                outro.className =
                    "questionario-outro";


                outro.placeholder =
                    "Se escolheu Outro, escreva aqui...";


                if (
                    respostas[perguntaAtual] &&
                    respostas[perguntaAtual].outro
                ) {

                    outro.value =
                        respostas[
                            perguntaAtual
                        ].outro;

                }


                outro.addEventListener(
                    "input",
                    function () {

                        if (
                            !respostas[perguntaAtual]
                        ) {

                            respostas[perguntaAtual] = {

                                pergunta:
                                    pergunta.pergunta,

                                resposta: []

                            };

                        }


                        respostas[
                            perguntaAtual
                        ].outro =
                            outro.value;

                    }
                );


                opcoesContainer.appendChild(
                    outro
                );

            }

        }


        /* =================================================
           TEXTO
        ================================================= */

        else if (
            pergunta.tipo === "texto"
        ) {

            const textarea =
                document.createElement(
                    "textarea"
                );


            textarea.className =
                "questionario-texto";


            textarea.placeholder =
                pergunta.placeholder ||
                "Digite sua resposta...";


            textarea.rows = 5;


            if (
                respostas[perguntaAtual]
            ) {

                textarea.value =
                    respostas[
                        perguntaAtual
                    ].resposta || "";

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

        if (
            perguntaAtual === 0
        ) {

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


            /* =================================================
               VERIFICA SE RESPONDEU
            ================================================= */

            if (
                !respostaAtual ||
                respostaAtual.resposta === "" ||
                (
                    Array.isArray(
                        respostaAtual.resposta
                    ) &&
                    respostaAtual.resposta.length === 0
                )
            ) {

                alert(
                    "Por favor, responda esta pergunta antes de continuar."
                );

                return;

            }


            /* =================================================
               ÚLTIMA PERGUNTA
            ================================================= */

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

            if (
                perguntaAtual > 0
            ) {

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
       MANTENDO A ESTRUTURA QUE JÁ EXISTIA
    ================================================= */

    function mostrarSucesso() {

        const card =
            questionario.querySelector(
                ".questionario-card"
            );


        /*
         * Mantém a tela de sucesso original.
         * Apenas substitui o conteúdo do card.
         */

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

        card.classList.add("sucesso-ativo");


        /*
         * O questionário continua sendo a camada
         * principal da tela, mas agora contém
         * somente a mensagem de sucesso.
         *
         * Assim não existe mais nenhuma pergunta
         * aparecendo atrás da mensagem.
         */

        questionario.style.display =
            "flex";


        document.body.style.overflow =
            "hidden";


        /*
         * Botão para voltar à página inicial.
         */

        const btnVoltarLP =
            card.querySelector(
                "#btnVoltarLP"
            );


        if (btnVoltarLP) {

            btnVoltarLP.addEventListener(
                "click",
                function () {

                    fecharQuestionario();

                }
            );

        }

    }


/* =================================================
   ENVIAR QUESTIONÁRIO
================================================= */

async function enviarQuestionario() {

const utms = getStoredUTMs();

    const dados = {

        nome: dadosLead.nome,

        email: dadosLead.email,

        telefone: dadosLead.telefone,

        respostas: respostas,

        utm_source: utms.utm_source || "",
        utm_medium: utms.utm_medium || "",
        utm_campaign: utms.utm_campaign || "",
        utm_term: utms.utm_term || "",
        utm_content: utms.utm_content || "",
        utm_site: utms.utm_site || "",
        utm_id: utms.utm_id || "",

        gclid: utms.gclid || "",
        fbclid: utms.fbclid || "",
        ttclid: utms.ttclid || "",
        msclkid: utms.msclkid || "",

        landing_page: utms.landing_page || "",
        referrer: utms.referrer || ""

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


        /* =============================================
           FINALIZAÇÃO
        ============================================= */

        mostrarSucesso();


        /*
         * Esconde o questionário original
         * para ele não ficar aparecendo atrás.
         */


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

                        botao.disabled =
                            true;


                        botao.textContent =
                            "Enviando...";

                    }


                    const dadosFormulario =
                        new FormData(
                            formulario
                        );


                         //ADICIONA AS UTMs AO PRIMEIRO ENVIO
                        const utms = getStoredUTMs();

                        Object.entries(utms).forEach(
                            function ([chave, valor]) {

                                if (valor) {

                                    dadosFormulario.append(
                                        chave,
                                        valor
                                    );

                                }

                            }
                        );


                    await fetch(

                        webhookDados,
                         {

                            method: "POST",
                            body:dadosFormulario,
                            mode: "no-cors"

                        }
                    );


                    /*
                     * Depois do primeiro envio,
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

                        botao.disabled =
                            false;


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



/* =================================================

   CAPTURA E PERSISTÊNCIA DE UTMs
================================================= */

const UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_site",
    "utm_id",
    "gclid",
    "fbclid",
    "ttclid",
    "msclkid"
];

(function captureUTMs() {

    const params = new URLSearchParams(
        window.location.search
    );

    UTM_KEYS.forEach(function (key) {

        const value = params.get(key);

        if (value) {

            sessionStorage.setItem(
                "utm_" + key,
                value
            );

        }

    });

    if (
        !sessionStorage.getItem(
            "utm_landing_page"
        )
    ) {

        sessionStorage.setItem(
            "utm_landing_page",
            window.location.href
        );

    }

    if (
        document.referrer &&
        !sessionStorage.getItem(
            "utm_referrer"
        )
    ) {

        sessionStorage.setItem(
            "utm_referrer",
            document.referrer
        );

    }

})();
/* 
   RECUPERAR UTMs SALVAS
 */

function getStoredUTMs() {

    const utms = {};

    UTM_KEYS.forEach(function (key) {

        const value =
            sessionStorage.getItem(
                "utm_" + key
            );

        if (value) {

            utms[key] = value;

        }

    });

    utms.landing_page =
        sessionStorage.getItem(
            "utm_landing_page"
        ) ||
        window.location.href;

    const referrer =
        sessionStorage.getItem(
            "utm_referrer"
        );

    if (referrer) {

        utms.referrer = referrer;

    }

    return utms;

}

