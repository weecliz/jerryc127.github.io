$(function(){if($("#sidebar").hasClass("auto_open")?$(".sidebar-toc__content").children().length>0?$(".layout_post").animate({},function(){setTimeout(function(){$("#page-header").addClass("open-sidebar"),$("#toggle-sidebar").addClass("on"),$("body").animate({paddingLeft:300},200),$("#sidebar").animate({},function(){$("#sidebar").css({transform:"translateX(300px)"},200)}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"})})},200)}):$("#toggle-sidebar").css("display","none"):$("#toggle-sidebar").css("opacity","1"),$("#toggle-sidebar").on("click",function(){if(!isMobile()&&$("#sidebar").is(":visible")){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),e?($("#page-header").removeClass("open-sidebar"),$("body").animate({paddingLeft:0},200),$("#sidebar").animate({},function(){$("#sidebar").css({transform:"translateX(0px)"})}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D"})})):($("#page-header").addClass("open-sidebar"),$("body").animate({paddingLeft:300},200),$("#sidebar").animate({},function(){$("#sidebar").css({transform:"translateX(300px)"})}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf"})}))}}),/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)||$(".full_page").css("background-attachment","fixed"),$(".scroll-down").on("click",function(){scrollTo("#content-outer")}),$.fancyConfirm=function(e){e=$.extend(!0,{title:"Are you sure?",message:"",okButton:"OK",noButton:"Cancel",callback:$.noop},e||{}),$.fancybox.open({type:"html",src:'<div class="fc-content"><h3>'+e.title+"</h3><p>"+e.message+'</p><p class="tright"><button data-value="1" data-fancybox-close class="bookmark-ok">'+e.okButton+"</button></p></div>",opts:{animationDuration:350,animationEffect:"material",modal:!0,baseTpl:'<div class="fancybox-container fc-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-stage"></div></div></div>'}})},$("#bookmark-it").click(function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;$.fancyConfirm({title:GLOBAL_CONFIG.bookmark.title+"?",message:GLOBAL_CONFIG.bookmark.message_prev+(-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".",okButton:"OK"})}}),"true"==GLOBAL_CONFIG.highlight_copy){$("figure.highlight").wrap('<div class="code-area-wrap"></div>');var e=$('<i class="fa fa-clipboard" aria-hidden="true"></i>'),o=$('<div class="copy-notice"></div>');$(".code-area-wrap").prepend(e),$(".code-area-wrap").prepend(o),$(".code-area-wrap .fa-clipboard").on("click",function(){var e=window.getSelection(),o=document.createRange();o.selectNodeContents($(this).siblings("figure").find(".code pre")[0]),e.removeAllRanges(),e.addRange(o);e.toString();!function(e,o){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),$(o).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1,right:30},450,function(){setTimeout(function(){$(o).prev(".copy-notice").animate({opacity:0,right:0},650)},400)})}catch(e){return $(o).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1,right:30},650,function(){setTimeout(function(){$(o).prev(".copy-notice").animate({opacity:0,right:0},650)},400)}),!1}else $(o).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(0,this),e.removeAllRanges()})}var t=$(".recent-post-info  img").not(".no-fancybox");0===t.length&&(t=$("#post-content img").not(".no-fancybox"));for(var a=0;a<t.length;a++){var s=$('<a href="'+t.eq(a).attr("data-src")+'" data-fancybox="group" data-caption="'+t[a].alt+'" class="fancybox"></a>'),i=t[a].alt,n=$(t[a]).wrap(s);i&&n.after('<div class="img-alt">'+i+"</div>")}$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]});var c=$(".gallery-item"),r=[];c.each(function(e,o){r.push({src:$(o).data("url"),opts:{caption:$(o).data("title")}})}),c.on("click",function(){return $.fancybox.open(r,{loop:!0,transitionEffect:"slide"},c.index(this)),!1}),lozad().observe(),$(".toggle-menu").on("click",function(){$(".toggle-menu").hasClass("open")?($(".toggle-menu").removeClass("open").addClass("close"),$("#page-header #site-name,#page-header .search").css({color:"#3b3a3a","text-shadow":"none"}),$(".toggle-menu *").css({"background-color":"#3b3a3a","text-shadow":"none"}),$("body").addClass("is_hidden"),$(".menus").addClass("menu_open"),function(){const e=document.querySelector(".menus");(e=>{let o;e.addEventListener("touchstart",function(e){e.targetTouches.length>1||(o=e.targetTouches[0].clientY)},!1),e.addEventListener("touchmove",function(t){if(t.targetTouches.length>1)return;const a=t.targetTouches[0].clientY-o;e.scrollTop<=0&&a>0&&(e.scrollTop=0,t.preventDefault());const s=e.scrollHeight-e.clientHeight;s-e.scrollTop<=0&&a<0&&(e.scrollTop=s,t.preventDefault())},{passive:!1})})(e)}()):($(".toggle-menu").removeClass("close").addClass("open"),$("#page-header #site-name,#page-header .search").css({color:"","text-shadow":""}),$(".toggle-menu *").css({"background-color":"","text-shadow":""}),$("body").removeClass("is_hidden"),$(".menus").removeClass("menu_open").addClass("menu_close"),setTimeout(function(){$(".menus").removeClass("menu_close")},300))}),$(window).on("resize",function(e){$(".toggle-menu").is(":visible")||$(".toggle-menu").hasClass("close")&&($(".toggle-menu").removeClass("close").addClass("open"),$("#page-header #site-name,#page-header .search").css({color:"","text-shadow":""}),$(".toggle-menu *").css({"background-color":"","text-shadow":""}),$("body").removeClass("is_hidden"),$(".menus").removeClass("menu_open"))});var l=0;$(".toc-child").hide(),$(window).scroll(throttle(function(e){var o=$(this).scrollTop();isMobile()||(function(e){var o=$("#content-outer").height(),t=$(window).height(),a=o>t?o-t:$(document).height()-t,s=e/a,i=Math.round(100*s),n=i>100?100:i;$(".progress-num").text(n),$(".sidebar-toc__progress-bar").animate({width:n+"%"},100)}(o),function(e){if(0===$(".toc-link").length)return!1;var o=$("#post-content").find("h1,h2,h3,h4,h5,h6"),t="";o.each(function(){var o=$(this);e>o.offset().top-25&&(t="#"+$(this).attr("id"))}),""===t&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a=$(".toc-link.active");if(t&&a.attr("href")!==t){c=t,window.history.replaceState&&c!==window.location.hash&&window.history.replaceState(void 0,void 0,c),$(".toc-link").removeClass("active");var s=$('.toc-link[href="'+t+'"]');s.addClass("active");var i=s.parents(".toc-child"),n=i.length>0?i.last():s;!function(e){if(e.is(":visible"))return;e.fadeIn(400)}(n.closest(".toc-item").find(".toc-child")),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}var c;if($(".toc-link").hasClass("active")){var r=$(".active").offset().top,l=$("#sidebar").scrollTop();r>e+$(window).height()-50?$("#sidebar").scrollTop(l+100):r<e+50&&$("#sidebar").scrollTop(l-100)}}(o));var t=function(e){var o=e>l;return l=e,o}(o);$(".toggle-menu").hasClass("open")&&(o>56?(t?($("#page-header").hasClass("visible")?$("#page-header").removeClass("visible"):console.log(),$("#post_bottom").removeClass("toc_mobile_show"),$("#toc_mobile").hasClass("is_visible")?$("#toc_mobile").removeClass("is_visible"):console.log()):($("#page-header").hasClass("visible")?console.log():$("#page-header").addClass("visible"),$("#post_bottom").addClass("toc_mobile_show"),$("#toc_mobile").hasClass("is_visible")?$("#toc_mobile").removeClass("is_visible"):console.log()),$("#page-header").addClass("fixed"),"0"===$("#go-up").css("opacity")&&$("#go-up").animate({},function(){$("#go-up").css({opacity:"1",transform:"translateX(-30px) rotateZ(360deg)"})}),"0"===$("#rightside").css("opacity")&&$("#rightside").animate({},function(){$("#rightside").css({opacity:"1",transform:"translateX(-38px)"})})):(0===o&&$("#page-header").removeClass("fixed").removeClass("visible"),$("#go-up").animate({},function(){$("#go-up").css({opacity:"0",transform:"translateX(0) rotateZ(180deg) "})}),$("#rightside").animate({},function(){$("#rightside").css({opacity:"0",transform:"translateX(0)"})}))),$(window).width()<=768&&$("#post_bottom").hasClass("toc_mobile_show")?($("#rightside,#go-up").css("bottom","80px"),$("#rightside,#go-up").css("bottom","70px")):($("#rightside,#go-up").css("bottom","30px"),$("#rightside,#go-up").css("bottom","20px"))},50,100)),$("#go-up").on("click",function(){scrollTo("body")}),$(".toc-link").on("click",function(e){var o;e.preventDefault(),o=$(this).attr("href"),scrollTo(o)}),$("figure").on("dblclick",function(e){e.target===this&&($(this).toggleClass("code_full_page"),$("body").toggleClass("code_body"))}),$("#readmode").click(function(){"night"==Cookies.get("night-mode")?($("body").toggleClass("night-mode"),$("body").toggleClass("read-mode"),$("#font_plus,#font_minus").toggleClass("is_visible")):($("body").toggleClass("read-mode"),$("#font_plus,#font_minus").toggleClass("is_visible"))}),$("#font_plus").click(function(){var e=parseFloat($("body").css("font-size"));$("body").css("font-size",e+1)}),$("#font_minus").click(function(){var e=parseFloat($("body").css("font-size"));$("body").css("font-size",e-1)}),$("#mobile_toc").on("click",function(){$("#toc_mobile").toggleClass("is_visible")}),$("figure").each(function(){var e,o;"js"==(e=o=$(this).attr("class").split(" ")[1])&&(o="javascript"),"md"==e&&(o="markdown"),"plain"==e&&(o="code"),"py"==e&&(o="python"),$("figure."+e+" table").attr("data-content",o)})});