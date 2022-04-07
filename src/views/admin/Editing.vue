<template>
  <div>
    <el-button type="text" @click="dia= true">发布新闻</el-button>
    <el-dialog
        title="新闻发布"
        :visible.sync="dia"
        width="50%">
      <MEditor></MEditor>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        label="发布时间"
        width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
        label="标题"
        width="180">
      <template slot-scope="scope">
        <span style="margin-left: 0px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
        label="作者"
        width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>摘要: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
            type="text"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
            type="text"
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination></el-pagination>
  </div>
</template>

<script>

import MEditor from "@/components/MEditor";

export default {
  name:'Editing',
  data() {
    return {
      dia:false,
      tableData: [{
        date: '2016-05-02',
        title: 'nimade',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        title: 'nimade',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        title: 'nimade',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        title: 'nimade',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components:{
    MEditor
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>