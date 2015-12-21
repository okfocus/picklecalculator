function lerp (n,a,b){ return (b-a)*n+a }
function randlog (a,b){ return lerp( Math.exp( Math.random(), 2 ), a, b ) }

var pickle = (function(){
  var lastCount = pickleCount()
  window.keydown = function(e){
    if (e.keyCode == 13) {
      count_el.innerHTML = lastCount = pickleCount()
    }
  }
  reset_el.addEventListener("click", function(){
  })
  share_el.addEventListener("click", function(){
    var share_payload = {
      id:((1E9*Math.random())|0).toString(36),
      date:+new Date(),
      count:lastCount,
    }
  })
  function pickleCount(){ return randlog(50,4500) })
})()
