$(function () {
    menu.init();
});

var menu = function () {

    var handleMenu = function () {
        var _url = window.location.href;

        _url = _url.split('#')[0];
        _url = _url.split('?')[0];

        $('.m-menu__nav li').removeClass('m-menu__item--active m-menu__item--open');

        $('.m-menu__nav li a').each(function () {
            var that = $(this);
            if (that.attr('href') == _url) {
                that.parents('li').addClass('m-menu__item--active m-menu__item--open');
            }
        });

    };

    return {
        init: function(){
            handleMenu();
        }
    }
}();

