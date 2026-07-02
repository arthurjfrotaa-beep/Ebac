function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Digite valores válidos!";
        document.getElementById("classificacao").innerText = "";
        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerText =
        "Seu IMC é: " + imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("classificacao").innerText =
        "Classificação: " + classificacao;
}
