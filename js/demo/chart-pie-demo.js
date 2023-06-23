// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['T. Andersen', 'Ilya Archakov', 'Leon Eric Grund', 'N. Hautsch', 'Yifan Li', 'S. Nasekin', 'Ingmar Nolte', 'Manh Cuong Pham', 'Stephen J. Taylor', 'Viktor Todorov'],
    datasets: [{
      data: [129, 10, 2, 121, 39, 16, 60, 8, 26, 106],
      backgroundColor: ['rgb(255,99,71)', 'rgb(218,165,32)','rgb(34,139,34)','rgb(32,178,170)','rgb(127,255,212)','rgb(30,144,255)','rgb(106,90,205)', 'rgb(238,130,238)', 'rgb(210,180,140)', 'rgb(176,196,222)'],
//      hoverBackgroundColor: ['#2e59d9', '#17a673', '#6c757d'],
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
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
});
