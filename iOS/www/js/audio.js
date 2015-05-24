// Audio play
function playAudio(src) {
    var loc = document.URL;
    var dir = loc.substring(loc.lastIndexOf('ITF'), loc.lastIndexOf('/'));
	var media = new Media(dir + '/' + src, success, error_error);

	media.play();
}

function success() {
	// ignore
}

function error_error(e) {
	alert('great error');
	alert(e.message);
}
