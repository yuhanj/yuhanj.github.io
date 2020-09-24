Plotly.d3.tsv('Cholera/choleraDeaths.tsv', function (err, data) {

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
  let table1_column_align = [];
  for (let i = 0; i <= attack_arr.length; i++) {
    table1_column_order.push(i + 1);
  }
  for (let i = 0; i <= attack_arr.length; i++) {
    table1_column_width.push(20);
  }
  for (let i = 0; i <= attack_arr.length; i++) {
    table1_column_align.push("right");
  }
  table1_column_align[0] = 'left';
  table1_column_width[0] = 100;
  console.log(table1_column_width, table1_column_order, table1_column_align);
  date_arr_t1.unshift('<b>Date (Year 1854)<b>');

  // re-arrange data
  for (let i = 0; i < date_arr.length; i++) {
    attack_count += attack_arr[i];
    attack_total_arr.push(attack_count);

    death_count += death_arr[i];
    death_total_arr.push(death_count);

    table1_arr.push([attack_arr[i], death_arr[i], attack_count, death_count]);
  }
  console.log(attack_count);

  var data = [{
    type: 'table',
    columnorder: table1_column_order,
    columnwidth: table1_column_width,
    header: {
      values: date_arr_t1,
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: table1_arr,
      align: table1_column_align,
      line: { color: "black", width: 1 },
      fill: {
        color: [[color1, color2, color3,
          color4]]
      },
      font: { family: "Arial", size: 11, color: [["black", "black", "white", "white"]] }
    }
  }]

  var layout = {
    title: "Daily Attacks and Deaths",
  }
  table1Div = document.getElementById('table1');

  Plotly.newPlot('table1', data, layout);

  // chart 1
  var trace0 = {
    x: date_arr,
    y: attack_arr,
    mode: 'lines+markers',
    name: 'Attack',
    marker: {
      color: color1,
      size: 8
    }
  };

  var trace1 = {
    x: date_arr,
    y: death_arr,
    mode: 'lines+markers',
    name: 'Death',
    marker: {
      color: color2,
      size: 8
    }
  };

  var trace2 = {
    x: date_arr,
    y: attack_total_arr,
    mode: 'lines+markers',
    name: 'Total Attack',
    marker: {
      color: color3,
      size: 8
    }
  };

  var trace3 = {
    x: date_arr,
    y: death_total_arr,
    mode: 'lines+markers',
    name: 'Total Death',
    marker: {
      color: color4,
      size: 8
    }
  };

  data1 = [trace0, trace1, trace2, trace3];
  plot1Div = document.getElementById('plot1');
  var layout = {
    title: "The Trend of Attacks and Deaths of Cholera",
    annotations: [{
      xref: 'paper',
      yref: 'paper',
      x: 0.9,
      xanchor: 'center',
      y: 1.1,
      yanchor: 'top',
      text: 'Data created and compiled by Robin Wilson, Jan 2011',
      font: {
        family: "Arial", size: 14, color: "gray"
      },
      showarrow: false
    }, {
      xref: 'paper',
      yref: 'paper',
      x: 0,
      xanchor: 'right',
      y: 1,
      yanchor: 'bottom',
      text: 'Number',
      showarrow: false
    }, {
      xref: 'paper',
      yref: 'paper',
      x: 1,
      xanchor: 'left',
      y: 0,
      yanchor: 'top',
      text: 'Date',
      showarrow: false
    }]

  }

  var myChart1 = Plotly.plot(plot1Div, data1, layout);

})

