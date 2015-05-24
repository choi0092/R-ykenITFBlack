$( ".technique" ).bind( "pageinit", function() {
	   var id = $( this ).attr( "id" );
       var page = "#" + id; 
       var dataString = JSON.stringify(patternData);
	   var jsonData = JSON.parse(dataString);
	   //$(page + " #techInfo span.ui-btn-inner").text(jsonData.ChonJi.techniques[page]);
                       
        $( page + " #TechImg" ).attr('src', id + ".jpg");
                       
                       
        $( page + " #TechImg" ).on("vclick", function() {
                                 var video = document.getElementById('video');
                                 var source = document.createElement('source');
                                 video.removeChild(video.childNodes[0]);
                                 source.setAttribute('src', id + '.mp4');
                                 video.appendChild(source);
                                 video.load();
                                 video.play();
                                 });
       
        $( document ).on( "swipeleft", page, function() {
                        $(page + " .next").click();
                        
                        });
       
       
       $( document ).on( "swiperight", page, function() {
                        $(page + " .prev").click();
                        });
                       
        
       $( page + " #techInfo a" ).on("vclick", function() {
                        playAudio(id + '.mp3');
                        });

});

