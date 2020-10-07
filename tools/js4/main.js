(function() {
    'use strict';

var type = 'line';
var data = {
     labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
     datasets: [{
     label: 'Rails',
     data: [ 1.6, 2.4, 2.8, 2.3, 2.2, 2.06, 1.8, 1.6, 1.2],
     borderColor: 'yellow',
     borderWidth: 10,
     pointStyle: ''
  }, {

     label: 'Laravel',
     data: [ 0, 0, 0, 0, 0.21, 0.3, 0.7, 0.8, 1.2],
     borderColor: 'Cyan',
     borderWidth: 10,
     lineTension: 0,
     pointStyle: ''
  }, {

    label: 'Django',
    data: [ 0.4, 1.4, 1.2, 1.0, 0.9, 0.9, 0.7, 0.8, 1.2],
    borderColor: 'indigo',
    borderWidth: 10,
    lineTension: 0,
    pointStyle: ''
 }]
};

    var options = {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: 0,
            suggestedMax: 4
          }
        }]
      }
    };

    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    });
  })();
