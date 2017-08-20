sliderImgFn = function() {//轮播图模块初始化
		/*启动自动轮播*/
	var autoChangeImg = setInterval(function(){
		for(var i=0;i<oLi.length;i++){
			if(oLi[i].className=='selected'){
				for(var j=0; j<oLi.length; j++){
					oLi[j].className='';
					sliderImgs[j].style.display='none';
				}
				if(i==oLi.length-1) {
					sliderImgs[0].style.display='block';
					oLi[0].className='selected';
				}
				else{
					i++
					sliderImgs[i].style.display='block';
					oLi[i].className='selected';
				}
				return;
			}
		}
		
	},2000)
	var oLi = document.getElementsByClassName('slider-nav')[0].getElementsByTagName('li');
	var sliderImgs = document.getElementsByClassName('slider-img');
	/*绑定圈圈点击事件*/
	for(var i=0; i<oLi.length; i++) {
		(function(){
			var p=i;
			oLi[i].onclick=function() {		
			clearInterval(autoChangeImg);
			for(var j=0; j<oLi.length; j++){
					oLi[j].className='';
					sliderImgs[j].style.display='none';
				}
				sliderImgs[p].style.display='block';
				this.className='selected';
				autoChangeImg = setInterval(function(){
					for(var i=0;i<oLi.length;i++){
					if(oLi[i].className=='selected'){
						for(var j=0; j<oLi.length; j++){
							oLi[j].className='';
							sliderImgs[j].style.display='none';
						}
						if(i==oLi.length-1) {
							sliderImgs[0].style.display='block';
							oLi[0].className='selected';
						}
						else{
							i++
							sliderImgs[i].style.display='block';
							oLi[i].className='selected';
						}
						return;
					}
				}
				},2000)
				}
			})();	
		}
}

window.onload=function(){
	sliderImgFn();//初始化轮播图
	var rightBoxs = document.getElementsByClassName('right-box');
	var temp = 0;
	$('.left-top').$('li').click(function() {
		$('.right-box').display('none');
		$(rightBoxs[temp]).display('block');
	}) 
}