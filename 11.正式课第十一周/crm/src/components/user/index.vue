<template>
  <div>
      <div>
        <el-button>全部删除</el-button>
        <el-select v-model="value"  placeholder="请选择部门">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
        <el-input style="width:300px;margin-left:20px" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange">

        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column  prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>

      </el-table>
  </div>
</template>

<script>
//  部门的数据由于好几个组件都会用到该数据，所以放到公共数据中比较方便；
export default {
  data() { 
    return {
      value:"",
      // 组件的prop和数据中
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '小沈阳',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    }
  },
  created(){
    // 在created派发actions中的动作；
     this.$store.dispatch("changeDepartmentList");
  },
  methods:{
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  },
  computed:{
    options(){
       return this.$store.state.departmentList;
    }
  }
 }
</script>
<style lang="less" scoped>

</style>