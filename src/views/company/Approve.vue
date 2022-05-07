<template>
  <div>
    <div>
      <el-steps :active="butname" finish-status="success" simple style="margin-top: 20px">
        <el-step title="单位信息"></el-step>
        <el-step title="法定联系人"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
    <br>
    <div v-show="a">
      <el-form ref="form"
               :model="form"
               label-width="140px"
               size="mini"
               label-position="left">
        <!--单位信息模块-->
        <el-form-item
            label="单位名称："
            :required="true">
          <el-input v-model="form.unitname"></el-input>
        </el-form-item>
        <el-form-item
            label="有效证件类型："
            :required="true">
          <el-input
              :disabled="true"
              placeholder="营业执照"
              required="true"
          ></el-input>
        </el-form-item>
        <el-form-item
            label="证件号码："
            :required="true">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item
            label="证件地址："
            :required="true">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item
            label="营业执照照片"
            :required="true">
          <el-upload
              :action="this.baseUrl+'applylist/imgupload'"
              list-type="picture-card"
              :on-success="handleSuccess1"
              :before-upload="beforeUpload"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
      </el-form>
    </div>

    <!--法定代表人模块-->
    <div v-show="b">
      <el-form ref="form"
               :model="form"
               label-width="140px"
               size="mini"
               label-position="left">
        <el-form-item
            label="法定代表人姓名："
            required="true">
          <el-input v-model="form.represent"></el-input>
        </el-form-item>
        <el-form-item
            label="法定代表人电话："
            required="true">
          <el-input v-model="form.representphone"></el-input>
        </el-form-item>
        <el-form-item
            label="身份证号码："
            required="true">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item
            label="联系人电话号码："
            required="true">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="b">
      <el-form ref="form"
               :model="form"
               label-width="140px"
               size="mini"
               label-position="top">
        <el-form-item>
          <el-col :span="8">
            <el-form-item
                label="身份证正面照："
                required="true">
              <el-upload
                  :action="this.baseUrl+'applylist/imgupload'"
                  list-type="picture-card"
                  :on-success="handleSuccess2"
                  :before-upload="beforeUpload"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
                label="身份照反面照："
                required="true">
              <el-upload
                  :action="this.baseUrl+'applylist/imgupload'"
                  list-type="picture-card"
                  :on-success="handleSuccess3"
                  :on-preview="handlePictureCardPreview"
                  :before-upload="beforeUpload"
                  :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
                label="手持证件照："
                required="true">
              <el-upload
                  :action="this.baseUrl+'applylist/imgupload'"
                  list-type="picture-card"
                  :on-success="handleSuccess4"
                  :before-upload="beforeUpload"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </div>

    <!--信息完成模块-->
    <div v-show="c" class="e">
      <h1>信息已提交，请耐心等待审核。</h1>
    </div>
    <el-button @click="changeFromPro" class="e" v-show="b">上一步</el-button>
    <el-button @click="changeFromNext" class="e" v-show="!c">下一步</el-button>
  </div>
</template>
<script>
export default {
  name: 'Approve',
  data() {
    return {
      a: true,
      b: false,
      c: false,
      form: {
        id: 0,
        unitname: '',
        address: '',
        license: '',
        represent: '',
        representphone: '',
        number: 0,
        frontimg: '',
        backimg: '',
        handimg: '',
        phone: 0,
      },
      butname: 1,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    changeFromPro() {
      this.a = true
      this.b = false
      this.butname = 1
    },
    changeFromNext() {
      if (this.b) {
        this.c = true
        this.a = false
        this.b = false
        this.butname = 3
        this.submit()
      } else {
        this.a = !this.a
        this.b = !this.b
        this.butname = 2
      }
    },
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG，png 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleSuccess1(res, file) {

      this.form.license = res
    },
    handleSuccess2(res, file) {
      this.form.frontimg = res
    },
    handleSuccess3(res, file) {
      this.form.backimg = res
    },
    handleSuccess4(res, file) {
      this.form.handimg = res
    },
    submit() {
      this.axios({
            method: 'post',
            url: this.baseUrl + 'applylist/saveApply',
            data: {
              id: this.form.id,
              loginid:this.$store.state.loginId,
              unitname: this.form.unitname,
              address: this.form.address,
              license: this.form.license,
              represent: this.form.represent,
              representphone: this.form.representphone,
              number: this.form.number,
              frontimg: this.form.frontimg,
              backimg: this.form.backimg,
              handimg: this.form.handimg,
              phone: this.form.phone,
              time: this.form.time,
              type: this.form.type
            },
          }
      ).then(r => {

      })
    }
  }
}
</script>
<style>

.e {
  color: #32ca99;
}

.d {
  width: 1000px;
  margin: 0 auto;
}
</style>