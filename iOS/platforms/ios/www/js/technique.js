  $( ".technique" ).bind( "pageinit", function() {
	   var id = $( this ).attr( "id" );
       var page = "#" + id; 
       var dataString = JSON.stringify(patternData);
	   var jsonData = JSON.parse(dataString);
	   //$(page + " #techInfo span.ui-btn-inner").text(jsonData.ChonJi.techniques[page]);
    
                         $( document ).on( "swipeleft", page, function() {
                                          alert($(page + " .next").get());
                                          $(page + " .next").click();
                                          
                                          });
                         
                         
                         $( document ).on( "swiperight", page, function() {
                                          alert($(page + " .prev").get());
                                          $(page + " .prev").click();
                                          });
});

