function irParaProxima(item) {
    var div = $(item).closest('.div-pergunta');
    div.fadeOut(function () {
        div.next().fadeIn()
    });
}

function irParaAnterior(item) {
    var div = $(item).closest('.div-pergunta');
    div.fadeOut(function () {
        div.prev().fadeIn()
    });
}

function irParaPergunta(numero) {
    $('.div-pergunta').hide() 
    $('#div-pergunta-' + numero).show()
}

function finalizarCalculo() {

    // Pergunta 1
    var pessoas = $('#input-pergunta-1').val();
    $('#resultado-limpo-1').html("X.XX");
    $('#resultado-sujo-1').html("X.XX");

    // Pergunta 2 
    var eletricidade = $('#input-pergunta-2').val();
    var resultadoSujoEletricidade = parseFloat((((0.0697*eletricidade  - 0.00274)).toFixed(2)));
    $('#resultado-limpo-2').html(((0.035*eletricidade).toFixed(2)));
    $('#resultado-sujo-2').html(resultadoSujoEletricidade);

    // Pergunta 3 
    var gas = $('#input-pergunta-3').val();
    var resultadoSujoGas = parseFloat((((35.89*gas)).toFixed(2)));
    var resultadoLimpoGas = parseFloat(((((3.5/1000)*605.8)*gas).toFixed(2)));
    $('#resultado-limpo-3').html(resultadoLimpoGas);
    $('#resultado-sujo-3').html(resultadoSujoGas);

    // Pergunta 4 
    var residuos = $('#input-pergunta-4').val();
    var resultadoSujoResiduos = parseFloat(((((0.03*residuos)*1000)*pessoas).toFixed(2)));
    $('#resultado-limpo-4').html((((4/1000)*residuos)*pessoas).toFixed(2));
    $('#resultado-sujo-4').html(resultadoSujoResiduos);

    // Pergunta 5
    var transporteIndividual = $('#input-pergunta-5').val();
    var resultadoSujoTransporteIndividual = parseFloat((((2.84*transporteIndividual).toFixed(2))));
    var resultadoLimpoTransporteIndividual = parseFloat(((((1/1000)*transporteIndividual).toFixed(2))));
    $('#resultado-limpo-5').html(resultadoLimpoTransporteIndividual);
    $('#resultado-sujo-5').html(resultadoSujoTransporteIndividual);

    // Pergunta 6 
  

    var transporteColetivo = $('#input-pergunta-6').val();
    var resultadoSujoTransporteColetivo = parseFloat(((0.32*transporteColetivo).toFixed(2)));
    var resultadoLimpoTransporteColetivo = parseFloat((((1.90/1000)*transporteColetivo).toFixed(2)));
    $('#resultado-limpo-6').html(resultadoLimpoTransporteColetivo);
    $('#resultado-sujo-6').html(resultadoSujoTransporteColetivo);

    // Pergunta 7

    var carne = $('#input-pergunta-7').val();
    var resultadoSujoCarne = ((0.0664*carne)*1000).toFixed(2);
    $('#resultado-sujo-7').html(resultadoSujoCarne);

    // Diferença
    $('#diferenca').html(resultadoSujoEletricidade+resultadoSujoGas+resultadoSujoResiduos+resultadoSujoTransporteIndividual+resultadoSujoTransporteColetivo-resultadoLimpoGas-resultadoLimpoTransporteIndividual-resultadoLimpoTransporteColetivo);

    UIkit.modal("#modal-resultados").show();
}

UIkit.util.ready(function () {

    var bar = document.getElementById('js-progressbar');

    var animate = setInterval(function () {
        if ( $('#div-pergunta-' + numero) >=  $('#div-pergunta-')){
        bar.value += 10;
        }
        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 1000);

});