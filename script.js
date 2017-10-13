$(document).ready(function() {
  $('body').scrollspy({ target: '#list-example' });
  $("#button-uno").click(function(event) {
			$("#div-hab").fadeToggle();
		});
    $("#button-dos").click(function(event) {
  			$("#div-voc").fadeToggle();
  		});
});
