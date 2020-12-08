$(function(){
	var i=0
	var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	var x=0
	var flag = true;
	setInterval(function(){
		if(flag){
			i++;
			if(i==10){
				flag=false
			}
		}else{
			i--;
			
			if(i==0){
				flag = true
			}
		}
		$('.mod h2').css('marginLeft',arr[i])
		$('.mod h2').css('marginTop',arr[i])
		console.log(i)
	},100);    //定时器

	$('html').click(function(){
		window.location.href='./page.html'
	})
})