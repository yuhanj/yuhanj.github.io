// # UK census 1851
// # http://www.visionofbritain.org.uk/

d3.csv("Cholera/UKcensus1851.csv").then(function (data) {

  let color_male = "#b3cbf5";
  let color_female = "#ffe0e0";
  let color_total = "#00BBAA";
  let color_male_arr = ["#ecf2fc","#d9e5fa","#c6d8f7","#b3cbf5","#a0bef2","#8cb1ef","#79a4ed","#6697ea","#538ae8"];
  let color_female_arr = ["#fff0f0","#ffe0e0","#ffd1d1","#ffc2c2","#ffb3b3","#ffa3a3","#ff9494","#ff8585","#ff7575"];

  let age_arr = _.map(_.pluck(data, 'age'), (num) => (num));
  let male_arr = _.map(_.pluck(data, 'male'), (num) => (parseInt(num)));
  let female_arr = _.map(_.pluck(data, 'female'), (num) => (parseInt(num)));
  let total_arr = [];
  for (let i = 0; i < male_arr.length; i ++) {
    total_arr.push(male_arr[i] + female_arr[i]);
  }
  let male_total = _.reduce(male_arr, (memo, num) => (memo + num));
  let female_total = _.reduce(female_arr, (memo, num) => (memo + num));
  var data4 = [{
    type: 'table',
    header: {
      values: ["Age", "Male", "Female", "Total"],
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: [age_arr, male_arr, female_arr, total_arr],
      align: "center",
      line: {color: "black", width: 1},
      fill: {color: ["grey", color_male, color_female, color_total]},
      font: {family: "Arial", size: 11, color: ["white", "black", "black", "white"]}
    }
  }]


  table1Div = document.getElementById('table2');
  Plotly.newPlot('table2', data4, 0);

  // pie chart male
  var data5 = [{
    type: "pie",
    values: male_arr,
    labels: age_arr,
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true,
    marker: {
      colors: color_male_arr
    }
  }]

  var layout = {
    height: 400,
    width: 400,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
  }

  Plotly.newPlot('pie1', data5, layout);

  // pie chart female
  var data6 = [{
    type: "pie",
    values: female_arr,
    labels: age_arr,
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true,
    marker: {
      colors: color_female_arr
    }
  }]

  var layout = {
    height: 400,
    width: 400,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
  }

  Plotly.newPlot('pie2', data6, layout);

  // pie chart for total
  var data7 = [{
    type: "pie",
    values: [male_total, female_total],
    labels: ["Male", "Female"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true,
    marker: {
      colors: [color_male, color_female]
    }
  }]

  var layout = {
    height: 400,
    width: 400,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
  }

  Plotly.newPlot('pie3', data7, layout);

  var trace1 = {
    x: age_arr,
    y: male_arr,
    name: 'Male',
    type: 'bar',
    marker: {
      color: color_male
    }
  };

  var trace2 = {
    x: age_arr,
    y: female_arr,
    name: 'Female',
    type: 'bar',
    marker: {
      color: color_female
    }
  };

  var data3 = [trace1, trace2];

  var layout = {barmode: 'group'};

  Plotly.newPlot('bar3', data3, layout);


})