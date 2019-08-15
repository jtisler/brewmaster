$(function () {

    var cal = $('#calendar').fullCalendar({
        defaultView: 'agendaWeek',
        displayEventTime: false,
        weekends: false,
        titleRangeSeparator: ' - ',
        events: [
             {
                title: "Brew day 124",
                start: "2019-08-13 08:00:00",
                end: "2019-08-13 15:00:00",
                description: 'IPA',
                className: "m-fc-event--light m-fc-event--solid-warning",
                allDay: false
            },
            {
                title: "Customer delivery",
                start: "2019-08-15 08:00:00",
                end: "2019-08-15 10:00:00",
                description: 'Ovis d.o.o',
                className: "m-fc-event--light m-fc-event--solid-success",
                allDay: false
            },
            {
                title: "Supplier deliveries",
                start: "2019-08-12 08:00:00",
                end: "2019-08-12 11:00:00",
                description: 'Brelex',
                className: "m-fc-event--light m-fc-event--solid-brand",
                allDay: false
            }
        ],
        eventRender: function (e, t) {
            t.hasClass("fc-day-grid-event") ? (t.data("content", e.description), t.data("placement", "top"), mApp.initPopover(t)) : t.hasClass("fc-time-grid-event") ? t.find(".fc-title").append('<div class="fc-description">' + e.description + "</div>") : 0 !== t.find(".fc-list-item-title").lenght && t.find(".fc-list-item-title").append('<div class="fc-description">' + e.description + "</div>")
        }
    });

});