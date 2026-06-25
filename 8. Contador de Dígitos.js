let numero = Number(prompt("Digite um número: "));
let numero_inicial = numero
let digitos = 1;
while(numero>9){
    numero/=10;
    digitos += 1;
}
alert(`O número ${numero_inicial} tem ${digitos} dígitos`);