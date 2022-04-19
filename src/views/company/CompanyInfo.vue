<template>


  <div class="nk-container    ">


    <div class="nk-main clearfix">

      <div class="nk-content">
        <div class="module-box">

          <div class="tech-introduce clearfix">
            <div class="tech-picture">
              <img :src="popos.logo">
            </div>
            <div class="tech-intr-detail">
              <div class="tech-intr-title">
                <h1>{{ popos.companyname }}</h1>
                <span class="v-tag"></span>
              </div>
              <p>{{ popos.introduction }}</p>
              <div class="tech-intr-box">
                <div class="su-grid text-center">
                  <div class="width_33 uk-first-column">
                    <div>
                      <el-progress type="circle" :percentage="50" :width="25"></el-progress>
                    </div>
                    <!--<h6 class="mb-1 font-weight-bold">88%</h6>-->
                    <small class="text-muted">简历查看率</small>
                  </div>
                  <div class="width_33">
                    <h6 class="mb-1 font-weight-bold">{{countPost }}</h6>
                    <small class="text-muted">在招职位</small>
                  </div>
                  <div class="width_33">
                    <h6 class="mb-1 font-weight-bold">{{countRecord }}</h6>
                    <small class="text-muted">被浏览次数</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="nei_zhiwei_cont mg_t_20 mg_b_20">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-9">

                <div>
                  <div v-for="(result,index) in results" :key="index">
                    <div class="mb-2">
                      <div class="row bg-white no-gutters">
                        <div class="col-lg-7 col-md-7">
                          <div class="pd_20">
                            <div class="dis-flex flex-middle">
                              <div v-if="result.rstats===0">
                                <el-tag
                                    size="mini"
                                    effect="light"
                                    type="danger"
                                >
                                  急
                                </el-tag>&nbsp;&nbsp;
                              </div>
                              <div v-if="result.rworktype===0">
                                <el-tag
                                    size="mini"
                                    type="success"
                                    effect="light">
                                  全
                                </el-tag>&nbsp;&nbsp;
                              </div>
                              <a class="nei_job_name text-truncate" v-on:click="lookPost(index,result)"
                                 v-html="result.post"></a>
                              <small
                                  class="text-muted text-nowrap ml-4">[<span>{{ result.rprovince }}{{
                                  result.rcity
                                }}</span>]</small>
                            </div>
                            <ul class="subnav subnav-divider text-muted mg_t_15">
                              <li>
                                <div><span class="N_text_salary">{{ result.rminsalary }}-{{
                                    result.rmaxsalary
                                  }}k/月</span>
                                </div>
                              </li>
                              <li class="d-none d-lg-flex">
                                <div><span v-text="result.jexperience"></span></div>
                              </li>
                              <li>
                                <div><span v-text="result.erequirement"></span></div>
                              </li>
                              <li class="d-none d-lg-flex">
                                <div><span v-text="result.rtime"></span></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="d-none d-md-block col-lg-4 col-md-5">
                        </div>
                      </div><!--row bg-white-->
                      <div class="welfare_list">
                        <el-tag
                            v-for="we in result.welfares"
                            type="danger"
                            effect="plain"
                            :key="we">
                          {{ we }}
                        </el-tag>
                      </div>

                    </div><!--mg-2-->
                  </div>
                </div>

                <!--分页-->
                <div class="wrap" id="wrap">
                  <el-pagination
                      background
                      layout="prev, pager, next"
                      @current-change="pageHandler"
                      :page-size="pageSize"
                      :current-page="page"
                      :hide-on-single-page="vl"
                      :total="total">
                  </el-pagination>
                </div>
              </div><!--col-lg-9-->

            </div><!--row-->
          </div><!--container-->
        </div><!--nei_zhiwei_cont-->
        <!-- 职位信息 -->
        <el-dialog
            title="职位信息"
            :visible.sync="dialogVisible"
            width="50%">
          <div class="nei_zhiwei_cont mg_t_20 mg_b_20">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-lg-9">

                  <div class="mb-2">
                    <div class="bg-white no-gutters p-4">
                      <h4 class="">{{ onePost.rpost }}</h4>
                      <h4 class="font-weight-bold N_text_salary">{{ onePost.rminsalary }}-{{
                          onePost.rmaxsalary
                        }}k/月</h4>

                      <p class="welfare_list pl-0">
                        <span v-for="welfare in welfares" :key="welfare">{{ welfare }}</span>
                      </p>

                      <hr>
                      <ul class="subnav subnav-divider mt-2 mb-4">
                        <li title="区域">{{ onePost.rcity }}&nbsp;-&nbsp;{{ onePost.rarea }}</li>
                        <li title="工作经验">{{ onePost.jexperience }}</li>
                        <li title="需要学历">{{ onePost.erequirement }}</li>
                        <li title="招聘人数">{{ onePost.rnumber }}人</li>
                        <li title="所属行业">{{ onePost.rztype }}</li>
                      </ul>
                      <p>
                        <a class="nei_job_name text-truncate aa" @click="applyPost"><i class="fa fa-share fa-lg"
                                                                                       style="color:#32ca99"></i><small
                            class="text-muted">申请</small></a>
                        <a class="nei_job_name text-truncate aa"><i class="fa fa-heart fa-lg"
                                                                    style="color:#FF6A6A"></i><small
                            class="text-muted">收藏</small></a>
                        <a class="nei_job_name text-truncate aa"><i class="fa fa-comments fa-lg"
                                                                    style="color:#409EFF"></i><small
                            class="text-muted">沟通</small></a>
                      </p>
                    </div>
                  </div>


                  <div class="mb-2">
                    <div class="bg-white no-gutters">
                      <div class="mb-4 pd_20">
                        <div class="mt_cont_tilte mb-3"><span>职位描述</span></div>
                        <pre class="text-break color-original" v-html="onePost.rjdescript"></pre>

                        <hr/>
                        <div class="mt_cont_tilte mb-3"><span>工作地点</span></div>
                        <p>{{ onePost.rprovince }}{{ onePost.rcity }}{{ onePost.rarea }}{{ onePost.rjaddress }}</p>
                      </div><!--mb-4-->

                    </div><!--row bg-white-->
                  </div><!--mg-2-->


                </div><!--col-lg-9-->
                <div class="col-lg-3 d-none d-xl-block">
                  <div class="bg-white pos_rel pd_10 card_shadow">

                    <div class="nei_right_body">


                      <div class="mb-3">
                        <div class="txt_center pl-2 pr-2 pt-3 pb-3">
                          <div class="nei_company_logo align-center mb-2">
                            <el-image shape="circle" :size="60" fit="contain" :src="popos.logo"></el-image>
                          </div>
                          <h5 class="mb-1 text-truncate"></h5>
                          <a class="text-dark font-weight-bold" title="" href="">{{ popos.companyname }}</a>
                          <p>
                            <small class="d-block text-truncate">{{ popos.ttype }}</small>
                          </p>
                          <p><span class="badge badge-primary mr-1" title="企业认证">企业认证</span>
                            <span class="badge badge-success mr-1" title="实名认证">实名认证</span>
                          </p>
                        </div>

                        <hr>

                        <div class="p-3">
                          <h5 class="font-weight-bold">联系方式</h5>
                          <div class="text-muted">
                            <div class="mt-1  diva">
                              <i class="fa fa-user-o mr-2"></i><span class="text-muted">{{ onePost.conName }}</span>
                            </div>
                            <div class="mt-1  diva">
                              <i class="fa fa-whatsapp mr-2"></i><span
                                style="color: var(--red)">{{ onePost.conPhone }}</span>
                            </div>
                            <div class="mt-1 text-truncate  diva">
                              <i class="fa fa-send-o mr-2"></i><a class="text-muted">{{ onePost.conEmail }}</a>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div><!--col-lg-3-->
              </div><!--row-->
            </div><!--container-->
          </div><!--nei_zhiwei_cont-->
        </el-dialog>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vl: true,  //一页时是否隐藏
      dialogVisible: false,  //显示弹窗
      keyword: '',
      results: [
        {rpost: '前端', rjdescript: 'a', rprovince: '广东', rcity: '惠州', rztype: '服务业', rwelfares: '餐补', rname: '广东有限公司'}
      ],
      weights: [],
      onePost: [],
      welfares: [],
      page: 1,  //显示的是哪一页
      pageSize: 5, //每一页显示的数据条数
      total: 0, //记录总数
      maxPage: 9,//最大页数
      num6: 1,
      popos: [],//提示框-
      countPost: 0,
      countRecord: 0
    };
  },
  methods: {
    //pagehandler方法 跳转到page页
    pageHandler(page) {
      this.axios.get(this.baseUrl + 'busRecruitinfo/getpagesim', {
        params: {
          pageSize: this.pageSize,
          pageNo: page,
          keyword: this.$route.params.id
        }
      }).then(response => {
        this.total = response.data.total;
        this.results = response.data.records
      })

    },

    //查看一条职位信息
    lookPost(index, p) {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let uid = userinfo['sub']
      this.dialogVisible = true
      this.axios({
            method: 'post',
            url: this.baseUrl + 'busRecruitinfo/postone',
            data: {
              id: p.rid,
              cid: p.eid,
              uid: uid,
              post: p.rpost
            }
          }
      ).then(response => {
        this.onePost = response.data;
        var arr = response.data.rwelfares;
        this.welfares = arr.split(",")

      })
      this.showPopo(index, p.eid)
    },

    //查看一条公司信息
    showPopo() {
      this.axios.post(this.baseUrl + 'companyinfo/getcomone',
          {
            loginId: this.$route.params.id
          }
      ).then(response => {
        this.popos = response.data;
      })
    },
    getCount() {
      this.axios.get(this.baseUrl + 'busRecruitinfo/getcount', {
            params: {
              loginId: this.$route.params.id
            }
          }
      ).then(response => {
        this.countPost = response.data[0]
        this.countRecord = response.data[1]
      })
    },
    //申请职位
    applyPost() {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let uid = userinfo['sub']
      console.log(this.onePost)
      this.$confirm('系统将自动发送简历到该公司，请确认申请该职位?', '提示', {
        confirmButtonText: '申请',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        this.axios.post(this.baseurl + 'record/applypost', {
          rid: this.onePost.rid,
          cid: this.onePost.eid,
          post: this.onePost.rpost,
          uid: uid
        }).then(response => {
          this.breakmsg = response.data.msg;
          if (response.data.code === 400) {
            this.$message({
              duration: 5000,
              type: 'error',
              message: this.breakmsg
            });
          } else {
            this.$message({
              type: 'success',
              message: '申请成功，请静候佳音！'
            });
          }

        }).catch(e => {
          console.log(e)
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消申请'
        });
      });
    },
    //获取参数
    getParameter() {

      this.axios({
            method: 'get',
            url: this.baseUrl + 'parameter/getparameter',
          }
      ).then(response => {
        this.jobtypes = response.data['hyfl']
        this.species = response.data['gzyq']
      })
    },

  },
  mounted() {
    this.getParameter()
    this.pageHandler(1)
    this.showPopo()
    this.getCount()
    console.log(this.$route.params.id)
    console.log(this.countRecord)
  }
}
</script>

<style>
@import "../../assets/common/css/global.css";
@import "../../assets/common/css/global.ui.css";
@import "../../assets/common/css/base.css";
@import "../../assets/common/css/default.css";
@import "../../assets/common/css/common.css";
@import "../../assets/common/css/env.css";
@import "../../assets/common/css/techtogether.css";

@import '../../assets/common/css/bootstrap.min.css';
@import '../../assets/common/css/ui2.css';
@import '../../assets/common/css/front.css';

/*#wrap ul li {background-color:#32ca99;}*/
</style>