 (function() {
            'use strict';
      
        var type = 'line';  
        var data = {
             labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017 ],
             datasets: [{
             label: 'rails',
             data: [1.60, 2.30, 2.70, 2.30, 2.40, 2.32, 2.22, 1.75, 1.35],
             borderColor: 'yellow',
             borderWidth: 10,
             fill: false,
             pointStyle: 'rect'
          }, {

             label: 'Laravel',
             data: [0.00, 0.00, 0.00, 0.00, 0.20, 0.50, 0.84, 0.80, 1.30],
             borderColor: 'blue',
             borderWidth: 10,
             lineTension: 0,
             pointStyle: 'triangle'
          }, {
  
            label: 'django',
            data: [0.90, 1.50, 1.20, 1.00, 0.90, 1.02, 1.17, 1.20, 1.32 ],
            borderColor: 'green',
            borderWidth: 10,
            lineTension: 0,
            pointStyle: 'rect'
         }]
        };
      
            var options = {
              scales: {
                yAxes: [{
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 4.00
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