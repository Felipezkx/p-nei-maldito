const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Era uma Vez...",
        alternativas: [
            {
                texto: "Uma iguana.",
                afirmacao: "uma sabida iguana chamada iguanaru. "
            },
            {
                texto: "Um axolote.",
                afirmacao: "Um axolote exótico e expressivo."
            }
        ]
    },
    {
        enunciado: "Qual o caminho ele tomou?",
        alternativas: [
            {
                texto: "fossa das marianas.",
                afirmacao: "que lugar díficil de chegar ao fundo."
            },
            {
                texto: "monte everest.",
                afirmacao: "muito frio e ar rarefeito."
            }
        ]
    },
    {
        enunciado: "O que ele fez ao chegar em destino?",
        alternativas: [
            {
                texto: "avistou um leviathan.",
                afirmacao: "e então ele tirou uma foto para postar na internet para conseguir seguidores."
            },
            {
                texto: "encontrou um bar.",
                afirmacao: "e então sentou para tomar uma cerveja."
            }
        ]
    },
    {
        enunciado: "e então, o perguntaram:",
        alternativas: [
            {
                texto: "o que você está fazendo aqui?",
                afirmacao: "vim fazer uma captura de tela de um Leviatan para ficar famoso."
            },
            {
                texto: "o que você faz no bar?",
                afirmacao: "quero tomar cachaça."
            }
        ]
    },
    {
        enunciado: "você está cansado, o que você faz?",
        alternativas: [
            {
                texto: "volto para a casa",
                afirmacao: "subo nas costas do Leviatan e subo até a superficie."
            },
            {
                texto: "quero dormir no bar.",
                afirmacao: "bebo tanto que desmaio e passo a noite na bancada do bar."
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
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em lugar qualquer...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
