<template>
  <div>
    <br>
    <br>
    <div class="nei_zhiwei_top">
      <div class="container">
        <div class="mg_t_20"></div>
        <div class="row mg_b_20">
          <div class="col-12 mg_b_15">
            <form class="mg_b_15">
              <div class="S_input_group">
                <div class="S_input">
                  <input class="S_input_inner form-control" v-model="keyword" autocomplete="off" value=""
                         placeholder="请输入职位或公司关键字搜索">
                </div>
                <button class="btn btn-secondary S_btn_zheng" @click.prevent="searchKey" id="searchbtn">搜&nbsp;索
                </button>
              </div>
            </form>
            <!-- 热门推荐  -->
            <div class="S_hot_search d-none d-md-flex">
              <div class="text-nowrap mg_r_20">
                <span class="color_gray">热门推荐</span>
              </div>
              <div class="S_search_list">
                <div v-for="(hotPost,index) in hotPosts" :key="index">
                  <a class="S_link_hover" @click="hotClick(index,hotPost)">{{ hotPost.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div><!--row-->
        <div class="hr"></div>
        <div class="row mg_b_10">
          <div class="col-12">
            <form class="nei_job_search">
              <div class="mb-3 d-flex">
                <div class="divcssa">
                  <el-dropdown @command="handleCommand1">
                 <span class="el-dropdown-link">
                  <font color="#32ca99">{{ njname === '' ? '职位类别' : njname }}</font>
                   <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item v-for="(jobtype,index) in jobtypes" :command="jobtype" :key="index">
                        {{ jobtype.name }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="divcssa">
                  <el-dropdown @command="handleCommand2">
                 <span class="el-dropdown-link">
                  <font color="#32ca99">{{ ntname === '' ? '工作经验' : ntname }}</font>
                   <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item v-for="(species,index) in species"
                                        :command="species" :key="index">
                        {{ species.name }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="divcssa">
                  <el-dropdown @command="handleCommand3">
                 <span class="el-dropdown-link">
                  <font color="#32ca99">{{ nn === '' ? '工作性质' : nn }}</font>
                   <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item v-for="(jobnature,index) in jobnatures"
                                        :command="jobnature.nature"
                                        :key="index">{{ jobnature.nature }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="divcssa">
                  <el-dropdown @command="handleCommand4">
                 <span class="el-dropdown-link">
                  <font color="#32ca99">{{ ns === '' ? '职位薪资' : ns }}</font>
                   <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item v-for="(salary,index) in salarys" :command="salary.salary" :key="index">
                        {{ salary.salary }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </form>
          </div>
        </div><!--row-->
      </div><!--container-->
    </div><!--nei_zhiwei_top-->


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
                                type="danger"
                                effect="dark">
                              急
                            </el-tag>&nbsp;&nbsp;
                          </div>
                          <div v-if="result.rworktype===0">
                            <el-tag
                                size="mini"
                                type="success"
                                effect="dark">
                              全
                            </el-tag>&nbsp;&nbsp;
                          </div>
                          <a class="nei_job_name text-truncate" v-on:click="lookPost(index,result)"
                             v-html="result.post"></a>
                          <small
                              class="text-muted text-nowrap ml-4">[<span>{{ result.rprovince }}{{ result.rcity }}</span>]</small>
                        </div>
                        <ul class="subnav subnav-divider text-muted mg_t_15">
                          <li>
                            <div><span class="N_text_salary">{{ result.rminsalary }}-{{ result.rmaxsalary }}k/月</span>
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
                      <div class="pd_20">
                        <div class="dis-flex flex-middle">
                          <el-popover
                              placement="top-start"
                              title="公司信息"
                              width="800"
                              trigger="hover">
                            <div>
                              <div class="nei_zhiwei_top">
                                <div class="container">
                                  <div class="d-flex">
                                    <div class="mr-4">
                                      <img lazy-img="" style="max-height: 75px;" alt="logo" :src="popos.logo"></div>

                                    <div class="flex-fill">
                                      <div class="su-flex su-flex-middle">
                                        <span class="txt_h2 font-weight-bold mb-0 mr-2">{{ popos.name }}</span>
                                        <span class="badge badge-primary mr-2">企业认证</span>
                                        <span class="badge badge-danger mr-2">实名认证</span>
                                      </div>

                                      <ul class="subnav text-muted d-inline-flex mt-2">
                                        <li>
                                          <span>{{ popos.ttype }}</span>
                                        </li>
                                        <li>
                                          <span>{{ popos.number }}人以上</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div><!--container-->
                              </div><!--nei_zhiwei_top-->

                              <div class="nei_zhiwei_cont mg_t_20 mg_b_20">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-md-12 col-lg-9">


                                      <div class="mb-2">
                                        <div class="bg-white no-gutters">
                                          <div class="mb-4 pd_20">
                                            <div class="mt_cont_tilte mb-3"><span>公司简介</span></div>
                                            <pre class="text-break color-original">
                                            {{ popos.introduction }}
                                            </pre>
                                            <hr/>
                                            <div class="mt_cont_tilte mb-3"><span>联系我们</span></div>
                                            <p>座机：{{ popos.landline }}</p>
                                            <p>邮箱：{{ popos.email }}</p>
                                            <p>
                                              地址：{{ popos.province }}{{ popos.city }}{{ popos.area }}{{
                                                popos.address
                                              }}</p>
                                          </div><!--mb-4-->

                                        </div><!--row bg-white-->
                                      </div><!--mg-2-->

                                    </div><!--col-lg-9-->
                                  </div><!--row-->
                                </div><!--container-->
                              </div><!--nei_zhiwei_cont-->
                            </div>

                            <a class="nei_company_name text-truncate"
                               title=""
                               @mouseover="showPopo(index,result.eid)"
                               slot="reference">{{ result.rname }}</a>
                          </el-popover>

                          <div v-if="result.rischeck === 1">
                            <span class="v-tag" title="企业认证"></span>
                          </div>
                          <div v-else>
                            <!--                          <span class="badge badge-pill badge-secondary" title="企业认证">未认证</span>-->
                            <span class="v-tag" title="企业认证"></span>
                          </div>
                        </div>
                        <p class="text-small mg_t_15"><span class="text-muted">{{ result.type }}</span></p>
                      </div>
                    </div>
                    <div class="d-none d-lg-flex col-lg-1 flex-middle justify-content-center">
                      <div class="nei_company_logo mb-2" style="width:54px;height:54px">
                        <el-image shape="circle" :size="60" fit="contain" :src="result.rlogo"></el-image>
                        <!--<img style="width: 54px;height: 54px" title="" :src="result.r_logo" alt="logo">-->
                      </div>
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

          <!--热门公司排行-->
          <div class="col-lg-3 d-none d-xl-block">
            <div class="bg-white pos_rel pd_10 card_shadow">
              <div class="mt_cont_tilte"><span>热门公司</span></div>
              <div class="nei_right_body" v-for="weight in weights" :key="weight">
                <ul class="nei_zhiwei_list">
                  <li>
                    <a @click="intoCompany(weight.loginid)">
                      <p>{{ weight.name }}&nbsp;&nbsp;<i class="fa fa-free-code-camp fa-lg" style="color:red"></i></p>
                      <span>{{ weight.type }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div><!--col-lg-3-->
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
                  <h4 class="font-weight-bold N_text_salary">{{ onePost.rminsalary }}-{{ onePost.rmaxsalary }}k/月</h4>

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

                      <hr>

                      <div class="su-grid text-center">
                        <div class="width_33 uk-first-column">
                          <div>
                            <el-progress type="circle" :percentage="50" :width="25"></el-progress>
                          </div>
                          <!--<h6 class="mb-1 font-weight-bold">88%</h6>-->
                          <small class="text-muted">简历查看率</small>
                        </div>
                        <div class="width_33">
                          <h6 class="mb-1 font-weight-bold">{{ onePost.countPost }}</h6>
                          <small class="text-muted">在招职位</small>
                        </div>
                        <div class="width_33">
                          <h6 class="mb-1 font-weight-bold">{{ onePost.countRecord }}</h6>
                          <small class="text-muted">被浏览次数</small>
                        </div>
                      </div>
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


    <!--回到顶部-->
    <el-backtop></el-backtop>

  </div><!--app-->
</template>
<script>

//import Qs from 'qs'

export default ({
  name: 'serch',
  data() {
    return {
      vl: true,  //一页时是否隐藏
      dialogVisible: false,  //显示弹窗
      baseurl: 'http://localhost:4000/api/',
      keyword: '',
      results: [
        {rpost: '前端', rjdescript: 'a', rprovince: '广东', rcity: '惠州', rztype: '服务业', rwelfares: '餐补', rname: '广东有限公司'}
      ],
      weights: [],
      onePost: [
        {countPost: 0, countRecord: 0}
      ],
      welfares: [],
      page: 1,  //显示的是哪一页
      pageSize: 5, //每一页显示的数据条数
      total: 0, //记录总数
      maxPage: 9,//最大页数
      num6: 1,
      popos: [],//提示框-
      hotPosts: [],//热词
      breakmsg: '',//返回的消息
      njname: '',//搜索词
      ntname: '',
      nj: '',//搜索词
      nt: 20,
      nn: '',
      ns: '',
      jobtypes: [],
      subtimes: [
        {time: '不限'},
        {time: '今天'},
        {time: '三天内'},
        {time: '一周内'},
        {time: '一个月内'},
        {time: '三个月内'},
      ],
      species: [],
      jobnatures: [
        {nature: '不限'},
        {nature: '全职'},
        {nature: '兼职'},

      ],
      salarys: [
        {salary: '不限'},
        {salary: '1000元以下'},
        {salary: '1000-2000元'},
        {salary: '2000-3000元'},
        {salary: '3000-5000元'},
        {salary: '5000-8000元'},
        {salary: '8000-1.2万元'},
        {salary: '1.2万-2万元'},
        {salary: '2万元以上'},
        {salary: '面议'},
      ],
    }
  },
  methods: {
    //关键词搜索
    searchKey() {
      this.pageHandler(1)
    },
    //pagehandler方法 跳转到page页
    pageHandler(page, pam) {
      if (pam != null) {
        this.keyword = pam.hpost;
      }
      var keyword = this.keyword;
      this.page = page;

      this.axios.get(this.baseurl + 'busRecruitinfo/getpage', {
        params: {
          pageSize: this.pageSize,
          pageNo: page,
          keyword: keyword,
          species: this.nt,
          worktype: this.nn,
          salary: this.ns,
          jobtype: this.nj,
        }
      }).then(response => {
        this.total = response.data.total;
        this.results = response.data.records
      })
    },
    handleCommand1(c) {
      this.nj = c.id
      this.njname = c.name
      //this.searchKey()
    },
    handleCommand2(c) {
      this.nt = c.id
      this.ntname = c.name
    },
    handleCommand3(c) {
      this.nn = c
    },
    handleCommand4(c) {
      this.ns = c
    },

    //热门公司排行
    getByWidth() {
      this.axios.get(this.baseurl + 'weight/getweight').then(response => {
        this.weights = response.data;
      })
    },

    //查看一条职位信息
    lookPost(index, p) {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let uid = userinfo['sub']
      this.dialogVisible = true
      this.axios({
            method: 'post',
            url: this.baseurl + 'busRecruitinfo/postone',
            data: {
              id: p.rid,
              cid: p.eid,
              uid: uid,
              post: p.rpost
            },
            // headers: {'Content-Type':'application/x-www-form-urlencoded'},
          }
      ).then(response => {
        this.onePost = response.data;
        var arr = response.data.rwelfares;
        this.welfares = arr.split(",")
        this.onePost.countPost = response.data.count[0]
        this.onePost.countRecord = response.data.count[1]
      })
      this.showPopo(index, p.eid)
    },

    //查看一条公司信息
    showPopo(index, eid) {
      this.axios.post(this.baseurl + 'companyinfo/getcomone',
          {
            loginId: eid,
          }
      ).then(response => {
        this.popos = response.data;
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
    //热门职位排序
    sortPost() {
      this.axios.get(this.baseurl + 'sortpost/getweight'
      ).then(response => {
        this.hotPosts = response.data;
      })
    },
    //热门搜索
    hotClick(index, hot) {
      this.pageHandler(1, hot)
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
    //进入公司简介
    intoCompany(loginId) {
      this.$router.push({
        path: `/CompanyInfo/${loginId}`,
      })
    }

  },
  mounted() {
    this.getParameter()
  },
  created() {
    //created  表示页面加载完毕，立即执行
    this.sortPost();
    this.getByWidth();
    this.pageHandler(1);
  }
});

</script>

<style>
@import '../assets/common/css/bootstrap.min.css';
@import '../assets/common/css/ui2.css';
@import '../assets/common/css/front.css';

.diva {
  float: left;
}

.aa {
  margin: 0 20px
}

.divcssa {
  margin: 0 60px
}
</style>


