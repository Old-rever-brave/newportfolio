var myChart = document.getElementById("myChart").getContext('2d');
var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(255, 255, 255)';
 
                    var fontSize = 16;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
 
                    var dataString = chart.data.labels[index]+' : '+dataset.data[index].toString();
 
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
 
                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                })
            }
        })
    }
}
 
 
var chart = new Chart(myChart, {
  type: 'pie',
  data: {
    labels: ["java", "PHP", " Ruby", "C#.net", "JavaScript", "Python","anather"],
    datasets: [{
      backgroundColor: [
        "#E60012",
        "#F39800",
        "#FFF100",
        "#009944",
        "#0068B7",
        "#1D2088",
        "#920783"
      ],
      data: [31, 14,8, 6.6, 6.5, 5.3, 4.1]
    }]
  },
    options: {
  		title: {
    	display: true,
  		}
	},
    plugins: [dataLabelPlugin],
});