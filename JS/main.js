
const robotron = document.querySelector("#robotron")
// Função anônima, funções de flecha, não tem nome
robotron.addEventListener("click", () => {
    alert("Olá, eu sou o  ROBOTRON")
})

// MOTANDO O ROBOTRON //
const controle= document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatisticas]")
// Contem as estatisticas do robotron
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
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento)=> {
    elemento.addEventListener("click",(evento) => {
    manipulandoDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.peca)
})

})

// função que serve para manipular os valores por meio dos botões
function manipulandoDados(operacao, controle){
    const peca =  controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}

// manipulando as estatisticas do robotron(painel de informações)
function atualizaEstatisticas(peca){

    estatisticas.forEach( (elemento) => {
        // console.log(estatisticas.dataset.estatisticas)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatisticas] 

    })

}




