const xhttp = new XMLHttpRequest(); //CRIANDO UMA NOVA REQUISIÇÃO
xhttp.responseType = 'text/csv;charset=UTF-8';
xhttp.open("GET", 'php/grafico.php');
xhttp.setRequestHeader("Content-type", "application/csv;charset=UTF-8'");
xhttp.send();
xhttp.onreadystatechange = function () {
   if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) { 
      h = xhttp.responseText;
      t = h.split(';;;;;;;;;;;;;');
      var j = t[1].split("\n");

      var temp = [];

      for (i=(j.length-1);i>(j.length-16);i=i-1){
              var p = j[i].split(';');
              var s = {Dia: p[0], E: p[4], N: p[5], H: p[6], dx: p[10], dy: p[11], dh: p[12]}
              temp.push(s);

       }

      var valuex = [];
      var valuey = [];
      var valueh = [];
      var dias = [];


      temp.forEach(function(obj){

            dias.push(obj['Dia']);
            valuex.push(obj['dx']);
            valuey.push(obj['dy']);
            valueh.push(obj['dh']);
      })

      data = {
          labels: dias.reverse(),
          series: [valuex.reverse(),valuey.reverse(),valueh.reverse()]
         }

      var options = {
           height: '100%',
           // Don't draw the line chart points
           showPoint: true,
           // Disable line smoothing
           lineSmooth: false,
           // X-Axis specific configuration
           axisX: {
             // We can disable the grid for this axis
             showGrid: true,
             // and also don't show the label
             showLabel: true
           },
           // Y-Axis specific configuration
           axisY: {
             // Lets offset the chart a bit from the labels
             type: Chartist.FixedScaleAxis,
             high: 0.01,
             low: -0.01,
             ticks: [0.01,0.0075,0.005,0.0025,0,-0.0025,-0.005,-0.0075,-0.01],
             offset: 60,
             showLabel: true
           }
         };



      var graf = new Chartist.Line('.ct-chart', data, options);



   }
 }
