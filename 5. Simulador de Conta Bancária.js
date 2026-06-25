let saldo_atual = Number(prompt("Digite o seu saldo atual: "));
let saque = Number(prompt("Digite o valor que você deseja sacar: "));
let saldo_restante = saldo_atual - saque;
if(saque<=saldo_atual){
    alert(`O saque de R$${saque} foi realizado com sucesso. O seu saldo atual é de R$${saldo_restante.toFixed(2)}`);
}
else{
    alert(`O saque de R$${saque} não foi realizado pois seu saldo não tem o suficiente.`);
}