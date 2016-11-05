$(document).ready(function(){
    //$('.modal').modal();

 //    $('.modal-trigger').leanModal({
 //        dismissible: false
 //    });
	// $('.close').click(function () {
 //  		//$('#videoModalone').hide();
 //  		$('#videoModalone iframe').attr("src", jQuery("#videoModalone iframe").attr("src"));
	// });
	$('.halliBass')
    .on('click', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: -30,
            width: "+=100",
            height: "+=100"
        }, 'fast');
    })
    .on('mouseleave', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: 0,
            width: "-=100",
            height: "-=100"
        }, 'fast');
    });


	$(".button-collapse").sideNav();
});
