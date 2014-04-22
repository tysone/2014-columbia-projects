$(document).ready(function() {
 
    $('.ending').on('mouseover', function() {
     $(this).addClass('soften');
   }); 
  
  $.getJSON('http://data.cityofnewyork.us/resource/ccab-jb4k.json', function(data){
       console.log(data);
       $('#2005').text(data[0]._number_1);
      }) 
        
  $.getJSON('http://data.cityofnewyork.us/resource/ccab-jb4k.json', function(data){
       console.log(data);
       $('#2006').text(data[0]._number_2);
      }) 
  
   $.getJSON('http://data.cityofnewyork.us/resource/ccab-jb4k.json', function(data){
       console.log(data);
       $('#2007').text(data[0]._number_3);
      }) 
  
   $.getJSON('http://data.cityofnewyork.us/resource/ccab-jb4k.json', function(data){
       console.log(data);
       $('#2008').text(data[0]._number_4);
      }) 
   
   $.getJSON('http://data.cityofnewyork.us/resource/ccab-jb4k.json', function(data){
       console.log(data);
       $('#2009').text(data[0]._number_5);
      }) 
  
 });
