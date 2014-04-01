var congressAPI = "http://api.opencongress.org/hot_bills?callback=?";

$.getJSON( congressAPI, {
  format: "json"
}).done(function( data ) {
    $.each( data.bills, function(i, bill) {
      $("<li>").append("<strong>" + bill.bill_type + ' ' + bill.number + "</strong> ")
      .append(bill.official_title.title)
      .appendTo("#bills");
    });
  });