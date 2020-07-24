<template>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column prop="id" label="编号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="职务" width="100">
        </el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
        <el-table-column label="权限">
           <template slot-scope="scope">
                {{scope.row.power | trans}}
           </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
</template>

<script>
// 权限 ： userhandle|jobhandle
// 请求数据并且更改store中的数据
import {delJobList} from "../../api/job";
export default {
  name: '',
  data() { 
    return {

    }
  },
  filters:{
    trans(val){// val就是当前职务的power "userhandle|jobhandle|...";
        // "userhandle|jobhandle|allcustomer" ==> return "员工操作权|职务操作权|全部客户"
        // 分析数据的能力==>处理数据能力
        // ["userhandle","jobhandle","allcustomer"]==> ["员工操作权","职务操作权","全部客户"]
       let obj = {
          userhandle:"员工操作权",
          departhandle:"部门操作权",
          jobhandle:"职务操作权",
          allcustomer:"全部客户",
          departcustomer:"部门客户",
          resetpassword:"重置密码"
       }
       let  arr = val.split("|");// 按|分开，得到一个数组
       return arr.map(item=>obj[item]).join("|");
       // filter  find  every  includes  reduce 
    }
  },
  created(){
     // 先发送请求
     // 需要在组件内部dispatch;为什么必须在action发送请求呢，因为actions是支持异步的；
    this.getJobList();
  },
  computed:{
     tableData(){
       // 把vuex数据拿到这个页面中的computed属性上；
        return this.$store.state.jobList;
     }
  },
  methods:{
    getJobList(){
        // 在方法中dispatch
        this.$store.dispatch("changeJobList")
    },
    handleDelete(row){
        this.$confirm("此操作将永久删除，是否继续","提示").then(()=>{
             delJobList(row.id).then(data=>{
               if(data.code==0){
                  this.$message({type:"success",message:"删除成功"})
               }
               this.$store.dispatch("changeJobList");
             })
        })
    },
    // 编辑
    handleEdit(row){
        // query传参；点击编辑，把当前行的id传递给新增职务组件
        this.$router.push({path:"/org/addJob",query:{id:row.id}});
    }
  }
 }
</script>

<style lang="less" scoped>

</style>