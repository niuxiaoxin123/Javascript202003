let vm = new Vue({
    el:"#app",
    data:{
        task:[{isSelected:false,title:"去看书"},{isSelected:false,title:"去打球"}],
        val:"",
        cur:"",
        hash:"#all"
    },
    created(){
        // 监听页面的hash值;根据hash值对data中的hash进行赋值；监听hash的事件
        window.addEventListener("hashchange",()=>{
            // 获取浏览器中的hash值对data的hash赋值
            this.hash = window.location.hash
        });
    },
    directives:{
        focus(ele){
            // 自动触发一下input元素的focus事件
            // console.log(ele);
            ele.focus();
        }
    },
    methods:{
        // 绑定事件时，在html中可以有小括号也可以没有；有小括号也会等到点击的时候才会执行；如果需要传参，那么需要带上小括号
        addTodo(){
            // 向数据中新增对象；改视图就要改数据
            this.task.push({isSelected:false,title:this.val});
            this.val="";
        },
        remove(obj){
            // 只有item这个空间地址和obj相同时，才返回false，意味着要删除这一项
            this.task = this.task.filter(item=>item!==obj);
        },
        remember(obj){
            // 双击的这个li，把它的该条li对应数据中的{}空间地址给了this的cur;
            this.cur = obj;
        },
        update(){
            this.cur="";
        }
    },
    computed:{
        count(){
            // 写成函数，默认走get；过滤出task对象中属性名isSelected是true的个数
            return this.task.filter(item=>item.isSelected).length;
        },
        todo(){
            // 根据hash值的改变，return不同的数据
            if(this.hash==="#all"){
                return this.task;
            }else if(this.hash==="#finish"){
                return this.task.filter(item=>item.isSelected);
            }else if(this.hash==="#unfinish"){
                return this.task.filter(item=>!item.isSelected);
            }
        }
    }
})

