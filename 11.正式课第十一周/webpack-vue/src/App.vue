// 这是一个vue专用的后缀名文件
// 组件有自己独立的html,css,js ;这种文件让咱们实现每个组件都有自己独立的HTML，css,js;
// template :html;
// script : 写js
// style: 写css
<template>
    <div id="app123">
        <bar></bar>
        <span class="word">
            <a>{{msg}}</a>
        </span>
    </div>
</template>
<script>
    // export default导出的这个对象就是之前组件自己的
    // 1.先导入 
    // 2.在该组件的components中注册，
    // 3.在页面使用
    // 在真实的项目中，一般情况下会有App.vue; 这个文件时作为所有组件的入口文件
    import bar from "./bar.vue";
    export default {
        data(){
            return {
                msg:"aaa"
            }
        },
        components:{
            bar
        },
        methods:{
        },
        computed:{
        },
        watch:{
        }
    }
</script>
<style lang="less">
    .word{
        a{
            color:red;
        } 
    }
</style>