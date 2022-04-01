<template>
  <div>
    <br>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="期望职位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="年龄">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="毕业时间">
            <el-input v-model="form.name"></el-input>
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
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>