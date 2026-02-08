document.getElementById('acces-btn').onclick=function(){
  const p=document.getElementById('acces-panel');
  p.style.display=p.style.display==='block'?'none':'block';
};
document.getElementById('acces-close').onclick=function(){
  document.getElementById('acces-panel').style.display='none';
};
document.addEventListener('keydown',function(e){
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){
    const p=document.getElementById('acces-panel');
    p.style.display=p.style.display==='block'?'none':'block';
  }
  if(e.key==='Escape')document.getElementById('acces-panel').style.display='none';
});
