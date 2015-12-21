function lerp (n,a,b){ return (b-a)*n+a }
function randlog (a,b){ return Math.round( lerp( Math.pow( Math.random(), 5 ), a, b )) }

var is_iphone = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
var is_ipad = (navigator.userAgent.match(/iPad/i));
var is_android = (navigator.userAgent.match(/Android/i))
var is_mobile = is_iphone || is_ipad || is_android;
if (is_mobile) {
    document.body.parentNode.className = "mobile"
} else {
    document.body.parentNode.className = "desktop"
}

var pickle = (function(){
  var lastCount = pickleCount()
  window.addEventListener("keydown", function(e){
    if (e.keyCode == 13) {
      count_el.innerHTML = lastCount = pickleCount()
    }
  })
  reset_el.addEventListener("click", function(){
  })
  share_el.addEventListener("click", function(){
    var share_payload = {
      id:((1E9*Math.random())|0).toString(36),
      date:+new Date(),
      count:lastCount,
    }
  })
  function pickleCount(){ return randlog(50, 4500) }
  return {}
})()
