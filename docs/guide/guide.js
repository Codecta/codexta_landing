// Collapse the guide menu on phones; click a screenshot to enlarge it.
(function(){
  var m=document.querySelector('.g-menu');
  if(m&&window.matchMedia){var q=window.matchMedia('(max-width:900px)');var s=function(){if(q.matches)m.removeAttribute('open');else m.setAttribute('open','')};s();if(q.addEventListener)q.addEventListener('change',s)}
  if(typeof HTMLDialogElement==='undefined')return;
  var d=document.createElement('dialog');d.className='zoom';d.setAttribute('aria-label','Enlarged screenshot');
  var i=document.createElement('img');d.appendChild(i);document.body.appendChild(d);
  d.addEventListener('click',function(){d.close()});
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('figure.shot a');
    if(!a)return;e.preventDefault();i.src=a.getAttribute('href');i.alt=(a.querySelector('img')||{}).alt||'';d.showModal();
  });
})();
