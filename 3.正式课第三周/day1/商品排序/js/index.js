// 代码解析是从上到下的，而且同一时间只能解析一行代码，浏览器的解析单线程的；
// 1.先获取元素
var list = document.getElementById("list");
var navs = document.getElementsByTagName("a");
var oLis = document.getElementsByTagName("li");
var data;
// 2. 通过ajax获取请求数据
// 1) 创建ajax实例
var  xhr = new XMLHttpRequest();
// 2) 打开一个路径
xhr.open("get","json/product.json",false);// false:同步： 客户端向服务器发送请求，如果数据还没回来，这个代码需要等待，那么不能直接向下执行
// true : 异步： 前端向服务器发送请求，那么前端不需要在此等待，直接执行下面的代码就行；
// 3) 监听数据状态
xhr.onreadystatechange = function(){
    if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
        // 同步代码执行以后，才会对异步的赋值呢
        data = utils.toJSON(xhr.responseText);
    }
}
// 4) 发送请求
xhr.send();
// 三个请求 1s  1.2s  1.8s；
// 三个同步：4s;
// 三个异步：1.8s
// for(var i=0;i<1000000000;i++){

// }
// setTimeout(function(){// 定时器也是异步的；
//     console.log(1)
// },100)
// console.log(2000)
// console.log(data);// undefined 
// 3. 循环data,进行数据绑定
// [{},{},{}]
function bindHtml(){
    var str = ``;
     console.log(data);
    // 循环结束只是得到了一个用li连接起来的字符串；最后把str放到list元素中；
    for(var i=0;i<data.length;i++){
        var cur = data[i];
        // 行间属性；把子元素的数据都放到了当前li上；
        str+=`<li data-time="${cur.time}" data-hot="${cur.hot}" data-price="${cur.price}">
            <img src="${cur.img}" alt="">
            <span>${cur.title}</span>
            <span>${cur.time}</span>
            <span>${cur.hot}</span>
            <span>${cur.price}</span>
        </li>`
    }
    list.innerHTML = str;// 放到页面上
}
bindHtml();

// 循环a，绑定点击事件
for(var i =0;i<navs.length;i++){
    navs[i].index=i;//给第一个a新增index属性，属性值是0；第二个a值是1，第三个值2
    navs[i].flag=-1;
    navs[i].onclick = function(){
        // console.log(1)
        this.flag*=-1;
        sortList.call(this);// 把sortList方法中的this改成这个点击的元素
        removeArrow.call(this);
        addArrow.call(this);// 让addArrow中的this指向当前的a;
    }
}
var  ary = utils.toArray(oLis);// 把类数组转成数组；[{},{},{}...]
function sortList (){
    //  console.log(index)
    var  newAry = ["data-time","data-hot","data-price"]
    var that  = this;// 把this存储到变量that上
    ary.sort(function(a,b){
        // a, b : 代表的每一个li元素对象 
        var  cur = a.getAttribute(newAry[that.index]);
        var next = b.getAttribute(newAry[that.index]);
        if(that.index===0){
            // 点击上架时间，需要得到的值进行replace替换；
            cur = cur.replace("-","").replace("-","");
            next = next.replace("-","").replace("-","");
        }
        return (cur-next)*that.flag;
    });
    // console.log(ary);// ary根本没有排序
    // 重新把li放回页面中
    var frg = document.createDocumentFragment()
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i])
    }
    list.appendChild(frg);
}
//  让点击的高亮显示； 
function addArrow(){
    var  up = this.children[0];
    var  down = this.children[1];
    // 根据flag来判断当前是升序还是降序，然后给不同的i标签新增class;
    if(this.flag>0){
        up.classList.add("bg");
        down.classList.remove("bg");
    }else{
        up.classList.remove("bg");
        down.classList.add("bg")
    }    
}
// 每一次从别的a标签切换到当前a时，总是升序；
function removeArrow(){
    for(var i=0;i<navs.length;i++){
        if(this!==navs[i]){
            // 当前点击的这个a标签，不需要将flag重置为-1;也不需要管理这个子元素i的bg样式
            navs[i].children[0].classList.remove("bg")
            navs[i].children[1].classList.remove("bg");
            navs[i].flag=-1;
        }
    }
}


// 4.给每一个a标签绑定点击事件
// for(var i=0;i<navs.length;i++){
//     navs[i].index=i;// 给每一个a标签增加一个属性index,代表是第几个a;
//     navs[i].flag=-1;// 点击一次1  点击第二次-1
//     navs[i].onclick = function(){
//         // this==> 当前的a元素
//         sortList.call(this);
//         this.flag*=-1;
//     }
// }
// // ary是所有li转成的数组
// var ary = utils.toArray(oLis);// 把所有的li转成数组；
// function sortList(){
//     // console.log(this);// 点击的a元素
//     var dataAry = ["data-time","data-hot","data-price"];
//     var that = this;
//     ary.sort(function(a,b){// a,b
//         // a,b : 每一个li ;li元素都是对象
//         // getAttribute : 获取当前行间的属性对应的属性值；相当于把子元素span的数据都放到了自己li元素上一份；
//         // 回调函数中的this永远指向window
//         // console.log(dataAry[that.index]);
//         var  cur = a.getAttribute(dataAry[that.index]);// "2014-2-1"
//         var  next = b.getAttribute(dataAry[that.index]);
//         if(that.index===0){
//             // 如果是上架时间，需要把中杠去掉，再运算
//             cur=cur.replace("-","").replace("-","");
//             next = next.replace("-","").replace("-","");
//         }
//         // 控制奇数点击和偶数点击；
//         return (cur-next)*that.flag;
//     });
//     // 排序完以后，ary的存储的li顺序发生了变化，但是页面是不会变化，需要重新循环将其放回list中；
//     var frg = document.createDocumentFragment();
//     for(var i=0;i<ary.length;i++){
//         frg.appendChild(ary[i]);
//     }
//     list.appendChild(frg);
// }

// 对DOM进行排序
// 对data这个数据进行排序


