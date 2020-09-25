// # Naples in the Time of Cholera 1884-1911 p119
// # http://assets.cambridge.
// # deaths per 10,000 inhabitants of that age group
// # For more information about Cholera in Naples:
// # https://www.nejm.org/doi/full/10.1056/NEJM199610103351520

Plotly.d3.tsv('Cholera/naplesCholeraAgeSexData.tsv', function(err, data){

  let color_age = '#DDDDDD';
  let color_male = "#b3cbf5";
  let color_female = "#ffe0e0";

  let age_arr = _.map(_.pluck(data, 'age'), (str) => (str));
  let male_arr = _.map(_.pluck(data, 'male'), (num) => (parseInt(num)));
  let female_arr = _.map(_.pluck(data, 'female'), (num) => (parseInt(num)));


  var data2 = [{
    type: 'table',
    header: {
      values: ["<b>Age<b>", "<b>Male<b>", "<b>Female</b>"],
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 14, color: "white"}
    },
    cells: {
      values: [age_arr, male_arr, female_arr],
      align: ["center", "right", "right"],
      line: {color: "black", width: 1},
      fill: {color: [color_age, color_male, color_female]},
      font: {family: "Arial", size: 12, color: ["black", "black", "black"]}
    }
  }]

  var layout = {
  }
  table1Div = document.getElementById('table2');
  Plotly.newPlot('table2', data2, layout);


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

  var layout = {
    barmode: 'group',
    height: 400,
    annotations: [
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.3,
        xanchor: 'right',
        y: 1,
        yanchor: 'bottom',
        text: 'Deaths per 10,000 inhabitants',
        showarrow: false
      }, {
        xref: 'paper',
        yref: 'paper',
        x: 1,
        xanchor: 'left',
        y: 0,
        yanchor: 'top',
        text: 'Age group',
        showarrow: false
      }
    ]
  };

  Plotly.newPlot('bar2', data3, layout);
})