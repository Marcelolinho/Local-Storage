document.querySelector('#sendBtn').addEventListener('click', () => {
    let notas = [];

    for (let i = 1; i <= 20; i++) {
        let id = 'n' + i;
        let valor = parseFloat(document.querySelector(`#${id}`).value);
        notas.push(valor);
    }

    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;

    let acimaMedia = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) {
            acimaMedia++;
        }
    }

    let result = {
        Media: media,
        acimaMedia: acimaMedia
    };

    document.querySelector('#p').textContent = 'Resultado no local Storage'

    let storedResults = JSON.parse(localStorage.getItem('ex03') || '[]')
    storedResults.push(result)
    localStorage.setItem('ex03', JSON.stringify(storedResults))
})