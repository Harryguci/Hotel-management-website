$(document).ready(function () {
    $(this).scroll(function () { 
        var pos = $(this).scrollTop();
        $('.wrap').css({
            'background-position':`center -${pos + 500}px`
        });
    });
});