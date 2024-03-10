const prompt = require("prompt-sync")({sigint: true});
// Solicitar uma nova resposta enquanto a opção for inválida;
do {
    //Solicitar a escolha da bebida;
    var escolha = prompt("Escolha sua bebida (café, leite ou chá):");

    // Var para valor e fazer a checagem do while;
    var valor;

    //swith para captar a escolha;
        switch(escolha) {
            case "café":
                valor = 5.50;
                break;
            case "leite":
                valor = 4.00;
                break;
            case "chá":
                valor = 3.00;
                break;
            default:
                // Opção inválida selecionada;
                console.log("Opção inválida. Por favor, escolha entre café, leite ou chá.");
                break;
        }
} while (valor == undefined);

// Se uma opcao valida retornar mensagem;
if (valor !== undefined) {
    console.log("Você escolheu " + escolha + ". O valor a ser pago é R$" + valor.toFixed(2) + ".");
}