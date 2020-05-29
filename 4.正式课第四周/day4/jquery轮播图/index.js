// 1、获取数据，并绑定数据
let timer;
let send = () => {
    $.ajax({
        url: './banner.json', //请求路径
        type: 'get', // 请求的类型
        async: false, // 请求是否同异步
        success: data => {
            console.log(data)
            bindHtml(data);
            timer = setInterval(autoMove,2000);
            changeTip()
        }
    })
}

// 2.绑定数据
let bindHtml = (data) => {
    let imgs = ``;
    let lis = ``;
    $.each(data,(index,item)=>{
        imgs+=`<img src="${item.img}">`;
        lis+='<li></li>'
    });
   $('#wrapper').html(imgs);
   $('#list').html(lis);

}

// 3.自动切换
// fadeIn fadeOut
let step = 0;
let autoMove = ()=>{
    // 通过控制step的值来显示对应的图片
    step++;
    step === 5?step = 0:null;
    // 如果当前step为5的时候，说明已经到了最后一张了，要马上把step改为0，当其显示第一张图片
    $('img').eq(step).fadeIn().siblings().fadeOut();
    changeTip()
}




// 4.鼠标划伤图片停止轮播，鼠标划出，继续轮播
$('#outer').hover(()=>{
    clearInterval(timer)
},()=>{
    timer = setInterval(autoMove,2000);
})

// 5.实现焦点跟随
let changeTip = ()=> {
    // 找到对应的step对应的li，给其加上类名select，清楚所有兄弟姐妹元素的select类名

    $('#list li').eq(step).addClass('select').siblings().removeClass('select')
}

send()

// 6.鼠标划上li，显示对应的图片

$('#list li').hover(function(){
    // 箭头函数没有this
    // 在send发之前是获取不到li的
    step = $(this).index()-1;
    // 这块减1是为了和autoMove里的step++相互抵消
    autoMove();
});

// 7.点击左右小耳朵实现左右切换
$('#right').click(()=>{
    autoMove()
})
$('#left').click(()=>{
    step-=2;
    step === -2?step=3:null
    autoMove();
})



