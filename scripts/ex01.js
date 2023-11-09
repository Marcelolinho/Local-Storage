document.getElementById('sendBtn').addEventListener('click', () => {   
    let n = []

    for (let i = 1; i <= 10; i++) {
        let id = 'n' + i
        let valor = parseFloat(document.querySelector(`#${id}`).value)
        n.push(valor)
    }

    let x = parseFloat(document.querySelector('#x').value)

    let result = {
        M: []
    };

    for (let i = 0; i < n.length; i++) {
        result.M.push(n[i] * x)
    }

    document.querySelector('#p').textContent = 'Resultado no local Storage'

    let storedResults = JSON.parse(localStorage.getItem('ex01') || '[]');
    storedResults.push(result);
    localStorage.setItem('ex01', JSON.stringify(storedResults));
})
