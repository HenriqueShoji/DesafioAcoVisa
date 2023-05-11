var campoDataNascimento = document.getElementById("nascimento");
var campoIdade = document.getElementById("idade");

campoDataNascimento.addEventListener("change", function() {
  var dataNascimento = new Date(campoDataNascimento.value);
  var hoje = new Date();
  var idade = hoje.getFullYear() - dataNascimento.getFullYear();
  var mes = hoje.getMonth() - dataNascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }
  campoIdade.value = idade;
});