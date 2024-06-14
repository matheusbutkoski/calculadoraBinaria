function converterDecimalParaBinario() {
    const decimal = document.getElementById("decimal").value;
    const binario = Number(decimal).toString(2);
    document.getElementById("resultadoDecimalBinario").innerText = `Binário: ${binario}`;
}

function somarBinarios() {
    const binario1 = document.getElementById("binario1").value;
    const binario2 = document.getElementById("binario2").value;
    const soma = (parseInt(binario1, 2) + parseInt(binario2, 2)).toString(2);
    document.getElementById("resultadoOperacao").innerText = `Soma: ${soma}`;
}

function subtrairBinarios() {
    const binario1 = document.getElementById("binario1").value;
    const binario2 = document.getElementById("binario2").value;
    const subtracao = (parseInt(binario1, 2) - parseInt(binario2, 2)).toString(2);
    document.getElementById("resultadoOperacao").innerText = `Subtração: ${subtracao}`;
}

function multiplicarBinarios() {
    const binario1 = document.getElementById("binario1").value;
    const binario2 = document.getElementById("binario2").value;
    const multiplicacao = (parseInt(binario1, 2) * parseInt(binario2, 2)).toString(2);
    document.getElementById("resultadoOperacao").innerText = `Multiplicação: ${multiplicacao}`;
}

function dividirBinarios() {
    const binario1 = document.getElementById("binario1").value;
    const binario2 = document.getElementById("binario2").value;
    const quociente = Math.floor(parseInt(binario1, 2) / parseInt(binario2, 2)).toString(2);
    const resto = (parseInt(binario1, 2) % parseInt(binario2, 2)).toString(2);
    document.getElementById("resultadoOperacao").innerText = `Divisão: Quociente = ${quociente}, Resto = ${resto}`;
}

function converterParaComplemento2() {
    const binario = document.getElementById("binarioComplemento").value;
    const n = binario.length;
    const complemento1 = binario.split('').map(bit => bit === '0' ? '1' : '0').join('');
    const complemento2 = (parseInt(complemento1, 2) + 1).toString(2).padStart(n, '0');
    document.getElementById("resultadoComplemento").innerText = `Complemento de 2: ${complemento2}`;
}

function converterParaHexadecimal() {
    const binario = document.getElementById("binarioHexOct").value;
    const hexadecimal = parseInt(binario, 2).toString(16).toUpperCase();
    document.getElementById("resultadoHexOct").innerText = `Hexadecimal: ${hexadecimal}`;
}

function converterParaOctal() {
    const binario = document.getElementById("binarioHexOct").value;
    const octal = parseInt(binario, 2).toString(8);
    document.getElementById("resultadoHexOct").innerText = `Octal: ${octal}`;
}
