function funcao_NumeroBinarioConvertaParaDecimal(){
    /*
<!--
Peça ao usuário para digitar um número binário e o converta para decimal.
-->
    */

let bin = prompt('Digite numero binario');
let dec = 0;
for (let c = 0; c < bin.length; c++) dec += Math.pow(2, c) * bin[bin.length - c - 1]; 
alert(dec);
}