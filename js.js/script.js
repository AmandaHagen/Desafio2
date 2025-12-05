var botaoAdicionar = document.querySelector("#buscarprodutos");

botaoAdicionar.addEventListener("click", function () {
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "produtos.json");

  xhr.addEventListener("load", function () {
    var resposta = xhr.responseText;
    console.log;
    console.log(typeof resposta);

    var respostas = JSON.parse(resposta);
    console.log(respostas);
    console.log(typeof respostas);
  });

  xhr.send();
});
