var utils = (function () {
    function win(attr, val) {
        if (typeof val === 'undefined') {
            // 如果此条件成立，说明你在获取
            return document.documentElement[attr] || document.body[attr]
        }
        else {
            // 设置属性
            document.documentElement[attr] = val;
            document.body[attr] = val;
        }
    };
    function offset(curEle) {
        let left = curEle.offsetLeft;
        let top = curEle.offsetTop;
        let parent = curEle.offsetParent;
        while (parent !== document.body) {
            // 如果parent不是body，就得继续给left累加父级参照物的左边框和父级参照物的左偏移量
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left: left,
            top: top

        }
    };
    function getCss(curEle, attr) {
        var val = null;
        if ('getComputedStyle' in window) {
            val = getComputedStyle(curEle)[attr]
        }
        else {
            val = curEle.currentStyle[attr]
        }
        var reg = /^(width|height|left|top|bottom|right|margin|padding|fontSize|opacity)$/;
        if (reg.test(attr)) {
            val = parseFloat(val)
        }
        return val;
    }
    function setCss(curEle, attr, val) {
        var reg = /^(width|height|left|right|top|bottom|margin|padding|fontSize)$/
        if (reg.test(attr)) {
            if (typeof val === 'number') {
                val = val + 'px'
            }
        }
        curEle.style[attr] = val;
    }
    function setGroupCss(curEle, obj) {
        for (var key in obj) {
            setCss(curEle, key, obj[key])
        }
    };
    function css() {
        let curEle = arguments[0];
        let attr = arguments[1];
        let val = arguments[2];
        if(arguments.length == 2){
            if(typeof attr === 'string'){
                return getCss(curEle,attr)
            }
            else {
                setGroupCss(curEle, attr)
            }
        }
        else {
            setCss(curEle, attr, val)
        }
    }

    return {
        win,
        offset,
        getCss,
        setCss,
        setGroupCss,
        css
    }
})()
