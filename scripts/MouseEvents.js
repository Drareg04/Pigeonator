globalThis.stage = stage;

stage.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

stage.addEventListener("mousedown", (e) => {
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

        stage.move({
            x: -pos1,
            y: -pos2
        });

        // console.log("MOVE")
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
        // $('canvas')
        //     .setLayers({
        //         rotate: '-=' + (pos1 + pos2 / 2) / 10,
        //     })
        //     .drawLayers();

        stage.rotate((pos1 + pos2 / 2) / 10);

        console.log("ROTATE")
    }

    function closeMiddleRotateElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Default example of Konva
const scaleBy = 1.2;
stage.on('wheel', (e) => {
    // stop default scrolling
    e.evt.preventDefault();

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();

    const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
    };

    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? -1 : 1;
    // when we zoom on trackpad, e.evt.ctrlKey is true

    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
});