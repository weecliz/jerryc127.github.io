$(function(){$("#sidebar").hasClass("auto_open")?$(".sidebar-toc__content").children().length>0?$(".layout_post").animate({},function(){setTimeout(function(){$("#page-header").addClass("open-sidebar"),$("#toggle-sidebar").addClass("on"),$("body").animate({paddingLeft:300},200),$("#sidebar").animate({},function(){$("#sidebar").css({transform:"translateX(300px)"},200)}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"})})},200)}):$("#toggle-sidebar").css("display","none"):$("#toggle-sidebar").css("opacity","1"),$("#toggle-sidebar").on("click",function(){if(!isMobile()&&$("#sidebar").is(":visible")){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),e?($("#page-header").removeClass("open-sidebar"),$("body").animate({paddingLeft:0},200),$("#sidebar").animate({},function(){$("#sidebar").css({transform:"translateX(0px)"})}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D"})})):($("#page-header").addClass("open-sidebar"),$("body").animate({paddingLeft:300},200),$("#sidebar").animate({},function(){$("#sidebar").css({transform:"translateX(300px)"})}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf"})}))}}),/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)||$(".full_page").css("background-attachment","fixed"),$(".scroll-down").on("click",function(){scrollTo("#content-outer")});var e=document.querySelectorAll(".tag-cloud .tag-cloud-tags a");if($(window).width()>768?Array.prototype.forEach.call(e,(e,t)=>{e.style.fontSize=Math.floor(20*Math.random()+15)+"px",e.style.color="rgb("+Math.floor(201*Math.random())+", "+Math.floor(201*Math.random())+", "+Math.floor(201*Math.random())+")"}):Array.prototype.forEach.call(e,(e,t)=>{e.style.fontSize=Math.floor(13*Math.random()+15)+"px",e.style.color="rgb("+Math.floor(201*Math.random())+", "+Math.floor(201*Math.random())+", "+Math.floor(201*Math.random())+")"}),$.fancyConfirm=function(e){e=$.extend(!0,{title:"Are you sure?",message:"",okButton:"OK",noButton:"Cancel",callback:$.noop},e||{}),$.fancybox.open({type:"html",src:'<div class="fc-content"><h3>'+e.title+"</h3><p>"+e.message+'</p><p class="tright"><button data-value="1" data-fancybox-close class="bookmark-ok">'+e.okButton+"</button></p></div>",opts:{animationDuration:350,animationEffect:"material",modal:!0,baseTpl:'<div class="fancybox-container fc-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-stage"></div></div></div>'}})},$("#bookmark-it").click(function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;$.fancyConfirm({title:GLOBAL_CONFIG.bookmark.title+"?",message:GLOBAL_CONFIG.bookmark.message_prev+(-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".",okButton:"OK"})}}),"true"==GLOBAL_CONFIG.highlight_copy){$("figure.highlight").wrap('<div class="code-area-wrap"></div>');var t=$('<i class="fa fa-clipboard" aria-hidden="true"></i>'),o=$('<div class="copy-notice"></div>');$(".code-area-wrap").prepend(t),$(".code-area-wrap").prepend(o),$(".code-area-wrap .fa-clipboard").on("click",function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents($(this).siblings("figure").find(".code pre")[0]),e.removeAllRanges(),e.addRange(t);e.toString();!function(e,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1,right:30},450,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)})}catch(e){return $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1,right:30},650,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)}),!1}else $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(0,this),e.removeAllRanges()})}var a=$(".recent-post-info  img");0===a.length&&(a=$("#post-content img"));for(var n=0;n<a.length;n++){var s=$('<a href="'+a[n].src+'" data-fancybox="group" data-caption="'+a[n].alt+'" class="fancybox"></a>'),i=a[n].alt,r=$(a[n]).wrap(s);i&&r.after('<div class="img-alt">'+i+"</div>")}$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]});var c=$(".gallery-item"),l=[];c.each(function(e,t){l.push({src:$(t).data("url"),opts:{caption:$(t).data("title")}})}),c.on("click",function(){return $.fancybox.open(l,{loop:!0,transitionEffect:"slide"},c.index(this)),!1});var d=$("#post img");d.addClass("lozad"),d.each(function(){var e=$(this).attr("src");$(this).attr("data-src",e),$(this).removeAttr("src")}),lozad().observe(),$(".toggle-menu").on("click",function(){$(".toggle-menu").hasClass("open")?($(".toggle-menu").removeClass("open").addClass("close"),$("#page-header #site-name,#page-header .search").css({color:"#3b3a3a","text-shadow":"none"}),$(".toggle-menu *").css({"background-color":"#3b3a3a","text-shadow":"none"}),$("body").addClass("is_hidden"),$(".menus").addClass("menu_open")):($(".toggle-menu").removeClass("close").addClass("open"),$("#page-header #site-name,#page-header .search").css({color:"","text-shadow":""}),$(".toggle-menu *").css({"background-color":"","text-shadow":""}),$("body").removeClass("is_hidden"),$(".menus").removeClass("menu_open").addClass("menu_close"),setTimeout(function(){$(".menus").removeClass("menu_close")},300))});(e=>{let t;e.addEventListener("touchstart",function(e){e.targetTouches.length>1||(t=e.targetTouches[0].clientY)},!1),e.addEventListener("touchmove",function(o){if(o.targetTouches.length>1)return;const a=o.targetTouches[0].clientY-t;e.scrollTop<=0&&a>0&&(e.scrollTop=0,o.preventDefault());const n=e.scrollHeight-e.clientHeight;n-e.scrollTop<=0&&a<0&&(e.scrollTop=n,o.preventDefault())},{passive:!1})})(document.querySelector(".menus")),$(window).on("resize",function(e){$(".toggle-menu").is(":visible")||$(".toggle-menu").hasClass("close")&&($(".toggle-menu").removeClass("close").addClass("open"),$("#page-header #site-name,#page-header .search").css({color:"","text-shadow":""}),$(".toggle-menu *").css({"background-color":"","text-shadow":""}),$("body").removeClass("is_hidden"),$(".menus").removeClass("menu_open"))});var g=0;function h(e){scrollTo(e)}$(".toc-child").hide(),$(window).scroll(throttle(function(e){var t=$(this).scrollTop();isMobile()||(function(e){var t=$("#content-outer").height(),o=$(window).height(),a=t>o?t-o:$(document).height()-o,n=e/a,s=Math.round(100*n),i=s>100?100:s;$(".progress-num").text(i),$(".sidebar-toc__progress-bar").animate({width:i+"%"},100)}(t),function(e){if(0===$(".toc-link").length)return!1;var t=$("#post-content").find("h1,h2,h3,h4,h5,h6"),o="";t.each(function(){var t=$(this);e>t.offset().top-25&&(o="#"+$(this).attr("id"))}),""===o&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a=$(".toc-link.active");if(o&&a.attr("href")!==o){r=o,window.history.replaceState&&r!==window.location.hash&&window.history.replaceState(void 0,void 0,r),$(".toc-link").removeClass("active");var n=$('.toc-link[href="'+o+'"]');n.addClass("active");var s=n.parents(".toc-child"),i=s.length>0?s.last():n;!function(e){if(e.is(":visible"))return;e.fadeIn(400)}(i.closest(".toc-item").find(".toc-child")),i.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}var r}(t));var o=function(e){var t=e>g;return g=e,t}(t);$(".toggle-menu").hasClass("open")&&(t>56?(o?$("#page-header").hasClass("visible")?$("#page-header").removeClass("visible"):console.log():$("#page-header").hasClass("visible")?console.log():$("#page-header").addClass("visible"),$("#page-header").addClass("fixed"),"0"===$("#go-up").css("opacity")&&$("#go-up").animate({},function(){$("#go-up").css({opacity:"1",transform:"translateX(-30px) rotateZ(360deg)"})}),"0"===$("#rightside").css("opacity")&&$("#rightside").animate({},function(){$("#rightside").css({opacity:"1",transform:"translateX(-38px)"})})):(0===t&&$("#page-header").removeClass("fixed").removeClass("visible"),$("#go-up").animate({},function(){$("#go-up").css({opacity:"0",transform:"translateX(0) rotateZ(180deg) "})}),$("#rightside").animate({},function(){$("#rightside").css({opacity:"0",transform:"translateX(0)"})})))},50,100)),$("#go-up").on("click",function(){scrollTo("body")}),$("#post-content").find("h1,h2,h3,h4,h5,h6").on("click",function(e){h("#"+$(this).attr("id"))}),$(".toc-link").on("click",function(e){e.preventDefault(),h($(this).attr("href"))}),$("figure").on("dblclick",function(e){e.target===this&&($(this).toggleClass("code_full_page"),$("body").toggleClass("code_body"))}),$("#readmode").click(function(){"night"==Cookies.get("night-mode")?($("body").toggleClass("night-mode"),$("body").toggleClass("read-mode"),$("#font_plus,#font_minus").toggleClass("is_visible")):($("body").toggleClass("read-mode"),$("#font_plus,#font_minus").toggleClass("is_visible"))}),$("#font_plus").click(function(){var e=parseFloat($("body").css("font-size"));$("body").css("font-size",e+1)}),$("#font_minus").click(function(){var e=parseFloat($("body").css("font-size"));$("body").css("font-size",e-1)})});