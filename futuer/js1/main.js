$(function(){

	var photo = $('#photo'); //画像のセレクタ指定

	//フェードイン
	function open(){
		photo.fadeIn(3000, 'easeInQuad', function(){ setTimeout(close, 3000); });
	};

	//フェードアウ
	function close(){
		photo.fadeOut(1500, 'easeOutQuad', function(){ setTimeout(open, 1500); });
	};

   
	open();


});