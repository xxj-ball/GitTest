var imgs = document.querySelectorAll('.mainImg img');
var nums = document.querySelectorAll('.num li');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var timer;

var showIndex=0;
var preIndex=0;

function moveNext(){
  imgs[preIndex].className='';
  nums[preIndex].className='';
  imgs[preIndex].style.opacity=0.02;

  showIndex++;
  if(showIndex>=imgs.length){
    showIndex=0;
  }
  imgs[showIndex].className='show';
  nums[showIndex].className='active';
  preIndex=showIndex;
  animate(imgs[showIndex],{'opacity':1});
}
function movePrev(){
  imgs[preIndex].className='';
  nums[preIndex].className='';
  imgs[preIndex].style.opacity=0.02;

  showIndex--;
  if(showIndex<0){
    showIndex=imgs.length-1;
  }
  imgs[showIndex].className='show';
  nums[showIndex].className='active';
  preIndex=showIndex;
  animate(imgs[showIndex],{'opacity':1});
}
animate(imgs[showIndex],{'opacity':1},function (){
  timer = setInterval(function (){
      moveNext();
  },3000);
});

next.onclick=function(){
  clearInterval(timer);
  clearInterval(imgs[showIndex]);
  moveNext();
  timer = setInterval(function (){
    moveNext();
  },3000);
}
prev.onclick=function(){
  clearInterval(timer);
  clearInterval(imgs[showIndex]);
  movePrev();
  timer = setInterval(function (){
    moveNext();
  },3000);
}
for(var i=0;i<nums.length;i++){
  nums[i].index=i;
  // console.log(i);
  nums[i].onclick=function(){
    // console.log(222);
    clearInterval(timer);
    imgs[preIndex].className='';
    nums[preIndex].className='';
    imgs[preIndex].style.opacity=0.02;
    showIndex=this.index;
    imgs[showIndex].className='show';
    nums[showIndex].className='active';
    // imgs[showIndex].opacity=1;
    preIndex=showIndex;
    animate(imgs[showIndex],{'opacity':1});
    timer = setInterval(function (){
      moveNext();
    },3000);
  }
}



let $inter=$('.mian .inter');
let $broadside_tit=$('.main .broadside_tit');
$broadside_tit.on('mouseenter',function(){
  $(this).children('div').addClass('show').parent().siblings().children().removeClass('show');
})
$broadside_tit.on('mouseleave',function(){
  // console.log(222);
  $(this).children('div').removeClass('show');
})

// let $adv=$('.adv');
// let $list=$('.adv li');
// let msgIndex=0;
// // console.log($adv.scrollTop);
// setInterval(function(){
//   msgIndex++;
//   if(msgIndex>=$list.length-1){
//     msgIndex=1;
//     $adv.scrollTop=0;
//   }
//   animate($adv,{'scrollTop':$adv.clientHeight*msgIndex});
// },3000);
var adv=document.querySelector('.adv');
var list=document.querySelectorAll('.adv li');
var msgIndex=0;
setInterval(function(){
  msgIndex++;
  // console.log(msgIndex);
  if(msgIndex>=list.length-1){
    msgIndex=1;
    adv.scrollTop=0;
  }
  // console.log(adv.clientHeight);
  animate(adv,{'scrollTop':adv.clientHeight*msgIndex});
  
},3000);



var mySwiper = new Swiper('.swiper-container',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChangeTransitionEnd: function(){
      if(this.isEnd){
        this.navigation.$nextEl.css('display','none');
      }else{
        this.navigation.$nextEl.css('display','block');  
      }
    },
  },
})
// var mySwiper1 = new Swiper('.swiper-container',{
//   pagination: {
//       el: '.swiper-pagination',
//     },
//   })
//   for(i=0;i<mySwiper.pagination.bullets.length;i++){
//     mySwiper1.pagination.bullets[i].index=i
//     mySwiper1.pagination.bullets[i].onmouseover=function(){
//       mySwiper1.slideTo(this.index);
//     };
//   }

var timer1;
var listIndex=0;
var $img=$('.lowidth img');
var $number=$('.vamll li');
function move(){
  $img.eq(listIndex).removeClass('zhan').css('opacity',0.02);
  $number.eq(listIndex).removeClass('number');
  listIndex++;
  if(listIndex>=$img.length){
    listIndex=0;
  }
  $img.eq(listIndex).addClass('zhan');
  $number.eq(listIndex).addClass('number');
  $img.eq(listIndex).animate({'opacity':1});
}
$img.eq(listIndex).animate({'opacity':1},function (){
  timer1 = setInterval(function (){
      move();
  },3000);
});

$number.on('mouseenter',function(){
  clearInterval(timer1);
  // clearInterval($img.$index);
  // console.log($(this));
  $listIndex=$number.index($(this));
  // console.log($index);
  $(this).addClass('number').siblings().removeClass('number');
  $img.eq($listIndex).addClass('zhan').siblings().removeClass('zhan');
  $img.eq($listIndex).animate({'opacity':1});
  timer1 = setInterval(function (){
    move();
},3000);
})
// $number.on('mouseleave',function(){
//   $index=$number.index($(this));
//   $(this).removeClass('number');
//   $img.eq($index).removeClass('zhan');
// })