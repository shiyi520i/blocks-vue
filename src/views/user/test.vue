<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="企业名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="岗位名称">
        <el-input v-model="form.rpost"></el-input>
      </el-form-item>
      <el-form-item label="学历要求">
        <el-input v-model="parameterOne[form.rerequirement].name"></el-input>
      </el-form-item>
      <el-form-item label="招聘人数">
        <el-input v-model="form.rnumber"></el-input>
      </el-form-item>
      <el-form-item label="工作年龄">
        <el-select v-model="form.rjexperience" placeholder="请选择职业类型">
          <el-option v-for="p2 in parameterTwo" :label="p2.name" :value="p2.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作地址">
        <el-input type="textarea" v-model="form.rjaddress"></el-input>
      </el-form-item>
      <el-form-item label="薪资范围" label-width="auto">
        <el-col :span="5">
          <el-input v-model="form.rminsalary" placeholder="最少"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="form.rmaxsalary" placeholder="最多"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="职业类型">
        <el-select v-model="form.id" placeholder="请选择职业类型">
          <el-option v-for="category in categorys" :label="category.name" :value="category.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位福利">
        <el-select v-model="form.rwelfares" multiple placeholder="请选择职业类型">
          <el-option v-for="p3 in parameterThree" :label="p3.name" :value="p3.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
//import qs from 'qs';

export default {
  name: 'ReleasePost',
  data() {
    return {
      form: {
        id: 1001,
        rpost: '',//岗位名称
        rjdescript: '',//职位描述
        rjaddress: '',//工作地址
        rjexperience: '',//工作经验
        rerequirement: 1,//学历要求
        rjduty: '',//工作职责
        rjrequirement: '',//工作要求
        rnumber: '',//招聘人数
        rminsalary: '',//最低薪资
        rtime: '',//发布时间
        rworktype: true,//是否全职
        rstats: false,//是否急招
        rstarttime: '',//开始时间
        rendtime: '',//结束时间
        rmaxsalary: '',//最高工资
        rztype: '',//职业类型
        rwelfares: '',//职业福利
      },
      categorys: [],
      parameterOne:[],
      parameterTwo:[],
      parameterThree:[]
    }
  },
  methods: {
    onSubmit() {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let uid = userinfo['sub']
      let w
      let s
      this.form.rworktype?w=0:w=1
      this.form.rstats?s=1:s=0
      this.axios.post(this.baseUrl + 'busRecruitinfo/save',
          {
            eid: uid,
            rpost: this.form.rpost,
            rjdescript: this.form.rjdescript,
            rjaddress: this.form.rjaddress,
            rjexperience: this.form.rjexperience,
            rerequirement: this.form.rerequirement,
            rjduty: this.form.rjduty,
            rjrequirement: this.form.rjrequirement,
            rnumber: this.form.rnumber,
            rminsalary: this.form.rminsalary,
            rworktype: w,
            rstats: s,
            rstarttime: this.form.rstarttime,
            rendtime: this.form.rendtime,
            rmaxsalary: this.form.rmaxsalary,
            rztype: this.form.rztype,
            rwelfares: Object.values(this.form.rwelfares).toString()
          }
      ).then(response => {
        this.popos = response.data;
      })
    },
    getCategory() {
      this.axios({
            method: 'get',
            url: './json/category.json',
          }
      ).then(response => {
        this.categorys = response.data;
        console.log(this.categorys)
      })
    },
    getParameter() {
      this.axios({
            method: 'get',
            url: './json/parameter.json',
          }
      ).then(response => {
        this.parameterOne = response.data[0].children;//学历要求
        this.parameterTwo = response.data[1].children;//工作经验
        this.parameterThree = response.data[2].children;//职业福利
        console.log(this.parameter)
      })
    },
    ob() {
      let w
      let s
      this.form.rworktype?w=0:w=1
      this.form.rstats?s=1:s=0
      console.log(this.form.rworktype)
      console.log(w)
      console.log(this.form.rstarttime)
      console.log(Object.values(this.form.rwelfares).toString())
    }
  },
  mounted() {
    this.getCategory()
    this.getParameter()
  }
}
</script>