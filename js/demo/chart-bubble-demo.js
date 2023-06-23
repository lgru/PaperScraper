// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// Trying to get the results from json file but this didn't work
function getBubbleData() {
    fetch("./data/references.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => {
        let citations = [];
        for (let i = 0; i < data.data.length; i++) {
            // console.log(data.data[i].citingPaper);
            citations.push({
                'x': data.data[i].citingPaper.referenceCount,
                'y': data.data[i].citingPaper.citationCount,
                'r': data.data[i].citingPaper.influentialCitationCount + 1
            })
        }
        console.log(citations);
        return citations;
    })
}


// Bubble Chart Example
var ctx = document.getElementById("myBubbleChart");
var myBubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: {
      datasets: [{
        label: 'This Paper',
        data: [{
          x: 79,
          y: 2,
          r: 5,
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Citations',
        data: [{
          x: 75,
          y: 0,
          r: 5,
        }, {
          x: 73,
          y: 3,
          r: 5
        }],
        backgroundColor: '#4e73df'
      }, {
        label: 'References',
        data: [
            {x: 54, y: 36, r: 5.08},
            {x: 42, y: 25, r: 5.06},
            {x: 73, y: 11, r: 5.02},
            {x: 73, y: 10, r: 5.06},
            {x: 62, y: 4, r: 5.0},
            {x: 132, y: 124, r: 5.18},
            {x: 55, y: 89, r: 5.26},
            {x: 34, y: 6, r: 5.0},
            {x: 60, y: 3, r: 5.02},
            {x: 49, y: 15, r: 5.02},
            {x: 93, y: 8, r: 5.02},
            {x: 58, y: 10, r: 5.02},
            {x: 91, y: 54, r: 5.02},
            {x: 41, y: 182, r: 5.4},
            {x: 40, y: 104, r: 5.38},
            {x: 31, y: 180, r: 5.32},
            {x: 59, y: 115, r: 5.28},
            {x: 27, y: 19, r: 5.02},
            {x: 34, y: 5, r: 5.0},
            {x: 38, y: 14, r: 5.02},
            {x: 98, y: 111, r: 5.18},
            {x: 39, y: 385, r: 5.78},
            {x: 13, y: 4, r: 5.0},
            {x: 26, y: 5, r: 5.02},
            {x: 79, y: 185, r: 5.48},
            {x: 98, y: 321, r: 5.72},
            {x: 39, y: 44, r: 5.1},
            {x: 37, y: 42, r: 5.1},
            {x: 45, y: 415, r: 6.14},
            {x: 71, y: 7, r: 5.0},
            {x: 64, y: 170, r: 5.2},
            {x: 67, y: 2, r: 5.0},
            {x: 79, y: 506, r: 6.9},
            {x: 48, y: 266, r: 5.78},
            {x: 35, y: 571, r: 6.5},
            {x: 35, y: 630, r: 6.7},
            {x: 72, y: 171, r: 5.3},
            {x: 55, y: 540, r: 6.8},
            {x: 93, y: 322, r: 5.42},
            {x: 22, y: 10, r: 5.0},
            {x: 54, y: 255, r: 5.7},
            {x: 43, y: 131, r: 5.3},
            {x: 61, y: 51, r: 5.06},
            {x: 19, y: 148, r: 5.2},
            {x: 33, y: 302, r: 5.68},
            {x: 45, y: 39, r: 5.06},
            {x: 27, y: 35, r: 5.06},
            {x: 55, y: 140, r: 5.38},
            {x: 11, y: 109, r: 5.3},
            {x: 41, y: 248, r: 5.88},
            {x: 75, y: 1768, r: 11.24},
            {x: 78, y: 147, r: 5.26},
            {x: 53, y: 124, r: 5.34},
            {x: 9, y: 179, r: 5.32},
            {x: 34, y: 79, r: 5.08},
            {x: 0, y: 1080, r: 6.42},
            {x: 34, y: 1079, r: 7.24},
            {x: 43, y: 2693, r: 14.66},
            {x: 33, y: 438, r: 5.62},
            {x: 32, y: 159, r: 5.12},
            {x: 68, y: 732, r: 9.2},
            {x: 18, y: 3250, r: 8.64},
            {x: 20, y: 91, r: 5.12},
            {x: 26, y: 182, r: 5.26},
            {x: 13, y: 190, r: 5.28},
            {x: 21, y: 229, r: 5.28},
            {x: 15, y: 464, r: 5.8},
            {x: 22, y: 521, r: 5.84},
            {x: 0, y: 1352, r: 7.9},
            {x: 18, y: 4, r: 5.0},
            {x: 57, y: 1186, r: 8.1},
            {x: 17, y: 2199, r: 13.72},
            {x: 33, y: 2317, r: 12.559999999999999},
            {x: 8, y: 2740, r: 16.0}
        ],
        backgroundColor: '#1cc88a'
      }, {
        label: 'Recommendations',
        data: [
            {x: 22, y: 0, r: 5.0},
            {x: 59, y: 0, r: 5.0},
            {x: 38, y: 0, r: 5.0},
            {x: 32, y: 0, r: 5.0},
            {x: 4, y: 0, r: 5.0},
            {x: 21, y: 0, r: 5.0},
            {x: 0, y: 0, r: 5.0},
            {x: 26, y: 0, r: 5.0},
            {x: 11, y: 0, r: 5.0},
            {x: 39, y: 0, r: 5.0}
        ],
        backgroundColor: '#f6c23e'
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
          return datasetLabel + ': ' + tooltipItem.yLabel;

        }
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'citationCount'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'referenceCount'
        }
      }]
    }
  }
});
