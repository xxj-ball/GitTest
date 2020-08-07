$(function(){
    if(localStorage.getItem('goods')){
        var arr=JSON.parse(localStorage.getItem('goods'));
        var pri=0;
        $.ajax({
            url:'./data/goods.json',
            type:'get',
            dataType:'json',
            success:function(json){
                $.each(arr,function(index,item){
                    $.each(json,function(i,obj){
                        if(item.code===obj.code){
                            var newLi = `<li>
                                <input type="checkbox">
                                <img src="${obj.imgurl}" alt="">
                                <h3>${obj.title}</h3>
                                <p price="${obj.price}">${obj.price}</p>
                                <strong>-</strong>
                                <span>${item.num}</span>
                                <i>+</i>
                                <em code="${obj.code}">删除</em>
                            </li>`;
                            $('.list').append(newLi);
                            
                             pri=item.num*(obj.price).split('￥')[1]+pri;
                            $('.price span').text(pri);
                        }
                    })
                });
            }
        })
        //删除
        $('.list').on('click','li em',function(){
            //删除数据
            var code=$(this).attr('code');
            $.each(arr,function(index,item){
                if(item.code===code){
                    arr.splice(index,1);
                    
                    pri=pri-(item.num)*parseInt((item.price).split('￥')[1]);
                    $('.price span').text(pri);
                    // console.log(pri);
                    return false;
                }
            });
            

            if(arr.length>0){
                localStorage.setItem('goods',JSON.stringify(arr));
            }
            else{
                var newLi = '<li style="line-height:80px; text-align:center; color: #999;">购物车暂无数据！</li>';
                $('.list').html(newLi);
            }
            $(this).parent().remove();
            alert('移除商品');
        })
        $('.list').on('click','li i',function(){
            // console.log($(this));
            $this=$(this);
            var code=$(this).next().attr('code');
            $.each(arr,function(index,item){
                // console.log(item.code);
                if(item.code===code){
                    // console.log(item.code);
                    // console.log(item.num);
                item.num++;
                $this.siblings('span').text(item.num);
                pri=parseInt((item.price).split('￥')[1])+pri;
                $('.price span').text(parseInt(pri));
                // console.log(pri);
                return false;
                }
            })
            localStorage.setItem('goods',JSON.stringify(arr));
            
        })
        $('.list').on('click','li strong',function(){
            // console.log($(this));
            $this=$(this);
            var code=$(this).siblings('em').attr('code');
            $.each(arr,function(index,item){
                // console.log(item.code);
                if(item.code===code){
                    // console.log(item.code);
                    // console.log(item.num);
                    item.num--;
                    $this.siblings('span').text(item.num);
                    pri=pri-(item.price).split('￥')[1];
                    $('.price span').text(parseInt(pri));
                    // console.log(pri);
                    return false;
                }
            })
            localStorage.setItem('goods',JSON.stringify(arr));
            
        })
     
    }
    else{
        var newLi = '<li style="line-height:80px; text-align:center; color: #999;">购物车暂无数据！</li>';
        $('.list').html(newLi);
    }
})