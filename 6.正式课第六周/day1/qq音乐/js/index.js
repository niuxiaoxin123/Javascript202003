//1. 计算出main内容区的高度，应该动态设置的；rem是根据屏幕的宽度决定的，中间区域应该通过js动态设置的；
// jquery对象[0]==> 原生DOM的对象
// 用屏幕的总高度减去头部和脚部的高度
function computedMain(){
    let winH = document.documentElement.clientHeight;
    let headerH = $(".header")[0].offsetHeight;
    let footerH = $(".footer")[0].offsetHeight;
    // 获取此时此刻html的fontSize;
    let fontSize = parseFloat(document.documentElement.style.fontSize);
    // main的像素/fontSize ==> rem值；
    let mainH = (winH-headerH-footerH)/fontSize+"rem";
    $(".main").css("height",mainH);
}
computedMain();
// 系统学习前端知识  应对面试    编程思想

// 2.请求数据  并绑定数据 
$.ajax({
    url:"./json/lyric.json",// 路径
    type:"get",// 请求方式
    async:false,// 同步异步
    success:function(data){// success是成功的回调；当数据请求回来以后，会执行这个函数，并且把请求回来的数据传递给这个函数的实参
        // console.log(data.lyric);
        bindHtml(data.lyric)
    }
})

// 3.请求完数据以后绑定数据
function bindHtml(data){
    // console.log(data);
    data=data.replace(/&#(\d+);/g,function(res,a){
        switch(a){
            case "32":
                return " ";
            case "40":
                return "("
            case "41":
                return ")";
            case "45":
                return "-"
        }
        return res;
    })
    let arr = [];
    // 
    data.replace(/\[(\d+)&#58;(\d+)&#46;\d+\]([^&#]+)(?:(&#\d+))/g,function(res,a,b,val){
        // 捕获到几次执行几次；并且把整个大正则捕获到的内容传给了res,把正则中一个小括号捕获的内容传给了a,第二个小括号传给了b，
        arr.push({
            a:a,
            b:b,
            val:val
        });
    });
   let str = ``;
   for(let i=0;i<arr.length;i++){
       let cur = arr[i];
       // 把当前歌词分钟和秒放到行间属性上
       str+=`<p data-min="${cur.a}" data-sec="${cur.b}">${cur.val}</p>`
   }
   $(".wrap").html(str);
}

// 作业：  1. 点击按钮让音乐播放和暂停
//        2. currentTime  duration ;每隔一秒获取一下当前的currentTime,对left的span赋值；duration对right赋值；进度条
//        3. 
// 给musicBtn 绑定点击事件，如果是暂停状态，让其播放，如果播放状态，让其暂停
let music = $("#music")[0];// 这样写是一个jquery的实例；play都是在原生的DOM对象上；
// let  a = document.getElementById("music");
// console.log(music ===a);
let timer;
$("#musicBtn").tap(function(){
    if(music.paused){
        music.play();
        // this => 原生的DOM元素；需要把原生的DOM对象转成jquery的实例；才能调用addClass
        $(this).addClass("select");
        timer = setInterval(computeTime,1000);
    }else{
        music.pause();
        $(this).removeClass("select");
        clearInterval(timer);
    }
});
// 当音频解析完成以后，对right进行赋值
// console.log(music.duration)
music.addEventListener("canplay",function(){
    $("#right").html(formate(music.duration))
})
// 格式化时间的方法
function formate(time){
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60);
    min = min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    return min+":"+sec;
}
let curT = 0;
function computeTime(){
    let curTime = music.currentTime;
    let duration = music.duration;
    let cur = formate(curTime);
    if(curTime>duration){
        // 当音乐播放完成，停止定时器及动画；
        clearInterval(timer);
        $("#musicBtn").removeClass("select");
        return;
    }
    $("#left").html(cur);
    // 时间的比等于宽度的比;
    $(".lineBg").css("width",curTime/duration*100+"%");
    let min = cur.split(":")[0];
    let sec = cur.split(":")[1];
    // 根据这个时间去匹配
    let allp= document.getElementsByTagName("p");
    for(let i=0;i<allp.length;i++){
        let curP = allp[i];
        let minP = curP.getAttribute("data-min");
        let secP = curP.getAttribute("data-sec");
        // 让左下角的时间和这个行上的事件比较，如果相同，音乐已经播放到了这一行，加上颜色；
        if(min===minP && sec===secP){
            // 满足条件并且className不是select,给其加上class为select；
            if(curP.className!=="select"){
                $(curP).addClass("select").siblings().removeClass("select");
                if(i>=6){
                    // 因为每行的行高都是0.84rem;
                    curT-=0.84;
                    $(".wrap").css("top",curT+"rem");
                }
            }
        }
    }

}