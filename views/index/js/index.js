$(function () {
    feedingProtocol.init();
});

var feedingProtocol = function () {

    var cal;
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
                    title: 'Fermenter 1'
                }, {
                    id: 2,
                    title: 'Fermenter 2'
                }, {
                    id: 3,
                    title: 'Fermenter 3'
                }
            ],
            events: [
                {
                    resourceId: 1,
                    title: "IPA",
                    start: "2019-08-01",
                    end: "2019-08-20",
                    color: '#5867dd'
                },{
                    resourceId: 2,
                    title: "IPA",
                    start: "2019-08-05",
                    end: "2019-08-12",
                    color: '#5867dd'
                },{
                    resourceId: 2,
                    title: "Pale Ale",
                    start: "2019-08-14",
                    end: "2019-08-30",
                    color: '#00c5dc'
                },{
                    resourceId: 3,
                    title: "Pale Ale",
                    start: "2019-08-03",
                    end: "2019-09-03",
                    color: '#00c5dc'
                },
            ]
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