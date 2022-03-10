function getValueAt(column, dataTable, row) {
  return dataTable.getFormattedValue(row, column);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" }],
    ["Algorithm & DS", 5, "green"],
    ["Deep Learning", 4, "green"],
    ["C/C++", 4.3, "green"],
    ["Python", 4.8, "green"],
    ["NodeJs", 4.5, "green"],
    ["Java", 3.4, "green"],
    ["Flask", 3.6, "green"],
    ["MongoDB", 4.5, "green"],
    ["Git/Github", 4.5, "green"],
    ["Express.Js", 4.5, "green"],
    ["TensorFlow", 4, "green"],
    ["ROS", 4.3, "color: green"],
    ["OpenCv", 4, "color: green"],
    ["", 1, "color: none"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: getValueAt.bind(undefined, 0),
      sourceColumn: 2,
      type: "string",
      role: "annotation"
    },
    2]);

  var options = {
    
    width: 500,
    height: 300,
    bar: { groupWidth: "55%" },
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}





async function quote() {
  const getServerSms = await fetch('/hello');
  const allThoughs = await getServerSms.json();
  //const myObj = await JSON.parse(allThoughs);

  const domElement = document.getElementById("fetch");
  var t = Math.floor((Math.random() * 3));
  domElement.innerHTML = allThoughs[Object.keys(allThoughs)[t]];

  console.log(allThoughs[Object.keys(allThoughs)[t]]);
  //console.log(myObj.though1); allThoughs.though1;
}

//mudar o tamanho e a cor, adicionar os skills e também mais uma lib