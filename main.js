const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braco');

const botaoDeControle = document.querySelectorAll('.controle-ajuste');

console.log(botaoDeControle)
console.log(somar)
console.log(subtrair)
console.log(braco)

botaoDeControle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})


const manipulaDados = function(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}