 (function() {
            'use strict';

        var type = 'line';
        var data = {
             labels: [ 20131220, 20141231, 20150820, 20160407, 20161125, 20170417, 20180302, 20181220],
             datasets: [{
             label: 'React',
             data: [ 0, 12000, 25000, 38000, 55000, 75000, 94000, 118000],
             borderColor: 'green',
             borderWidth: 10,
             pointStyle: ''
          }, {

             label: 'Angular',
             data: [0, 0, 2000, 10000, 18000, 25000, 30000, 42000],
             borderColor: 'red',
             borderWidth: 10,
             lineTension: 0,
             pointStyle: ''
          }, {

            label: 'Vue',
            data: [0, 2000, 5000, 15000, 33000, 58000, 88000, 120000],
            borderColor: 'blue',
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
                    suggestedMax: 120000
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
