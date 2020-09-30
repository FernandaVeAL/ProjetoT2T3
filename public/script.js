// var randomsAgua = [...Array(24)].map(() => Math.floor(Math.random() * 101));
// var randomsRacao = [...Array(24)].map(() => Math.floor(Math.random() * 101));
// var randomsMensalRacao = [...Array(30)].map(() =>
//   Math.floor(Math.random() * 101)
// );
// var randomsMensalAgua = [...Array(30)].map(() =>
//   Math.floor(Math.random() * 101)
// );

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var myHeaders = new Headers();
myHeaders.append("x-auth-token", "KEY");
myHeaders.append("content-type", "application/json");
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
var yAgua = [];
async function fetchAgua() {
  const res = await fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/agua/values?page_size=24",
    requestOptions
  );
  const json = await res.json();
  for (var i = 0; i < 24; i++) {
    yAgua.push(json.results[i].value);
  }
  console.log(yAgua);
  //console.log(results);
}

//Gráfico Água
ChartAgua();
async function ChartAgua() {
  await fetchAgua();
  var cta = document.getElementById("Agua").getContext("2d");
  var myChart = new Chart(cta, {
    type: "bar",
    data: {
      labels: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
      datasets: [
        {
          label: "Consumo de Água",

          data: yAgua,

          backgroundColor: "rgba(54, 162, 235, 0.2)",

          borderColor: "rgba(54, 162, 235, 1)",

          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },

    options: {
      title: {
        display: true,
        text: "Consumo de Água",
      },
    },
  });
  document.getElementById("GetAgua").onclick = function () {
    yAgua = [];
    myChart.destroy();
    ChartAgua();
  };
}

var yRacao = [];
async function fetchRacao() {
  const res = await fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/racao/values?page_size=24",
    requestOptions
  );
  const json = await res.json();
  for (var i = 0; i < 24; i++) {
    yRacao.push(json.results[i].value);
  }
  console.log(yRacao);
  //console.log(json.results);
}
//Gráfico Ração
ChartRacao();
async function ChartRacao() {
  await fetchRacao();
  var ctx = document.getElementById("Racao").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
      datasets: [
        {
          label: "Consumo de Ração",
          data: yRacao,
          backgroundColor: "rgba(255, 99, 132, 0.2)",

          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },

    options: {
      title: {
        display: true,
        text: "Consumo de Ração",
      },
    },
  });
  document.getElementById("GetRacao").onclick = function () {
    yRacao = [];
    myChart.destroy();
    ChartRacao();
  };
}

var yRacaoE;
async function fetchRacaoEstoque() {
  const res = await fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/estoqueracao/values?page_size=1",
    requestOptions
  );
  const json = await res.json();
  yRacaoE = json.results[0].value;
  //console.log(json);
  console.log(yRacaoE);
}
var yAguaE;
async function fetchAguaEstoque() {
  const res = await fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/estoqueagua/values?page_size=1",
    requestOptions
  );
  const json = await res.json();
  yAguaE = json.results[0].value;
  //console.log(json);
  console.log(yAguaE);
}

// Gráfico estoque
var cte = document.getElementById("Estoque").getContext("2d");
ChartEstoque();
async function ChartEstoque() {
  await fetchRacaoEstoque();
  await fetchAguaEstoque();
  var myChart = new Chart(cte, {
    type: "bar",
    data: {
      labels: ["Estoque"],
      datasets: [
        {
          label: "Água",
          backgroundColor: "#3e95cd",
          data: [yAguaE, 100],
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 3,
        },
        {
          label: "Ração",
          backgroundColor: "#8e5ea2",
          data: [yRacaoE, 0],
          borderDash: [5, 5],
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 3,
        },
      ],
    },
    options: {
      yAxes: [
        {
          ticks: {
            max: 100,
            min: 0,
          },
        },
      ],
    },

    options: {
      title: {
        display: true,
        text: "Estoque",
      },
    },
  });
  document.getElementById("GetEstoque").onclick = function () {
    yRacaoE = 0;
    yAguaE = 0;
    myChart.destroy();
    ChartEstoque();
  };
}

var yRacaoR = [];
var day = [];
var daysum = 0;
async function fetchRacaoRelatorio() {
  const res = await fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/racao/values?page_size=720",
    requestOptions
  );
  const json = await res.json();
  for (var i = 0; i < json.results.length; i++) {
    daysum = 0;
    day.push(json.results[i].value);
    if ((i + 1) % 24 == 0) {
      daysum = day.reduce((a, b) => a + b, 0);
      yRacaoR.push(daysum);
      day = [];
    }
  }

  console.log(yRacaoR);
}
var yAguaR = [];
var dia = [];
var diasum = 0;
async function fetchAguaRelatorio() {
  const res = await fetch(
    "https://industrial.api.ubidots.com/api/v1.6/devices/meucontrolador/agua/values?page_size=720",
    requestOptions
  );
  const json = await res.json();
  for (var i = 0; i < json.results.length; i++) {
    diasum = [];
    dia.push(json.results[i].value);
    if ((i + 1) % 24 == 0) {
      diasum = dia.reduce((a, b) => a + b, 0);
      yAguaR.push(diasum);
      dia = [];
    }
  }

  console.log(yAguaR);
}
var ctr = document.getElementById("Relatorio").getContext("2d");
//Gráfico de relatório
ChartRelatorio();
async function ChartRelatorio() {
  await fetchRacaoRelatorio();
  await fetchAguaRelatorio();
  var myLineChart = new Chart(ctr, {
    type: "line",
    data: {
      datasets: [
        {
          data: yRacaoR,

          label: "Ração",
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
          borderDash: [5, 5],
        },
        {
          data: yAguaR,

          label: "Água",
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Relatório Mensal de Consumo de Ração e Água",
      },
      scales: {
        ticks: {
          Min: 0,
          Max: 100,
        },
        xAxes: [
          {
            type: "category",
            labels: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
            ],
          },
        ],
      },
    },
  });
  document.getElementById("GetRelatorio").onclick = function () {
    yRacaoR = [];
    day = [];
    daysum = 0;
    yAguaR = [];
    dia = [];
    diasum = 0;
    myLineChart.destroy();
    ChartRelatorio();
  };
}

