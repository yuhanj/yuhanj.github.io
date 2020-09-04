

// chart
d3.tsv("Cholera/choleraDeaths.tsv").then(function (data) {

  let date_arr = _.map(_.pluck(data, 'Date'), function (date) {
    date = date.replace('-Aug', '/8');
    date = date.replace('-Sep', '/9');
    date = date.replace('-1854', '')
    return date;
  });
  
  let attack_arr = _.map(_.pluck(data, 'Attack'), (num) => (parseInt(num)));
  let death_arr = _.map(_.pluck(data, 'Death'), (num) => (parseInt(num)));
  let attack_total_arr = [];
  let death_total_arr = [];

  // color
  let color1 = '#FFDBC5'
  let color2 = '#CF1B1B'
  let color3 = '#900D0D'
  let color4 = '#423144'

  // table 1
  let table1_arr = [['Attack', 'Death', 'Total Attack', 'Total Death']]
  var headerColor = "grey";
  var rowEvenColor = "lightgrey";
  var rowOddColor = "white";
  let date_arr_t1 = [...date_arr];
  let attack_count = 0;
  let death_count = 0;
  date_arr_t1.unshift('Date');

  for(let i = 0; i < date_arr.length; i++) {
    attack_count += attack_arr[i];
    attack_total_arr.push(attack_count);

    death_count += death_arr[i];
    death_total_arr.push(death_count);

    table1_arr.push([attack_arr[i], death_arr[i], attack_count, death_count]);
  }
console.log(attack_count);

  var data = [{
    type: 'table',
    header: {
      values: date_arr_t1,
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: headerColor},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: table1_arr,
      align: "center",
      line: {color: "black", width: 1},
      fill: {color: [[rowOddColor,rowEvenColor,rowOddColor,
          rowEvenColor,rowOddColor]]},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
  }]


  table1Div = document.getElementById('table1');

  Plotly.newPlot('table1', data);

  // chart 1
  var trace0 = {
    x: date_arr,
    y: attack_arr,
    type: 'scatter',
    name: 'Attack',
    marker: {
      color: color1,
      size: 12
    }
  };

  var trace1 = {
    x: date_arr,
    y: death_arr,
    type: 'scatter',
    name: 'Death',
    marker: {
      color: color2,
      size: 12
    }
  };

  var trace2 = {
    x: date_arr,
    y: attack_total_arr,
    type: 'scatter',
    name: 'Attack Up To Today',
    marker: {
      color: color3,
      size: 12
    }
  };

  var trace3 = {
    x: date_arr,
    y: death_total_arr,
    type: 'scatter',
    name: 'Death Up To Today',
    marker: {
      color: color4,
      size: 12
    }
  };

  data1 = [trace0, trace1, trace2, trace3];
  plot1Div = document.getElementById('plot1');

  var myChart1 = Plotly.plot(plot1Div, data1);

})


