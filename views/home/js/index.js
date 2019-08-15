$(function () {
    feedingProtocol.init();
});

var feedingProtocol = function () {

    var cal;

    var handleCalendar = function () {
        cal = $('#m_table_1').DataTable();
    };

    return {
        init: function () {
            handleCalendar();
        }
    }
}();