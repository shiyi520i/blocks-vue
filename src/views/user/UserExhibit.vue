<template>
  <div>
    <br>
    <br>
    <br>
    <div class="nk-container">


      <div class="profile-info-wrapper">
        <div class="profile-level level5"></div>
        <div class="profile-info-main">
          <a class="head-pic js-nc-avatar " data-avatar-uid="492752319">
            <img alt="头像" src="../../assets/common/picture/400m.png">
          </a>

          <div class="profile-info-cont">
            <section>
              <a class="profile-user-name js-nc-title-tips level-color-5" data-title="如若丶"
                 data-encode="1">如若丶</a>
              <span class="sex-ico male-ico js-nc-title-tips" title="男"></span>
              <span>
                        
                      </span>

            </section>
            <ul class="profile-cont clearfix">
              <li><i class="icon-profile-edu"></i>惠州学院</li>

              <li><i class="icon-profile-time"></i>2021届</li>

              <li><i class="icon-profile-job"></i>Java工程师</li>

            </ul>
          </div>
        </div>
        <div class="profile-oprt-box">
          <el-button type="text" class="b"
                     @click="dialogVisible = true"><i class="fa fa-upload" aria-hidden="true"></i>简历上传
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
          title="简历上传"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
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
        <Pdf :url="url"></Pdf>
      </el-dialog>
      <div class="nk-bar">





        <div class="module-box">
          <ul class="profile-menu">
            <li>
              <a href="/profile/492752319?noredirect=true" class="selected">
                <i class="profile-icon p-ico-home"></i>
                首页
                <i class="icon-angle-right"></i>
              </a>
            </li>


            <li>
              <a href="/profile/492752319/moment">
                <i class="profile-icon with-icon-nc icon-nc-trends"></i>
                动态
                <i class="icon-angle-right"></i>
              </a>
            </li>


            <li>
              <a href="/profile/492752319/tests">
                <i class="profile-icon p-ico-subject "></i>
                刷题
                <i class="icon-angle-right"></i>
              </a>
            </li>

            <li>
              <a href="/profile/492752319/myDiscussPost">
                <i class="profile-icon p-ico-ft"></i>
                讨论帖
                <i class="icon-angle-right"></i>
              </a>
            </li>


            <li>
              <a href="/profile/492752319/circle/joined">
                <i class="profile-icon with-icon-nc icon-nc-circle"></i>
                圈子
                <i class="icon-angle-right"></i>
              </a>
            </li>


            <li>
              <a href="/profile/492752319/project/mine">
                <i class="profile-icon p-ico-project "></i>
                项目
                <i class="icon-angle-right"></i>
              </a>
            </li>


            <li>
              <a href="/profile/492752319/note">
                <i class="profile-icon p-ico-note"></i>
                笔记
                <i class="icon-angle-right"></i>
              </a>
            </li>


            <li>
              <router-link to="/userexhibit/userdata">
                <i class="profile-icon p-ico-info"></i>
                基本资料
                <i class="icon-angle-right"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="nk-content">
        <router-view>
          <div class="module-box">
            <div class="module-head clearfix">
              <h1>成就</h1>
            </div>
            <div class="module-body paw-wrapper">


              <div class="paw-mod">
                <a href="/profile/492752319/honor/detail">
                  <div class="paw-mod-hd"><h2>
                    成就值
                    <span class="level-num no4"></span>
                  </h2>
                    <div class="num"><i class="icon-nc-flag-hollow"></i>
                      <span class="txt">340</span>
                    </div>
                    <span class="help-wrapper link-gray js-explain"><i class="icon-nc-question-sign"></i>
                            </span>
                  </div>
                  <div class="paw-mod-bd">
                            <span>
                                <i class="icon-nc-heart mt1"></i>
                                <span class="txt">获赞与收藏</span>
                                <span class="num">0</span>
                            </span>
                    <span>
                                <i class="icon-nc-correct2"></i>
                                <span class="txt">题目正确</span>
                                <span class="num">340</span>
                            </span>
                    <span>
                                <i class="icon-nc-code-right"></i>
                                <span class="txt">编程正确</span>
                                <span class="num">0</span>
                            </span>
                    <span>
                                <i class="icon-nc-smile"></i>
                                <span class="txt">优质内容</span>
                                <span class="num">0</span>
                            </span>
                  </div>
                </a>
              </div>
              <div class="paw-mod">
                <a href="/profile/492752319/badges">
                  <div class="paw-mod-hd">
                    <h2>徽章</h2>
                    <div class="num"><i class="icon-nc-badge"></i>
                      <span class="txt">1</span>
                    </div>
                  </div>
                  <div class="paw-mod-bd">
                        <span>
                            <i class="icon-nc-beetle"></i>
                            <span class="txt">LV1</span>
                            <span class="num">0/11</span>
                        </span>
                    <span>
                            <i class="icon-nc-fish mt1"></i>
                            <span class="txt">LV2</span>
                            <span class="num">0/9</span>
                        </span>
                    <span>
                            <i class="icon-nc-bird mt1"></i>
                            <span class="txt">LV3</span>
                            <span class="num">0/9</span>
                        </span>
                    <span>
                            <i class="icon-nc-beast"></i>
                            <span class="txt">LV4</span>
                            <span class="num">0/9</span>
                        </span>
                    <span>
                            <i class="icon-nc-prehistory"></i>
                            <span class="txt">LV5</span>
                            <span class="num">1/5</span>
                        </span>
                  </div>
                </a>
              </div>


              <div class="paw-mod js-mod-link" data-href="/sns/492752319/following">
                <div class="paw-mod-hd">
                  <h2>关注</h2>
                  <div class="num"><i class="icon-nc-star1"></i>
                    <span class="txt">5</span>
                  </div>
                </div>
                <div class="paw-mod-bd">

                  <a href="/sns/492752319/following">
                    <i class="icon-nc-people-add"></i>
                    <span class="txt">关注了</span>
                    <span class="num">5</span>
                  </a>
                  <a href="/sns/492752319/followers">
                    <i class="icon-nc-people"></i>
                    <span class="txt">关注者</span>
                    <span class="num">0</span>
                  </a>
                </div>
              </div>


              <div class="module-head clearfix">
                <h1>技能</h1>
                <div class="module-head-oprt">
                  <div class="btn-group btn-group-sm js-job-select"></div>
                </div>
              </div>
              <div class="module-body" id="sideRaderBox">
                <div class="rader-container"></div>
              </div>

            </div>
          </div>
        </router-view>

      </div>


    </div>
  </div>
</template>

<script>
import Pdf from "@/components/Pdf";

export default {
  components: {
    Pdf
  },
  data() {
    return {
      dialogVisible: false,
      d1: false,
      url:'wocaoniam'
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    }
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
b:hover {background:#f4f4f4;
  color:#000;}
</style>
