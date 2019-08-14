$(function () {
    feedingProtocol.init();
});

var feedingProtocol = function () {

    Highcharts.setOptions({
        credits: {
            enabled: false,
            text: '(c) TMS'
        }
    });

    var handleChart1 = function () {
        Highcharts.chart('chart1', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: '1000 L'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}k L'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> L<br/>'
            },

            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "IPA",
                            y: 62.74,
                        },
                        {
                            name: "Pale Ale",
                            y: 10.57,
                        }
                    ]
                }
            ],
        });
    };


    var handleChart2 = function () {
        Highcharts.chart('chart2', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'kg'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f} kg'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> kg<br/>'
            },

            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Malt",
                            y: 627.40,
                        },
                        {
                            name: "Hops",
                            y: 155.7,
                        },
                        {
                            name: "Yeast",
                            y: 432.9,
                        }
                    ]
                }
            ],
        });
    };

    var handleChart3 = function () {
        Highcharts.chart('chart3', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.0f}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>'
            },

            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Keg",
                            y: 12,
                        },
                        {
                            name: "Thermometer",
                            y: 6,
                        },
                        {
                            name: "Chillers",
                            y: 22,
                        },
                        {
                            name: "Malt mills",
                            y: 3,
                        }
                    ]
                }
            ],
        });
    };

    return {
        init: function () {
            handleChart1();
            handleChart2();
            handleChart3();
        }
    }
}();