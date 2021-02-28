class Layout {
    constructor(firstTitle, yaxisTitle) {
        this.title = firstTitle
        this.plot_bgcolor = "rgba(0,191,255,0.1)"
        this.paper_bgcolor = "rgba(0,191,255,0.1)"
        this.titlefont = {
            size: 25,
            color: '#2E2E2E'
        }
        this.xaxis = {
            showgrid: true,
            zeroline: true,
            mirror: 'ticks',
            gridcolor: '#2E2E2E',
            gridwidth: 2,
            zerolinecolor: 'black',
            zerolinewidth: 4,
            title: 'Tempo(t)',
            titlefont: {
                family: 'Segoe UI, sans-serif',
                size: 20,
                color: '#2E2E2E'
            },
            showticklabels: true,
            tickangle: 'auto',
            tickfont: {
                family: 'Segoe UI, serif',
                size: 15,
                color: '#2E2E2E'
            },
            exponentformat: 'e',
            showexponent: 'all'
        }
        this.yaxis = {
            showgrid: true,
            zeroline: true,
            mirror: 'ticks',
            gridcolor: '#2E2E2E',
            gridwidth: 2,
            zerolinecolor: 'black',
            zerolinewidth: 4,
            title: yaxisTitle,
            titlefont: {
                family: 'Segoe UI, sans-serif',
                size: 20,
                color: '#2E2E2E'
            },
            showticklabels: true,
            tickangle: 'auto',
            tickfont: {
                family: 'Segoe UI, serif',
                size: 15,
                color: '#2E2E2E'
            },
            exponentformat: 'e',
            showexponent: 'all'
        }
    }
}
var layout = {
    title: 'Posição do Robô X(t) e Y(t)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'X(t) e Y(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
  }
  ///////////
  var layout = {
    title: 'Velocidade do Robô Vx(t) e Vy(t)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,

      title: 'Vx(t) e Vy(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
  }

  //////////////////

  var layout = {
    title: 'Aceleração do Robô Ax(t) e Ay(t)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Ax(t) e Ay(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
  }

  ////////////////////


  var layout = {
    title: 'Distância do Robô até a Bola',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Posição(d)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
  }

  ////////////////////////////

  var layout = {
    title: 'Trajetória da Bola Y(x)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,



      title: 'Posição(x)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Posição Y(x)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    }
  };

  //////////////////////////

  var layout = {
    title: 'Trajetória do Robô',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Posição X',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Posição Y',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
  }

  ////////////////

  var layout = {
    title: 'Trajetória da Interceptação',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Posição X',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Posição Y',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
  }
  //////////////////

  var layout = {
    title: 'Posição da Bola X(t) e Y(t)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,



      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,




      title: 'X(t) e Y(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    }
  };

//////////////////////////////

var layout = {
    title: 'Velocidade da Bola Vx(t) e Vy(t)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,



      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,
      title: 'Vx(t) e Vy(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    }
  };

  ///////////////////////////////////////////

  var layout = {
    title: 'Aceleração da Bola Ax(t) Ay(t)',
    plot_bgcolor: "rgba(0,191,255,0.1)",
    paper_bgcolor: "rgba(0,191,255,0.1)",
    titlefont: {
      size: 25,
      color: '#2E2E2E'
    },

    xaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,



      title: 'Tempo(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },

    yaxis: {
      showgrid: true,
      zeroline: true,
      mirror: 'ticks',
      gridcolor: '#2E2E2E',
      gridwidth: 2,
      zerolinecolor: 'black',
      zerolinewidth: 4,


      title: 'Ax(t) e Ay(t)',
      titlefont: {
        family: 'Segoe UI, sans-serif',
        size: 20,
        color: '#2E2E2E'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Segoe UI, serif',
        size: 15,
        color: '#2E2E2E'
      },
      exponentformat: 'e',
      showexponent: 'all'
    }
  };