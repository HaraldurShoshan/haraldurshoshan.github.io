$(document).ready(function(){
    //$('.modal').modal();
    $('.modal-trigger').leanModal({
        dismissible: false
    });
	$('.close').click(function () {
  		//$('#videoModalone').hide();
  		$('#videoModalone iframe').attr("src", jQuery("#videoModalone iframe").attr("src"));
	});

	$(".button-collapse").sideNav();
});
