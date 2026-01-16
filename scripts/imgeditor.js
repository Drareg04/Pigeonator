$(".icon").on("mouseenter", function () {
    // On
    var src = $(this).attr('src');
    if (!$(this).hasClass("freeze") && src != undefined) {
        $(this).attr("src", '/img/imgeditor/' + 'black' + src.substring(src.lastIndexOf('/') + 1));
    }
}).on("mouseleave", function () {
    // off
    var src = $(this).attr('src');
    if (!$(this).hasClass("freeze") && src != undefined) {
        $(this).attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
    }
}).click(function () {
    switch ($(this).attr('id')) {
        case 'layersIcon':
            $("#colorpopup").fadeOut();
            $("#layerpopup").fadeToggle();
            $("#layersIcon").toggleClass("freeze");
            break;

        case 'brushIcon':
            if ($("#eraserIcon").hasClass("freeze")) {
                $("#eraserIcon").removeClass("freeze");
                $("#eraserIcon").attr("src", '/img/imgeditor/eraser.png');
            }
            else {
                $("#coverInvisiGirth").fadeToggle();
            }
            $("#brushIcon").toggleClass("freeze");
            break;

        case 'eraserIcon':
            if ($("#brushIcon").hasClass("freeze")) {
                $("#brushIcon").removeClass("freeze");
                $("#brushIcon").attr("src", '/img/imgeditor/brush.png');
            }
            else {
                $("#coverInvisiGirth").fadeToggle();
            }
            $("#eraserIcon").toggleClass("freeze");
            break;

        case 'colorPreview':
            $("#layerpopup").fadeOut();
            $("#colorpopup").fadeToggle();
            break;
        default:
            break;
    };
})
$("#plusbutton").click(function () {
    addGroup();
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
    globalThis.layer = new Konva.Layer({
        width: width,
        height: height,
        clipX: width,
        clipY: height,
    });
    stage.add(layer);


    var group = addGroup("Background");

    // create our shape
    const rect1 = new Konva.Rect({
        x: window.innerWidth / 2 - width / 2,
        y: (window.innerHeight / 94 * 100) / 2 - height / 2,
        width: width,
        height: height,
        fill: '#FFF',
        strokeWidth: 4
    });
    group.add(rect1);


    $('#picker').farbtastic(colorChanged);


    $.getScript("/scripts/MouseEvents.js")
});

function colorChanged() {
    $('#colorPreview').css("background-color", this.color);
    $('input[name="colorHex"]').val(this.color);
}


function addGroup(id) {

    if (!id) {
        id = "Layer " + layer.find('Group').length
    }


    // Create "layer" (group)
    var group = new Konva.Group({
        id: id,
        width: width,
        height: height,
    });

    console.log("Added Group with ID: " + group.id())

    // add first layer on the layer dropdown
    $('#layers').prepend('\
        <div class="layer" data-layer="'+ group.id() + '">\
            <div><img class="preview"></div>\
            <div class="layerName"><input type="text" value="'+ group.id() + '"></div>\
            <div class="visibility"><img class="checkmark" src="/img/imgeditor/openeyes.png"></div>\
            <div class="duplicate"><p>Duplicate</p></div>\
            <div class="delete"><p>Delete</p></div>\
        </div>\
        ')

    var layerDiv = $('[data-layer="' + group.id() + '"]')

    $(".layer").removeClass("selectedLayer")
    layerDiv.addClass("selectedLayer");

    // ============ LAYERS PREVIEW ============
    layerDiv.find('.preview').attr('src', group.toDataURL());


    // ============ EVENT LISTENERS ============
    layerDiv.find(".checkmark").on("click", function (event) {
        if (layerDiv.find(".checkmark").attr('src') == '/img/imgeditor/openeyes.png') {
            layerDiv.find(".checkmark").attr('src', '/img/imgeditor/closedeyes.png');
            group.visible(false);
        } else {
            layerDiv.find(".checkmark").attr('src', '/img/imgeditor/openeyes.png');
            group.visible(true);
        }
    });

    layerDiv.find("input").on("input", function () {
        var val = $(this).val();
        group.id(val);
        $(".layer").data("layer", val);
    });

    layerDiv.mouseup(function (e) {
        // console.log(e.button)
        switch (e.button) {
            case 0:
                $(".layer").removeClass("selectedLayer");
                $(this).addClass("selectedLayer");
                break
            case 2:
                if ($(this).hasClass('options')) {
                    $(this).removeClass("options");
                    break
                }
                $(".layer").removeClass("options");
                $(this).addClass("options");
                break
        }
    })





    layer.add(group);
    group.moveToTop();
    return group;
}

console.log("loaded imgeditor.js")