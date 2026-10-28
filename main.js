(function(){
var b=document.body;
function setMenu(o){b.classList.toggle('menu-open',o);var bt=document.querySelector('.burger');if(bt){bt.setAttribute('aria-expanded',o?'true':'false');}document.documentElement.style.overflow=o?'hidden':'';}
document.addEventListener('click',function(e){
var t=e.target;
if(t.closest('.burger')){setMenu(true);return;}
if(t.closest('[data-close]')){setMenu(false);return;}
var q=t.closest('.faq-q');
if(q){var it=q.parentNode;var open=it.classList.toggle('open');q.setAttribute('aria-expanded',open?'true':'false');}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setMenu(false);}});
window.addEventListener('resize',function(){if(window.innerWidth>900){setMenu(false);}});
})();
