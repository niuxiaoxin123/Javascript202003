var oUl = document.getElementsByTagName('ul');
var ary = Array.from(oUl) // 把类数组转换为数组
// 把类数组转为数组
var data = null;
// 获取数据并且绑定数据
// 创建ajax实例
var xhr = new XMLHttpRequest();
// 打开一个路径
xhr.open('get','./data.txt',false);
// 监视ajax的状态
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
        data = JSON.parse(xhr.responseText)
        console.log(data)
    }
}

// 发送请求
xhr.send();

// 专门用来绑定数据的
function bindHtml(){
    for(var i=0;i<50;i++) {
        // 每一次循环都要动态生成一个li，
        // 然后在动态生成img、a、p标签
        // 8个对象 0-7
        var index = Math.round(Math.random()*7) // 随机产生一个0到7之间的整数，作为获取data中数据的索引
        var cur = data[index]; // 随机获取数据
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = 'javascript:;';
        a.innerHTML = '采集';
        li.appendChild(a);

        var img = document.createElement('img');
        img.setAttribute('trueImg',cur.src); // 把当前图片的真实路径增加到图片的行间属性上
        // img的高度是随机生成的200-350
        img.style.height = Math.round(Math.random()*(350-200)+200) +'px';
        li.appendChild(img);

        var p = document.createElement('p');
        p.innerHTML = cur.title;
        li.appendChild(p);
        // console.log(li)
        // 接下来就应该往ul里边存放li了
        ary.sort(function(a,b){
            return a.offsetHeight - b.offsetHeight
        })
        ary[0].appendChild(li)
    }
}
bindHtml();




