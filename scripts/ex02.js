document.querySelector('#sendBtn').addEventListener('click', () => {
    let num = []

    for (let i = 1; i <= 20; i++) {
        let id = 'n' + i
        let valor = parseFloat(document.querySelector(`#${id}`).value)
        num.push(valor)
    }

    function inverterArray(vet) {
        let vetInvert = []
        for (let i = vet.length - 1; i >= 0; i--) {
            vetInvert.push(vet[i])
        }
        return vetInvert
    }

    num = inverterArray(num)

    let result = {
        NumerosLidos: num
    };

    document.querySelector('#p').textContent = 'Resultado no local Storage'

    let storedResults = JSON.parse(localStorage.getItem('ex02') || '[]')
    storedResults.push(result)
    localStorage.setItem('ex02', JSON.stringify(storedResults))
})