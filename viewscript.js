
$(document).ready(function ()
{ 
    $('#visualcontentcenter img').on(
    {
        mouseover: function () {
            $(this).css({ 'cursor': 'hand', 'border-Color': 'red' })
        },
        mouseout: function () {
            $(this).css({ 'cursor': 'default', 'border-Color': 'grey' })
        },

        click: function ()
        {
            var src = $(this).attr('src')
            $('#mainimage').fadeOut(0, function () { $(this).attr('src', src) }).fadeIn(0)
        }
    })
})


function display(src) {
    $('.limage').html("<img class='limage' src=" + src + ">");
    $('#lightbox').css({ "display": "block" });
    $('#lightbox').fadein();
}


$(function () {
    $(document.body)
        .on('click touchend', '.limage', function (e) {
            return false;
        })
        .on('click touchend', '#lightbox', function (e) {
            $('#lightbox').fadeOut(0)
        });
});


$(document).ready(function () {
    $('.close').on(
    {
        click: function () {
            $('#lightbox').fadeOut(0)
        }
    });

});

