/**
 * file: js.js
 * purpose: interactivity
 * inspration from: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_js_prop
 **/

var myVideo = document.getElementById("myVideo"); 
myVideo.width = 420;
myVideo.controls = true;

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 1000; 
} 

function makeSmall() { 
    myVideo.width = 200; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 
