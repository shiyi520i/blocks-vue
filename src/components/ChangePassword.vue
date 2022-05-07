<template>
  <div>
    <!--引入element插件HTML样式-->
    <template>
      <el-form class="user-account-key" ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="原密码" prop="lastpassword">
          <el-input type="password" placeholder="请输入原密码" v-model="form.originalPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input type="password" placeholder="请设置新密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="qrpassword">
          <el-input type="password" placeholder="请确认新密码" v-model="form.qrpassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">修改</el-button>
          <el-button @click="$refs['form'].resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        originalPassword: '',
        password: '',
        qrpassword: ''
      },
      rules: {
        //验证规则
        originalPassword: [{
          required: true,
          message: '请输入原密码',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请设置新密码',
          trigger: 'blur'
        },],
        qrpassword: [{
          required: true,
          message: '请确认新密码',
          trigger: 'blur'
        },]
      }
    }
  },
  methods: {
    //提交事件
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        //valid 全为 true即执行以下操作
        if (valid) {
          if (this.form.originalPassword === this.form.password) {
            this.$message.error('原密码不能与新密码相同')
            return
          }
          if (this.form.password !== this.form.qrpassword) {
            this.$message.error('确认密码与新密码不一致')
            return
          } else {
            this.axios({
                  method: 'post',
                  url: this.baseUrl + 'upload/changePassword',
                  data: {
                    loginId: this.$store.state.loginId,
                    originalPassword:this.form.originalPassword,
                    password: this.form.password,
                  }
                }
            ).then(r => {
              this.userData = r.data
            })
          }
        }
      })
    }
  },
}
</script>

<style scoped>
.user-account-key {
  width: 88%;
}
</style>