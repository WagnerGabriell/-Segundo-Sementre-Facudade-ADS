media = (n1, n2, ) => {
    return (n1+n2)/2;
}
mediaR = (n1, n2, nr) => {
    return (n1+n2+nr)/3;
}

$(document).ready (function() {
    $("#nr").hide()
    $("#lReculperacao").hide()
    $("#calcularNovamente").hide()
    $("#spanResultado1").hide()
    $("#spanResultado2").hide()
    $("#calcular").click(() =>{

            let n1 = $("#n1").val();
            let n2 = $("#n2").val();
            let resultado;

            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            resultado = media(n1, n2);

        if(resultado < 6){
            $("#calcular").hide();
            $("#nr").fadeIn(2300);
            $("#lReculperacao").fadeIn(2500);
            $("#calcularNovamente").fadeIn(2800);
            $("#spanResultado1").fadeIn(2000)
            $("#spanResultado1").html(`A média é : ${resultado}`);
        }else{
            $("#spanResultado1").fadeIn(1800)
            $("#spanResultado1").html(`A média é : ${resultado}<br> Portanto esta Aprovado`);
        }

    });
    $("#calcularNovamente").click(()=>{

        let n1 = $("#n1").val();
        let n2 = $("#n2").val();
        let nr = $("#nr").val();
        let resultado;

        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        nr = parseFloat(nr);
        resultado = mediaR(n1, n2, nr);

        if (resultado < 6){
            $("#spanResultado2").fadeIn(1800)
            $("#spanResultado2").html(`A média é : ${resultado}<br> Portanto esta Reprovado`);
        }else{
            $("#spanResultado2").fadeIn(1800)
            $("#spanResultado2").html(`A média é : ${resultado}<br> Portanto esta Aprovado`);
        }

    })
});