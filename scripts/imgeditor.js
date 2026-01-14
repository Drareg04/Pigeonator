
$(".icon").on("mouseenter", function () {
    // On
    var src = $(this).attr('src');

    $(this).attr("src", '/img/imgeditor/' + 'black' + src.substring(src.lastIndexOf('/') + 1));

    console.log("penis")
}).on("mouseleave", function () {
    // off
    var src = $(this).attr('src');

    $(this).attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));

})

$(document).ready(function () {
    $('#myCanvas').prop({ width: window.innerWidth, height: window.innerHeight / 94 * 100 });
    $('canvas').addLayer({ type: 'rectangle', fillStyle: '#FFF', x: window.innerWidth / 2, y: window.innerHeight / 94 * 50, width: width, height: height }).drawLayers();

    $.getScript("/scripts/MouseEvents.js")
});





console.log("loaded imgeditor.js")