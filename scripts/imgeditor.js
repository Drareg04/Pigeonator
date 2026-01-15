$(".icon").on("mouseenter", function () {
    // On
    var src = $(this).attr('src');
    if (!$(this).hasClass("freeze")) {
        $(this).attr("src", '/img/imgeditor/' + 'black' + src.substring(src.lastIndexOf('/') + 1));
    }
}).on("mouseleave", function () {
    // off
    var src = $(this).attr('src');
    if (!$(this).hasClass("freeze")) {
        $(this).attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
    }
}).click(function () {

    switch ($(this).attr('id')) {
        case 'layersIcon':
            $("#layerpopup").fadeToggle("slow");
            $("#layersIcon").toggleClass("freeze");
            break;
        default:
            break;
    };
})
$("#plusbutton").click(function () {
    addLayer();
});



$(document).ready(function () {

    // first we need to create a stage
    globalThis.stage = new Konva.Stage({
        container: 'table', // id of container <div>
        width: window.innerWidth,
        height: window.innerHeight / 94 * 100,
        offset: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        },
    });
    stage.move({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2.3,
    });

    layer = addLayer("Background");

    // create our shape
    const rect1 = new Konva.Rect({
        x: window.innerWidth / 2 - width / 2,
        y: (window.innerHeight / 94 * 100) / 2 - height / 2,
        width: width,
        height: height,
        fill: '#FFF',
        strokeWidth: 4
    });
    layer.add(rect1);

    // add the layer to the stage
    stage.add(layer);


    $.getScript("/scripts/MouseEvents.js")
});



function addLayer(id) {

    if (!id) {
        id = "Layer " + stage.getLayers().length
    }


    // Create layer
    var layer = new Konva.Layer({
        id: id,
    });

    console.log("Added layer with ID: " + layer.id())

    // add first layer on the layer dropdown
    $('#layers').prepend('\
        <div class="layer" data-layer="'+ layer.id() + '">\
            <div><img class="preview"></div>\
            <div class="layerName"><input type="text" value="'+ layer.id() + '"></div>\
            <div class="visibility"><img class="checkmark" src="/img/imgeditor/openeyes.png"></div>\
        </div>\
        ')

    var layerDiv = $('[data-layer="' + layer.id() + '"]')

    // ============ LAYERS PREVIEW ============
    layerDiv.find('.preview').attr('src', layer.toDataURL());


    // ============ EVENT LISTENERS ============
    layerDiv.find(".checkmark").on("click", function (event) {
        if (layerDiv.find(".checkmark").attr('src') == '/img/imgeditor/openeyes.png') {
            layerDiv.find(".checkmark").attr('src', '/img/imgeditor/closedeyes.png');
            layer.visible(false);
        } else {
            layerDiv.find(".checkmark").attr('src', '/img/imgeditor/openeyes.png');
            layer.visible(true);
        }
    });

    layerDiv.find("input").on( "change", function (e){
        console.log(e)
    });


    stage.add(layer);

    return layer;
}

console.log("loaded imgeditor.js")