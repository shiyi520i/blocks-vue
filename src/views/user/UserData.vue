<template>
  <div>
    <div v-if="roleType===1">
      <ChangeInfos></ChangeInfos>
    </div>
    <div v-else>
      <el-descriptions class="margin-top" title="个人信息" :column="3" :size="size" border>
        <template slot="extra">
          <el-button class="bt" size="small">
            <router-link to="/userexhibit/userdata/userinfos">编辑</router-link>
          </el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ form.username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ form.phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="fa fa-user" aria-hidden="true"></i>
            性别
          </template>
          {{ form.sex }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            期望职位
          </template>
          {{ form.position }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            毕业时间
          </template>
          {{ form.grtime }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            毕业学校
          </template>
          <el-tag size="small">{{ form.graduate }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            邮箱
          </template>
          {{ form.email }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ form.address }}
        </el-descriptions-item>
      </el-descriptions>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ChangeInfos from "@/views/company/ChangeInfos";
import store from "@/store";

export default {
  name: 'UserData',
  components: {
    ChangeInfos
  },
  data() {
    return {
      form: {
        username: '',
        email: '',
        age: '',
        phone: '',
        graduate: '',
        grtime: '',
        position: '',
        address: '',
        sex: ''
      }
    }
  },
  computed: {
    roleType() {
      return store.state.type;
    }
  },
  methods: {
    getUserData() {
      let u = JSON.parse(localStorage.getItem('userInfo'))
      let userid = u['sub']
      this.axios({
        method: 'get',
        url: this.baseUrl + 'user/getUser/' + userid,
        params: {}
      }).then(r => {
        this.form = r.data
        if (r.data.sex === 1) {
          this.form.sex = '男'
        } else {
          this.form.sex = '女'
        }
      })
    }
  },
  mounted() {
    this.getUserData()
  }
}
</script>

<style>
.bt {
  color: #32ca99;
  background: #32ca99;
}
</style>