  $( ".technique" ).bind( "pageinit", function() {
	   var id = $( this ).attr( "id" );
       var page = "#" + id; 
       var dataString = JSON.stringify(patternData);
	   var jsonData = JSON.parse(dataString);
	   //$(page + " #techInfo span.ui-btn-inner").text(jsonData.ChonJi.techniques[page]);
	   
        // Get the filename of the next page that we stored in the data-next attribute
        var next = $( this ).jqmData( "next" );
        // Get the filename of the previous page that we stored in the data-prev attribute
        var prev = $( this ).jqmData( "prev" );
    // Check if we did set the data-next attribute
    if ( next ) {
        // Navigate to next page on swipe left
        $( document ).on( "swipeleft", page, function() {
            $.mobile.changePage( next + ".html", { transition: "flow" });
        });
        // Navigate to next page when the "next" button is clicked
        $( ".next", page ).on( "click", function() {
            $.mobile.changePage( next + ".html", { transition: "flow" } );
        });
    }
    // Disable the "next" button if there is no next page
    else {
        $( ".next", page ).addClass( "ui-disabled" );
    }
    // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
    if ( prev ) {
                        
        $( document ).on( "swiperight", page, function() {
            $.mobile.changePage( prev + ".html", { transition: "flow", reverse: true } );
        });
		
        $( ".prev", page ).on( "click", function() {
            $.mobile.changePage( prev + ".html", { transition: "flow", reverse: true } );
        });
    }
    else {
        $( ".prev", page ).addClass( "ui-disabled" );
    }
});
