let inicio = Number(prompt("Digite o número de início: "));
let final = Number(prompt("Digite o número de final: "));
let soma = 0 ;
for(let i=inicio;i<=final;i++){
    if((i%3===0) && (i%5===0)){
        soma += i ;
    }
}
alert(`A soma dos números múltiplos de 3 e de 5 é: ${soma}`);