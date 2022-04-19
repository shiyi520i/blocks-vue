<template>
  <div>
    <div>
      <el-input v-model="cn" placeholder="输入公司进行搜索"></el-input>
      <el-button icon="el-icon-search" circle></el-button>
    </div>

    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
          column-key="date"
          sortable
          label="发布时间"
          width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.rtime }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="职位名称"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 0px">{{ scope.row.rpost }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="公司名称"
          width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" class="ba">{{ scope.row.rname }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              type="text"
              size="mini"
              class="ba"
              @click="handleEdit(scope.$index, scope.row)">查看
          </el-button>
          <el-button
              type="text"
              size="mini"
              class="bb"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination :url="url" :cn="cn" @getData="getApplyList"></Pagination>

    <el-drawer
        title="标题"
        :visible.sync="drawer"
        :with-header="false"
        :destroy-on-close="true">
      <ReleasePost :rid="rid"/>
    </el-drawer>

  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import ReleasePost from "@/views/company/ReleasePost";

export default {
  data() {
    return {
      url: 'busRecruitinfo/getpagesim',
      cn: '',
      rid:0,//职位id
      tableData: [],
      drawer: false,
    }
  },
  components: {
    Pagination,
    ReleasePost
  },
  methods: {
    formatter(row, column) {
      return row.rname;
    },
    getApplyList(data) {
      this.tableData = data
    },
    handleEdit(index, row) {
      this.rid=row.rid
      this.drawer=true
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
<style>
.ba {
  color: #00BFFF;
}

.bb {
  color: #E05D32;
}
</style>