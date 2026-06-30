let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite a sua altura: "));
let imc = peso / altura;
if (imc<18.5){
    alert("Você está abaixo do peso: ");
}
if((imc>18.5) && (imc<24.9)){
    alert("Você tem um peso normal");
}
if(imc>=30){
    alert("Você está acima do peso =)");
}