imc = (peso, altura) => {
    return peso/(altura*altura);
}

$(document).ready (function() {
    $('#calcular').click(()=>{

        let peso = $('#camPeso').val();
        let altura = $('#camAltura').val();
        let resultado;

        peso = parseFloat(peso);
        altura = parseFloat(altura);
        resultado = imc (peso, altura);
       

    $("#spanResultado").html(`O Imc é: ${resultado}`);
    });
});