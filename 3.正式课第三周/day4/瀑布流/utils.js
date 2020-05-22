var utils = (function () {
    function offset(curEle) {
        let left = curEle.offsetLeft;// 当前元素的左偏移量
        let top = curEle.offsetTop;
        let parent = curEle.offsetParent;// 当前元素的父级参照物
        while (parent !== document.body) {
            // 一旦parent是body,那么循环中止；
            // 加上父级参照物的边框和父级参照物的左偏移量
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;// 把父级参照物的父级参照物给了parent
        }
        return { left: left, top: top }
    };
    // 封装的思想
    // jquery : 里面封装了好多的方法；
    // 1.兼容  2. 选择器  3.封装好的库
    function getCss(curEle, attr) {
        //在IE9及以上用到了getComputedStyle,以下用currentStyle
        var val;
        if ("getComputedStyle" in window) {
            val = getComputedStyle(curEle)[attr];
        } else {
            val = curEle.currentStyle[attr];
        };
        // 获取到的样式，需要去掉单位，并且转成数字，为了后期方便计算；
        // 如果得到的值带px单位的字符串，那么需要去掉单位，转数字
        var reg = /^(width|height|left|top|right|bottom|margin|padding|fontSize|opacity)$/;
        if (reg.test(attr)) {
            val = parseFloat(val);
        }
        return val;
    };
    function setCss(curEle, attr, val) {
        var reg = /^(width|height|left|top|right|bottom|margin|padding|fontSize)$/;
        // 通过正则判断是否需要拼接"px";再通过是number类型的，直接拼接"px";
        if (reg.test(attr)) {
            if (typeof val === "number") {
                val = val + "px";
            }
        }
        curEle.style[attr] = val;
    };
    function setGroupCss(curEle, obj) {
        for (let key in obj) {
            setCss(curEle, key, obj[key]);
        }
    }
    //  setGroupCss(box,{width:300,background:"yellow",height:200});
    // 为了方便计算，一般获取元素样式或者设置元素样式，都是以数字的形式设置的
    //  setCss(box,"width",200);// 
    //  setCss(box,"background","yellow");
    // setCss 是设置一个样式

    function css() {
        let curEle = arguments[0],
            attr = arguments[1],
            val = arguments[2];
        if (arguments.length === 2) {
            if (typeof attr === "string") {
                return getCss(curEle, attr);
            } else {
                setGroupCss(curEle, attr);
            }
        } else {
            setCss(curEle, attr, val);
        }
    };
    // var val = css(box, "width")// 获取box的宽度
    // css(box, "width", 300)// 设置box的宽度是300
    // css(box, {width: 100, height: 200, background: "yellow"})// 设置一组样式

    function win(attr, val) {
        if (typeof val === "undefined") {
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = val;
        document.body[attr] = val;
    }
    return {
        offset,
        getCss,
        setGroupCss,
        css,
        win
    }
})()