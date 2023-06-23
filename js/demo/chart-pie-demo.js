// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['T. Andersen', 'N. Hautsch', 'Viktor Todorov', 'Ingmar Nolte', 'Yifan Li', 'Stephen J. Taylor', 'S. Nasekin', 'Ilya Archakov', 'Manh Cuong Pham', 'Leon Eric Grund'],
    datasets: [{
      data: [129, 121, 106, 60, 39, 26, 16, 10, 8, 2],
      backgroundColor: ['rgb(255, 99, 132)', '#4e73df', '#1cc88a', '#e0b138', '#00cccc', '#ff99ff', '#99ffff', '#99ccff', '#cc99ff', '#c0c0c0'],
      // backgroundColor: ['rgb(255,99,71)', 'rgb(218,165,32)','rgb(34,139,34)','rgb(32,178,170)','rgb(127,255,212)','rgb(30,144,255)','rgb(106,90,205)', 'rgb(238,130,238)', 'rgb(210,180,140)', 'rgb(176,196,222)'],
      //  hoverBackgroundColor: ['#2e59d9', '#17a673', '#6c757d'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        // this callback is used to create the tooltip label
        label: function(tooltipItem, data) {
          // get the data label and data value to display
          // convert the data value to local string so it uses a comma seperated number
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

          // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
          if (Chart.helpers.isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          // return the text to display on the tooltip
          return dataLabel + ' publications';
        }
      }
    },
    legend: {
      display: true
    },
    cutoutPercentage: 70,
  },
});
