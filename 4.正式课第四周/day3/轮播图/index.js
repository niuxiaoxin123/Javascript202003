// 1.先获取元素
let  wrapper = document.getElementsByClassName("wrapper")[0];
let list = document.getElementById("list");
let outer = document.getElementById("outer");
let right = document.getElementById("right");
let left = document.getElementById("left");
// 2. 同过ajax请求banner.json中的数据
let data;
let xhr= new XMLHttpRequest();// 创建一个ajax的实例
xhr.open('get',"./banner.json",false);// 根据路径获取数据
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        // 默认读取是一个JSON格式的字符串
         data = JSON.parse(xhr.responseText);
    }
}
xhr.send();
// console.log(data);

// 3. 绑定数据
// 利用Es6模板字符串拼接；
let bindHtml = ()=>{
    let  divs = ``;
    let str=``;
    // [{},{},{},{}]
    for(let i=0;i<data.length;i++){
        let cur = data[i];
        // Es6模板字符串
        divs +=`<div><img src="${cur.img}"></div>`;
        str+=`<li></li>`
    }
    // 把第一张再次放到最后；为了解决无缝滚动问题
    divs +=`<div><img src="${data[0].img}"></div>`
    wrapper.innerHTML=divs;
    list.innerHTML = str;
}
bindHtml();

// 实现自动轮播；只需要每隔2000ms,设置一次wrapper的left值；每次left减少一个图片的宽度800px;
let step=0;
let  autoMove=(n)=>{
    step++;// 加完之后1 要显示2  加完之后4 要显示第5张  加完之后5 要显示第二张
    // step=5.说明目前显示的是最后一张；让wrapper的left置为0
    // 当step是5时，要显示第二张，所以瞬间将wrapper的left=0；让step=1;
    typeof n!=="undefined"?step=n:null;
    if(step===5){
        wrapper.style.left="0px";
        step=1;
    }
    changeTip();
    utils.animate(wrapper,{left:-800*step},300);
}
// 每隔2000ms切换一张图片；
let timer = setInterval(autoMove,3000);// 


// 实现鼠标划上划出；
// 划上停下动画
outer.onmouseover=function(){
    clearInterval(timer);
}
// 鼠标划出继续轮播
outer.onmouseout=function(){
    timer=setInterval(autoMove,3000)
}

// 5. 实现鼠标跟随： 当前显示哪一张图片，应该让对应的li高亮；通过class来让对应的li高亮
let oLis = document.getElementsByTagName("li");
let  changeTip=()=>{
    for(let i=0;i<oLis.length;i++){
        // 根据step判断当前是第几张图片，step是显示图片的索引；所以可以和li的索引匹配上；
        if(step===i){
            oLis[i].classList.add("select");
        }else{
            oLis[i].classList.remove("select")
        }
        if(step===4){
            // 说明是第五张，应该让第一个li加上class 
            oLis[0].classList.add("select");
        }
    }
}
changeTip();// 给第一个li加class；

// 点击li，让图片跟随；
// 轮播图靠的是step;==> 位置
for(let i=0;i<oLis.length;i++){
    oLis[i].onclick =function(){
        // utils.animate(wrapper,{left:-800*i},300);
        // step=i;// 把全局的step改成i的值 
        // changeTip();
        autoMove(i);
    }
}

// 点击左右按钮
right.onclick = function(){
    autoMove();
}

left.onclick = function(){
    step--;
    // 当显示第一张，step=0;当再点击，step--变成了-1;
    if(step===-1){
        // 说明现在显示第一张// 让其wrapper迅速回到最后一张
        wrapper.style.left="-3200px";
        step=3;
    }
    utils.animate(wrapper,{left:-800*step},300);
    changeTip();// 让点跟随高亮
}