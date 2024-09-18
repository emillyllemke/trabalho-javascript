const grafico = document.getElementById('grafico').getContext('2d');

const myChart = new Chart(grafico, {
    type: 'line', 
    data: {
        labels: [],
        datasets: [{
            label: 'Vendas',
            data: [],
            backgroundColor: 'rgba(244, 187, 167, 0.7)',
            borderColor: 'rgba(244, 187, 167, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function addDado() {
    const rotulo = document.getElementById('dataRotulo').value;
    const valor = document.getElementById('dataValor').value;
    
    if (rotulo && valor) {
        myChart.data.labels.push(rotulo);
        myChart.data.datasets[0].data.push(valor);
        myChart.update();
        
        document.getElementById('dataRotulo').value = '';
        document.getElementById('dataValor').value = '';
    }
}