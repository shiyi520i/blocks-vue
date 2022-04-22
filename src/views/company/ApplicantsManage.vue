<template>
  <div>

    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
          column-key="date"
          sortable
          label="申请时间"
          width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="姓名"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 0px">{{ scope.row.userName }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="申请职位"
          width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" class="ba">{{ scope.row.post }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              type="text"
              size="mini"
              class="ba"
              @click="handleEdit(scope.$index, scope.row)">查看简历
          </el-button>
          <el-button
              type="text"
              size="mini"
              class="bb"
              @click="handleDelete(scope.$index, scope.row)">删除信息
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination :url="url" :typeNumber="typeNumber" @getData="getApplyList"></Pagination>



  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      url: 'record/getrecords',
      tableData: [],
      typeNumber:2
    }
  },
  components: {
    Pagination,
  },
  methods: {
    getApplyList(data) {
      this.tableData = data
    },
    handleEdit(index, row) {
      this.rid = row.rid
      this.drawer = true
    },
    handleDelete(index, row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'error'
      }).then(() => {
        this.axios.post(this.baseUrl + 'busRecruitinfo/remove', {
          rid: row.rid
        }).then(response => {
          this.breakmsg = response.data.msg;
          if (response.data.code === 400) {
            this.$message({
              duration: 5000,
              type: 'error',
              message: this.breakmsg
            });
          } else {
            this.getnews()
            this.$message({
              type: 'success',
              message: '删除成功'
            });
          }
        }).catch(e => {
          console.log(e)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });

      console.log(index, row);
    },
  }
}
</script>
<style scoped>
.ba {
  color: #00BFFF;
}

.bb {
  color: #E05D32;
}
</style>