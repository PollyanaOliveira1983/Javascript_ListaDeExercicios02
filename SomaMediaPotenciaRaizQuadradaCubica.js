function funcao_SomaMediaPotenciaRaizQuadradaCubica(){
    /*
<!--
Crie um programa que pergunta quantos números o usuário deseja digitar 
(tanto inteiro quanto decimal) e rebeca os números que . 
Armazene esses números em um array e depois :
 mostre a soma total deles, 
 a média deles, 
 mostre cada valor em uma potência de 2 
 e faça a raíz quadrada 
 e cúbica.
-->
    */
    var variavel_array = [];   
    var variavel_controle_erro = true
    var variavel_entrada = prompt("Quantos números o usuário deseja digitar ?");
    console.log(variavel_entrada);
    if (variavel_entrada) {
        if (!isNaN(parseInt(variavel_entrada)) && isFinite(variavel_entrada)) {
            let variavel_local_valor = parseInt(variavel_entrada)
            console.log(variavel_local_valor);
            if (variavel_local_valor > 0) {
                for (i = 0; i < variavel_local_valor; i++) {
                    let variavel_entrada_valor = prompt(String(i+1) + ') Informe um valor: ');
                    if (!isNaN(parseFloat(variavel_entrada_valor)) && isFinite(variavel_entrada_valor)) {
                        variavel_array.push(variavel_entrada_valor);                                
                    }
                    else {
                        alert('<<Erro>> Dados incorretos ...');
                        variavel_controle_erro = false;
                        break
                    }                       
                } 
                if (variavel_controle_erro) {
                    let quantidades_informados = 0;
                    let soma_valores = parseFloat('0');
                    for (var i = 0; i < variavel_array.length; i++) {
                        quantidades_informados++;   
                        soma_valores += parseFloat(variavel_array[i]);   
                        alert(String(i+1) + ') Valor: ' + String(variavel_array[i]) + ' >> ^2 : ' + String(Math.pow(parseFloat(variavel_array[i]), 2)) + ' >> Raiz.Quadrada: ' + String(Math.sqrt(parseFloat(variavel_array[i]))) + ' >> Cúbica: ' + String(Math.cbrt(parseFloat(variavel_array[i])))    );                      
                        console.log(String(i+1) + ') Valor: ' + String(variavel_array[i]) + ' >> ^2 : ' + String(Math.pow(parseFloat(variavel_array[i]), 2)) + ' >> Raiz.Quadrada: ' + String(Math.sqrt(parseFloat(variavel_array[i]))) + ' >> Cúbica: ' + String(Math.cbrt(parseFloat(variavel_array[i])))    );
                    }
                    let media_valores = soma_valores/quantidades_informados;
                    alert('Valores >> Soma : ' + String(soma_valores) + ' >> Média: ' + String(media_valores) + ' >> Qt.informado: ' + String(quantidades_informados));
                    console.log('Valores >> Soma : ' + String(soma_valores) + ' >> Média: ' + String(media_valores) + ' >> Qt.informado: ' + String(quantidades_informados));
                }
            } 
            else {
                alert('Dados insuficientes ...');
                console.log('Dados insuficientes ...');
                variavel_controle_erro = false;
            }     
        } 
        else {
            alert('Dados não numerico ...');
            console.log('Dados não numerico ...');
            variavel_controle_erro = false;
        }                    
    } 
    else {
        alert('Nao foi informado dados ...');
        console.log('Nao foi informado dados ...');
        variavel_controle_erro = false;
    }
    console.log(variavel_array);
    console.log(variavel_controle_erro);
}
