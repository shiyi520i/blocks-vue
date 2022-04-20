<template>
  <div>
    <br>
    <br>
    <el-form
        ref="form"
        :model="formInfo"
        label-width="80px"
        label-position="left" >
      <el-form-item label="姓名">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="formInfo.username"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="期望职位">
            <el-input v-model="formInfo.position"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="formInfo.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="年龄">
            <el-input v-model="formInfo.age"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="formInfo.graduate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="毕业时间">
            <el-date-picker
                type="date"
                placeholder="开始日期"
                v-model="formInfo.grtime"
                style="width: 100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="住址">
        <el-col :span="12">
          <el-form-item>
            <v-distpicker :province="select.province" :city="select.city" :area="select.area" @selected="onSelected"></v-distpicker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-input v-model="formInfo.fullAddress"/>
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
      formInfo: {
        username: '',
        email: '',
        age: '',
        phone: '',
        graduate: '',
        grtime: '',
        postition: '',
        fullAddress: '',
        address:''
      },
      select: {province: '广东省', city: '广州市', area: '海珠区'},
    }
  },
  methods: {
    onSubmit() {
      let u = JSON.parse(localStorage.getItem('userInfo'))
      let userid = u['sub']
      this.axios({
            method: 'post',
            url: this.baseUrl + 'user/adduser',
            data: {
              loginId: userid,
              username: this.formInfo.username,
              email: this.formInfo.email,
              age: this.formInfo.age,
              phone: this.formInfo.phone,
              graduate: this.formInfo.graduate,
              grtime: this.formInfo.grtime,
              postition: this.formInfo.postition,
              address: this.address
            },
          }
      ).then(response => {
        this.$message({
          duration: 5000,
          type: 'success',
          message: '修改成功'
        });
      }).catch(e => {
        this.$message({
          duration: 5000,
          type: 'error',
          message: '修改失败' + e
        });
      })
      console.log(this.select.province + '-' + this.select.city + '-' + this.select.area + '-' + this.fullAddress)
    },
    getUserData() {
      let u = JSON.parse(localStorage.getItem('userInfo'))
      let userid = u['sub']
      this.axios({
        method: 'get',
        url: this.baseUrl + 'user/getUser/' + userid
      }).then(r => {
        this.formInfo = r.data
        let arr = r.data.address
        let split = arr.split("-");
        this.select.province = split[0]
        this.select.city = split[1]
        this.select.area = split[2]
        this.formInfo.fullAddress = split[3]
      })
    },
    onSelected(data) {
      this.address=data.province.value + '-' + data.city.value + '-' + data.area.value + '-' + this.formInfo.fullAddress
    },
  },
  mounted() {
    this.getUserData()
  }
}
</script>
<style>
.distpicker-address-wrapper select {
  padding: .2rem .35rem;
  height: 35px;
  font-size: 1px;
}

.el-button--primary {
  background-color: #32ca99;
  border-color: #00B09D;
}
</style>