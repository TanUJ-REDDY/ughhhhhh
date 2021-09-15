var mouseEvent = []
canvas = document.getElementById("mycanvas")
ctx= canvas.getContext("2d")
var radius = []
var color = []
var width = []
addEventListener = mousedown
function my_mousedown(){
    radius = document.getElementById("radius")
    color = document.getElementById("color")
    width = document.getElementById("width")
    mouseEvent = mousedown
    addEventListener = mouseup
    function my_mouseup(){
mouseEvent = mouseleave
addEventListener = mouseleave
    }
function my_mouseup(){
mouseEvent = mouseleave
addEventListener = mousemove
function my_mousemove
 var mousex = mouseEvent
  var mousey = mouseEvent
 if(mouseEvent == mousedown){
ctx.beginPath()
    ctx.strokestyle = color;
    ctx.linewidth =outerWidth;
    ctx.arc(currant_postion_of_mouse_x,current_postion_of_mouse_y, radius ,0,2 *Math.PI)
    ctx.stroke()

 }
}
}