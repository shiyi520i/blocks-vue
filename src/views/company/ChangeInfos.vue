<template>
  <div>
    <br>
    <br>
    <el-form
        ref="form"
        :model="formInfo"
        label-width="80px"
        label-position="left">
      <el-form-item label="公司名称">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="formInfo.companyname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="公司人数">
            <el-input v-model="formInfo.number"></el-input>
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
          <el-form-item label="电话">
            <el-input v-model="formInfo.landline"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="公司logo">
        <el-col :span="11">
          <el-form-item>
            <el-image
                :src="formInfo.logo===''?'https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg':formInfo.logo"></el-image>
          </el-form-item>
        </el-col>
        <el-col :span="11">
        </el-col>
      </el-form-item>
      <el-form-item label="地址">
        <el-col :span="12">
          <el-form-item>
            <v-distpicker :province="select.province" :city="select.city" :area="select.area"
                          @selected="onSelected"></v-distpicker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-input v-model="formInfo.fullAddress"/>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="公司描述">
        <el-input
            type="textarea"
            :rows="2"
            v-model="formInfo.introduction">
        </el-input>
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
        companyname: '',
        type: '',
        number: '',
        landline: '',
        email: '',
        province: '',
        city: '',
        area: '',
        address: '',
        logo: '',
        introduction: '',
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
            url: this.baseUrl + 'companyinfo/getcomone',
            data: {
              loginId: userid,
              companyname: this.formInfo.companyname,
              number: this.formInfo.number,
              landline: this.formInfo.landline,
              email: this.formInfo.email,
              province: this.formInfo.province,
              city: this.formInfo.city,
              area: this.formInfo.area,
              address: this.formInfo.address,
              logo: this.formInfo.logo,
              introduction: this.formInfo.introduction,
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
    },
    getUserData() {
      let u = JSON.parse(localStorage.getItem('userInfo'))
      let userid = u['sub']
      this.axios({
        method: 'get',
        url: this.baseUrl + 'companyinfo/getcomone/',
        params: {
          loginId: userid
        }
      }).then(r => {
        this.formInfo = r.data
        this.select.province = r.data.province
        this.select.city = r.data.city
        this.select.area = r.data.area
      })
    },
    onSelected(data) {
      this.formInfo.province = data.province.value
      this.formInfo.city = data.city.value
      this.formInfo.area = data.area.value
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