<template>
    <!-- 只能有一个根元素 -->
    <div>
        {{a}}
        <button @click="add">点一点</button>
    </div>
  
</template>
<script>

    export default {
        data(){
            return {
                a:100
            }
        },
        methods:{
            add(){
                // this ==> 指向当前的组件实例
                console.log(this);
                this.a++;
            }
        }
    }
</script>   
<style lang="less">

</style>