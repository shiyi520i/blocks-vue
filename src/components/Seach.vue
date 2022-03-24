<template>
<div>
<br>
<br>
  <div class="nei_zhiwei_top">
    <div class="container">
      <div class="mg_t_20"></div>
      <div class="row mg_b_20">
        <div class="col-12 mg_b_15">
          <form class="mg_b_15"  >
            <div class="S_input_group">
              <div class="S_input">
                <input class="S_input_inner form-control"  v-model="keyword"  autocomplete="off" value="" placeholder="请输入职位或公司关键字搜索">
              </div>
              <button class="btn btn-secondary S_btn_zheng"  @click.prevent="searchKey" id="searchbtn">搜&nbsp;索</button>
            </div>
          </form>
          <!-- 热门推荐  -->
          <div class="S_hot_search d-none d-md-flex">
            <div class="text-nowrap mg_r_20">
              <span class="color_gray">热门推荐</span>
            </div>
            <div class="S_search_list">
              <div v-for="(hotPost,index) in hotPosts"   :key="index">
                <a class="S_link_hover"   @click="hotClick(index,hotPost)">{{hotPost.name}}</a>
              </div>
            </div>
          </div>
        </div>
      </div><!--row-->
      <div class="hr"></div>
      <div class="row mg_b_10">
        <div class="col-12">
          <form class="nei_job_search" >
            <div class="mb-3 d-flex" >
              <div class="search_title text-muted text-justify">职位类别</div>
              <div class="flex-grow-1" >
                <ul class="N__search_labels subnav subnav-pill mb-0">
                  <li class="" :class="{nei_active:index==num1}" v-for="(jobtype,index) in jobtypes" v-on:click="onclick1(index,jobtype)" :key="index">
                    <a class="text-nowrap" >{{jobtype.jtype}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-3 d-flex">
              <div class="search_title text-muted text-justify">发布时间</div>
              <div class="flex-grow-1" >
                <ul class="N__search_labels subnav subnav-pill mb-0">
                  <li :class="{nei_active:index==num2}" v-for="(subtime,index) in subtimes" v-on:click="onclick2(index,subtime)" :key="index">
                    <a class="text-nowrap" >{{subtime.time}}</a>
                  </li>
                </ul>
              </div>
            </div><div class="mb-3 d-flex">
            <div class="search_title text-muted text-justify">工作性质</div>
            <div class="flex-grow-1" >
              <ul class="N__search_labels subnav subnav-pill mb-0" >
                <li :class="{nei_active:index==num3}" v-for="(jobnature,index) in jobnatures" v-on:click="onclick3(index,jobnature)" :key="index">
                  <a class="text-nowrap" >{{jobnature.nature}}</a>
                </li>
              </ul>
            </div>
          </div><div class="mb-3 d-flex">
            <div class="search_title text-muted text-justify">职位薪资</div>
            <div class="flex-grow-1" >
              <ul class="N__search_labels  subnav subnav-pill mb-0" >
                <li :class="{nei_active:index==num4}"  v-for="(salary,index) in salarys" v-on:click="onclick4(index,salary)" :key="index">
                  <a class="text-nowrap">{{salary.salary}}</a>
                </li>
              </ul>
            </div>
          </div></form>
        </div>
      </div><!--row-->
    </div><!--container-->
  </div><!--nei_zhiwei_top-->


  <div class="nei_zhiwei_cont mg_t_20 mg_b_20">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-9">

          <div  >
            <div v-for="(result,index) in results" :key="index">
              <div class="mb-2">
                <div class="row bg-white no-gutters">
                  <div class="col-lg-7 col-md-7">
                    <div class="pd_20">
                      <div class="dis-flex flex-middle">
                        <!--<span class="N_mark N_square N_top mr-2">{{result.r_stats}}</span>-->
                        <el-tag
                            size="mini"
                            type="danger"
                            effect="dark">
                          急
                        </el-tag>&nbsp;&nbsp;
                        <el-tag
                            size="mini"
                            type="success"
                            effect="dark">
                          全
                        </el-tag>&nbsp;&nbsp;
                        <a class="nei_job_name text-truncate"   v-on:click="lookPost(index,result)" v-html="result.rpost"></a>
                        <small class="text-muted text-nowrap ml-4">[<span>{{result.rprovince}}{{result.rcity}}</span>]</small></div>
                      <ul class="subnav subnav-divider text-muted mg_t_15">
                        <li>
                          <div><span class="N_text_salary">{{result.rminsalary}}-{{result.rmaxsalary}}k/月</span></div>
                        </li>
                        <li class="d-none d-lg-flex">
                          <div><span v-text="result.rold"></span></div>
                        </li>
                        <li class="d-none d-lg-flex">
                          <div><span v-text="result.rage"></span></div>
                        </li>
                        <li>
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
                          <div >
                            <div class="nei_zhiwei_top">
                              <div class="container">
                                <div class="d-flex">
                                  <div class="mr-4">
                                    <img lazy-img="" style="max-height: 75px;" alt="logo" src="${contextPath}/images/front/comp/comp1.png"></div>

                                  <div class="flex-fill">
                                    <div class="su-flex su-flex-middle">
                                      <span class="txt_h2 font-weight-bold mb-0 mr-2">{{popos.name}}</span>
                                      <span class="badge badge-primary mr-2">企业认证</span>
                                      <span class="badge badge-danger mr-2">实名认证</span>
                                    </div>

                                    <ul class="subnav text-muted d-inline-flex mt-2">
                                      <li>
                                        <span>{{popos.type}}</span>
                                      </li>
                                      <li>
                                        <span>{{popos.number}}人以上</span>
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
测试信息，稍后修改为正式；测试信息，稍后修改为正式；测试信息，稍后修改为正式；测试信息，稍后修改为正式；测试信息，稍后修改为正式；测试信息，稍后修改为正式；测试信息，稍后修改为正式；

</pre>

                                          <hr />
                                          <div class="mt_cont_tilte mb-3"><span>联系我们</span></div>
                                          <p>座机：{{popos.Landline}}</p>
                                          <p>邮箱：{{popos.email}}</p>
                                          <p>地址：{{popos.province}}{{popos.city}}{{popos.area}}{{popos.address}}</p>
                                        </div><!--mb-4-->

                                      </div><!--row bg-white-->
                                    </div><!--mg-2-->

                                  </div><!--col-lg-9-->
                                </div><!--row-->
                              </div><!--container-->
                            </div><!--nei_zhiwei_cont-->
                          </div>

                          <a class="nei_company_name text-truncate" target="_blank"
                             title=""
                             @mouseover="showPopo(index,result)"
                             slot="reference">{{result.rname}}</a>
                        </el-popover>
                        <div v-if="result.rischeck === 1">
                          <span class="v-tag" title="企业认证"></span>
                        </div>
                        <div v-else>
<!--                          <span class="badge badge-pill badge-secondary" title="企业认证">未认证</span>-->
                          <span class="v-tag" title="企业认证"></span>
                        </div>
                      </div>
                      <p class="text-small mg_t_15"><span class="text-muted">{{result.rztype}}</span></p>
                    </div>
                  </div>
                  <div class="d-none d-lg-flex col-lg-1 flex-middle justify-content-center">
                    <div class="nei_company_logo mb-2" style="width:54px;height:54px">
                      <el-image shape="square" :size="54" fit="contain" :src="result.rlogo"></el-image>
                      <!--<img style="width: 54px;height: 54px" title="" :src="result.r_logo" alt="logo">-->
                    </div>
                  </div>
                </div><!--row bg-white-->
                <div class="welfare_list">
                  <div >
                    <!--<span v-for="we in result.r_welfares">{{we}}</span>-->
                    <el-tag
                        v-for="we in result.rwelfares"
                        type="danger"
                        effect="plain"
                        :key="we">
                      {{ we }}
                    </el-tag>
                  </div>
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
                :total="100">
            </el-pagination>
          </div>
        </div><!--col-lg-9-->

        <!--热门公司排行-->
        <div class="col-lg-3 d-none d-xl-block">
          <div class="bg-white pos_rel pd_10 card_shadow">
            <div class="mt_cont_tilte"><span>热门公司</span></div>
            <div class="nei_right_body" v-for="weight in weights" :key="weight">
              <ul class="nei_zhiwei_list" >
                <li><a :href="url+weight.id+'&'+'pageSize=5'" target="_blank" >
                  <p>{{weight.name}}&nbsp;&nbsp;<i class="fa fa-free-code-camp fa-lg" style="color:red"></i></p>
                  <span>{{weight.type}}</span></a></li>
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
                      <h4 class="">{{onePost.rpost}}</h4>
                      <h4 class="font-weight-bold N_text_salary">{{onePost.rminsalary}}-{{onePost.rmaxsalary}}k/月</h4>

                      <p class="welfare_list pl-0" >
                        <span v-for="welfare in welfares" :key="welfare">{{welfare}}</span>
                      </p>

                      <hr>
                      <ul class="subnav subnav-divider mt-2 mb-4">
                        <li title="区域">{{onePost.rcity}}&nbsp;-&nbsp;{{onePost.rarea}}</li>
                        <li title="工作经验">{{onePost.rjexperience}}</li>
                        <li title="需要学历">{{onePost.rerequirement}}</li>
                        <li title="招聘人数">{{onePost.rnumber}}人</li>
                        <li title="所属行业">{{onePost.rztype}}</li>
                      </ul>
                      <p>
                        <button id="" class="btn btn-primary  mr-3" type="button" @click="applyPost(onePost)">
                          <span>申请职位</span>
                        </button>
                        <a class="nei_job_name text-truncate"><i class="fa fa-heart fa-lg" style="color:red"></i>收藏</a>
                        <a class="nei_job_name text-truncate"><i class="fa fa-comments fa-lg" style="color:#409EFF"></i>立即沟通</a>
                      </p>
                    </div>
                  </div>


                  <div class="mb-2">
                    <div class="bg-white no-gutters">
                      <div class="mb-4 pd_20">
                        <div class="mt_cont_tilte mb-3"><span>职位描述</span></div>
                        <pre class="text-break color-original" v-html="onePost.rjdescript"></pre>

                        <hr />
                        <div class="mt_cont_tilte mb-3"><span>工作地点</span></div>
                        <p>{{onePost.rprovince}}{{onePost.rcity}}{{onePost.rarea}}{{onePost.rjaddress}}</p>
                      </div><!--mb-4-->

                    </div><!--row bg-white-->
                  </div><!--mg-2-->



                </div><!--col-lg-9-->
                <div class="col-lg-3 d-none d-xl-block">
                  <div class="bg-white pos_rel pd_10 card_shadow">

                    <div class="nei_right_body">


                      <div class="mb-3">
                        <div class="txt_center pl-2 pr-2 pt-3 pb-3">
                          <div class="nei_company_logo align-center mb-2" style="height:54px">
                            <img title="" style="width: 54px; height: 54px;" alt="logo" src="${contextPath}/images/front/comp/comp1.png">
                          </div>
                          <h5 class="mb-1 text-truncate"></h5>
                          <a class="text-dark font-weight-bold" title="" target="_blank" href="">{{popos.name}}</a>
                          <p>
                            <small class="d-block text-truncate">{{popos.type}}</small>
                          </p>
                          <p><span class="badge badge-primary mr-1" title="企业认证">企业认证</span>
                            <span class="badge badge-success mr-1" title="实名认证">实名认证</span>
                          </p>

                          <hr>

                          <div class="su-grid text-center">
                            <div class="width_33 uk-first-column">
                              <div><el-progress type="circle" :percentage="50" :width="25"></el-progress></div>
                              <!--<h6 class="mb-1 font-weight-bold">88%</h6>-->
                              <small class="text-muted">简历查看率</small>
                            </div>
                            <div class="width_33">
                              <h6 class="mb-1 font-weight-bold">2</h6>
                              <small class="text-muted">在招职位</small>
                            </div>
                            <div class="width_33">
                              <h6 class="mb-1 font-weight-bold">22222</h6>
                              <small class="text-muted">被浏览次数</small>
                            </div>
                          </div>
                        </div>

                        <hr>

                        <div class="p-3">
                          <h5 class="font-weight-bold">联系方式</h5>
                          <div class="text-muted">
                            <div class="mt-1">
                              <i class="fa fa-user-o mr-2"></i><span class="text-muted">{{popos.conname}}</span>
                            </div>
                            <div class="mt-1">
                              <i class="fa fa-whatsapp mr-2"></i><span style="color: var(--red)">{{popos.Landline}}</span>
                            </div>
                            <div class="mt-1 text-truncate">
                              <i class="fa fa-send-o mr-2"></i><a class="text-muted" target="_blank" href="">{{popos.email}}</a>
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
export default ({
    name:'serch',
    data(){
      return {
        vl:true,  //一页时是否隐藏
        dialogVisible: false,  //显示弹窗
        keyword: '',
        keywords: '',
        results: [
          {rpost:'前端',rjdescript:'a',rprovince:'广东',rcity:'惠州',rztype:'服务业',rwelfares:'餐补',rname:'广东有限公司'}
        ],
        weights:[],
        onePost: [],
        welfares:[],
        page: 1,  //显示的是哪一页
        pageSize: 5, //每一页显示的数据条数
        total: 0, //记录总数
        maxPage: 9,//最大页数
        num1: 0,//ativty
        num2: 0,
        num3: 0,
        num4: 0,
        num6: 1,
        popos: [],//提示框-
        hotPosts:[],//热词
        breakmsg:'',//返回的消息
        url:'${contextPath}/member/enterprise/getInfor?id=',
        nj:'',//搜索词
        nt:'',
        nn:'',
        ns:'',
        jobtypes: [
          {jtype: '不限'},
          {jtype: '销售'},
          {jtype: '行政人事文员'},
          {jtype: '财务会计'},
          {jtype: '普工/技工'},
          {jtype: '客服'},
          {jtype: 'IT计算机'},
          {jtype: '教育培训'},
          {jtype: '营销策划'},
          {jtype: '餐饮娱乐'},
          {jtype: '司机/保安/后勤'},
          {jtype: '设计'},
          {jtype: '物流/贸易/仓库管理'},
          {jtype: '摄影/影视'},
          {jtype: '房产/物业/中介'},
          {jtype: '运营管理'},
          {jtype: '化工制药'},
          {jtype: '电子电气'},
          {jtype: '金融证券'},
          {jtype: '美容/美发'},
          {jtype: '银行保险'},
          {jtype: '建筑施工'},
          {jtype: '医疗医药'},
          {jtype: '电子通讯'},
          {jtype: '翻译法律'},
          {jtype: '超市/百货/零售'},
          {jtype: '工厂工业'},
          {jtype: '机械仪表'},
          {jtype: '能源环保'},
          {jtype: '服装/纺织/食品'},
          {jtype: '编辑/发行'},
          {jtype: '其他'},
        ],
        subtimes: [
          {time: '不限'},
          {time: '今天'},
          {time: '三天内'},
          {time: '一周内'},
          {time: '一个月内'},
          {time: '三个月内'},
        ],
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

        this.axios.get('http://localhost:4000/api/busRecruitinfo/getpage', {
          params: {
            pageSize: this.pageSize,
            pageNo: page,
            keyword: keyword,
            time: this.nt,
            worktype: this.nn,
            salary: this.ns,
            jobtype: this.nj,
          }
        }).then(response => {
          this.total = response.data.totalRows;
          this.results = response.data;
        })

      },
      onclick1(index, type) {
        this.num1 = index
        this.nj = type.jtype
        //this.searchKey()
      },
      onclick2(index, type) {
        this.num2 = index
        this.nt = type.time
        console.log(index, type.time, this.keywords);
      },
      onclick3(index, type) {
        this.num3 = index
        this.nn = type.nature
        console.log(index, type.nature, this.keywords);
      },
      onclick4 (index, type) {
        this.num4 = index
        this.ns = type.salary
        console.log(index, type.salary, this.keywords);
      },
      getByWidth(){
        this.axios.get('http://localhost:4000/api/weight/getweight').then(response => {
          console.log(response)
          this.weights= response.data;
        })
      },
      lookPost(index,p){
        this.dialogVisible = true
        this.axios.get('http://localhost:4000/api/companyinfo/getall',{
          params: {
            id:p.rid
          }
        }).then(response => {
          this.onePost= response.data;
          var arr= response.data.rwelfares;
          this.welfares = arr.split(",")

        })
       // this.showPopo(index,p)
      },
      showPopo(index,popo){
        this.axios.get('${contextPath}/member/getComOne',{
          params:{
            id:popo.id,
          }
        }).then(response => {
          this.popos= response.data;
        })
      },
      //申请职位
      applyPost() {
        this.$confirm('系统将自动发送简历到该公司，请确认申请该职位?', '提示', {
          confirmButtonText: '申请',
          cancelButtonText: '取消',
          type: 'success'
        }).then(() => {
          this.axios.get('${contextPath}/member/applyPost', {
            params: {
              rid: this.onePost.r_id,
              eid: this.onePost.id,
              rpost: this.onePost.r_post
            }
          }).then(response => {
            this.breakmsg=response.data.msg;
            if (response.data.success == false) {
              this.$message({
                duration:5000,
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
      sortPost(){
        this.axios.get('http://localhost:4000/api/sortpost/getweight'
        ).then(response => {
          this.hotPosts= response.data;
        })
      },
      //热门搜索
      hotClick(index,hot){
        this.pageHandler(1,hot)
      },
    },
    created: function () {
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
</style>


