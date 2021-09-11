function entrar() {
    login = document.getElementById("login").value;
    if (login == "") {
        alert("Digite um nome no campo de login.");
    } else {
        senha = document.getElementById("senha").value;
        confirmarSenha = document.getElementById("confirmarSenha").value;

        if (senha == "" || confirmarSenha == "") {
            alert("Digite todos os dados corretamente.")
        } else {
            if (senha != confirmarSenha) {
                document.getElementById("senha").value = "";
                document.getElementById("confirmarSenha").value = "";
                alert("Os campos de Senha e Confirmar senha NÃO SÃO IQUAIS. Tente novamente.")
            } else {
                alert("Todos os campos foram digitados corretamente.")
            }
        }
    }
}

function limpar() {
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";
}