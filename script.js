$(document).ready(function() {
  $('body').scrollspy({ target: '#list-example' });
  $("#button-uno").click(function(event) {
			$("#div-hab").fadeToggle();
		});
    $("#button-dos").click(function(event) {
  			$("#div-voc").fadeToggle();
  		});

      $("#mostrarmas").click(function(event) {
    			$("#antes").fadeToggle();
    		});

        $("#mostrar").click(function(event) {
      			$("#durante").fadeToggle();
      		});




      function mostrar() {
        $(".durante").fadeToggle();
      };

      $("#show").click(function() {
          $("#sabana").css({
              display: 'block'
            })
          });

          $("#curriculum").css({
              display: 'block'
          });
      });
