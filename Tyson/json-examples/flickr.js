var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$.getJSON( flickerAPI, {
  id: "35591378@N03",
  format: "json"
}).done(function( data ) {
    $.each( data.items, function(i, item) {
      $("<a>", {"href": item.link})
      .append($( "<img>" ).attr( "src", item.media.m ))
      .appendTo( "#photos" );
    });
  });