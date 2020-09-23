// # Naples in the Time of Cholera 1884-1911 p119
// # http://assets.cambridge.
// # deaths per 10,000 inhabitants of that age group
// # For more information about Cholera in Naples:
// # https://www.nejm.org/doi/full/10.1056/NEJM199610103351520

d3.tsv("Cholera/naplesCholeraAgeSexData.tsv").then(function (data) {

  let color_male = "#70ade5"
  let color_female = "#ffcbcb"

  let age_arr = _.map(_.pluck(data, 'age'), (str) => (str));
  let male_arr = _.map(_.pluck(data, 'male'), (num) => (parseInt(num)));
  let female_arr = _.map(_.pluck(data, 'female'), (num) => (parseInt(num)));


  var data2 = [{
    type: 'table',
    header: {
      values: ["Age", "Male", "Female"],
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: [age_arr, male_arr, female_arr],
      align: "center",
      line: {color: "black", width: 1},
      fill: {color: ["grey", color_male, color_female]},
      font: {family: "Arial", size: 11, color: ["white", "white", "black"]}
    }
  }]


  table1Div = document.getElementById('table2');
  Plotly.newPlot('table2', data2, 0);

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

  Plotly.newPlot('bar2', data3, layout);
})