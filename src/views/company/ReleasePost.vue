<template>
  <div>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
<!--      <el-form-item label="企业名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>-->
      <el-form-item label="岗位名称">
        <el-input v-model="form.rpost"></el-input>
      </el-form-item>
      <el-form-item label="学历要求">
        <el-select v-model="form.rerequirement" placeholder="请选择职业类型">
          <el-option v-for="p1 in parameterOne" :label="p1.name" :value="p1.id"></el-option>
        </el-select>
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
          <v-distpicker :province="select.province" :city="select.city" hide-area></v-distpicker>
        <el-input  v-model="form.rjaddress"></el-input>
      </el-form-item>
      <el-form-item label="薪资范围" label-width="auto">
        <el-col :span="5">
          <el-input v-model="form.rminsalary" placeholder="最少"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="form.rmaxsalary" placeholder="最多"></el-input>
        </el-col>
      </el-form-item>
<!--      <el-form-item label="职业类型">
        <el-select v-model="form.id" placeholder="请选择职业类型">
          <el-option v-for="category in categorys" :label="category.name" :value="category.id"></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item label="职位福利">
        <el-select v-model="form.welfares" multiple placeholder="请选择">
          <el-option v-for="p3 in parameterThree" :label="p3.name" :value="p3.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="招聘时间">
        <el-col :span="11">
          <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="form.rstarttime"
              style="width: 100%;"
              >
          </el-date-picker>
        </el-col>
        <el-col class="line" :span="2">--</el-col>
        <el-col :span="11">
          <el-date-picker
              type="date"
              placeholder="结束日期"
              v-model="form.rendtime"
              style="width: 100%;"
             >
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否全职">
        <el-switch v-model="form.rworktype"></el-switch>
      </el-form-item>
      <el-form-item label="是否急招">
        <el-switch v-model="form.rstats"></el-switch>
      </el-form-item>
      <el-form-item label="职位描述">
        <el-input
            type="textarea"
            v-model="form.rjdescript"
            autosize
        ></el-input>
      </el-form-item>
      <el-form-item label="工作职责">
        <el-input
            type="textarea"
            autosize
            v-model="form.rjduty"
        ></el-input>
      </el-form-item>
    </el-form>
    <div>
  <span slot="footer" class="dialog-footer">
    <el-button type="text" @click="onSubmit" class="ba">发布</el-button>
<!--    <el-button type="primary" @click="ob">发布</el-button>-->
  </span>
    </div>
  </div>
</template>
<script>
//import qs from 'qs';

export default {
  name: 'ReleasePost',
  props: {
    rid: {
      type: Number,
    }
  },
  data() {
    return {
      form: {
        id: 1001,
        rpost: '',//岗位名称
        rjdescript: '',//职位描述
        rjaddress: '',//工作地址
        rjexperience: '',//工作经验
        rerequirement: '',//学历要求
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
        welfares: [],//职业福利
      },
      categorys: [],
      parameterOne: [],
      parameterTwo: [],
      parameterThree: [],
      select: { province: '广东省', city: '广州市', area: '海珠区' },
    }
  },
  methods: {
    onSubmit() {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let uid = userinfo['sub']
      let w
      let s
      this.form.rworktype ? w = 0 : w = 1
      this.form.rstats ? s = 1 : s = 0
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
            rwelfares: Object.values(this.form.welfares).toString(),
            r_province:this.select.province,
            r_city:this.select.city
            //rwelfares: JSON.stringify(this.form.rwelfares)
          }
      ).then(response => {
        this.popos = response.data;
      })
    },
    getParameter() {
      this.axios({
            method: 'get',
            url: this.baseUrl + 'parameter/getparameter',
          }
      ).then(response => {

        this.categorys = response.data['hyfl'];//行业分类
        this.parameterOne = response.data['xlyq'];//学历要求
        this.parameterTwo = response.data['gzyq'];//工作经验
        this.parameterThree = response.data['gzfl'];//职业福利
      })
    },
    getPostInfo() {
      console.log(this.rid)
      if (this.rid != null) {
        this.axios({
              method: 'get',
              url: this.baseUrl + 'busRecruitinfo/postinfo',
              params: {
                rid: this.rid
              }
            }
        ).then(response => {
            this.form = response.data;
          if (this.form.rworktype === 0)
            this.form.rworktype = true
          if (this.form.rstats === 0)
            this.form.rstats = true
          console.log(this.welfares)
        })
      }
    },
    ob() {
      console.log(this.form.welfares,this.select.province,this.select.city)
    }
  },
  mounted() {
    this.getParameter()
    this.getPostInfo()
  }
}
</script>
<style>
.distpicker-address-wrapper select {
  padding: .2rem .35rem;
  height: 35px;
  font-size: 1px;
}
.ba {
  color: #00BFFF;
}

.bb {
  color: #E05D32;
}
</style>