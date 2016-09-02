jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeInOutBack',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	}
});


;(function($) { 

    //
/**
* init_moveTo_config: 初始参数配置
* param:
* @obj: 移动的元素 
* @opts: 用户配置参数
*/
     function init_moveTo_config (obj,opts){
     	var srcPosition = {
        	left:$(obj).position().left,
        	top:$(obj).position().top
        }
        opts = {
        	left:opts.left?opts.left:srcPosition.left,
        	top:opts.top?opts.top:srcPosition.top,
        	speed:opts.speed
        }
     }

/**
* init_moveTo_event: 插件业务逻辑
* param:
* @obj: 移动的元素 
* @opts: 用户配置参数
*/
    function init_moveTo_event (obj,opts) {
        $(obj).animate(
        {
        	left:opts.left+"px",
        	top:opts.top+"px",
        	opacity:'1'
        },opts.speed,"easeInOutBack",function() {
        	
        });
    }

    $.fn.moveTo = function (options) {
    	var opts = $.extend({},$.fn.moveTo.defaults,options);
    	
    	return this.each(function() {
            var obj = $(this);
            //初始化配置
            init_moveTo_config (obj,opts);
            //初始化移动动作
            init_moveTo_event (obj,opts);
            
                 
        });
    };
    //定义默认
    $.fn.moveTo.defaults = {
    	speed:"slow"
    };
})(jQuery);
