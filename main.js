(function(){
  var toggle=document.querySelector('.nav-toggle');
  var menu=document.getElementById('nav-menu');
  var label=toggle.querySelector('.sr-only');
  function setOpen(open){
    toggle.setAttribute('aria-expanded',String(open));
    menu.classList.toggle('open',open);
    label.textContent=open?'Close menu':'Open menu';
  }
  toggle.addEventListener('click',function(){setOpen(toggle.getAttribute('aria-expanded')!=='true');});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){setOpen(false);toggle.focus();}});
  window.addEventListener('resize',function(){if(window.innerWidth>=900)setOpen(false);});
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
