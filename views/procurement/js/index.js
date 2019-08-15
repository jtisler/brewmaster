$(function () {
    feedingProtocol.init();
});

var feedingProtocol = function () {

    var cal;

    var handleCalendar = function () {
        cal = $('#m_table_1').DataTable({
            order: [[0, 'desc']]
        });
    };

    return {
        init: function () {
            handleCalendar();
        }
    }
}();