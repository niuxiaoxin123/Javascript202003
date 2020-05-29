let timer;
// 1.请求数据饼绑定数据
let send = () => {
    $.ajax({
        url: './banner.json',
        type: 'get',
        async: false,
        success: (data) => {
            console.log(data)
            bindHtml(data)
            timer = setInterval(autoMove, 2000);
            changeTip();
        }
    })
}

// 2.数据绑定
let bindHtml = (data) => {
    let imgs = ``;
    let lis = ``;
    $.each(data, (index, item) => {
        imgs += `<img src="${item.img}">`
        lis += `<li></li>`
    });
    $('#wrapper').html(imgs);
    $('#list').html(lis);
}

// 3.自动切换
let step = 0;
let autoMove = () => {
    step++;
    step >= 5 ? step = 0 : null;
    $('img').eq(step).fadeIn().siblings().fadeOut();
    changeTip()
}
// 4.实现焦点跟随
let changeTip = () => {
    console.log(step);

    // 找到step对应的li,给其加上class为select；清除兄弟的所有的class；
    $("#list li").eq(step).addClass("select").siblings().removeClass("select");
}
// 5. 鼠标划上停止动画
$("#outer").hover(function () {
    // 第一个是划上
    clearInterval(timer);
}, function () {
    // 第二个是划出
    timer = setInterval(autoMove, 2000);
});
send()
$("#list li").hover(function(){
    step=$(this).index()-1; 
    autoMove();
});
// 7.实现左右点击
$("#right").click(function(){
    autoMove();
});
$("#left").click(function(){
    step-=2;
    step===-2?step=3:null;
    autoMove();
});
