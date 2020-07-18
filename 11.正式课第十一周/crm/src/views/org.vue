<template>
    <el-container>
        <el-aside>Aside</el-aside>
        <el-main>
            <!-- 凡是能够切换路由发生改变的地方，需要使用router-view -->
            main
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>
 
</style>