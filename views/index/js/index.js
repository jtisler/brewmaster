$(function () {
    feedingProtocol.init();
});

var feedingProtocol = function () {

    var cal, cal2;
    var resource = 0;

    var handleCalendar = function () {
        cal = $('#m_calendar').fullCalendar({
            defaultView: 'timelineMonth',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'timelineMonth'
            },
            allDaySlot: false,
            slotEventOverlap: false,
            editable: true,
            height: 'auto',
            selectable: true,
            firstDay: 1,
            locale: 'hr',
            resourceLabelText: 'Fermenters',
            eventOverlap: false,
            slotLabelFormat: [
                'dd',
                "DD"
            ],
            resourceAreaWidth: '15%',
            resources: [
                {
                    id: 1,
                    title: 'Fermenter 1 (500L)'
                }, {
                    id: 2,
                    title: 'Fermenter 2 (750L)'
                }, {
                    id: 3,
                    title: 'Fermenter 3 (1000L)'
                }
            ],
            events: [
                {
                    resourceId: 1,
                    title: "IPA",
                    start: "2019-08-01",
                    end: "2019-08-20",
                    color: '#5867dd',
                    textColor: 'white'
                },{
                    resourceId: 2,
                    title: "IPA",
                    start: "2019-08-05",
                    end: "2019-08-12",
                    color: '#5867dd',
                    textColor: 'white'
                },{
                    resourceId: 2,
                    title: "Pale Ale",
                    start: "2019-08-14",
                    end: "2019-08-30",
                    color: '#00c5dc',
                    textColor: 'white'
                },{
                    resourceId: 3,
                    title: "Pale Ale",
                    start: "2019-08-03",
                    end: "2019-09-03",
                    color: '#00c5dc',
                    textColor: 'white'
                },
            ]
        });

        cal2 = $('#m_calendar_2').fullCalendar({
            defaultView: 'timelineMonth',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'timelineMonth'
            },
            allDaySlot: false,
            slotEventOverlap: false,
            editable: true,
            height: 'auto',
            selectable: true,
            firstDay: 1,
            locale: 'hr',
            resourceLabelText: 'Brewing systems',
            eventOverlap: false,
            slotLabelFormat: [
                'dd',
                "DD"
            ],
            resourceAreaWidth: '15%',
            resources: [
                {
                    id: 1,
                    title: 'Brewery 1 (500L)'
                }, {
                    id: 2,
                    title: 'Brewery 2 (1000L)'
                }
            ],
            events: [
                {
                    resourceId: 1,
                    title: "IPA",
                    start: "2019-08-01",
                    end: "2019-08-20",
                    color: '#5867dd',
                    textColor: 'white'
                },{
                    resourceId: 2,
                    title: "IPA",
                    start: "2019-08-05",
                    end: "2019-08-12",
                    color: '#5867dd',
                    textColor: 'white'
                },{
                    resourceId: 2,
                    title: "Pale Ale",
                    start: "2019-08-14",
                    end: "2019-08-30",
                    color: '#00c5dc',
                    textColor: 'white'
                }
            ]
        });

        Highcharts.chart('chart_1', {

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


    function updateEvent(event, deltaDays, resourceId) {
        var start = event.start.valueOf();
        var end = event.end.valueOf();
        var id = event.id;

        $.ajax({
            url: '/api/calendar/updateFeedingProtocolEvent',
            type: 'POST',
            dataType: 'json',
            data: {
                id: id,
                start: start,
                end: end,
                resourceId: resourceId
            }
        });
    }

    var deleteEvent = function (event) {
        var id = event.id;
        $.ajax({
            url: '/api/calendar/deleteFeedingProtocolEvent',
            type: 'POST',
            dataType: 'json',
            data: {
                id: id
            },
            success: function (response) {
                cal.fullCalendar('refetchEvents');
            }
        });
    };


    return {
        init: function () {
            handleCalendar();
        }
    }
}();