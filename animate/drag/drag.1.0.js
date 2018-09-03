// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// zxx.drag v1.0 2010-03-23 元素的拖拽实现

var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
/**
 * [获取元素指定的css属性值]
 * @param  {[Element]} o   [目标元素]
 * @param  {[String]} key [指定的css属性名]
 * @return {[String]}     [对应的css属性的值]
 */
var getCss = function(o,key){
	return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
};

/**
 * [拖拽的实现]
 * @param  {[Element]}   bar      [触发拖拽的对象]
 * @param  {[Element]}   target   [被拖拽的对象]
 * @param  {Function} callback [拖拽事件处理函数]
 * @return {[void]}
 */
var startDrag = function(bar, target, callback){
	if(getCss(target, "left") !== "auto"){
		params.left = getCss(target, "left");
	}
	if(getCss(target, "top") !== "auto"){
		params.top = getCss(target, "top");
	}
	bar.onmousedown = function(event){
		// 鼠标按下后，flag=true, onmousemove事件中开始实时更新被拖拽对象的坐标
		params.flag = true;
		if(!event){
			event = window.event;
			//防止IE文字选中
			bar.onselectstart = function(){
				return false;
			};
		}
		// 实时跟踪当前鼠标的坐标，将值赋给params对象，以便在onmousemove事件中获取
		params.currentX = event.clientX;
		params.currentY = event.clientY;
	};
	document.onmouseup = function(){
		// 鼠标弹起，停止更新被拖拽对象的坐标，如果不执行此操作，下次拖拽时窗品会先回到params对象设置的初始坐标
		// 设置params对象坐标的目的：记录拖拽的后的新坐标，以防下次拖拽弹回初始位置
		params.flag = false;
		if(getCss(target, "left") !== "auto"){
			params.left = getCss(target, "left");
		}
		if(getCss(target, "top") !== "auto"){
			params.top = getCss(target, "top");
		}
	};
	document.onmousemove = function(event){
		var e = event ? event: window.event;
		if(params.flag){
			// 获取当前鼠标坐标
			var nowX = e.clientX, nowY = e.clientY;
			// 鼠标移动后的坐标-鼠标按下的坐标，即为移动的距离
			var disX = nowX - params.currentX, disY = nowY - params.currentY;
			// 鼠标按下时窗品的坐标+移动的距离,即为窗口拖拽到新坐标
			target.style.left = parseInt(params.left) + disX + "px";
			target.style.top = parseInt(params.top) + disY + "px";
		}

		if (typeof callback == "function") {
			callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
		}
	}
};
