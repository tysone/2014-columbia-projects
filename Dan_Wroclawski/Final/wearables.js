$(function(){

$('.sidePhoto').css({'opacity': 0});

$('#gearFit').waypoint(function() {
  $('#gearFit').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#fuelband').waypoint(function() {
  $('#fuelband').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#jawbone').waypoint(function() {
  $('#jawbone').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#nymi').waypoint(function() {
  $('#nymi').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#narrative').waypoint(function() {
  $('#narrative').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#glass').waypoint(function() {
  $('#glass').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#moto360').waypoint(function() {
  $('#moto360').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

$('#misfit').waypoint(function() {
  $('#misfit').animate({'opacity': 1}, 1500);
}, { offset: '50%' });

});