//根据id获取元素对象
function my$(id) {
    return document.getElementById(id);
}
//获取最外面的div
var box = my$("box");
//获取相框
var ad = box.children[0];
//获取相框的宽度
var imgWidth = ad.offsetWidth+20;
//获取ul
var ulObj = my$("ul");
//获取左右焦点的div
var focusD = my$("focusD");




//点击右边按钮
var index=0;
my$("right").onclick = function () {
    if(index<ulObj.children.length-1){
        index++;
        animate(ulObj,-index*imgWidth);
    }

};
//点击左边按钮
my$("left").onclick = function () {
    if(index>0){
        index--;
        animate(ulObj,-index*imgWidth);
    }
};


//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 20);
}
