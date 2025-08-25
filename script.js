const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
     {
        enunciado: "Onde Ayrton Senna nasceu?",
        alternativas: [
            {
                texto: "São Paulo",
                afirmacao: "afirmação"
            },
            {
                texto: "Rio de Janeiro",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Por quantas equipes Ayrton Senna correu?",
        alternativas: [
            {
                texto: "3",
                afirmacao: "afirmação"
            },
            {
                texto: "4",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quantos títulos mundiais de Fórmula 1 Ayrton Senna conquistou?",
        alternativas: [
            {
                texto: "4",
                afirmacao: "afirmação"
            },
            {
                texto: "3",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quem foi o maior rival de Ayrton Senna",
        alternativas: [
            {
                texto: "Alain Prost",
                afirmacao: "afirmação"
            },
            {
                texto: "Nelson Piquet",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em que ano Ayrton Senna morreu?",
        alternativas: [
            {
                texto: "1993",
                afirmacao: "afirmação"
            },
            {
                texto: "1994",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Ayrton Senna nasceu em São Paulo. Correu por quatro equipes diferentes ao longo dos seus 10 anos de Fórmula 1. Ganhou 3 títulos mundiais. Seu maior rival era Alain Prost. Ayrton veio a falecer em 1994.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();