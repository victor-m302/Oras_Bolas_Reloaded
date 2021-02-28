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