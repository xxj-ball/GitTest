(function (){
    function Magnifying(options){
        this.init(options);
    }
    // 原型对象上的属性方法
    Magnifying.prototype = {
        // 指正构造器
        contructor: Magnifying,
        // 初始化
        init: function (options){
            // 获取需要的元素
            this.minBox = this.getNodes(options.minBox);
            this.mask = this.getNodes(options.mask);
            this.maxBox = this.getNodes(options.maxBox);
            this.maxImg = this.getNodes(options.maxImg);
            // 注册事件
            this.bindEvent();
        },
        // 获取元素的方法
        getNodes: function (selector){
            return document.querySelector(selector);
        },
        // 注册事件
        bindEvent: function (){
            // 保存this指向
            // var _this = this;
            this.minBox.onmouseenter = function (){
                this.showHide('block');
            }.bind(this);
            this.minBox.onmouseleave = function (){
                this.showHide('none');
            }.bind(this);
            this.minBox.onmousemove = function (ev){
                var e = ev || event;
                this.move(e);
            }.bind(this);
        },
        // 显示隐藏
        showHide: function (attr){
            this.mask.style.display = attr;
            this.maxBox.style.display = attr;
        },
        move: function (e){
            // 蒙板的定位坐标
            var maskX = e.clientX - offset(this.minBox,false).left - this.mask.clientWidth/2;
            var maskY = e.clientY - offset(this.minBox,false).top - this.mask.clientHeight/2;

            // 边界判断
            if (maskX < 0){
                maskX = 0;
            }
            if (maskX >= (this.minBox.clientWidth-this.mask.clientWidth)) {
                maskX = this.minBox.clientWidth-this.mask.clientWidth;
            }
            if (maskY < 0) {
                maskY = 0;
            }
            if (maskY >= (this.minBox.clientHeight-this.mask.clientHeight)) {
                maskY = this.minBox.clientHeight-this.mask.clientHeight;
            }

            // 设置蒙板定位
            this.mask.style.left = maskX + 'px';
            this.mask.style.top = maskY + 'px';

            // 移动比例
            var scaleX = maskX/(this.minBox.clientWidth-this.mask.clientWidth);
            var scaleY = maskY/(this.minBox.clientHeight-this.mask.clientHeight);

            // 大图移动的坐标
            var maxLeft = scaleX * (this.maxImg.clientWidth - this.maxBox.clientWidth);
            var maxTop = scaleY * (this.maxImg.clientHeight - this.maxBox.clientHeight);

            // 设置大图的定位坐标
            this.maxImg.style.left = -maxLeft + 'px';
            this.maxImg.style.top = -maxTop + 'px';
        }
    }

    // 返回一个实例对象
    function factory(options){
        return new Magnifying(options);
    }
    // 对象暴露接口
    window.magnifying = factory;
})();
// 调用
magnifying({
    minBox: '.box',
    mask: '.mask',
    maxBox: '.maxImg',
    maxImg: '.maxImg img'
});
var $list=$('.huaImg li');
var $maxImg=$('.maxImg');
var $img=$('.box img');
$list.mouseenter(function(){
    $maxImg.children('img').attr('src',$(this).children().prop('src'));
    $img.attr('src',$(this).children().prop('src'));


})

