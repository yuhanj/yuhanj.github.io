Plotly.d3.csv('Cholera/choleraPumpLocations.csv', function (err, data_pump) {
  Plotly.d3.csv('Cholera/choleraDeathLocations.csv', function (err, data_death) {
    let pump_latitude = _.map(_.pluck(data_pump, 'latitude'), (e) => (e));
    let pump_longitude = _.map(_.pluck(data_pump, 'longitude'), (e) => (e));
    let death_latitude = _.map(_.pluck(data_death, 'latitude'), (e) => (e));
    let death_longitude = _.map(_.pluck(data_death, 'longitude'), (e) => (e));
    let death_num = _.map(_.pluck(data_death, 'death'), (e) => (parseInt(e)));
    console.log(death_longitude);
    let scale = [
      ['0.0', '#555555'],
      ['0.2', '#664949'],
      ['0.4', '#883a3a'],
      ['0.6', '#AA2c2c'],
      ['0.8', '#CC1d1d'],
      ['1.0', '#EE0000']
    ];
    console.log("Total Death: " + _.reduce(death_num, (a,b) => (a+b)))


    var data = [
      {
        type: "scattermapbox",
        name: "Pump",
        lat: pump_latitude,
        lon: pump_longitude,
        marker: { color: "#0099DD", size: 15 },
      },
      {
        type: "scattermapbox",
        name: "Death",
        text: _.map(death_num, (num) => ('Death: '+ num)),
        lat: death_latitude,
        lon: death_longitude,
        marker: {
          color: death_num,
          colorscale: scale,
          reversescale: false,
          opacity: 0.9,
          size: _.map(death_num, (num) => (num + 7))}
      }
    ];

    var layout = {
      dragmode: "zoom",
      mapbox: { style: "stamen-terrain", center: { lat: 51.513, lon: -0.137 }, zoom: 15.5 },
      margin: { r: 0, t: 0, b: 0, l: 0 }
    };

    Plotly.newPlot("map1", data, layout, { showLink: false });
  })
});