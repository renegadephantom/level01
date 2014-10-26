// JavaScript Document

var _gamelevel = 1;

function mainscreen() {
	
	$('#container img.sky').remove();
	$('#puzzle').remove();
	$('#shape1').remove();
	$('#shape2').remove();
	$('#shape3').remove();
	$('#arrow').remove();
	
	$('#jungle').show();
	$('#topstick').show();
	$('#mitemshapes').show();
	$('#mitemcolors').show();
	$('#mitemquit').show();
	
}


function loadShapes()
{
	$('#jungle').hide();
	$('#topstick').hide();
	$('#mitemshapes').hide();
	$('#mitemcolors').hide();
	$('#mitemquit').hide();

	$('<img/>',{ class: 'sky'}).appendTo($('#container'));
	$('<div/>',{ id: 'puzzle'}).appendTo($('#container'));
	$('<div/>',{ id: 'shape1'}).appendTo($('#container'));
	$('<div/>',{ id: 'shape2'}).appendTo($('#container'));
	$('<div/>',{ id: 'shape3'}).appendTo($('#container'));
	$('<div/>',{ id: 'arrow'}).appendTo($('#container'));

	$('#puzzle').css({'background':'url(square-puzzle.png)'});
	$('#shape1').css({'background':'url(square-200.png)'});
	$('#shape2').css({'background':'url(circle-200.png)'});
	$('#shape3').css({'background':'url(star-200.png)'});
	$('#arrow').css({'background':'url(arrow.png)'});


		$("#shape1").click(function() {
		$("#shape1").on("webkitAnimationEnd", callme);
		$("#shape1").addClass('shape1Animate');   
			
        var el = $(this),  
        newone = el.clone(true);   
//      el.before(newone);    
		$('#container').append(newone);
//        $("." + el.attr("class") + ":last").remove();
		$(this).remove();
	});
	
	
	$("#shape2").click(function() {
		$("#shape2").on("webkitAnimationEnd", callme);
		$("#shape2").addClass('shape1Animate');   
			
        var el = $(this),  
        newone = el.clone(true);   
//        el.before(newone);    
		$('#container').append(newone);		
//        $("." + el.attr("class") + ":last").remove();
		$(this).remove();
		
	});

	
	$("#shape3").bind('vclick',function() {
		$("#shape3").on("webkitAnimationEnd", callme);
		$("#shape3").addClass('shape1Animate');   
			
        var el = $(this),  
        newone = el.clone(true);   
//        el.before(newone);    
		$('#container').append(newone);
//        $("." + el.attr("class") + ":last").remove();		
		$(this).remove();
	});


	$("#arrow").bind('vclick',function() {
		mainscreen();
	});

}

function callme(){
//	$("#shape3").off('webkitAnimationEnd');

	$(this).off('webkitAnimationEnd');
	$('<div/>',{ id: 'sun'}).appendTo($('#container'));
	switch (_gamelevel)
	{
		case 1:
			if ($(this).get(0) === $('#shape1').get(0))
					$("#sun").addClass('sunman');
			else
				$("#sun").addClass('sunsad');
			break;	
		case 2:	
			if ($(this).get(0) === $('#shape3').get(0))
					$("#sun").addClass('sunman');
			else
				$("#sun").addClass('sunsad');
			break;	
		case 3:	
			if ($(this).get(0) === $('#shape1').get(0))
					$("#sun").addClass('sunman');
			else
				$("#sun").addClass('sunsad');
			break;	
		case 4:	
			if ($(this).get(0) === $('#shape3').get(0))
					$("#sun").addClass('sunman');
			else
				$("#sun").addClass('sunsad');
			break;
		case 5:	
			if ($(this).get(0) === $('#shape3').get(0))
					$("#sun").addClass('sunman');
			else
				$("#sun").addClass('sunsad');
			break;								
	}
	$("#sun").addClass('sunAnimate');
	$("#sun").on("webkitAnimationEnd", sunend);
/*	
	$(this).off('webkitAnimationEnd');
	$('<div/>',{ id: 'sun'}).appendTo($('#container'));
	$("#sun").addClass('sunman');
	$("#sun").addClass('sunAnimate');
	$("#sun").on("webkitAnimationEnd", sunend);
*/	
}

function sunend(){
	
	$("#sun").remove();
	_gamelevel++;
	changelevels();	
}

function changelevels()
{
	switch(_gamelevel)
	{
		case 1:
			$('#puzzle').css({'background':'url(square-puzzle.png)'});
			$('#shape1').css({'background':'url(suare-200.png)'});
			$('#shape2').css({'background':'url(circle-200.png)'});
			$('#shape3').css({'background':'url(star-200.png)'});
			break;
		case 2:
			$('#puzzle').css({'background':'url(circle-puzzle.png)'});
			$('#shape1').css({'background':'url(rhombus-200.png)'});
			$('#shape2').css({'background':'url(star-200.png)'});
			$('#shape3').css({'background':'url(circle-200.png)'});
			break;
		case 3:
			$('#puzzle').css({'background':'url(star-puzzle.png)'});
			$('#shape1').css({'background':'url(star-200.png)'});
			$('#shape2').css({'background':'url(rhombus-200.png)'});
			$('#shape3').css({'background':'url(square-200.png)'});
			break;
		case 4:
			$('#puzzle').css({'background':'url(rhombus-puzzle.png)'});
			$('#shape1').css({'background':'url(square-200.png)'});
			$('#shape2').css({'background':'url(circle-200.png)'});
			$('#shape3').css({'background':'url(rhombus-200.png)'});
			break;
		case 5:
			$('#puzzle').css({'background':'url(triangle-puzzle.png)'});
			$('#shape1').css({'background':'url(star-200.png)'});
			$('#shape2').css({'background':'url(square-200.png)'});
			$('#shape3').css({'background':'url(triangle.png)'});
			break;						
		default:
			_gamelevel = 1;
			$('#puzzle').css({'background':'url(square-puzzle.png)'});
			$('#shape1').css({'background':'url(square-200.png)'});
			$('#shape2').css({'background':'url(circle-200.png)'});
			$('#shape3').css({'background':'url(star-200.png)'});
			break;
	}
}

$(function() {

	$("#mitemshapes").bind('vclick',function() {
		loadShapes();
	});
})

/*
$(function() {

	$("#shape1").click(function() {
		$("#shape1").on("webkitAnimationEnd", callme);
		$("#shape1").addClass('shape1Animate');   
			
        var el = $(this),  
        newone = el.clone(true);   
//      el.before(newone);    
		$('#container').append(newone);
//        $("." + el.attr("class") + ":last").remove();
		$(this).remove();
	});
	
	
	$("#shape2").click(function() {
		$("#shape2").on("webkitAnimationEnd", callme);
		$("#shape2").addClass('shape1Animate');   
			
        var el = $(this),  
        newone = el.clone(true);   
//        el.before(newone);    
		$('#container').append(newone);		
//        $("." + el.attr("class") + ":last").remove();
		$(this).remove();
		
	});

	
	$("#shape3").bind('vclick',function() {
		$("#shape3").on("webkitAnimationEnd", callme);
		$("#shape3").addClass('shape1Animate');   
			
        var el = $(this),  
        newone = el.clone(true);   
//        el.before(newone);    
		$('#container').append(newone);
//        $("." + el.attr("class") + ":last").remove();		
		$(this).remove();
	});
	
	$("#mitemshapes").bind('vclick',function() {
		loadShapes();
	});
	
	
	
	
});
*/