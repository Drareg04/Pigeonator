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
                        <div id="dragdivdown">
                            <div class="dragupload"><input type="file" id="Upload" name="filename" accept="image/jpeg, image/png, image/svg+xml, image/webp, image/avif, image/x-icon, image/bmp, image/tiff"></div>
                            <div class="dragdefaults">
                                <div onclick="changeSelected()"><img src="img/presets/1640x664.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/1640x856.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/1920x1080.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/1080x1080.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/1080x1920.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/1080x1350.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/2560x1440.png"></div>
                                <div onclick="changeSelected()"><img src="img/presets/1500x500.png"></div>
                            </div>
                            <div class="dragperso">
                                <h1>Name</h1>
                                <input type="text" id="fname" name="name">
                                <div style="display: flex;">
                                    <div><h1>Width</h1><input type="text" id="width" name="width"></div>
                                    <button>&lt;-&gt;</button>
                                    <div><h1>Height</h1><input type="text" id="height" name="height"></div>
                                </div>
                                <h1>Background</h1>
                                <select name="background" id="bgcolor">
                                    <option value="none">Transparent</option>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="custom">Custom</option>
                                </select>
                                <button>Create</button>
                            </div>
                        </div>
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