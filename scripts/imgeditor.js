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
            $("#settingsPopup").fadeOut();
            if ($("#cursorIcon").hasClass("freeze")) {
                $("#cursorIcon").toggleClass("freeze");
                $("#cursorIcon").attr("src", '/img/imgeditor/cursor.png');
                $("#cursorPopup").fadeOut();
            }
            break;

        case 'brushIcon':
            if ($("#eraserIcon").hasClass("freeze")) {
                $("#eraserIcon").removeClass("freeze");
                $("#eraserIcon").attr("src", '/img/imgeditor/eraser.png');
            }
            else {
                $("#coverInvisiGirth").fadeToggle();
            }
            if ($("#cursorIcon").hasClass("freeze")) {
                $("#cursorIcon").toggleClass("freeze");
                $("#cursorIcon").attr("src", '/img/imgeditor/cursor.png');
                $("#cursorPopup").fadeOut();
            }
            $("#brushIcon").toggleClass("freeze");
            $("#settingsPopup").fadeOut();
            break;

        case 'eraserIcon':
            if ($("#brushIcon").hasClass("freeze")) {
                $("#brushIcon").removeClass("freeze");
                $("#brushIcon").attr("src", '/img/imgeditor/brush.png');
            }
            else {
                $("#coverInvisiGirth").fadeToggle();
            }
            if ($("#cursorIcon").hasClass("freeze")) {
                $("#cursorIcon").toggleClass("freeze");
                $("#cursorIcon").attr("src", '/img/imgeditor/cursor.png');
                $("#cursorPopup").fadeOut();
            }
            $("#eraserIcon").toggleClass("freeze");
            $("#settingsPopup").fadeOut();
            break;

        case 'colorPreview':
            if ($("#layersIcon").hasClass("freeze")) {
                $("#layersIcon").toggleClass("freeze");
                $("#layersIcon").attr("src", '/img/imgeditor/layers.png');
            } if ($("#cursorIcon").hasClass("freeze")) {
                $("#cursorIcon").toggleClass("freeze");
                $("#cursorIcon").attr("src", '/img/imgeditor/cursor.png');
                $("#cursorPopup").fadeOut();
            }
            $("#settingsPopup").fadeOut();
            $("#layerpopup").fadeOut();
            $("#colorpopup").fadeToggle();
            break;
        case 'settingsIcon':
            if ($("#cursorIcon").hasClass("freeze")) {
                $("#cursorIcon").toggleClass("freeze");
                $("#cursorIcon").attr("src", '/img/imgeditor/cursor.png');
                $("#cursorPopup").fadeOut();
            }
            $("#settingsPopup").fadeToggle();
            break;
        case 'cursorIcon':
            $("#cursorIcon").toggleClass("freeze");
            $("#settingsPopup").fadeOut();
            $("#cursorPopup").fadeToggle();
            break;
        default:
            break;
    };
})

// add layer
$("#plusbutton").click(function () {
    addGroup();
});

// groupId = $('[class*="selectedLayer"]').data("layer");

$(".settingIcons").click(function () {
    var src = $(this).attr('src');
    if (!$(this).hasClass("active")) {
        $(this).attr("src", '/img/imgeditor/' + 'active' + src.substring(src.lastIndexOf('/') + 1));
        $('.active').attr("src", '/img/imgeditor/' + $('.active').attr('src').substring($('.active').attr('src').lastIndexOf('/') + 7));
        $('.active').removeClass('active');
        $(this).addClass("active");
        $('.spc').hide();
        var spc = '#active' + src.substring(src.lastIndexOf('/') + 1).slice(0, -4)
        console.log(spc)
        $(spc).fadeIn();
    }
})

$("#activeexport div").click(function () {

    if ($(this).hasClass("export")) {
        // export
        switch (this.innerText) {
            case 'Pigeon':

                break;
            case 'PDF':
                break;
            case 'PNG':

                dataURL = layer.toDataURL({
                    x: 0,
                    y: 0,
                    width: presetWidth,
                    height: presetHeight,
                });

                downloadFile(dataURL, "image.png")

                break;
            case 'JPEG':
                dataURL = layer.toDataURL({
                    x: layer.x(),
                    y: layer.y(),
                    width: 1920,
                    height: 1080,
                    // pixelRatio: layer.scaleX(),
                    mimeType: "image/jpeg",
                });

                downloadFile(dataURL, "image.jpg")
                break;
            case 'Pigeon':
                break;
            default:
                console.log(this.innerText)
                break;
        }

    }
    else {
        // import

    }

});

$(".cursorPopupTopButtons").click(function () {
    if (!$(this).hasClass("ActiveCursorButton")) {
        switch ($(this).attr('id')) {
            case 'Freecursor':
                var src = $('.ActiveCursorButton').find('img').attr("src");
                $('.ActiveCursorButton').find('img').attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
                $(".ActiveCursorButton").removeClass("ActiveCursorButton");
                $("#Freecursor").find('img').attr("src", '/img/imgeditor/blackfree.png');
                $("#Freecursor").addClass("ActiveCursorButton")
                break;
            case 'Uniformcursor':
                var src = $('.ActiveCursorButton').find('img').attr("src");
                $('.ActiveCursorButton').find('img').attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
                $(".ActiveCursorButton").removeClass("ActiveCursorButton");
                $("#Uniformcursor").find('img').attr("src", '/img/imgeditor/blackuniform.png');
                $("#Uniformcursor").addClass("ActiveCursorButton")
                break;
            case 'Distortcursor':
                var src = $('.ActiveCursorButton').find('img').attr("src");
                $('.ActiveCursorButton').find('img').attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
                $(".ActiveCursorButton").removeClass("ActiveCursorButton");
                $("#Distortcursor").find('img').attr("src", '/img/imgeditor/blackdistort.png');
                $("#Distortcursor").addClass("ActiveCursorButton")
                break;
            case 'Deformcursor':
                var src = $('.ActiveCursorButton').find('img').attr("src");
                $('.ActiveCursorButton').find('img').attr("src", '/img/imgeditor/' + src.substring(src.lastIndexOf('/') + 6));
                $(".ActiveCursorButton").removeClass("ActiveCursorButton");
                $("#Deformcursor").find('img').attr("src", '/img/imgeditor/blackdeform.png');
                $("#Deformcursor").addClass("ActiveCursorButton")
                break;
            default:
                break;
        }
    }
})
$(".cursorPopupBottomButtons").click(function () {
    switch ($(this).attr('id')) {
        case 'Fliphorizontalcursor':
            break;
        case 'Flipverticalcursor':
            break;
        case 'Flip45cursor':
            break;
        default:
            break;
    }
})



// ============ FUNCTIONS ============

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
        width: presetWidth,
        height: presetHeight,
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

    // delete layer
    layerDiv.find(".delete").click(function () {
        group.destroy();
        $(this).parent().remove();
    });

    // clone layer
    layerDiv.find(".duplicate").click(function () {
        var clone = group.clone();
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

    // ============ LAYERS PREVIEW ============
    layerDiv.find('.preview').attr('src', group.toDataURL());


    return group;
}

function updatePreview() {
    groupId = $('[class*="selectedLayer"]').data("layer");

    $('[data-layer="' + groupId + '"]').find('.preview').attr('src', group.toDataURL({ x: 0, y: 0, width: presetWidth, height: presetHeight }));
}

function downloadFile(file, name) {
    // create link to download
    const link = document.createElement('a');
    link.download = name;
    link.href = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============ ON READY ============
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
        width: presetWidth,
        height: presetHeight,
    });
    stage.add(layer);

    layer.width(presetWidth);
    layer.height(presetHeight);

    var group = addGroup("Background");

    // create our shape
    const rect1 = new Konva.Rect({
        x: window.innerWidth / 2 - presetWidth / 2,
        y: (window.innerHeight / 94 * 100) / 2 - presetHeight / 2,
        width: presetWidth,
        height: presetHeight,
        fill: '#FFF',
        strokeWidth: 4
    });
    console.log(layer.width(), layer.height())
    group.add(rect1);


    $('#picker').farbtastic(colorChanged);


    $.getScript("/scripts/MouseEvents.js")
});

console.log("loaded imgeditor.js")