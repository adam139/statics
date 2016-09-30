//make nav portlet is lower and same  than content div
$(document).ready(function() {
  var s1=$('.portletNavigationTree').height();
	var s2=$('#center-column').height();
	var lower=Math.min(s1,s2);
	$('.portletNavigationTree > div:first').css({
        'height':lower,
        'overflow':'auto'});	
})