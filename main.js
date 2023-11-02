function simularEmprestimo() {
    let valorEmprestimo = parseFloat(document.getElementById('valorEmprestimo').value);
    let taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    let totalParcelas = parseInt(document.getElementById('totalParcelas').value);

    let saldoDevedor = valorEmprestimo;
    let valorParcela = valorEmprestimo / totalParcelas;
    let totalPago = 0;
    let resultado = "";

    for (let i = 1; i <= totalParcelas; i++) {
        let juros = saldoDevedor * taxaJuros;
        let parcelaAtual = valorParcela + juros;
        totalPago += parcelaAtual;
        saldoDevedor -= valorParcela;

        resultado += `Mês ${i}: R$ ${parcelaAtual.toFixed(2)}<br>`;
    }

    resultado += `Total pago no final: R$ ${totalPago.toFixed(2)}`;

    document.getElementById('resultado').innerHTML = resultado;
}