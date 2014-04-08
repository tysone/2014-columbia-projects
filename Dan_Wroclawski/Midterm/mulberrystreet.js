$(function(){

/*
$("#flickrPhotos").fadeToggle();

$("#flickr").click(function(){
	$("#flickrPhotos").fadeToggle();
});
*/

var flickerAPI = "https://api.flickr.com/services/feeds/groups_pool.gne?jsoncallback=?";

$.getJSON(flickerAPI, {
  	id: "926883@N23",
  	format: "json"
}).done(function(data) {
    $.each(data.items, function(i, item) {
      	$("<a>", {"href":item.link})
      	.append($("<img>").attr("src", item.media.m))
      	.appendTo("#flickrPhotos");
    });
});

});