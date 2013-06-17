// Avoid `console` errors in browsers that lack a console.
(function(){var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};while(r--){e=n[r];i[e]||(i[e]=t)}})();(function(e,t){"use strict";function n(t){e.fn.cycle.debug&&r(t)}function r(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function i(t,n,r){var i=e(t).data("cycle.opts");if(!i)return;var s=!!t.cyclePause;s&&i.paused?i.paused(t,i,n,r):!s&&i.resumed&&i.resumed(t,i,n,r)}function s(n,s,o){function a(t,n,i){if(!t&&n===!0){var s=e(i).data("cycle.opts");if(!s){r("options not found, can not resume");return!1}if(i.cycleTimeout){clearTimeout(i.cycleTimeout);i.cycleTimeout=0}h(s.elements,s,1,!s.backwards)}}n.cycleStop===t&&(n.cycleStop=0);if(s===t||s===null)s={};if(s.constructor==String){switch(s){case"destroy":case"stop":var f=e(n).data("cycle.opts");if(!f)return!1;n.cycleStop++;n.cycleTimeout&&clearTimeout(n.cycleTimeout);n.cycleTimeout=0;f.elements&&e(f.elements).stop();e(n).removeData("cycle.opts");s=="destroy"&&u(n,f);return!1;case"toggle":n.cyclePause=n.cyclePause===1?0:1;a(n.cyclePause,o,n);i(n);return!1;case"pause":n.cyclePause=1;i(n);return!1;case"resume":n.cyclePause=0;a(!1,o,n);i(n);return!1;case"prev":case"next":f=e(n).data("cycle.opts");if(!f){r('options not found, "prev/next" ignored');return!1}typeof o=="string"&&(f.oneTimeFx=o);e.fn.cycle[s](f);return!1;default:s={fx:s}}return s}if(s.constructor==Number){var l=s;s=e(n).data("cycle.opts");if(!s){r("options not found, can not advance slide");return!1}if(l<0||l>=s.elements.length){r("invalid slide index: "+l);return!1}s.nextSlide=l;if(n.cycleTimeout){clearTimeout(n.cycleTimeout);n.cycleTimeout=0}typeof o=="string"&&(s.oneTimeFx=o);h(s.elements,s,1,l>=s.currSlide);return!1}return s}function o(t,n){if(!e.support.opacity&&n.cleartype&&t.style.filter)try{t.style.removeAttribute("filter")}catch(r){}}function u(t,n){n.next&&e(n.next).unbind(n.prevNextEvent);n.prev&&e(n.prev).unbind(n.prevNextEvent);(n.pager||n.pagerAnchorBuilder)&&e.each(n.pagerAnchors||[],function(){this.unbind().remove()});n.pagerAnchors=null;e(t).unbind("mouseenter.cycle mouseleave.cycle");n.destroy&&n.destroy(n)}function a(n,s,u,a,p){var g,y=e.extend({},e.fn.cycle.defaults,a||{},e.metadata?n.metadata():e.meta?n.data():{}),b=e.isFunction(n.data)?n.data(y.metaAttr):null;b&&(y=e.extend(y,b));y.autostop&&(y.countdown=y.autostopCount||u.length);var w=n[0];n.data("cycle.opts",y);y.$cont=n;y.stopCount=w.cycleStop;y.elements=u;y.before=y.before?[y.before]:[];y.after=y.after?[y.after]:[];!e.support.opacity&&y.cleartype&&y.after.push(function(){o(this,y)});y.continuous&&y.after.push(function(){h(u,y,0,!y.backwards)});f(y);!e.support.opacity&&y.cleartype&&!y.cleartypeNoBg&&m(s);n.css("position")=="static"&&n.css("position","relative");y.width&&n.width(y.width);y.height&&y.height!="auto"&&n.height(y.height);if(y.startingSlide!==t){y.startingSlide=parseInt(y.startingSlide,10);y.startingSlide>=u.length||y.startSlide<0?y.startingSlide=0:g=!0}else y.backwards?y.startingSlide=u.length-1:y.startingSlide=0;if(y.random){y.randomMap=[];for(var E=0;E<u.length;E++)y.randomMap.push(E);y.randomMap.sort(function(e,t){return Math.random()-.5});if(g)for(var S=0;S<u.length;S++)y.startingSlide==y.randomMap[S]&&(y.randomIndex=S);else{y.randomIndex=1;y.startingSlide=y.randomMap[1]}}else y.startingSlide>=u.length&&(y.startingSlide=0);y.currSlide=y.startingSlide||0;var x=y.startingSlide;s.css({position:"absolute",top:0,left:0}).hide().each(function(t){var n;y.backwards?n=x?t<=x?u.length+(t-x):x-t:u.length-t:n=x?t>=x?u.length-(t-x):x-t:u.length-t;e(this).css("z-index",n)});e(u[x]).css("opacity",1).show();o(u[x],y);if(y.fit)if(!y.aspect){y.width&&s.width(y.width);y.height&&y.height!="auto"&&s.height(y.height)}else s.each(function(){var t=e(this),n=y.aspect===!0?t.width()/t.height():y.aspect;if(y.width&&t.width()!=y.width){t.width(y.width);t.height(y.width/n)}if(y.height&&t.height()<y.height){t.height(y.height);t.width(y.height*n)}});y.center&&(!y.fit||y.aspect)&&s.each(function(){var t=e(this);t.css({"margin-left":y.width?(y.width-t.width())/2+"px":0,"margin-top":y.height?(y.height-t.height())/2+"px":0})});y.center&&!y.fit&&!y.slideResize&&s.each(function(){var t=e(this);t.css({"margin-left":y.width?(y.width-t.width())/2+"px":0,"margin-top":y.height?(y.height-t.height())/2+"px":0})});var T=(y.containerResize||y.containerResizeHeight)&&n.innerHeight()<1;if(T){var N=0,C=0;for(var k=0;k<u.length;k++){var L=e(u[k]),A=L[0],O=L.outerWidth(),M=L.outerHeight();O||(O=A.offsetWidth||A.width||L.attr("width"));M||(M=A.offsetHeight||A.height||L.attr("height"));N=O>N?O:N;C=M>C?M:C}y.containerResize&&N>0&&C>0&&n.css({width:N+"px",height:C+"px"});y.containerResizeHeight&&C>0&&n.css({height:C+"px"})}var _=!1;y.pause&&n.bind("mouseenter.cycle",function(){_=!0;this.cyclePause++;i(w,!0)}).bind("mouseleave.cycle",function(){_&&this.cyclePause--;i(w,!0)});if(l(y)===!1)return!1;var D=!1;a.requeueAttempts=a.requeueAttempts||0;s.each(function(){var t=e(this);this.cycleH=y.fit&&y.height?y.height:t.height()||this.offsetHeight||this.height||t.attr("height")||0;this.cycleW=y.fit&&y.width?y.width:t.width()||this.offsetWidth||this.width||t.attr("width")||0;if(t.is("img")){var n=this.cycleH===0&&this.cycleW===0&&!this.complete;if(n){if(p.s&&y.requeueOnImageNotLoaded&&++a.requeueAttempts<100){r(a.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){e(p.s,p.c).cycle(a)},y.requeueTimeout);D=!0;return!1}r("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0});if(D)return!1;y.cssBefore=y.cssBefore||{};y.cssAfter=y.cssAfter||{};y.cssFirst=y.cssFirst||{};y.animIn=y.animIn||{};y.animOut=y.animOut||{};s.not(":eq("+x+")").css(y.cssBefore);e(s[x]).css(y.cssFirst);if(y.timeout){y.timeout=parseInt(y.timeout,10);y.speed.constructor==String&&(y.speed=e.fx.speeds[y.speed]||parseInt(y.speed,10));y.sync||(y.speed=y.speed/2);var P=y.fx=="none"?0:y.fx=="shuffle"?500:250;while(y.timeout-y.speed<P)y.timeout+=y.speed}y.easing&&(y.easeIn=y.easeOut=y.easing);y.speedIn||(y.speedIn=y.speed);y.speedOut||(y.speedOut=y.speed);y.slideCount=u.length;y.currSlide=y.lastSlide=x;if(y.random){++y.randomIndex==u.length&&(y.randomIndex=0);y.nextSlide=y.randomMap[y.randomIndex]}else y.backwards?y.nextSlide=y.startingSlide===0?u.length-1:y.startingSlide-1:y.nextSlide=y.startingSlide>=u.length-1?0:y.startingSlide+1;if(!y.multiFx){var H=e.fn.cycle.transitions[y.fx];if(e.isFunction(H))H(n,s,y);else if(y.fx!="custom"&&!y.multiFx){r("unknown transition: "+y.fx,"; slideshow terminating");return!1}}var B=s[x];if(!y.skipInitializationCallbacks){y.before.length&&y.before[0].apply(B,[B,B,y,!0]);y.after.length&&y.after[0].apply(B,[B,B,y,!0])}y.next&&e(y.next).bind(y.prevNextEvent,function(){return d(y,1)});y.prev&&e(y.prev).bind(y.prevNextEvent,function(){return d(y,0)});(y.pager||y.pagerAnchorBuilder)&&v(u,y);c(y,u);return y}function f(t){t.original={before:[],after:[]};t.original.cssBefore=e.extend({},t.cssBefore);t.original.cssAfter=e.extend({},t.cssAfter);t.original.animIn=e.extend({},t.animIn);t.original.animOut=e.extend({},t.animOut);e.each(t.before,function(){t.original.before.push(this)});e.each(t.after,function(){t.original.after.push(this)})}function l(t){var i,s,o=e.fn.cycle.transitions;if(t.fx.indexOf(",")>0){t.multiFx=!0;t.fxs=t.fx.replace(/\s*/g,"").split(",");for(i=0;i<t.fxs.length;i++){var u=t.fxs[i];s=o[u];if(!s||!o.hasOwnProperty(u)||!e.isFunction(s)){r("discarding unknown transition: ",u);t.fxs.splice(i,1);i--}}if(!t.fxs.length){r("No valid transitions named; slideshow terminating.");return!1}}else if(t.fx=="all"){t.multiFx=!0;t.fxs=[];for(var a in o)if(o.hasOwnProperty(a)){s=o[a];o.hasOwnProperty(a)&&e.isFunction(s)&&t.fxs.push(a)}}if(t.multiFx&&t.randomizeEffects){var f=Math.floor(Math.random()*20)+30;for(i=0;i<f;i++){var l=Math.floor(Math.random()*t.fxs.length);t.fxs.push(t.fxs.splice(l,1)[0])}n("randomized fx sequence: ",t.fxs)}return!0}function c(t,n){t.addSlide=function(r,i){var s=e(r),o=s[0];t.autostopCount||t.countdown++;n[i?"unshift":"push"](o);t.els&&t.els[i?"unshift":"push"](o);t.slideCount=n.length;if(t.random){t.randomMap.push(t.slideCount-1);t.randomMap.sort(function(e,t){return Math.random()-.5})}s.css("position","absolute");s[i?"prependTo":"appendTo"](t.$cont);if(i){t.currSlide++;t.nextSlide++}!e.support.opacity&&t.cleartype&&!t.cleartypeNoBg&&m(s);t.fit&&t.width&&s.width(t.width);t.fit&&t.height&&t.height!="auto"&&s.height(t.height);o.cycleH=t.fit&&t.height?t.height:s.height();o.cycleW=t.fit&&t.width?t.width:s.width();s.css(t.cssBefore);(t.pager||t.pagerAnchorBuilder)&&e.fn.cycle.createPagerAnchor(n.length-1,o,e(t.pager),n,t);e.isFunction(t.onAddSlide)?t.onAddSlide(s):s.hide()}}function h(r,i,s,o){function u(){var e=0,t=i.timeout;if(i.timeout&&!i.continuous){e=p(r[i.currSlide],r[i.nextSlide],i,o);i.fx=="shuffle"&&(e-=i.speedOut)}else i.continuous&&a.cyclePause&&(e=10);e>0&&(a.cycleTimeout=setTimeout(function(){h(r,i,0,!i.backwards)},e))}var a=i.$cont[0],f=r[i.currSlide],l=r[i.nextSlide];if(s&&i.busy&&i.manualTrump){n("manualTrump in go(), stopping active transition");e(r).stop(!0,!0);i.busy=0;clearTimeout(a.cycleTimeout)}if(i.busy){n("transition active, ignoring new tx request");return}if(a.cycleStop!=i.stopCount||a.cycleTimeout===0&&!s)return;if(!s&&!a.cyclePause&&!i.bounce&&(i.autostop&&--i.countdown<=0||i.nowrap&&!i.random&&i.nextSlide<i.currSlide)){i.end&&i.end(i);return}var c=!1;if((s||!a.cyclePause)&&i.nextSlide!=i.currSlide){c=!0;var d=i.fx;f.cycleH=f.cycleH||e(f).height();f.cycleW=f.cycleW||e(f).width();l.cycleH=l.cycleH||e(l).height();l.cycleW=l.cycleW||e(l).width();if(i.multiFx){o&&(i.lastFx===t||++i.lastFx>=i.fxs.length)?i.lastFx=0:!o&&(i.lastFx===t||--i.lastFx<0)&&(i.lastFx=i.fxs.length-1);d=i.fxs[i.lastFx]}if(i.oneTimeFx){d=i.oneTimeFx;i.oneTimeFx=null}e.fn.cycle.resetState(i,d);i.before.length&&e.each(i.before,function(e,t){if(a.cycleStop!=i.stopCount)return;t.apply(l,[f,l,i,o])});var v=function(){i.busy=0;e.each(i.after,function(e,t){if(a.cycleStop!=i.stopCount)return;t.apply(l,[f,l,i,o])});a.cycleStop||u()};n("tx firing("+d+"); currSlide: "+i.currSlide+"; nextSlide: "+i.nextSlide);i.busy=1;i.fxFn?i.fxFn(f,l,i,v,o,s&&i.fastOnEvent):e.isFunction(e.fn.cycle[i.fx])?e.fn.cycle[i.fx](f,l,i,v,o,s&&i.fastOnEvent):e.fn.cycle.custom(f,l,i,v,o,s&&i.fastOnEvent)}else u();if(c||i.nextSlide==i.currSlide){var m;i.lastSlide=i.currSlide;if(i.random){i.currSlide=i.nextSlide;if(++i.randomIndex==r.length){i.randomIndex=0;i.randomMap.sort(function(e,t){return Math.random()-.5})}i.nextSlide=i.randomMap[i.randomIndex];i.nextSlide==i.currSlide&&(i.nextSlide=i.currSlide==i.slideCount-1?0:i.currSlide+1)}else if(i.backwards){m=i.nextSlide-1<0;if(m&&i.bounce){i.backwards=!i.backwards;i.nextSlide=1;i.currSlide=0}else{i.nextSlide=m?r.length-1:i.nextSlide-1;i.currSlide=m?0:i.nextSlide+1}}else{m=i.nextSlide+1==r.length;if(m&&i.bounce){i.backwards=!i.backwards;i.nextSlide=r.length-2;i.currSlide=r.length-1}else{i.nextSlide=m?0:i.nextSlide+1;i.currSlide=m?r.length-1:i.nextSlide-1}}}c&&i.pager&&i.updateActivePagerLink(i.pager,i.currSlide,i.activePagerClass)}function p(e,t,r,i){if(r.timeoutFn){var s=r.timeoutFn.call(e,e,t,r,i);while(r.fx!="none"&&s-r.speed<250)s+=r.speed;n("calculated timeout: "+s+"; speed: "+r.speed);if(s!==!1)return s}return r.timeout}function d(t,n){var r=n?1:-1,i=t.elements,s=t.$cont[0],o=s.cycleTimeout;if(o){clearTimeout(o);s.cycleTimeout=0}if(t.random&&r<0){t.randomIndex--;--t.randomIndex==-2?t.randomIndex=i.length-2:t.randomIndex==-1&&(t.randomIndex=i.length-1);t.nextSlide=t.randomMap[t.randomIndex]}else if(t.random)t.nextSlide=t.randomMap[t.randomIndex];else{t.nextSlide=t.currSlide+r;if(t.nextSlide<0){if(t.nowrap)return!1;t.nextSlide=i.length-1}else if(t.nextSlide>=i.length){if(t.nowrap)return!1;t.nextSlide=0}}var u=t.onPrevNextEvent||t.prevNextClick;e.isFunction(u)&&u(r>0,t.nextSlide,i[t.nextSlide]);h(i,t,1,n);return!1}function v(t,n){var r=e(n.pager);e.each(t,function(i,s){e.fn.cycle.createPagerAnchor(i,s,r,t,n)});n.updateActivePagerLink(n.pager,n.startingSlide,n.activePagerClass)}function m(t){function r(e){e=parseInt(e,10).toString(16);return e.length<2?"0"+e:e}function i(t){for(;t&&t.nodeName.toLowerCase()!="html";t=t.parentNode){var n=e.css(t,"background-color");if(n&&n.indexOf("rgb")>=0){var i=n.match(/\d+/g);return"#"+r(i[0])+r(i[1])+r(i[2])}if(n&&n!="transparent")return n}return"#ffffff"}n("applying clearType background-color hack");t.each(function(){e(this).css("background-color",i(this))})}var g="3.0.2";e.expr[":"].paused=function(e){return e.cyclePause};e.fn.cycle=function(t,i){var o={s:this.selector,c:this.context};if(this.length===0&&t!="stop"){if(!e.isReady&&o.s){r("DOM not ready, queuing slideshow");e(function(){e(o.s,o.c).cycle(t,i)});return this}r("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var u=s(this,t,i);if(u===!1)return;u.updateActivePagerLink=u.updateActivePagerLink||e.fn.cycle.updateActivePagerLink;this.cycleTimeout&&clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;this.cycleStop=0;var f=e(this),l=u.slideExpr?e(u.slideExpr,this):f.children(),c=l.get();if(c.length<2){r("terminating; too few slides: "+c.length);return}var d=a(f,l,c,u,o);if(d===!1)return;var v=d.continuous?10:p(c[d.currSlide],c[d.nextSlide],d,!d.backwards);if(v){v+=d.delay||0;v<10&&(v=10);n("first timeout: "+v);this.cycleTimeout=setTimeout(function(){h(c,d,0,!u.backwards)},v)}})};e.fn.cycle.resetState=function(t,n){n=n||t.fx;t.before=[];t.after=[];t.cssBefore=e.extend({},t.original.cssBefore);t.cssAfter=e.extend({},t.original.cssAfter);t.animIn=e.extend({},t.original.animIn);t.animOut=e.extend({},t.original.animOut);t.fxFn=null;e.each(t.original.before,function(){t.before.push(this)});e.each(t.original.after,function(){t.after.push(this)});var r=e.fn.cycle.transitions[n];e.isFunction(r)&&r(t.$cont,e(t.elements),t)};e.fn.cycle.updateActivePagerLink=function(t,n,r){e(t).each(function(){e(this).children().removeClass(r).eq(n).addClass(r)})};e.fn.cycle.next=function(e){d(e,1)};e.fn.cycle.prev=function(e){d(e,0)};e.fn.cycle.createPagerAnchor=function(t,r,s,o,u){var a;if(e.isFunction(u.pagerAnchorBuilder)){a=u.pagerAnchorBuilder(t,r);n("pagerAnchorBuilder("+t+", el) returned: "+a)}else a='<a href="#">'+(t+1)+"</a>";if(!a)return;var f=e(a);if(f.parents("body").length===0){var l=[];if(s.length>1){s.each(function(){var t=f.clone(!0);e(this).append(t);l.push(t[0])});f=e(l)}else f.appendTo(s)}u.pagerAnchors=u.pagerAnchors||[];u.pagerAnchors.push(f);var c=function(n){n.preventDefault();u.nextSlide=t;var r=u.$cont[0],i=r.cycleTimeout;if(i){clearTimeout(i);r.cycleTimeout=0}var s=u.onPagerEvent||u.pagerClick;e.isFunction(s)&&s(u.nextSlide,o[u.nextSlide]);h(o,u,1,u.currSlide<t)};/mouseenter|mouseover/i.test(u.pagerEvent)?f.hover(c,function(){}):f.bind(u.pagerEvent,c);!/^click/.test(u.pagerEvent)&&!u.allowPagerClickBubble&&f.bind("click.cycle",function(){return!1});var p=u.$cont[0],d=!1;u.pauseOnPagerHover&&f.hover(function(){d=!0;p.cyclePause++;i(p,!0,!0)},function(){d&&p.cyclePause--;i(p,!0,!0)})};e.fn.cycle.hopsFromLast=function(e,t){var n,r=e.lastSlide,i=e.currSlide;t?n=i>r?i-r:e.slideCount-r:n=i<r?r-i:r+e.slideCount-i;return n};e.fn.cycle.commonReset=function(t,n,r,i,s,o){e(r.elements).not(t).hide();typeof r.cssBefore.opacity=="undefined"&&(r.cssBefore.opacity=1);r.cssBefore.display="block";r.slideResize&&i!==!1&&n.cycleW>0&&(r.cssBefore.width=n.cycleW);r.slideResize&&s!==!1&&n.cycleH>0&&(r.cssBefore.height=n.cycleH);r.cssAfter=r.cssAfter||{};r.cssAfter.display="none";e(t).css("zIndex",r.slideCount+(o===!0?1:0));e(n).css("zIndex",r.slideCount+(o===!0?0:1))};e.fn.cycle.custom=function(t,n,r,i,s,o){var u=e(t),a=e(n),f=r.speedIn,l=r.speedOut,c=r.easeIn,h=r.easeOut;a.css(r.cssBefore);if(o){typeof o=="number"?f=l=o:f=l=1;c=h=null}var p=function(){a.animate(r.animIn,f,c,function(){i()})};u.animate(r.animOut,l,h,function(){u.css(r.cssAfter);r.sync||p()});r.sync&&p()};e.fn.cycle.transitions={fade:function(t,n,r){n.not(":eq("+r.currSlide+")").css("opacity",0);r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.cssBefore.opacity=0});r.animIn={opacity:1};r.animOut={opacity:0};r.cssBefore={top:0,left:0}}};e.fn.cycle.ver=function(){return g};e.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animOut:null,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!e.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:t,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);(function(e){"use strict";e.fn.cycle.transitions.none=function(t,n,r){r.fxFn=function(t,n,r,i){e(n).show();e(t).hide();i()}};e.fn.cycle.transitions.fadeout=function(t,n,r){n.not(":eq("+r.currSlide+")").css({display:"block",opacity:1});r.before.push(function(t,n,r,i,s,o){e(t).css("zIndex",r.slideCount+(o!==!0?1:0));e(n).css("zIndex",r.slideCount+(o!==!0?0:1))});r.animIn.opacity=1;r.animOut.opacity=0;r.cssBefore.opacity=1;r.cssBefore.display="block";r.cssAfter.zIndex=0};e.fn.cycle.transitions.scrollUp=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.height();r.cssBefore.top=i;r.cssBefore.left=0;r.cssFirst.top=0;r.animIn.top=0;r.animOut.top=-i};e.fn.cycle.transitions.scrollDown=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.height();r.cssFirst.top=0;r.cssBefore.top=-i;r.cssBefore.left=0;r.animIn.top=0;r.animOut.top=i};e.fn.cycle.transitions.scrollLeft=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.width();r.cssFirst.left=0;r.cssBefore.left=i;r.cssBefore.top=0;r.animIn.left=0;r.animOut.left=0-i};e.fn.cycle.transitions.scrollRight=function(t,n,r){t.css("overflow","hidden");r.before.push(e.fn.cycle.commonReset);var i=t.width();r.cssFirst.left=0;r.cssBefore.left=-i;r.cssBefore.top=0;r.animIn.left=0;r.animOut.left=i};e.fn.cycle.transitions.scrollHorz=function(t,n,r){t.css("overflow","hidden").width();r.before.push(function(t,n,r,i){r.rev&&(i=!i);e.fn.cycle.commonReset(t,n,r);r.cssBefore.left=i?n.cycleW-1:1-n.cycleW;r.animOut.left=i?-t.cycleW:t.cycleW});r.cssFirst.left=0;r.cssBefore.top=0;r.animIn.left=0;r.animOut.top=0};e.fn.cycle.transitions.scrollVert=function(t,n,r){t.css("overflow","hidden");r.before.push(function(t,n,r,i){r.rev&&(i=!i);e.fn.cycle.commonReset(t,n,r);r.cssBefore.top=i?1-n.cycleH:n.cycleH-1;r.animOut.top=i?t.cycleH:-t.cycleH});r.cssFirst.top=0;r.cssBefore.left=0;r.animIn.top=0;r.animOut.left=0};e.fn.cycle.transitions.slideX=function(t,n,r){r.before.push(function(t,n,r){e(r.elements).not(t).hide();e.fn.cycle.commonReset(t,n,r,!1,!0);r.animIn.width=n.cycleW});r.cssBefore.left=0;r.cssBefore.top=0;r.cssBefore.width=0;r.animIn.width="show";r.animOut.width=0};e.fn.cycle.transitions.slideY=function(t,n,r){r.before.push(function(t,n,r){e(r.elements).not(t).hide();e.fn.cycle.commonReset(t,n,r,!0,!1);r.animIn.height=n.cycleH});r.cssBefore.left=0;r.cssBefore.top=0;r.cssBefore.height=0;r.animIn.height="show";r.animOut.height=0};e.fn.cycle.transitions.shuffle=function(t,n,r){var i,s=t.css("overflow","visible").width();n.css({left:0,top:0});r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!0,!0)});if(!r.speedAdjusted){r.speed=r.speed/2;r.speedAdjusted=!0}r.random=0;r.shuffle=r.shuffle||{left:-s,top:15};r.els=[];for(i=0;i<n.length;i++)r.els.push(n[i]);for(i=0;i<r.currSlide;i++)r.els.push(r.els.shift());r.fxFn=function(t,n,r,i,s){r.rev&&(s=!s);var o=s?e(t):e(n);e(n).css(r.cssBefore);var u=r.slideCount;o.animate(r.shuffle,r.speedIn,r.easeIn,function(){var n=e.fn.cycle.hopsFromLast(r,s);for(var a=0;a<n;a++)s?r.els.push(r.els.shift()):r.els.unshift(r.els.pop());if(s)for(var f=0,l=r.els.length;f<l;f++)e(r.els[f]).css("z-index",l-f+u);else{var c=e(t).css("z-index");o.css("z-index",parseInt(c,10)+1+u)}o.animate({left:0,top:0},r.speedOut,r.easeOut,function(){e(s?this:t).hide();i&&i()})})};e.extend(r.cssBefore,{display:"block",opacity:1,top:0,left:0})};e.fn.cycle.transitions.turnUp=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!1);r.cssBefore.top=n.cycleH;r.animIn.height=n.cycleH;r.animOut.width=n.cycleW});r.cssFirst.top=0;r.cssBefore.left=0;r.cssBefore.height=0;r.animIn.top=0;r.animOut.height=0};e.fn.cycle.transitions.turnDown=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!1);r.animIn.height=n.cycleH;r.animOut.top=t.cycleH});r.cssFirst.top=0;r.cssBefore.left=0;r.cssBefore.top=0;r.cssBefore.height=0;r.animOut.height=0};e.fn.cycle.transitions.turnLeft=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!1,!0);r.cssBefore.left=n.cycleW;r.animIn.width=n.cycleW});r.cssBefore.top=0;r.cssBefore.width=0;r.animIn.left=0;r.animOut.width=0};e.fn.cycle.transitions.turnRight=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!1,!0);r.animIn.width=n.cycleW;r.animOut.left=t.cycleW});e.extend(r.cssBefore,{top:0,left:0,width:0});r.animIn.left=0;r.animOut.width=0};e.fn.cycle.transitions.zoom=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!1,!1,!0);r.cssBefore.top=n.cycleH/2;r.cssBefore.left=n.cycleW/2;e.extend(r.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH});e.extend(r.animOut,{width:0,height:0,top:t.cycleH/2,left:t.cycleW/2})});r.cssFirst.top=0;r.cssFirst.left=0;r.cssBefore.width=0;r.cssBefore.height=0};e.fn.cycle.transitions.fadeZoom=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!1,!1);r.cssBefore.left=n.cycleW/2;r.cssBefore.top=n.cycleH/2;e.extend(r.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH})});r.cssBefore.width=0;r.cssBefore.height=0;r.animOut.opacity=0};e.fn.cycle.transitions.blindX=function(t,n,r){var i=t.css("overflow","hidden").width();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.animIn.width=n.cycleW;r.animOut.left=t.cycleW});r.cssBefore.left=i;r.cssBefore.top=0;r.animIn.left=0;r.animOut.left=i};e.fn.cycle.transitions.blindY=function(t,n,r){var i=t.css("overflow","hidden").height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.animIn.height=n.cycleH;r.animOut.top=t.cycleH});r.cssBefore.top=i;r.cssBefore.left=0;r.animIn.top=0;r.animOut.top=i};e.fn.cycle.transitions.blindZ=function(t,n,r){var i=t.css("overflow","hidden").height(),s=t.width();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.animIn.height=n.cycleH;r.animOut.top=t.cycleH});r.cssBefore.top=i;r.cssBefore.left=s;r.animIn.top=0;r.animIn.left=0;r.animOut.top=i;r.animOut.left=s};e.fn.cycle.transitions.growX=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!1,!0);r.cssBefore.left=this.cycleW/2;r.animIn.left=0;r.animIn.width=this.cycleW;r.animOut.left=0});r.cssBefore.top=0;r.cssBefore.width=0};e.fn.cycle.transitions.growY=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!1);r.cssBefore.top=this.cycleH/2;r.animIn.top=0;r.animIn.height=this.cycleH;r.animOut.top=0});r.cssBefore.height=0;r.cssBefore.left=0};e.fn.cycle.transitions.curtainX=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!1,!0,!0);r.cssBefore.left=n.cycleW/2;r.animIn.left=0;r.animIn.width=this.cycleW;r.animOut.left=t.cycleW/2;r.animOut.width=0});r.cssBefore.top=0;r.cssBefore.width=0};e.fn.cycle.transitions.curtainY=function(t,n,r){r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!1,!0);r.cssBefore.top=n.cycleH/2;r.animIn.top=0;r.animIn.height=n.cycleH;r.animOut.top=t.cycleH/2;r.animOut.height=0});r.cssBefore.height=0;r.cssBefore.left=0};e.fn.cycle.transitions.cover=function(t,n,r){var i=r.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r);r.cssAfter.display="";i=="right"?r.cssBefore.left=-s:i=="up"?r.cssBefore.top=o:i=="down"?r.cssBefore.top=-o:r.cssBefore.left=s});r.animIn.left=0;r.animIn.top=0;r.cssBefore.top=0;r.cssBefore.left=0};e.fn.cycle.transitions.uncover=function(t,n,r){var i=r.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!0,!0);i=="right"?r.animOut.left=s:i=="up"?r.animOut.top=-o:i=="down"?r.animOut.top=o:r.animOut.left=-s});r.animIn.left=0;r.animIn.top=0;r.cssBefore.top=0;r.cssBefore.left=0};e.fn.cycle.transitions.toss=function(t,n,r){var i=t.css("overflow","visible").width(),s=t.height();r.before.push(function(t,n,r){e.fn.cycle.commonReset(t,n,r,!0,!0,!0);!r.animOut.left&&!r.animOut.top?e.extend(r.animOut,{left:i*2,top:-s/2,opacity:0}):r.animOut.opacity=0});r.cssBefore.left=0;r.cssBefore.top=0;r.animIn.left=0};e.fn.cycle.transitions.wipe=function(t,n,r){var i=t.css("overflow","hidden").width(),s=t.height();r.cssBefore=r.cssBefore||{};var o;if(r.clip)if(/l2r/.test(r.clip))o="rect(0px 0px "+s+"px 0px)";else if(/r2l/.test(r.clip))o="rect(0px "+i+"px "+s+"px "+i+"px)";else if(/t2b/.test(r.clip))o="rect(0px "+i+"px 0px 0px)";else if(/b2t/.test(r.clip))o="rect("+s+"px "+i+"px "+s+"px 0px)";else if(/zoom/.test(r.clip)){var u=parseInt(s/2,10),a=parseInt(i/2,10);o="rect("+u+"px "+a+"px "+u+"px "+a+"px)"}r.cssBefore.clip=r.cssBefore.clip||o||"rect(0px 0px 0px 0px)";var f=r.cssBefore.clip.match(/(\d+)/g),l=parseInt(f[0],10),c=parseInt(f[1],10),h=parseInt(f[2],10),p=parseInt(f[3],10);r.before.push(function(t,n,r){if(t==n)return;var o=e(t),u=e(n);e.fn.cycle.commonReset(t,n,r,!0,!0,!1);r.cssAfter.display="block";var a=1,f=parseInt(r.speedIn/13,10)-1;(function d(){var e=l?l-parseInt(a*(l/f),10):0,t=p?p-parseInt(a*(p/f),10):0,n=h<s?h+parseInt(a*((s-h)/f||1),10):s,r=c<i?c+parseInt(a*((i-c)/f||1),10):i;u.css({clip:"rect("+e+"px "+r+"px "+n+"px "+t+"px)"});a++<=f?setTimeout(d,13):o.css("display","none")})()});e.extend(r.cssBefore,{display:"block",opacity:1,top:0,left:0});r.animIn={left:0};r.animOut={left:0}}})(jQuery);(function(e){e.fn.maximage=function(t,n){function i(e){window.console&&window.console.log&&window.console.log(e)}var r;if(typeof t=="object"||t===undefined)r=e.extend(e.fn.maximage.defaults,t||{});typeof t=="string"&&(r=e.fn.maximage.defaults);e.Body=e("body");e.Window=e(window);e.Scroll=e("html, body");e.Events={RESIZE:"resize"};this.each(function(){var n=e(this),s=0,o=[],u={setup:function(){if(e.Slides.length>0){var t,r=e.Slides.length;for(t=0;t<r;t++){var i=e.Slides[t];n.append('<div class="mc-image '+i.theclass+'" title="'+i.alt+'" style="background-image:url(\''+i.url+"');"+i.style+'" data-href="'+i.datahref+'">'+i.content+"</div>")}u.preload(0);u.resize()}},preload:function(t){var i=e("<img/>");i.load(function(){if(s==0){l.setup();r.onFirstImageLoaded()}if(s==e.Slides.length-1)r.onImagesLoaded(n);else{s++;u.preload(s)}});i[0].src=e.Slides[t].url;o.push(i[0])},resize:function(){e.Window.bind(e.Events.RESIZE,function(){e.Scroll.addClass("mc-hide-scrolls");e.Window.data("h",p.sizes().h).data("w",p.sizes().w);n.height(e.Window.data("h")).width(e.Window.data("w")).children().height(e.Window.data("h")).width(e.Window.data("w"));n.children().each(function(){this.cycleH=e.Window.data("h");this.cycleW=e.Window.data("w")});e(e.Scroll).removeClass("mc-hide-scrolls")})}},f={setup:function(){var t,i,s,o,u=e.Slides.length;e.BrowserTests.msie&&!r.overrideMSIEStop&&document.execCommand("Stop",!1);n.html("");e.Body.addClass("mc-old-browser");if(e.Slides.length>0){e.Scroll.addClass("mc-hide-scrolls");e.Window.data("h",p.sizes().h).data("w",p.sizes().w);e("body").append(e("<div></div>").attr("class","mc-loader").css({position:"absolute",left:"-9999px"}));for(o=0;o<u;o++){e.Slides[o].content.length==0?t='<img src="'+e.Slides[o].url+'" />':t=e.Slides[o].content;s=e("<div>"+t+"</div>").attr("class","mc-image mc-image-n"+o+" "+e.Slides[o].theclass);n.append(s);e(".mc-image-n"+o).children("img").length!=0&&e("div.mc-loader").append(e(".mc-image-n"+o).children("img").first().clone().addClass("not-loaded"))}f.preload();f.windowResize()}},preload:function(){var t=setInterval(function(){e(".mc-loader").children("img").each(function(t){var n=e(this);if(n.hasClass("not-loaded")&&n.height()>0){e(this).removeClass("not-loaded");var r=e("div.mc-image-n"+t).children("img").first();r.data("h",n.height()).data("w",n.width()).data("ar",n.width()/n.height());f.onceLoaded(t)}});if(e(".not-loaded").length==0){e(".mc-loader").remove();clearInterval(t)}},1e3)},onceLoaded:function(t){f.maximage(t);if(t==0){n.css({visibility:"visible"});r.onFirstImageLoaded()}else if(t==e.Slides.length-1){l.setup();e(e.Scroll).removeClass("mc-hide-scrolls");r.onImagesLoaded(n);if(r.debug){i(" - Final Maximage - ");i(n)}}},maximage:function(t){e("div.mc-image-n"+t).height(e.Window.data("h")).width(e.Window.data("w")).children("img").first().each(function(){h.maxcover(e(this))})},windowResize:function(){e.Window.bind(e.Events.RESIZE,function(){clearTimeout(this.id);this.id=setTimeout(f.doneResizing,200)})},doneResizing:function(){e(e.Scroll).addClass("mc-hide-scrolls");e.Window.data("h",p.sizes().h).data("w",p.sizes().w);n.height(e.Window.data("h")).width(e.Window.data("w"));n.find(".mc-image").each(function(e){f.maximage(e)});var t=n.data("cycle.opts");if(t!=undefined){t.height=e.Window.data("h");t.width=e.Window.data("w");jQuery.each(t.elements,function(t,n){n.cycleW=e.Window.data("w");n.cycleH=e.Window.data("h")})}e(e.Scroll).removeClass("mc-hide-scrolls")}},l={setup:function(){var t,i;n.addClass("mc-cycle");e.Window.data("h",p.sizes().h).data("w",p.sizes().w);jQuery.easing.easeForCSSTransition=function(e,t,n,r,i,s){return n+r};var s=e.extend({fit:1,containerResize:0,height:e.Window.data("h"),width:e.Window.data("w"),slideResize:!1,easing:e.BrowserTests.cssTransitions&&r.cssTransitions?"easeForCSSTransition":"swing"},r.cycleOptions);n.cycle(s)}},h={center:function(t){r.verticalCenter&&t.css({marginTop:(t.height()-e.Window.data("h"))/2*-1});r.horizontalCenter&&t.css({marginLeft:(t.width()-e.Window.data("w"))/2*-1})},fill:function(t){var n=t.is("object")?t.parent().first():t;typeof r.backgroundSize=="function"?r.backgroundSize(t):r.backgroundSize=="cover"?e.Window.data("w")/e.Window.data("h")<n.data("ar")?t.height(e.Window.data("h")).width((e.Window.data("h")*n.data("ar")).toFixed(0)):t.height((e.Window.data("w")/n.data("ar")).toFixed(0)).width(e.Window.data("w")):r.backgroundSize=="contain"?e.Window.data("w")/e.Window.data("h")<n.data("ar")?t.height((e.Window.data("w")/n.data("ar")).toFixed(0)).width(e.Window.data("w")):t.height(e.Window.data("h")).width((e.Window.data("h")*n.data("ar")).toFixed(0)):i("The backgroundSize option was not recognized for older browsers.")},maxcover:function(e){h.fill(e);h.center(e)},maxcontain:function(e){h.fill(e);h.center(e)}},p={browser_tests:function(){var t=e("<div />")[0],n=["Moz","Webkit","Khtml","O","ms"],s="transition",o={cssTransitions:!1,cssBackgroundSize:"backgroundSize"in t.style&&r.cssBackgroundSize,html5Video:!1,msie:!1};if(r.cssTransitions){typeof t.style[s]=="string"&&(o.cssTransitions=!0);s=s.charAt(0).toUpperCase()+s.substr(1);for(var u=0;u<n.length;u++)n[u]+s in t.style&&(o.cssTransitions=!0)}!document.createElement("video").canPlayType||(o.html5Video=!0);o.msie=p.msie()!==undefined;if(r.debug){i(" - Browser Test - ");i(o)}return o},construct_slide_object:function(){var t=new Object,s=new Array,o="";n.children().each(function(n){var r=e(this).is("img")?e(this).clone():e(this).find("img").first().clone();t={};t.url=r.attr("src");t.title=r.attr("title")!=undefined?r.attr("title"):"";t.alt=r.attr("alt")!=undefined?r.attr("alt"):"";t.theclass=r.attr("class")!=undefined?r.attr("class"):"";t.styles=r.attr("style")!=undefined?r.attr("style"):"";t.orig=r.clone();t.datahref=r.attr("data-href")!=undefined?r.attr("data-href"):"";t.content="";if(e(this).find("img").length>0){e.BrowserTests.cssBackgroundSize&&e(this).find("img").first().remove();t.content=
e(this).html()}r[0].src="";e.BrowserTests.cssBackgroundSize&&e(this).remove();s.push(t)});if(r.debug){i(" - Slide Object - ");i(s)}return s},msie:function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e},sizes:function(){var t={h:0,w:0};if(r.fillElement=="window"){t.h=e.Window.height();t.w=e.Window.width()}else{var i=n.parents(r.fillElement).first();if(i.height()==0||i.data("windowHeight")==1){i.data("windowHeight",!0);t.h=e.Window.height()}else t.h=i.height();if(i.width()==0||i.data("windowWidth")==1){i.data("windowWidth",!0);t.w=e.Window.width()}else t.w=i.width()}return t}};e.BrowserTests=p.browser_tests();if(typeof t=="string"){if(e.BrowserTests.html5Video||!n.is("video")){var v,m=n.is("object")?n.parent().first():n;e.Body.hasClass("mc-old-browser")||e.Body.addClass("mc-old-browser");e.Window.data("h",p.sizes().h).data("w",p.sizes().w);m.data("h",n.height()).data("w",n.width()).data("ar",n.width()/n.height());e.Window.bind(e.Events.RESIZE,function(){e.Window.data("h",p.sizes().h).data("w",p.sizes().w);v=n.data("resizer");clearTimeout(v);v=setTimeout(h[t](n),200);n.data("resizer",v)});h[t](n)}}else{e.Slides=p.construct_slide_object();if(e.BrowserTests.cssBackgroundSize){r.debug&&i(" - Using Modern - ");u.setup()}else{r.debug&&i(" - Using Old - ");f.setup()}}})};e.fn.maximage.defaults={debug:!1,cssBackgroundSize:!0,cssTransitions:!0,verticalCenter:!0,horizontalCenter:!0,scaleInterval:20,backgroundSize:"cover",fillElement:"window",overrideMSIEStop:!1,onFirstImageLoaded:function(){},onImagesLoaded:function(){}}})(jQuery);(function(e){function n(e){return typeof e=="object"?e:{top:e,left:e}}var t=e.scrollTo=function(t,n,r){e(window).scrollTo(t,n,r)};t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0};t.window=function(t){return e(window)._scrollable()};e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||r.compatMode=="BackCompat"?r.body:r.documentElement})};e.fn.scrollTo=function(r,i,s){if(typeof i=="object"){s=i;i=0}typeof s=="function"&&(s={onAfter:s});r=="max"&&(r=9e9);s=e.extend({},t.defaults,s);i=i||s.duration;s.queue=s.queue&&s.axis.length>1;s.queue&&(i/=2);s.offset=n(s.offset);s.over=n(s.over);return this._scrollable().each(function(){function d(e){u.animate(c,i,s.easing,e&&function(){e.call(this,r,s)})}if(r==null)return;var o=this,u=e(o),a=r,l,c={},p=u.is("html,body");switch(typeof a){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)){a=n(a);break}a=e(a,this);if(!a.length)return;case"object":if(a.is||a.style)l=(a=e(a)).offset()}e.each(s.axis.split(""),function(e,n){var r=n=="x"?"Left":"Top",i=r.toLowerCase(),f="scroll"+r,v=o[f],m=t.max(o,n);if(l){c[f]=l[i]+(p?0:v-u.offset()[i]);if(s.margin){c[f]-=parseInt(a.css("margin"+r))||0;c[f]-=parseInt(a.css("border"+r+"Width"))||0}c[f]+=s.offset[i]||0;s.over[i]&&(c[f]+=a[n=="x"?"width":"height"]()*s.over[i])}else{var y=a[i];c[f]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*m:y}s.limit&&/^\d+$/.test(c[f])&&(c[f]=c[f]<=0?0:Math.min(c[f],m));if(!e&&s.queue){v!=c[f]&&d(s.onAfterFirst);delete c[f]}});d(s.onAfter)}).end()};t.max=function(t,n){var r=n=="x"?"Width":"Height",i="scroll"+r;if(!e(t).is("html,body"))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,o=t.ownerDocument.documentElement,u=t.ownerDocument.body;return Math.max(o[i],u[i])-Math.min(o[s],u[s])}})(jQuery);(function(e){function r(t,n,r){var i=n.hash.slice(1),s=document.getElementById(i)||document.getElementsByName(i)[0];if(!s)return;t&&t.preventDefault();var o=e(r.target);if(r.lock&&o.is(":animated")||r.onBefore&&r.onBefore.call(r,t,s,o)===!1)return;r.stop&&o.stop(!0);if(r.hash){var u=s.id==i?"id":"name",a=e("<a> </a>").attr(u,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});s[u]="";e("body").prepend(a);location=n.hash;a.remove();s[u]=i}o.scrollTo(s,r).trigger("notify.serialScroll",[s])}var t=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0};n.hash=function(t){if(location.hash){t=e.extend({},n.defaults,t);t.hash=!1;if(t.reset){var s=t.duration;delete t.duration;e(t.target).scrollTo(0,t);t.duration=s}r(0,location,t)}};e.fn.localScroll=function(s){function o(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==t&&(!s.filter||e(this).is(s.filter))}s=e.extend({},n.defaults,s);return s.lazy?this.bind(s.event,function(t){var n=e([t.target,t.target.parentNode]).filter(o)[0];n&&r(t,n,s)}):this.find("a,area").filter(o).bind(s.event,function(e){r(e,this,s)}).end().end()}})(jQuery);