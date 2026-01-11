function changeContent(page) {
    // var newProject = $('dragdiv');
    switch (page) {
        case 'img':

        // change new project thing
            $("#dragdiv").load("pages/newImg.html", function () {
                // renderUpload();
            });

            break;
        case 'vid':
            contentDiv.innerHTML = ``;
            renderUpload();
            break;
        case 'gif':
            contentDiv.innerHTML = ``;
            renderUpload();
            break;
        case 'cnv':
            contentDiv.innerHTML = ``;
            renderUpload();
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}


// load initial page
changeContent('img');