document.querySelector('#sendBtn').addEventListener('click', () => {
    let v1 = []
    for (let i = 1; i <= 15; i++) {
        let id = 'n' + i
        let valor = parseFloat(document.querySelector(`#${id}`).value)
        v1.push(valor)
    }

    let v2 = []
    for (let i = 1; i <= 15; i++) {
        let id = 'v' + i
        let valor = parseFloat(document.querySelector(`#${id}`).value)
        v2.push(valor)
    }

    let qtdNumPos = 0;
    for (let i = 0; i < v1.length; i++) {
        if (v1[i] === v2[i]) {
            qtdNumPos++
        }
    }

    let result = {
        QuantidadeNumerosPosicoes: qtdNumPos
    }

    document.querySelector('#p').textContent = 'Resultado: ' + JSON.stringify(result)

    let storedResults = JSON.parse(localStorage.getItem('ex05') || '[]')
    storedResults.push(result)
    localStorage.setItem('ex05', JSON.stringify(storedResults))
})