// Audio play
function playAudio(src) {

   src = '/android_asset/www/' + src;

	var media = new Media(src, success, error_error);

	media.play();
}

function success() {
	// ignore
}

function error_error(e) {
	alert('great error');
	alert(e.message);
}
