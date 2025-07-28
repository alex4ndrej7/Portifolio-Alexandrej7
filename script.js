document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede envio tradicional

  alert("Mensagem enviada com sucesso!");

  this.reset(); // Limpa o formulário após envio
});
