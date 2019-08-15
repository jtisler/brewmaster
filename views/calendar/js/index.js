$(function () {
    feedingProtocol.init();
});

var feedingProtocol = function () {

    var cal;

    var handleCalendar = function () {
        cal = $('#calendar').fullCalendar({
            defaultView: 'month',
            displayEventTime: false,
            events: [
                {
                    title: "Brew day 123",
                    start: "2019-08-01",
                    className: "m-fc-event--light m-fc-event--solid-warning",
                    allDay: false
                }, {
                    title: "Brew day 124",
                    start: "2019-08-10",
                    className: "m-fc-event--light m-fc-event--solid-warning",
                    allDay: false
                }, {
                    title: "Brew day 125",
                    start: "2019-08-21",
                    allDay: false,
                    className: "m-fc-event--light m-fc-event--solid-warning"
                },
                {
                    title: "Customer delivery",
                    start: "2019-08-01",
                    description: 'Ovis d.o.o',
                    className: "m-fc-event--light m-fc-event--solid-success",
                    allDay: false
                }, {
                    title: "Customer delivery",
                    start: "2019-08-11",
                    description: 'Magma d.o.o',
                    className: "m-fc-event--light m-fc-event--solid-success",
                    allDay: false
                },
                {
                    title: "Supplier deliveries",
                    start: "2019-08-26",
                    description: 'Brelex',
                    className: "m-fc-event--light m-fc-event--solid-brand",
                    allDay: false
                }, {
                    title: "Supplier deliveries",
                    start: "2019-08-08",
                    description: 'Hmezad',
                    className: "m-fc-event--light m-fc-event--solid-brand",
                    allDay: false
                }
            ],
            eventRender: function(e, t) {
                t.hasClass("fc-day-grid-event") ? (t.data("content", e.description), t.data("placement", "top"), mApp.initPopover(t)) : t.hasClass("fc-time-grid-event") ? t.find(".fc-title").append('<div class="fc-description">' + e.description + "</div>") : 0 !== t.find(".fc-list-item-title").lenght && t.find(".fc-list-item-title").append('<div class="fc-description">' + e.description + "</div>")
            }
        });
    };

    return {
        init: function () {
            handleCalendar();
        }
    }
}();