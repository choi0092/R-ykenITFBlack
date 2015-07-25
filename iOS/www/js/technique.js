$( ".technique" ).bind( "pageinit", function() {
	   var id = $( this ).attr( "id" );
       var page = "#" + id; 
       var dataString = JSON.stringify(patternData);
	   
       var jsonData = JSON.parse(dataString);
       var lastPage = "#T" + jsonData.lastTechniqueIndex;
 
       if(page == lastPage)
                       {
                        $(page + " .next").css("display", "none");
                        $(page + " .next").attr('class', "");
                       }
       else if(page == "#T0")
                       {
                       $(page + " .prev").css("display", "none");
                       $(page + " .prev").attr('class', "");
                       }
                      
                       
       $(page + " #techInfo span.ui-btn-inner").text(jsonData.techniques[page].name);
                       
       $( page + " #TechImg" ).attr('src', "./resources/" + jsonData.techniques[page].image);
                       
                       
       $( page + " #TechImg" ).on("vclick", function() {
                                 var video = document.getElementById('video');
                                 var source = document.createElement('source');
                                 video.removeChild(video.childNodes[0]);
                                 source.setAttribute('src', "./resources/" + jsonData.techniques[page].video);
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
                        playAudio("./resources/" + jsonData.techniques[page].audio);
                        });

});

