var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$.getJSON( flickerAPI, {
 	tags: "Apollo Theater",
  format: "json"
}).done(function( data ) {
    $.each( data.items, function(i, item) {
    	$("<a>").attr("href", item.link)
    	.append($("<img>").attr("src", item.media.m))
    	.appendTo('#photos');
    });
  });