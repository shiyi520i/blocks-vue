<template>
  <div>
    <br>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="form.username"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="期望职位">
            <el-input v-model="form.position"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="form.graduate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="毕业时间">
            <el-input v-model="form.gtime"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="住址">
        <el-col :span="11">
          <el-form-item>
            <v-distpicker></v-distpicker>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item>
            <el-input/>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'UserInfos',
  data() {
    return {
      id: '',
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
  methods: {
    onSubmit() {
      let u = JSON.parse(localStorage.getItem('userInfo'))
      let userid = u['sub']
      this.axios({
            method: 'post',
            url: 'http://localhost:4000/api/user/adduser',
            data: {
              loginId:userid,
              username: this.form.username,
              email: this.form.email,
              age: this.form.age,
              phone: this.form.phone,
              graduate: this.form.graduate,
              grtime: this.form.grtime,
              postition: this.form.postition
            },
          }
      ).then(response => {
        console.log(response)
      })

    }
  }
}
</script>