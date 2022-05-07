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
          label="提交时间"
          width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="公司名称"
          width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" class="ba">{{ scope.row.unitname }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          label="审核状态"
          prop="type"
          width="180"
          :formatter="formatter">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              type="text"
              size="mini"
              class="ba"
              @click="handleEdit(scope.$index, scope.row)">审核
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

    <Pagination :url="url" :typeNumber="typeNumber" @getData="getApplyList" :key="typeNumber"></Pagination>

    <el-dialog
        :visible.sync="dialogVisible"
        width="50%">
      <div>
        <el-form inline class="demo-form-inline">
          <el-form-item label="公司名称">
            <el-input v-model="popos.unitname" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="证件地址">
            <el-input v-model="popos.address" placeholder=""></el-input>
          </el-form-item>
        </el-form>

        <el-form inline class="demo-form-inline">
          <el-form-item label="身份证号码">
            <el-input v-model="popos.number" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="联系人电话">
            <el-input v-model="popos.phone" placeholder=""></el-input>
          </el-form-item>
        </el-form>

        <el-form inline class="demo-form-inline">
          <el-form-item label="法定代表人姓名">
            <el-input v-model="popos.represent" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="法定代表人电话">
            <el-input v-model="popos.representphone" placeholder=""></el-input>
          </el-form-item>
        </el-form>


        <el-form inline>
          <el-form-item label="营业执照号码">
            <el-input v-model="popos.id" placeholder=""></el-input>
          </el-form-item>
        </el-form>

        <el-form inline class="demo-form-inline">
          <el-form-item label="营业执照">
            <el-image
                style="width: 100px; height: 100px;"
                :src="popos.license"
                fit="fill"
            ></el-image>
          </el-form-item>
          <el-form-item label="身份证正面照">
            <el-image
                style="width: 100px; height: 100px;"
                :src="popos.frontimg"
                fit="fill"
            ></el-image>
          </el-form-item>
          <el-form-item label="身份证反面照">
            <el-image
                style="width: 100px; height: 100px;"
                :src="popos.backimg"
                fit="fill"
            ></el-image>
          </el-form-item>
          <el-form-item label="身份证手持照">
            <el-image
                style="width: 100px; height: 100px;"
                :src="popos.handimg"
                fit="fill"
            ></el-image>
          </el-form-item>
        </el-form>
        <el-button
            class="ba"
            size="medium"
            @click="handPass(popos.id)">通过
        </el-button>
        <el-button
            class="bb"
            size="medium"
            @click="handleReject(popos.id)">驳回
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  name: 'Check',
  data() {
    return {
      url: 'applylist/getAll',
      typeNumber: 4,
      tableData: [
        {}
      ],
      popos: [],
      dialogVisible: false
    }
  },
  components: {
    Pagination,
  },
  methods: {
    formatter(row, column) {
      switch (row.type) {
        case 0:
          return '已提交'
          break;
        case 1:
          return '未审核'
          break;
        case 2:
          return '已通过'
          break;
      }
    },
    handPass(id) {
      this.axios.post(this.baseUrl + 'applylist/pass', {
        id: id
      }).then(response => {

        })
    },
    handleReject(id) {
      this.$confirm('是否驳回?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'error'
      }).then(() => {
        this.axios.post(this.baseUrl + 'applylist/remove', {
          id: id
        }).then(response => {
          this.breakmsg = response.data.msg;
          if (response.data.code === 400) {
            this.$message({
              duration: 5000,
              type: 'error',
              message: this.breakmsg
            });
          } else {
            this.$message({
              type: 'success',
              message: '已驳回'
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

    },
    getApplyList(data) {
      this.tableData = data
      this.tableData.type
    },
    handleEdit(index, row) {
      this.dialogVisible = true
      this.id = row.id
      this.popos = row
    },
    handleDelete(index, row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'error'
      }).then(() => {
        this.axios.post(this.baseUrl + 'applylist/remove', {
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