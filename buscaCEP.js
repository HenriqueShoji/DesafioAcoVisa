function buscaCep() {
    let cep = document.getElementById('cep').value;
    if(cep != ""){
      let url = " https://viacep.com.br/ws/" + cep + "/json/"
      let req = new XMLHttpRequest();   
      req.open("GET", url);
      req.send();
  
      req.onload = function() {
        if(req.status === 200) {
          let endereco = JSON.parse(req.response);
          document.getElementById('rua').value = endereco.logradouro;
          document.getElementById('complemento').value = endereco.complemento;
          document.getElementById('bairro').value = endereco.bairro;
          document.getElementById('localidade').value = endereco.localidade;
          document.getElementById('uf').value = endereco.uf;
          document.getElementById('ibge').value = endereco.ibge;
          document.getElementById('gia').value = endereco.gia;
          document.getElementById('ddd').value = endereco.ddd;
          document.getElementById('siafi').value = endereco.siafi;
        }
        else if(req.status === 404) {
          alert("CEP inválido!");
        }
        else {
          alert("Erro ao fazer a requisição do CEP");
        }
      }
    }
  }
  
  window.onload = function() {
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", buscaCep);
  }