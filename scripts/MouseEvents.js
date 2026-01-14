canvas = document.querySelector("#myCanvas");
canvas.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

canvas.addEventListener("mousedown", (e) => {
    console.log("MOUSE DOWN")

    switch (e.button) {
        case 0:
            break;
        case 1:
            if (e.shiftKey) {
                middlerotate(e);
            } else {
                middledrag(e);
            }
            console.log("WHEEL")
            break;
        default:
            console.log(e)
            break;
    }
});

function middledrag(e) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeMiddleDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementMiddleDrag;

    function elementMiddleDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        $('canvas')
            .setLayers({
                x: '-=' + pos1, y: '-=' + pos2
            })
            .drawLayers();
        console.log("MOVE")
    }

    function closeMiddleDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function middlerotate(e) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeMiddleRotateElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementMiddleRotate;

    function elementMiddleRotate(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        $('canvas')
            .setLayers({
                rotate: '-=' + (pos1 + pos2 / 2) / 10,
            })
            .drawLayers();
        console.log("MOVE")
        console.log(pos1 + pos2 / 2)

        console.log($('canvas').getLayer(0).rotate);
    }

    function closeMiddleRotateElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function middlezoom(e) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeMiddleRotateElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementMiddleRotate;

    function elementMiddleRotate(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        $('canvas')
            .setLayers({
                rotate: '-=' + (pos1 + pos2 / 2) / 10,
            })
            .drawLayers();
        console.log("MOVE")
        console.log(pos1 + pos2 / 2)

        console.log($('canvas').getLayer(0).rotate);
    }

    function closeMiddleRotateElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



canvas.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        $('canvas')
            .setLayers({
                scale: '-=0.05'
            })
            .drawLayers();
    } else if (e.deltaY < 0) {
        $('canvas')
            .setLayers({
                scale: '+=0.05'
            })
            .drawLayers();
    }

})

$("#checkmark").on("click", function(event) {
    if ($('#checkmark').attr('src') == '/img/imgeditor/openeyes.png'){
        $('#checkmark').attr('src','/img/imgeditor/closedeyes.png');
    }else{
        $('#checkmark').attr('src','/img/imgeditor/openeyes.png');
    }
});
