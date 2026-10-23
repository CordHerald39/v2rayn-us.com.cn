if(['localhost','127.0.0.1'].includes(location.hostname)){document.querySelectorAll('[data-preview-port]').forEach(el=>{const a=document.createElement('a');a.href='http://127.0.0.1:'+el.dataset.previewPort+'/';a.className='preview-link';a.textContent='打开本地预览 →';el.append(a);});}

/* 广告弹窗：3 秒后弹出，可关闭 */
(function(){
  if(localStorage.getItem("popup-seen")) return;
  setTimeout(function(){
    var o=document.querySelector(".popup-overlay");
    if(!o)return;
    o.removeAttribute("hidden");
    localStorage.setItem("popup-seen","1");
    o.addEventListener("click",function(e){
      if(e.target===o){o.setAttribute("hidden","");}
    });
    var close=document.createElement("button");
    close.textContent="×";
    close.style.cssText="position:absolute;top:12px;right:14px;border:none;background:none;font-size:28px;cursor:pointer;color:#68757a;line-height:1;padding:0 6px";
    close.setAttribute("aria-label","关闭广告");
    close.addEventListener("click",function(e){e.stopPropagation();o.setAttribute("hidden","");});
    o.querySelector(".popup-content").appendChild(close);
  },3000);
})();
