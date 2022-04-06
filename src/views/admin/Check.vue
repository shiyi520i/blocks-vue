<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane v-for="tab in tabs" :key="tab.index">
        <span slot="label" @click="changeType(tab.i)"><i :class="tab.s" aria-hidden="true"></i> {{tab.tagname}}</span>

        <div v-for="(company,index) in companys" :key="index" class="b">
          <UserCarChild :uid="company.uid">
            <template v-slot:companyname> {{ company.companyname }}</template>
            <template v-slot:post> {{ company.post }}</template>
            <template v-slot:time> {{ company.time }}</template>
          </UserCarChild>
        </div>

      </el-tab-pane>
    </el-tabs>
    <div>
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="pageHandler"
          :page-size="pageSize"
          :current-page="page"
          :hide-on-single-page="vl"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import UserCarChild from "@/views/user/UserCarChild";

export default {
  name:'Check',
  components: {
    UserCarChild
  },
  data() {
    return {
      pageSize: 5,
      page: 1,
      vl: true,
      total: 10,
      companys: [],
      type: 2,
      tabs:[
        {i:2,s:'fa fa-user',tagname:'等待审核'},
        {i:3,s:'fa fa-window-restore',tagname:'审核记录'}]
    };
  },
  methods: {
    pageHandler() {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let uid = userinfo['sub']
      this.axios.get('http://localhost:4000/api/record/getrecords', {
        params: {
          pageSize: this.pageSize,
          pageNo: this.page,
          uid: uid,
          type: this.type
        }
      }).then(response => {
        this.total = response.data.total;
        this.companys = response.data.records
      })
    },
/*    changeType(i) {
      this.type = i
      console.log(i)
      this.pageHandler()
    },*/
/*    look(id) {
      this.$router.push({
        path: `/CompanyInfo/${id}`,
      })
    }*/
  },
  mounted() {
   // this.pageHandler()
  }
}
</script>


<style>
.box-card {
  width: 150px;
}

.b {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
