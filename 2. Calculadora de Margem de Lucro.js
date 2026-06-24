let produto = Number(prompt("Digite o preço de custo do produto: "));
let lucro = Number(prompt("Digite a porcentagem de margem de lucro desejada: "));
let margem_de_lucro = produto * (lucro / 100);
let preço_total = produto + margem_de_lucro;
alert(`O preço que o produto deve ser vendido é: R$${preço_total}`)