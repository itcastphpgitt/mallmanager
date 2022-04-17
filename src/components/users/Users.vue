<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索框 -->
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="编号" width="150px">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="150px">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="生日" prop="birth" width="150px">
      </el-table-column>
      <el-table-column label="性别" prop="sex" width="150px">
      </el-table-column>
      <el-table-column label="地址" prop="address" width="150px">
      </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>

        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-button type="success">添加</el-button> -->
    <!-- 分页组件 -->
    <el-row>
      <el-col :span="12" :offset="3">
        <el-pagination style="margin:20px 50px" prev-text="上一页" next-text="下一页" background
          layout="prev, pager, next,jumper,total,sizes" :total="50">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      search: '',
      tableData: [{
        id: 1,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2000-02-02',
        sex: '男'
      },
      {
        id: 2,
        name: '陈小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2000-02-02',
        sex: '男'
      },
      {
        id: 3,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2000-02-02',
        sex: '男'
      },
      {
        id: 4,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2000-02-02',
        sex: '男'
      },
      {
        id: 5,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2000-02-02',
        sex: '男'
      },]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style>
</style>
