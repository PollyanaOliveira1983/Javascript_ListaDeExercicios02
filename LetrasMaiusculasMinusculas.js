function funcao_LetrasMaiusculasLetrasMinusculas(){
    /*
<!--
-> Peça ao usuário digitar algum texto no pelo prompt 
e depois mostre esse texto com todas as letras maiúsculas, 
com todas as letras minúsculas 
e depois escreva no console letra por letra do texto que o usuário digitou. 
(Utilize o método split para fazer esse último)
-->
    */
    let variavel_controle_erro = true
    let variavel_entrada = prompt("Digite algum texto :");    
    if (variavel_entrada) {
        console.log(variavel_entrada);
        let variavel_entrada_maiusculas = variavel_entrada.toUpperCase();
        let variavel_entrada_minusculas = variavel_entrada.toLowerCase();
        alert("Valor: " + variavel_entrada + " >> MAIUSCULAS: " + variavel_entrada_maiusculas + " >> minusculas: " + variavel_entrada_minusculas) 
        console.log("Valor: " + variavel_entrada + " >> MAIUSCULAS: " + variavel_entrada_maiusculas + " >> minusculas: " + variavel_entrada_minusculas);
        splitString(variavel_entrada)
    }
}

function splitString(stringToSplit, separator='') {
    let arrayOfStrings = stringToSplit.split(separator);
  
    console.log('A string original é: "' + stringToSplit + '"');
    console.log('O separador é: "' + separator + '"');
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' >> '));
    for (let i = 0; i < arrayOfStrings.length; i++) {
        console.log(arrayOfStrings[i]);
    }
    
  }