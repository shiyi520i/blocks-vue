<template>
  <div>
    <div>
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
          {{form.username}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{form.phone}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          苏州市
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            期望职位
          </template>
          {{form.postition}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            毕业时间
          </template>
          {{form.grtime}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            毕业学校
          </template>
          <el-tag size="small">{{form.graduate}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            邮箱
          </template>
          {{form.email}}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>

      </el-descriptions>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'UserData',
  data() {
    return {
      form: {
        username: '',
        email: '',
        age: '',
        phone: '',
        graduate: '',
        grtime: '',
        postition: ''
      }
    }
  },
}
</script>

<style>
.bt {
  color: #32ca99;
  background: #32ca99;
}
</style>