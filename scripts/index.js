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
                    <span><img src="img/Newproject.png"><p>New Project</p></span>
                    <span><img src="img/Pcupload.png"><p>Upload from computer</p></span>
                </div>
                <div class="lower">
                    <input type="file" 
                    class="filepond"
                    name="filepond"
                    multiple
                    acceptedFileTypes = "image/jpeg, image/png, image/svg+xml, image/webp, image/avif, image/x-icon, image/bmp, image/tiff" />
                </div>`;
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
			break;
		case 'gif':
			contentDiv.innerHTML = `
				<div class="header">
                    <img src="img/pigeon.png" id="Vanpigeon"></img>
                    <h1>Pigeonator</h1>
                    <img src="img/gif.png" class="indicator">
                </div>    
                <div class="upper" id="gif">
                    <img src="img/gificon.png">
                    <img src="img/avif.png">
                    <img src="img/apng.png">
                    <img src="img/webpicon.png">
                    <img src="img/jxl.png">
                </div>
                <div class="lower" id="gif">
                    <input type="file" 
                    class="filepond"
                    name="filepond"
                    multiple
                    acceptedFileTypes = "image/jpeg, image/png, image/svg+xml, image/webp, image/avif, image/x-icon, image/bmp, image/tiff" />
                </div>`;
				element.classList.add("gif");
			break;
        case 'cnv':
			contentDiv.innerHTML = 
				`<h2>Contact Us</h2> 
				<p>
					Feel free to reach out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}