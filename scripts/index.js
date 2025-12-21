function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'img':
			contentDiv.innerHTML = `
                <div class="header">
                    <img src="img/logoboina.png" id="Vanpigeon"></img>
                    <h1>Pigeonator</h1>
                    <img src="img/img.png" class="indicator">
                </div>
                <div class="upper">
                    <span><img src="img/Newproject.png" onclick="showDiv()">
                        <p>New Project</p>
                    </span>
                    <span><img src="img/Pcupload.png">
                        <p>Upload from computer</p>
                    </span>
                    <div id="dragdiv" style="display: none;">
                        <div id="dragdivheader">
                            <div class="title">
                                <h1>New Project</h1>
                            </div>
                            <div class="img">
                                <img src="img/x.png" onclick="hideDiv()">
                            </div>
                        </div>
                        <div class="dragupload"><button id="uppyModalOpener">Open Modal</button></div>
                        <div class="dragdefaults"><p>Something</p></div>
                        <div class="dragperso"><p>Something else</p></div>
                    </div>
                </div>
                <div class="lower">
                    <input type="file" id="Upload" name="filename" accept="image/jpeg, image/png, image/svg+xml, image/webp, image/avif, image/x-icon, image/bmp, image/tiff">
                </div>`;
                renderUpload();
			break;
		case 'vid':
			contentDiv.innerHTML = ` 
				<div class="header">
                <img src="img/logocowboy.png" id="Vanpigeon"></img>
                <h1>Pigeonator</h1>
                <img src="img/vid.png" class="indicator">
                </div>
                <div class="upper">
                    <span><img src="img/Newproject.png"><p>New Project</p></span>
                    <span><img src="img/Pcupload.png"><p>Upload from computer</p></span>
                </div>
                <div class="lower">
                    <input type="file" 
                    class="filepond"
                    name="filepond"
                    multiple
                    acceptedFileTypes = "video/*" />
                </div>`;
                renderUpload();
			break;
		case 'gif':
			contentDiv.innerHTML = `
				<div class="header">
                    <img src="img/pigeon.png" id="Vanpigeon"></img>
                    <h1>Pigeonator</h1>
                    <img src="img/gif.png" class="indicator">
                </div>    
                <div class="upper">
                    <img src="img/gificon.png">
                    <img src="img/avif.png">
                    <img src="img/apng.png">
                    <img src="img/webpicon.png">
                    <img src="img/jxl.png">
                </div>
                <div class="lower">
                    <input type="file" 
                    class="filepond"
                    name="filepond"
                    multiple
                    acceptedFileTypes = "image/jpeg, image/png, image/svg+xml, image/webp, image/avif, image/x-icon, image/bmp, image/tiff" />
                </div>`;
                renderUpload();
			break;
        case 'cnv':
			contentDiv.innerHTML = `
				<div class="header">
                    <img src="img/pigeon.png" id="Vanpigeon"></img>
                    <h1>Pigeonator</h1>
                    <img src="img/cnv.png" class="indicator">
                </div>    
                <div class="upper">
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="lower">
                    <input type="file" class="filepond" style="width: 40%;" name="filepond" multiple acceptedFileTypes = "image/jpeg, image/png, image/svg+xml, image/webp, image/avif, image/x-icon, image/bmp, image/tiff" />
                </div>`;
                renderUpload();
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}