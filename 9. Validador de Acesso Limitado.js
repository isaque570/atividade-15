let login ;
let tentativas = 0;
while(login !== "segredo123"){
    login = prompt("Digite a senha: ");
    if(login!=="segredo123"){
        alert("Senha incorreta =(");
        tentativas += 1;
    }
    else if(login==="segredo123"){
        alert("Senha correta =)");
    }
    if(tentativas===3){
        alert("Maximo de tentativas alcançado, conta bloqueada");
        break;
    }
}