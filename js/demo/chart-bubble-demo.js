// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// Bubble Chart Example
var ctx = document.getElementById("myBubbleChart");
var myBubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: {
      datasets: [{
        label: 'A Descriptive Study of High-Frequency Trade and Quote Option Data',
        data: [{
          x: 20,
          y: 30,
          r: 15,
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    },
  options: {
    responsive: true,
    maintainAspectRatio : false,
    layout : {
        autoPadding : false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + tooltipItem.xLabel;
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'right'
      }
    }
  }
});
