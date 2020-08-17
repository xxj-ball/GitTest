var sc=document.querySelector('.bottom .sc');
var link=document.querySelectorAll('.bottom .link');
var prev=document.querySelector('.bottom .btn-pre');
var next=document.querySelector('.bottom .btn-next');
var friend=document.querySelector('.bottom .friend');
prev.onclick=function(){
    // friend.scrollLeft=0;
    animate(friend,{'scrollLeft':0});
}
next.onclick=function(){
    // friend.scrollLeft=153;
    animate(friend,{'scrollLeft':153});
}