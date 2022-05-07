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
                <a class="nei_job_name text-truncate aa" @click="applyPost(onePost)"><i class="fa fa-share fa-lg"
                                                                               style="color:#32ca99"></i><small
                    class="text-muted">申请</small></a>
                <a class="nei_job_name text-truncate aa"><i class="fa fa-heart fa-lg"
                                                            style="color:#FF6A6A"></i><small
                    class="text-muted">收藏</small></a>
                <a class="nei_job_name text-truncate aa" ><i
                    class="fa fa-comments fa-lg" style="color:#409EFF"></i><small class="text-muted">沟通</small></a>
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
                  <hr>
                  <div class="p-3">
                    <h5 class="font-weight-bold">联系方式</h5>
                    <div class="text-muted">
                      <div class="mt-1">
                        <i class="fa fa-user-o mr-2"></i><span class="text-muted">{{ onePost.conname }}</span>
                      </div>
                      <div class="mt-1">
                        <i class="fa fa-whatsapp mr-2"></i><span style="color: var(--red)">{{ onePost.Landline }}</span>
                      </div>
                      <div class="mt-1 text-truncate">
                        <i class="fa fa-send-o mr-2"></i><a class="text-muted" target="_blank"
                                                            href="">{{ onePost.email }}</a>
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
  </div>
</template>
<script>
export default ({
  name: 'Post',
  props: {
    rid: {
      type: Number,
      default: 0
    },
    cid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onePost: [],
      welfares: [],
      breakmsg: '',//返回的消息
    }
  },
  methods: {
    //查看一条职位信息
    lookPost() {
      this.dialogVisible = true
      this.axios({
            method: 'get',
            url: this.baseUrl + 'busRecruitinfo/postinfo',
            params: {
              rid: this.rid,
            },
          }
      ).then(response => {
        this.onePost = response.data;
        var arr = response.data.rwelfares;
        this.welfares = arr.split(",")

      })
    }
  },
  mounted() {
    this.lookPost()
    console.log(this.rid, this.cid)
  }
})

</script>
<style>

</style>