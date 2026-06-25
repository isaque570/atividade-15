let lado1 = Number(prompt("Digite o tamanho do primeiro lado do triângulo: "));
let lado2 = Number(prompt("Digite o tamanho do segundo lado do triângulo: "));
let lado3 = Number(prompt("Digite o tamanho do terceiro lado do triângulo: "));
if((lado1===lado2===lado3)){
    console.log(`O triângulo digitado é um triângulo equilatero`);
}
else if ((lado1 === lado2)|| (lado2 === lado3) || (lado1 === lado3)) {
    console.log(`O triângulo digitado é um triângulo isóceles`);
}
else{
    console.log(`O triângulo digitado é um triângulo escaleno`);
}