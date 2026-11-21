(function(){
  var header=document.querySelector('.site-header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>10)},{passive:true});
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* reveal on scroll */
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
  else{
    var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }

  /* project previews: play when visible or hovered, tilt in 3D with the mouse */
  var cards=document.querySelectorAll('.project');
  function svgOf(c){return c.querySelector('.demo-svg')}
  function play(c){var s=svgOf(c);if(!s||reduce)return;c.classList.add('is-active');if(s.animationsPaused&&s.animationsPaused())s.unpauseAnimations()}
  function stop(c){var s=svgOf(c);if(!s)return;c.classList.remove('is-active');s.pauseAnimations();s.setCurrentTime(reduce?2.5:0)}
  cards.forEach(function(c){
    var s=svgOf(c); if(!s)return;
    s.pauseAnimations(); if(reduce)s.setCurrentTime(2.5);
    var stage=c.querySelector('.demo-stage'), fine=window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if(fine&&!reduce){
      c.addEventListener('mouseenter',function(){c.classList.add('is-hover');play(c)});
      c.addEventListener('mousemove',function(e){
        var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        stage.style.setProperty('--ry',(x*28)+'deg');stage.style.setProperty('--rx',(12-y*22)+'deg');
      });
      c.addEventListener('mouseleave',function(){c.classList.remove('is-hover');stage.style.removeProperty('--rx');stage.style.removeProperty('--ry');if(!c._visible)stop(c)});
    }
  });
  if('IntersectionObserver' in window){
    var po=new IntersectionObserver(function(en){en.forEach(function(e){var c=e.target;c._visible=e.isIntersecting;if(e.isIntersecting)play(c);else stop(c)})},{threshold:.55});
    cards.forEach(function(c){if(svgOf(c))po.observe(c)});
  }
})();
