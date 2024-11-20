export const handleErrorCode = (code, message) => { 
    switch (code) {
        case "auth/email-already-in-use":
          alert("O e-mail já está em uso");
          break;
        case "auth/invalid-email":
          alert("O e-mail fornecido não é válido");
          break;
        case "auth/weak-password":
          alert("A senha deve ter pelo menos 6 caracteres");
          break;
        case "auth/user-disabled":
          alert("A conta foi desabilitada");
          break;
        case "auth/user-not-found":
          alert("Usuário não encontrado");
          break;
        case "auth/wrong-password":
          alert("Senha incorreta");
          break;
        case "auth/too-many-requests":
          alert("Muitas tentativas, tente novamente mais tarde");
          break;
        case "auth/invalid-credential":
          alert("Credenciais inválidas");
          break;
        case "auth/expired-action-code":
          alert("O código de ação expirou");
          break;
        case "auth/unauthorized-domain":
          alert("Este domínio não é autorizado a usar a autenticação");
          break;
        default:
          alert("Erro desconhecido: " + message);
          break;
        }
}

export default handleErrorCode