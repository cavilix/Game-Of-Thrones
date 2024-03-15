function validarLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario === "usuario" && senha === "senha") {
      window.location.href = "PageInicial.html";
      alert('Logado com sucesso!')
  } else {
      alert("Usuário ou senha incorretos");
  }
}