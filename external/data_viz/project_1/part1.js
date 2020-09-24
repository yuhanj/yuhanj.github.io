
Plotly.d3.tsv('Cholera/choleraDeaths.tsv', function(err, data){

  // make date string shorter
  let date_arr = _.map(_.pluck(data, 'Date'), function (date) {

    date = date.replace('-1854', '');
    let month = date.slice(-3);
    month = (month == 'Aug') ? '8' : '9';
    date = date.substr(0, date.length - 4);
    date = month + '/' + date;
    return date;

  });
  
  let attack_arr = _.map(_.pluck(data, 'Attack'), (num) => (parseInt(num)));
  let death_arr = _.map(_.pluck(data, 'Death'), (num) => (parseInt(num)));
  let attack_total_arr = [];
  let death_total_arr = [];

  // colors
  // attack
  let color1 = '#FFBBBB'
  // death
  let color2 = '#A2A1A4'
  // total attack
  let color3 = '#CF1B1B'
  // total death
  let color4 = '#423144'

  // table 1
  let table1_arr = [['<b>Attack<b>', '<b>Death<b>', '<b>Total Attack<b>', '<b>Total Death<b>']]
  let date_arr_t1 = [...date_arr];
  let attack_count = 0;
  let death_count = 0;
  let table1_column_width = [];
  let table1_column_order = [];
  for (let i = 0; i < attack_arr.length; i++) {
    table1_column_order.push(i + 1);
  }
  for (let i = 0; i < attack_arr.length; i++) {
    table1_column_width.push(20);
  }
  table1_column_width[0] = 100;
  console.log(table1_column_width, table1_column_order);
  date_arr_t1.unshift('<b>Date<b>');

  // re-arrange data
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
      columnorder: table1_column_order,
      columnwidth: table1_column_width,
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: table1_arr,
      align: "center",
      line: {color: "black", width: 1},
      fill: {color: [[color1, color2,color3,
          color4]]},
      font: {family: "Arial", size: 12, color: [["black", "black", "white", "white"]]}
    }
  }]


  table1Div = document.getElementById('table1');

  Plotly.newPlot('table1', data, 0);

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
    name: 'Total Attack',
    marker: {
      color: color3,
      size: 12
    }
  };

  var trace3 = {
    x: date_arr,
    y: death_total_arr,
    type: 'scatter',
    name: 'Total Death',
    marker: {
      color: color4,
      size: 12
    }
  };

  data1 = [trace0, trace1, trace2, trace3];
  plot1Div = document.getElementById('plot1');

  var myChart1 = Plotly.plot(plot1Div, data1, 0);



})

