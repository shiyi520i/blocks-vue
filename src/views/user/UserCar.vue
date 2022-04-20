<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane v-for="tab in tabs" :key="tab.index">
        <span slot="label" @click="changeType(tab.i)"><i :class="tab.s" aria-hidden="true"></i> {{ tab.tagname }}</span>

        <div v-for="(company,index) in companys" :key="index" class="b">
          <UserCarChild :rid="company.rid" :cid="company.cid">
            <template v-slot:companyname> {{ company.companyName }}</template>
            <template v-slot:post> {{ company.post }}</template>
            <template v-slot:time> {{ company.time }}</template>
          </UserCarChild>
        </div>

      </el-tab-pane>
    </el-tabs>
    <Pagination :url="url" :typeNumber="type" :uid="uid" @getData="pageHandler" :key="key"></Pagination>
  </div>
</template>
<script>
import UserCarChild from "@/views/user/UserCarChild";
import Pagination from "@/components/Pagination";

export default {
  name: 'UserCar',
  components: {
    UserCarChild,
    Pagination
  },
  data() {
    return {
      companys: [],
      type: 2,
      url: 'record/getrecords',
      uid: '',
      key:1,
      tabs: [
        {i: 2, s: 'fa fa-user', tagname: '我的申请'},
        {i: 3, s: 'fa fa-window-restore', tagname: '浏览记录'},
        {i: 0, s: 'fa fa-commenting', tagname: '面试消息'}]
    };
  },
  methods: {
    pageHandler(data) {
      this.companys = data
    },
    changeType(i) {
      this.type = i
      this.key++
      console.log(i)
      this.pageHandler()
    },
    getUid() {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      this.uid = userinfo['sub']
    }
  },
  mounted() {
    this.pageHandler()

  },
  created() {
    this.getUid()
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
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  color: #32ca99;
}
</style>
