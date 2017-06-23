function lip(){

	var ver_num = 2;
	var li_num = $('.lip li').length;
	$('.lip li').each(function(){

		var in_num = $(this).index();
		if((in_num+1)%ver_num ==0){
			$(this).css('margin-right','0px')
		}
	})
}
function market(){
// 商城页
$('i.p-collect').click(function(){
	$(this).toggleClass('on');
})
$('#market_title .market-li').click(function(){
	$(this).siblings('li').removeClass('on');
	$(this).addClass('on');
})
}