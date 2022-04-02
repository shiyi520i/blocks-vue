<template>

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
                <li title="工作经验">{{ onePost.rjexperience }}</li>
                <li title="需要学历">{{ onePost.rerequirement }}</li>
                <li title="招聘人数">{{ onePost.rnumber }}人</li>
                <li title="所属行业">{{ onePost.rztype }}</li>
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
                  <div class="nei_company_logo align-center mb-2" style="height:54px">
                    <img title="" style="width: 54px; height: 54px;" alt="logo"
                         src="${contextPath}/images/front/comp/comp1.png">
                  </div>
                  <h5 class="mb-1 text-truncate"></h5>
                  <a class="text-dark font-weight-bold" title="" target="_blank" href="">{{ popos.name }}</a>
                  <p>
                    <small class="d-block text-truncate">{{ popos.type }}</small>
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
                      <i class="fa fa-user-o mr-2"></i><span class="text-muted">{{ popos.conname }}</span>
                    </div>
                    <div class="mt-1">
                      <i class="fa fa-whatsapp mr-2"></i><span style="color: var(--red)">{{ popos.Landline }}</span>
                    </div>
                    <div class="mt-1 text-truncate">
                      <i class="fa fa-send-o mr-2"></i><a class="text-muted" target="_blank"
                                                          href="">{{ popos.email }}</a>
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
</template>
<script>
export default ({
  name: 'Post',
  props: {
    title: {
      type: String,
      default: 'hello world'
    }},
    data() {
      return {
        vl: true,  //一页时是否隐藏
        baseurl: 'http://localhost:4000/api/',
        keyword: '',
        keywords: '',
        onePost: [],
        welfares: [],
        popos: [],//提示框-
        breakmsg: '',//返回的消息
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
            time: this.nt,
            worktype: this.nn,
            salary: this.ns,
            jobtype: this.nj,
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
              url: this.baseurl + 'busRecruitinfo/postone',
              data: {
                id: p.rid,
                cid: p.cid,
                uid: uid,
                postname: p.rpost
              },
              // headers: {'Content-Type':'application/x-www-form-urlencoded'},
            }
        ).then(response => {
          this.onePost = response.data;
          var arr = response.data.rwelfares;
          this.welfares = arr.split(",")

        })
        this.showPopo(index, p)
      },
      //查看一条公司信息
      showPopo(index, popo) {
        console.log(popo)
        this.axios.post(this.baseurl + 'companyinfo/getcomone',
            {
              id: popo.id,
            }
        ).then(response => {
          this.popos = response.data;
        })
      }
    },
  mounted() {
    console.log(this.title)
  }
})

</script>