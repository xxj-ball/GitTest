$(function(){
    $.ajax({
        url:'./data/goods.json',
        type:'get',
        dataType:'json',
        success:function(json){
            $.each(json,function(index,item){
                var newLi=`<li>
                <img src="${item.imgurl}" alt="">
                <h3 price="${item.price}">${item.price}</h3>
                <p>${item.title}</p>
                <span code="${item.code}">加入购物车</span>
            </li>`;
            $('.list').append(newLi);
            // console.log(${item.price});
            })
        }
    });
    $('.list').on('click','li span',function(){
        // localStorage.setItem('goods',{code:'',num:1})
        //判断点击加入购物车前是否已有商品在购物车中
        var arr=[];
        if(localStorage.getItem('goods')){
            arr=JSON.parse(localStorage.getItem('goods'));
        }
        var code=$(this).attr('code');
        var flag=false;
        //判断购物车中与现在点击的商品是否相同
        $.each(arr,function(index,item){
            if(item.code===code){
                num++;
                flag=true;
                return false;
            }
        })
        //如果点击的商品没在购物车中
        if(!flag){
            arr.push({"code":code,"num":1,'price':$(this).siblings('h3').attr('price')});
        }
        //保存数据
        localStorage.setItem('goods',JSON.stringify(arr));
        alert('加入购物车成功');
    })

})