$(function(){
	
	var val=0,pri=0;
	$('.mui-input-numbox').each(function(k,v){
		val=val+parseInt($(this).val());
		$('.num').html(val);
	})
	$('.price').each(function(k,v){
		pri+=(+$(this).html());
		$('.priBox').html(pri);
	})
	$(".mui-btn-numbox-minus").bind('tap',function(){
		val--;
		$('.num').html(val);
	})
	$('.mui-btn-numbox-plus').bind('tap',function(){
		val++;
		$('.num').html(val);
	})
	$('.del').bind('tap',function(){
		$(".mui-content ul li").remove();
		$('.mui-content').html('空空如也~~~~~');
	})
})