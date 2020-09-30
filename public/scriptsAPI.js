document.getElementById("PostAgua").onclick = function () {
  POSTAguafunction();
};
function POSTAguafunction() {
  var myHeaders = new Headers();
  myHeaders.append("x-auth-token", "KEY");
  myHeaders.append("content-type", "application/json");

  var obj = { value: Math.floor(Math.random() * 101) };
  var raw = JSON.stringify(obj);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/agua/values",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

document.getElementById("PostRacao").onclick = function () {
  POSTRacaofunction();
};
function POSTRacaofunction() {
  var myHeaders = new Headers();
  myHeaders.append("x-auth-token", "KEY");
  myHeaders.append("content-type", "application/json");

  var obj = { value: Math.floor(Math.random() * 101) };
  var raw = JSON.stringify(obj);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/racao/values",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

document.getElementById("PostEstoqueAgua").onclick = function () {
  POSTAguaEstoquefunction();
};
function POSTAguaEstoquefunction() {
  var myHeaders = new Headers();
  myHeaders.append("x-auth-token", "KEY");
  myHeaders.append("content-type", "application/json");

  var obj = { value: Math.floor(Math.random() * 101) };
  var raw = JSON.stringify(obj);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/estoqueagua/values",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
document.getElementById("PostEstoqueRacao").onclick = function () {
  POSTRacaoEstoquefunction();
};
function POSTRacaoEstoquefunction() {
  var myHeaders = new Headers();
  myHeaders.append("x-auth-token", "KEY");
  myHeaders.append("content-type", "application/json");

  var obj = { value: Math.floor(Math.random() * 101) };
  var raw = JSON.stringify(obj);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/estoqueracao/values",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

