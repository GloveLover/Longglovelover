NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),document.querySelector(".site-nav-toggle .toggle").addEventListener("click",()=>{event.currentTarget.classList.toggle("toggle-close");var e=document.querySelector(".site-nav"),t=e.classList.contains("site-nav-on")?"slideUp":"slideDown";"function"==typeof Velocity?Velocity(e,t,{duration:200,complete:function(){e.classList.toggle("site-nav-on")}}):e.classList.toggle("site-nav-on")});document.querySelectorAll(".sidebar-nav li").forEach((e,n)=>{e.addEventListener("click",e=>{var t,i,o,e=e.currentTarget,a="sidebar-nav-active",s="sidebar-panel-active";e.classList.contains(a)||(t=document.querySelectorAll(".sidebar-panel"),i=t[n],o=t[1-n],window.anime({targets:o,duration:200,easing:"linear",opacity:0,complete:()=>{o.classList.remove(s),i.style.opacity=0,i.classList.add(s),window.anime({targets:i,duration:200,easing:"linear",opacity:1})}}),[...e.parentNode.children].forEach(e=>{e.classList.remove(a)}),e.classList.add(a))})}),window.addEventListener("resize",NexT.utils.initSidebarDimension),window.addEventListener("hashchange",()=>{var e=location.hash;""===e||e.match(/%\S{2}/)||(e=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`))&&e.click()})},NexT.boot.refresh=function(){CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img"),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),CONFIG.copycode.enable&&NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerLangSelect(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap(),NexT.utils.updateSidebarPosition()},window.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()});