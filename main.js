const estatisticas = document.querySelectorAll('[data-estatistica')
const peca = document.querySelector('[data-peca]');
const botaoDeControle = document.querySelectorAll('[data-controle]');
const coresRobotron = document.querySelectorAll('[data-cor]')
const robotronExibido = document.querySelector('.robotron-exibido');

coresRobotron.forEach((imagem, cor) => {
    imagem.addEventListener("click", (evento) => {
        atualizaRobotron(cor);
    })
})

const atualizaRobotron = function (cor) {
    imagemAtual = cor;
    const imagem = coresRobotron[imagemAtual].getAttribute('src');
    robotronExibido.setAttribute('src', imagem);
}
botaoDeControle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

const manipulaDados = function (operacao, controle) {

    const peca = controle.querySelector('[data-contador]');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

const atualizaEstatisticas = function (peca, operacao) {
    estatisticas.forEach((elemento) => {
        if (operacao === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
