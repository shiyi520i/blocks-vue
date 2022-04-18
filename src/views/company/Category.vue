<template>
  <div>
    <div>
      <div class="nk-container    ">

        <div class="nk-main tech-page clearfix">
          <div class="module-box">
            <div class="module-head clearfix">
              <h1>按公司查看</h1>
              <div class="tech-search-box js-search-box" data-type="company">
                <a class="icon-search icon-search-out js-search"></a>
                <div class="search-input-wrap">
                  <label class="icon-search"></label>
                  <input class="js-search-input" type="text" placeholder="请输入公司名称搜索">
                </div>
                <a class="search-wrap-close js-search-clear"></a>
              </div>
            </div>
            <div class="module-body">
              <div class="tech-from-com-list js-company-list" data-total="15">
                <div class="tech-from-com-item" v-for="(company,index) in companys" :key="index">
                  <a>
                    <div class="tech-pic">
                      <img src="../../assets/common/picture/阿里-圆-120x120.png">
                    </div>
                    <div class="tech-from-com-main">
                      <div class="tech-from-com-name" @click="look(company.loginId)">
                        阿里巴巴{{ company.companyname }}
                        <i class="v-tag"></i></div>
                      <div class="tech-from-com-ft">
                        {{ company.type }}
<!--                    <span class="tech-ico" href="/stack/1" target="_blank"><img
                        src="../../assets/common/picture/0_1530258285062_53A665BAFA39B6BD078C991C9E22090C.jpg"
                        alt=""></span>
                        <span class="tech-ico" href="/stack/95" target="_blank"><img
                            src="../../assets/common/picture/0_1530258298254_77C20FAAAF9D9A69E7FFA67F78F8866A.jpg"
                            alt=""></span>
                        <span class="tech-ico" href="/stack/5" target="_blank"><img
                            src="../../assets/common/picture/0_1530258286325_B56F66AC50B384645B747A45E7B97C42.jpg"
                            alt=""></span>
                        <span class="tech-ico" href="/stack/10" target="_blank"><img
                            src="../../assets/common/picture/0_1530258286926_D2A3B99B3CA023F20A9D13C6DE427BB6.jpg"
                            alt=""></span>-->
                        <span class="font-green">+162</span>
                      </div>
                    </div>
                  </a>
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

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      pageSize: 5,
      page: 1,
      vl: true,
      total: 10,
      companys: []
    };
  },
  methods: {
    pageHandler() {

      this.axios.get(this.baseUrl+'companyinfo/getallcom', {
        params: {
          pageSize: this.pageSize,
          pageNo: this.page,
        }
      }).then(response => {
        this.total = response.data.total;
        this.companys = response.data.records
      })
    },
    look(loginId){
      this.$router.push({
        path: `/CompanyInfo/${loginId}`,
      })
    }
  },
  mounted() {
    this.pageHandler()
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
@import "../../assets/common/css/tech.css";
</style>