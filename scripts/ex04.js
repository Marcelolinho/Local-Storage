document.querySelector('#sendBtn').addEventListener('click', () => {
    let totalMercadorias = parseInt(document.querySelector('#totalMercadorias').value)
    let valorMercadoria = parseFloat(document.querySelector('#valorMercadoria').value)

    let valorTotalEstoque = totalMercadorias * valorMercadoria

    let mediaValorMercadorias = valorTotalEstoque / totalMercadorias

    let result = {
        ValorTotalEstoque: valorTotalEstoque,
        MediaValorMercadorias: mediaValorMercadorias
    }

    document.querySelector('#p').textContent = 'Resultado no local Storage'

    let storedResults = JSON.parse(localStorage.getItem('ex04') || '[]')
    storedResults.push(result)
    localStorage.setItem('ex04', JSON.stringify(storedResults))
})