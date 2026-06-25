function calcularMediaPonderada(n1, n2, p1, p2){
    let media;
    media=(n1 * p1) + (n2 * p2) / (p1 + p2);
    return media;
}
let n1 = Number(prompt("Digite uma nota: "));
let p1 = Number(prompt("Digite o peso dessa nota: "));
let n2 = Number(prompt("Digite outra nota: "));
let p2 = Number(prompt("Digite o peso dessa nota: "));
let média = calcularMediaPonderada(n1,n2,p1,p2);
alert(`A média ponderada das notas digitadas é de: ${média}`);