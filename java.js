$(document).ready(function() {
	function anime() {
		var $d = $('.n');
		$d.animate({
			'width': 200},
			500,anime1());
	}
	function anime1() {
		var $d = $('.n');
		$d.animate({
			'width': 0},
			500,anime());
	}
	$('.m').click(function() {
		// $('.n').toggleClass('show');
		// var $d = $('.n');
		// $d.animate({
		// 	'width': 200,
		// 	'opacity':1},
		// 	500,function(){
		// 	$d.animate({
		// 	'width': 0,
		// 	'opacity':0.2},500)
		// 	});
		var $d = $('.n');
		if ($d.is(':visible')) {
			$d.hide('500', function() {
				
			});
			// $d.fadeOut(500, function() {
				
			// });
		}else{
			// $d.show('500', function() {
				
			// });
			$d.fadeIn(500, function() {
				
			});
		}
	});


	$('.ul').on('click','.s',function() {
		$(this).parent().remove();
	});
	$('.add').hover(function() {
		var z ='<li>Zero<span class="s">x</span><li>';
		$('.ul').append(z);
	});
	$('.rem').click(function() {
		if (!confirm("Bạn có chắc muốn xóa không")) {
			return false;
		}
		$('.ul').html('');
	});
})