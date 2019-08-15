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
        if($('#chart1').length === 0) return;
        Highcharts.chart('chart1', {

            title: {
                text: 'Beer on stock'
            },
            yAxis: {
                title: {
                    text: 'L'
                }
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    }
                }
            },

            series: [{
                name: 'IPA',
                data: [43934, 52503, 57177, 69658, 97031, 87021, 91002, 30205]
            }, {
                name: 'Pale Ale',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Stout',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }]
        });
    };


    var handleChart2 = function () {
        if($('#chart2').length === 0) return;

        Highcharts.chart('chart2', {

            title: {
                text: 'Ingredients on stock'
            },
            yAxis: {
                title: {
                    text: 'kg'
                }
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    }
                }
            },

            series: [{
                name: 'Malt',
                data: [125, 98, 77, 145, 201, 136, 178, 91]
            }, {
                name: 'Hops',
                data: [98, 178, 125, 125, 77, 91, 125, 145]
            }, {
                name: 'Yeast',
                data: [77, 98, 178, 201, 125, 144, 178, 178]
            }]
        });
    };

    var handleChart3 = function () {
        if($('#chart3').length === 0) return;

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