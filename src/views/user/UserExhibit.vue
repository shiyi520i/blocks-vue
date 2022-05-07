<template>
  <div class="c">
    <br>
    <br>
    <br>
    <div class="nk-container">


      <div class="profile-info-wrapper">
        <div class="profile-level level5"></div>
        <div class="profile-info-main">
          <a class="head-pic js-nc-avatar" @click="changeAvatar">
            <img alt="头像" :src="avatarUrl">
          </a>
          <div class="profile-info-cont">
            <section>
              <a class="profile-user-name js-nc-title-tips">{{ userName === '' ? '默认名称' : userName }}</a>
              <span class="sex-ico male-ico js-nc-title-tips" title="男"></span>
            </section>
            <ul class="profile-cont clearfix" v-if="roleType!==1">
              <li><i class="icon-profile-edu"></i>{{ userData.graduate }}</li>

              <li><i class="icon-profile-time"></i>2021届</li>

              <li><i class="icon-profile-job"></i>{{ userData.position }}</li>

            </ul>
          </div>
        </div>
        <div class="profile-oprt-box" v-if="roleType!==1">
          <el-button type="text" class="b"
                     @click="uploadPdf"><i class="fa fa-upload" aria-hidden="true"></i>简历上传
          </el-button>
          <el-button type="text" class="b"
                     @click="d1 = true"><i class="fa fa-file-pdf-o b" aria-hidden="true"></i>预览简历
          </el-button>

          <a class="icon-reorder link-green profile-oprt-link">
            <div class="tooltip bottom tooltip-info">
              <div class="tooltip-arrow"><i></i></div>
              <div class="tooltip-inner">
                <ul class="profile-oprt-menu">
                  <li class="js-black" data-id="492752319" data-blacktype="0" data-name="如若丶">加入黑名单</li>
                  <li class="js-report" data-id="492752319">举报TA</li>
                </ul>
              </div>
            </div>
          </a>

        </div>
      </div>


      <!--弹窗文件上传-->
      <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          width="30%"
      >
        <el-upload
            class="upload-demo"
            drag
            :action="uploadUrl"
            :on-success="onSuccess"
            multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png/pdf文件，且不超过500kb</div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button></span>
      </el-dialog>


      <!--预览简历-->
      <el-dialog
          title="简历预览"
          :visible.sync="d1"
          width="30%">
        <Pdf :url="userData.cvurl"></Pdf>
      </el-dialog>
      <div class="nk-bar">


        <div class="module-box">
          <ul class="profile-menu">
            <li>
              <router-link to="/userexhibit">
                <a @click="changeSelected(0)" :class="classNum===0?'selected':''">
                  <i class="profile-icon p-ico-home"></i>
                  用户首页
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>

            <li>
              <router-link to="/userexhibit/editing">
                <a @click="changeSelected(1)" :class="classNum===1?'selected':''">
                  <i class="profile-icon with-icon-nc icon-nc-trends"></i>
                  新闻动态
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>

            <li>
              <router-link to="/userexhibit/postmanage">
                <a @click="changeSelected(2)" :class="classNum===2?'selected':''">
                  <i class="profile-icon p-ico-subject "></i>
                  职位管理
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>

            <li>
              <router-link to="/userexhibit/check">
                <a @click="changeSelected(3)" :class="classNum===3?'selected':''">
                  <i class="profile-icon p-ico-ft"></i>
                  企业审核
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>

            <li>
              <router-link to="/userexhibit/ApplicantsManage">
                <a @click="changeSelected(4)" :class="classNum===4?'selected':''">
                  <i class="profile-icon with-icon-nc icon-nc-circle"></i>
                  应聘管理
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>

            <li>
              <router-link to="/userexhibit/changePassword">
                <a @click="changeSelected(5)" :class="classNum===5?'selected':''">
                  <i class="profile-icon p-ico-project "></i>
                  修改密码
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>

            <li>
              <router-link to="/userexhibit/usercar">
                <a @click="changeSelected(6)" :class="classNum===6?'selected':''">
                  <i class="profile-icon p-ico-note"></i>
                  浏览记录
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/userexhibit/userdata">
                <a @click="changeSelected(7)" :class="classNum===7?'selected':''">
                  <i class="profile-icon p-ico-info"></i>
                  基本资料
                  <i class="icon-angle-right"></i>
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="nk-content">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import Pdf from "@/components/Pdf";
import store from "@/store";

export default {
  components: {
    Pdf
  },
  data() {
    return {
      title: '',
      dialogVisible: false,
      d1: false,
      fileList: [],
      uploadUrl: '',
      avatarUrl: 'https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/menAvatar.png',
      CVUrl: '',
      userData: [],
      classNum: 0
    };
  },
  computed: {
    roleType() {
      return store.state.type;
    },
    userName() {
      return store.state.name;
    },
    userId() {
      return store.state.loginId;
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    getData() {
      this.axios({
            method: 'get',
            url: this.baseUrl + 'user/getUser' + this.userId,
          }
      ).then(r => {
        this.userData = r.data
      })
    },
    changeAvatar() {
      this.dialogVisible = true
      this.title = "更换头像"
      if (this.roleType === 1) {
        this.uploadUrl = this.baseUrl + 'upload/logo'
      } else {
        this.uploadUrl = this.baseUrl + 'upload/avatar'
      }
    },
    onSuccess(response, file, fileList) {
      this.avatarUrl = response
    },
    uploadPdf() {
      this.dialogVisible = true
      this.title = "简历上传"
      this.uploadUrl = this.baseUrl + 'upload/CV'
    },
    changeSelected(num) {
      this.classNum = num
    }
  },
  mounted() {
    this.getData()
  }
};
</script>


<style>
@import "../../assets/common/css/global.css";
@import "../../assets/common/css/global.ui.css";
@import "../../assets/common/css/base.css";
@import "../../assets/common/css/default.css";
@import "../../assets/common/css/common.css";
@import "../../assets/common/css/env.css";
@import "../../assets/common/css/profilemainnew.css";
@import "../../assets/common/css/main.entry.css";

.b {
  color: #32ca99;
}

b:hover {
  background: #f4f4f4;
  color: #000;
}

.c {
  width: 1000px;
  margin: 0 auto;
}
</style>
