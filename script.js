function comprarCombustivel() {
    var tipoCommbustivel;
    var qtdLitros;


    function selectCombustivel() {
        tipoCommbustivel = +window.prompt("Digite 1 para Álcool e 2 para Gasolina:");
        if(tipoCommbustivel !== 1 && tipoCommbustivel !== 2) {
            window.alert("Código inválido ou inexistente!");
            selectCombustivel();
        }
    }


    function selectLitros() {
        qtdLitros = +window.prompt("Informe a quantidade de litros a ser abastecido:");
        if(qtdLitros <= 0 ||  Number.isNaN(qtdLitros) == true) {
            window.alert("O valor informado é inválido!");
            selectLitros();
        }
    }


    selectCombustivel();
    selectLitros();
    if (tipoCommbustivel == 1) {
        document.write(`Combustível selecionado: ${tipoCommbustivel} - Álcool. <br> Litros abastecidos: ${qtdLitros}L. <br> Total a pagar: R$ ${qtdLitros * 3.16}`);
    } else {
        document.write(`Combustível selecionado: ${tipoCommbustivel} - Gasolina. <br> Litros abastecidos: ${qtdLitros}L. <br> Total a pagar: R$ ${qtdLitros * 5.19}`);
    }


}
