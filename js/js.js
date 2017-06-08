
// JavaScript Document
/* runner slide */


	var mqAry1=[
	['../images/gsk.png',''],
	['../images/usv.png',''],
	['../images/mac.png',''],
	['../images/kp.jpg',''],
	['../images/johnson.png',''],
	['../images/himalaya.png',''],
	['images/thumb3.png',''],
	['images/thumb4.png',''],];
	



function start() {
   new mq('brand3',mqAry1,220);
   //new mq('m2',mqAry2,60);// repeat for as many fields as required
   mqRotate(mqr); // must come last
}
window.onload = start;
var mqr = [];
 function mq(id,ary,wid){this.mqo=document.getElementById(id); 
 	var heit = this.mqo.style.height;
 	 this.mqo.onmouseout=function() {mqRotate(mqr);};
 	  this.mqo.onmouseover=function() {clearTimeout(mqr[0].TO);}; 
 	  this.mqo.ary=[];
 	   var maxw = ary.length; for (var i=0;i<maxw;i++){var img=document.createElement('img');
 	    img.src=ary[i][0]; var lnk=document.createElement('a');
 	     lnk.href=ary[i][1]; lnk.appendChild(img); 
 	     this.mqo.ary[i]=document.createElement('div'); 
 	     this.mqo.ary[i].appendChild(lnk);
 	     this.mqo.ary[i].style.position = 'absolute'; 
 	     this.mqo.ary[i].style.left = (wid*i)+'px'; 
 	     this.mqo.ary[i].style.width = wid+'px'; 
 	     this.mqo.ary[i].style.height = heit; 
 	     this.mqo.appendChild(this.mqo.ary[i]);}

 	      mqr.push(this.mqo);} function mqRotate(mqr){if (!mqr) return; for (var j=mqr.length - 1; j > -1; j--) {maxa = mqr[j].ary.length; for (var i=0;i<maxa;i++){var x = mqr[j].ary[i].style;  x.left=(parseInt(x.left,10)-1)+'px';} var y = mqr[j].ary[0].style;

 	       if (parseInt(y.left,10)+parseInt(y.width,10)<0) {var z = mqr[j].ary.shift(); z.style.left = (parseInt(z.style.left) + parseInt(z.style.width)*maxa) + 'px'; mqr[j].ary.push(z);}} mqr[0].TO=setTimeout('mqRotate(mqr)',1);}






// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
