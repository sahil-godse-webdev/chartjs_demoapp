$(document).ready(function(){
    $.ajax({
      url: "http://localhost/chartjs_demo_app/data.php",
      method: "GET",
      success: function(data) {
        console.log(data);
        var player = [];
        var score = [];
  
        for(var i in data) {
          player.push("Semeter " + data[i].semester);
          score.push(data[i].score);
        }
  
        var chartdata = {
          labels: player,
          datasets : [
            {
              label: 'Semester Score',
              backgroundColor: 'rgba(190, 235, 159, 1)',
              borderColor: 'rgba(190, 235, 159, 1)',
              hoverBackgroundColor: 'rgba(0, 163, 136, 1)',
              hoverBorderColor: 'rgba(0, 163, 136, 1)',
              data: score
            }
          ]
        };
  
        var ctx = $("#mycanvas");
  
        var barGraph = new Chart(ctx, {
          type: 'bar',
          data: chartdata
        });
      },
      error: function(data) {
        console.log(data);
      }
    });
  });