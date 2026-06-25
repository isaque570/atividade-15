let base = Number(prompt("Digite um número para ser a base da exponenciação: "));
let expoente = Number(prompt("Digite um número para ser o expoente: "));
let potencia = 1;
for(let i=1; i<=expoente; i++){
    potencia *= base;
}
alert(`A potenciação desejada é igual a: ${potencia}`);