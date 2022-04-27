/* Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
Esta função deve retornar a string obtida */

/* function snapCrackle(maxValue){
    let str = ""
     for (let i = 1; i <= maxValue; i++){
        if (i === 1){
            str = str + "Snap"
        }
        else if(i % 2 === 1 && i % 5 === 0){
            str = str + ", SnapCrackle"
        } else if (i % 2 === 1){
            str = str + ", Snap"
        } else if (i % 5 === 0 ){
            str = str + ", Crackle"
        } else {
            str = str + `, ${i}`
        }
        
    }
    return str
}
console.log(snapCrackle(12)) */

  function snapCracklePrime(maxValue){
    let str = ""
    let countDivisores = 0 
    for (let i = 1; i <= maxValue; i++){
        if (i === 1){
            str = str + "Snap"
            continue
        } 
        countDivisores = 0
        for (let j = 1; j <= i; j++){
            if (i % j === 0){
            countDivisores++
            }
        }
        if (countDivisores === 2 ){
                str = str + ", Prime"
        } else if(i % 2 === 1 && i % 5 === 0){
            str = str + ", SnapCrackle"
        } else if (i % 2 === 1){
            str = str + ", Snap"
        } else if (i % 5 === 0 ){
            str = str + ", Crackle"
        } else {
            str = str + `, ${i}`
        }
        
    }
    return str
}
console.log(snapCracklePrime(15)) 

 