
$(".icon").on("mouseenter", function () {
    // On
    var src = $(this).attr('src');
    if (src.lastIndexOf('/black') == -1) {
        $(this).attr("src", '/img/imgeditor/' + 'black' + src.substring(src.lastIndexOf('/') + 1));
    }
    console.log("penis")
}).on("mouseleave", function () {
    // off
    var src = $(this).attr('src');
    if (src.lastIndexOf('/black') != -1) {
        $(this).attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
    }
})

$(document).ready(function(){
    $('#myCanvas').prop({ width: window.innerWidth, height: window.innerHeight/94*100});
});

$('canvas').drawArc({
  fillStyle: 'black',
  x: 100, y: 100,
  radius: 50
});


