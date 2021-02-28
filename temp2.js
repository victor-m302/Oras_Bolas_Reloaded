class Tracer{
    constructor(name, color1, color2){
        this.x = [0]
        this.y = [0]
        this.type = 'scatter'
        this.name = name
        this.mode =  'lines+markers'
        this.marker = {
          color: color1,
          size: 8
        }
        this.line = {
          color: color2,
          width: 1
        }
    }
}

'Posição X','#68228B','#68228B'

  /*Grafico da posição do ROBO em X*/
  var traceRx = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Posição X',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }

  };
  traceRx.x = Dt;
  traceRx.y = Rx;

  /*Grafico da posição do ROBO em Y*/
  var traceRy = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Posição Y',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }

  };

  //////////////

  var traceRVx = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Velocidade X',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }

  };

  var traceRVy = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Velocidade Y',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }

  };

  //////////////////////////////

  var traceRAx = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Aceleração X',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }
  };

  var traceRAy = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Aceleração Y',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }

  };

  /////////////////////

  
  var traceTB = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Interceptação(Bola)',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }

  };

  ///////////////////////

  var traceTB2 = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Total',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }
  };

  //////////////////

  var traceRR = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Interceptação(Robô)',
    mode: 'lines+markers',
    marker: {
      color: '#006400',
      size: 8
    },
    line: {
      color: '#006400',
      width: 1
    }

  };

  ///////////////

  var traceTBX = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Posição X',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }
  };

  var traceTBY = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Posição Y',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }
  };

  var traceTBVX = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Velocidade X',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }
  };

  var traceTBVY = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Velocidade Y',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }
  };

  var traceTBAX = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Aceleração X',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }
  };


  var traceTBAY = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Aceleração Y',
    mode: 'lines+markers',
    marker: {
      color: '#8B1A1A',
      size: 8
    },
    line: {
      color: '#8B1A1A',
      width: 1
    }
  };

  //////////////////

  var traceD = {
    x: [0],
    y: [0],
    type: 'scatter',
    name: 'Distância',
    mode: 'lines+markers',
    marker: {
      color: '#68228B',
      size: 8
    },
    line: {
      color: '#68228B',
      width: 1
    }

  };