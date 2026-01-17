globalThis.stage = stage;

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
stage.addEventListener("mousedown", (e) => {
    console.log("MOUSE DOWN")

    switch (e.button) {
        case 0:
            if ($("#brushIcon").hasClass("freeze")) {
                fancyPencil("draw");
            } else if ($("#eraserIcon").hasClass("freeze")) {
                fancyPencil("erase");
            }

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

        layer.move({
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
        layer.rotate((pos1 + pos2 / 2) / 10);

        console.log("ROTATE")
    }

    function closeMiddleRotateElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function fancyPencil(mode) {


    document.onmouseup = closeDraw;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDraw;

    groupId = $('[class*="selectedLayer"]').data("layer");

    console.log(groupId)

    group = stage.findOne(node => {
        return node.id() === groupId
    })

    isPaint = true;
    const pos = layer.getRelativePointerPosition();

    if (!canDraw(pos)) {
        return;
    }

    var col = $('input[name="colorHex"]').val();
    var girth = $('input[name="girth"]').val();
    var opacity = $('input[name="opacity"]').val();

    lastLine = new Konva.Line({
        stroke: col,
        strokeWidth: girth,
        opacity: opacity,
        globalCompositeOperation: mode === 'draw' ? 'source-over' : 'destination-out',
        // globalCompositeOperation: 'source-over',
        // round cap for smoother lines
        lineCap: 'round',
        lineJoin: 'round',
        // bezier: true,
        // add point twice, so we have some drawings even on a simple click
        points: [pos.x, pos.y, pos.x, pos.y],
    });
    group.add(lastLine);

    function elementDraw() {
        const pos = layer.getRelativePointerPosition();
        if (!canDraw(pos)) {
            return;
        }
        const newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
    }

    function closeDraw() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        lastLine = null;
        updatePreview()
    }

    function canDraw(pos) {
        return true;

        // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        if (pos.x > layer.width() || pos.x < 0 || pos.y * 1.3 > layer.height() || pos.y * 1.3 < 0) {
            console.log(pos.x, layer.width(), pos.y * 1.3, layer.height());
            return false;
        }
        else {
            return true;
        }
    }
}

// Default example of Konva
stage.on('wheel', (e) => {
    // stop default scrolling
    e.evt.preventDefault();

    const oldScale = layer.scaleX();
    const pointer = stage.getPointerPosition();

    const mousePointTo = {
        x: (pointer.x - layer.x()) / oldScale,
        y: (pointer.y - layer.y()) / oldScale,
    };

    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? -1 : 1;
    // when we zoom on trackpad, e.evt.ctrlKey is true

    const scaleBy = 1.2;
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    layer.scale({ x: newScale, y: newScale });

    const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
    };
    layer.position(newPos);
});