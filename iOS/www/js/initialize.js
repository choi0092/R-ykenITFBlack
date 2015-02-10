$.mobile.defaultPageTransition   = 'none';
$.mobile.defaultDialogTransition = 'none';
$.mobile.buttonMarkup.hoverDelay = 1; 

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
        navigator.splashscreen.hide();
    }
