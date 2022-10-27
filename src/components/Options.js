

 export const optionsEnergySource = {
    chart: {
      type: "pie",
      height: (9 / 25 * 100) + '%'
    },
    title: {
      text: ""
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
    series: [
      {
        name: "",
        color: "#006600",
        lineWidth: 1,
        marker: {
        //   enabled: false,
          symbol: "circle",
          radius: 3,
          states: {
            hover: {
              enabled: true,
              lineWidth: 1
            }
          }
        },
        data: [
          {
            y: 95,
            sliced: true
          },
          {
            y: 1,
            sliced: true
          }
        ]
      }
    ]
  };

   export const areaOptions = {
    chart: {
      type: 'area',
      height: (9 / 25 * 100) + '%'
    },
    title: {
      text: 'Energy consuption History'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

    export  const barOptions = {
    chart: {
      type: 'bar',
      height: (9 / 25 * 100) + '%'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

   export const lineOptions = {
    chart: {
      type: 'line',
      height: (9 / 25 * 100) + '%'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

  export const socialGovOptions = [
    {
        colors: ['#01BAF2', '#71BF45'],
        chart: {
        type: 'pie',
        height: (9 / 50 * 100) + '%'
        },
        accessibility: {
        point: {
        valueSuffix: '%'
        }
        },
        tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
        },
        plotOptions: {
        pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
        enabled: true,
        format: '{point.name}: {y} %'
        },
        showInLegend: true
        }
        },
        series: [{
        name: 'Registrations',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
        name: 'EV',
        y: 68.1
        }, {
        name: 'Hybrids',
        y: 11.0
        }]
        }]
        },
        {
            colors: ['#01BAF2', '#71BF45'],
            chart: {
            type: 'pie',
            height: (9 / 50 * 100) + '%'
            },
            accessibility: {
            point: {
            valueSuffix: '%'
            }
            },
            tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
            },
            plotOptions: {
            pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
            enabled: true,
            format: '{point.name}: {y} %'
            },
            showInLegend: true
            }
            },
            series: [{
            name: 'Registrations',
            colorByPoint: true,
            innerSize: '75%',
            data: [{
            name: 'EV',
            y: 68.1
            }, {
            name: 'Hybrids',
            y: 11.0
            }]
            }]
            },
            {
                colors: ['#01BAF2', '#71BF45'],
                chart: {
                type: 'pie',
                height: (9 / 50 * 100) + '%'
                },
                accessibility: {
                point: {
                valueSuffix: '%'
                }
                },
                tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
                },
                plotOptions: {
                pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                enabled: true,
                format: '{point.name}: {y} %'
                },
                showInLegend: true
                }
                },
                series: [{
                name: 'Registrations',
                colorByPoint: true,
                innerSize: '75%',
                data: [{
                name: 'EV',
                y: 68.1
                }, {
                name: 'Hybrids',
                y: 11.0
                }]
                }]
                }
  ]
  


