<template>
  <div>
    <div>
      <el-input v-model="input" placeholder="输入公司进行搜索"></el-input>
      <el-button icon="el-icon-search" circle></el-button>
    </div>
  <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="职位"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="公司"
        :formatter="formatter">
    </el-table-column>
    <el-table-column
        label="操作">
      <el-button type="success" icon="el-icon-check" size="mini" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini" circle></el-button>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>