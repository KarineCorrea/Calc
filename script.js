//parsefloat =numero quebrado ponto e virgula
//getElementById editar os numeros
//let valor que posso alterar
// if se
// else senão

function calcularValores() {
    let valor1 = parseFloat(document.getElementById("txtValor1").value);
    let valor2 = parseFloat(document.getElementById("txtValor2").value);
    let operacao = document.getElementById("cbxOperacao").value;
    let resultado;
    if (operacao === "+") {
      resultado = valor1 + valor2;
    } else if (operacao === "-") {
      resultado = valor1 - valor2;
    } else if (operacao === "/") {
      resultado = valor1 / valor2;
    } else if (operacao === "*") {
      resultado = valor1 * valor2;
    }
    document.getElementById("txtResultado").innerHTML = resultado;
  }
  