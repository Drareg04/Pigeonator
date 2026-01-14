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

console.log("loaded menu.js")


document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey &&
        (e.keyCode == "61" ||
            e.keyCode == "107" ||
            e.keyCode == "173" ||
            e.keyCode == "109" ||
            e.keyCode == "187" ||
            e.keyCode == "189")
    ) {
        e.preventDefault();
    }
});

console.log("Loaded MouseEvents")

const scrollCheck = document.querySelector("#scroll-check");
document.addEventListener(
  "wheel",
  function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  {
    passive: false
  }
);