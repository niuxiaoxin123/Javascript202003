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
    console.log(data);
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
       str+=`<p>${cur.val}</p>`
   }
   $(".wrap").html(str);
}

// 作业： 1. 点击按钮让音乐播放和暂停
//        2. currentTime  duration ;每隔一秒获取一下当前的currentTime,对left的span赋值；duration对right赋值；进度条
//        3. 