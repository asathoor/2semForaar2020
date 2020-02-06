/**
 * file: js.js
 * purpose: interactivity
 **/

let speed = 3;
let fast = 10;

let myParallax = function(){
 console.log('scroll detected');
 anima_1.style = 'top:' + fast + 'px';
    
 fast += 2;   

  console.log("fast is now = " + fast);
    
    // conditional
   if (fast > 777) {
    fast = -300;
   } 
    
}

document.addEventListener("scroll", myParallax);
