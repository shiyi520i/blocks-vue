<template>
  <div>


    <el-button type="text"
               @click="dia= true"
               class="bc">
      发布新闻
    </el-button>
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
          column-key="date"
          sortable
          label="发布时间"
          width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
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
            <p>摘要: {{ scope.row.summary }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium" class="ba">{{ scope.row.author }}</el-tag>
            </div>
          </el-popover>
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

    <Pagination url="news/getsimple"  @getData="getNews"></Pagination>
  </div>
</template>

<script>

import MEditor from "@/components/MEditor";
import Pagination from "@/components/Pagination";

export default {
  name: 'Editing',
  data() {
    return {
      dia: false,
      tableData: []
    }
  },
  components: {
    MEditor,
    Pagination
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({
        path: `/newsinfo/${row.id}`,
      })
    },
    handleDelete(index, row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'error'
      }).then(() => {
        this.axios.post(this.baseUrl + 'news/remove', {
          id: row.id
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
    getNews(data) {
      this.tableData = data;
    },
  },
  mounted() {
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

.bc {
  color: #32ca99;
}
</style>