var options = {
    series: [{
        name: 'Discharges By Interval',
        type: 'column',
        data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0, 0]
    }, {
        name: 'Avg Time',
        type: 'area',
        // data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        data: [0, 11, 15, 13, 8, 0, 0, 0, 0, 0, 0]
    }],
    chart: {
        height: 450,
        type: 'line',
        stacked: false,
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '70%',
            colors: {
                ranges: [{
                    from: 0,
                    to: 100,
                    color: '#f47b7b',
                }]
            }
        }
    },

    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['12AM-06AM', '06AM-08AM', '08AM-10AM', '10AM-12PM', '12PM-02PM', '02PM-04PM', '04PM-06PM', '06PM-08PM',
        '08PM-10PM', '10PM-12PM'
    ],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'time'
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
