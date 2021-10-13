adicionar = (valor1, valor2) => {
    return valor1 + valor2;
}
subtrair = (valor1, valor2) => {
    return valor1 - valor2;
}
multiplicacao = (valor1, valor2) => {
    return valor1 * valor2;
}
divisao = (valor1, valor2) => {
    return valor1 / valor2;
}

$(document).ready (function() {
   $('#btnCalcular').click (()=>{
       let valor1 = $("#txtValor1").val();
       let valor2 = $("#txtValor2").val();
       let operacao = $("#selOperacao").val();
       let resultado;

       if (isNaN (valor1)|| isNaN (valor2)){
       alert (" O valor informado é Invalido");
   }else{
       valor1= parseFloat (valor1);
       valor2= parseFloat (valor2);
       switch (operacao) {
        case "adicao":
              resultado = adicionar(valor1, valor2);
        break;
        case "subtracao":
            resultado = subtrair(valor1, valor2);
          break;
        case "divisao":
            resultado = divisao(valor1, valor2);
        break;
        case "multiplicacao":
            resultado = multiplicacao(valor1, valor2);
        break;
      }
      
   }
   $("#spnResultado").html (resultado);

   });
        $("input").keypress((evento) => {
            if (evento.keyCode < 46 || evento.keyCode > 57 || evento.keyCode == 47) {
            evento.preventDefault();
            alert("Tecla inválida!");
        }
    });
});