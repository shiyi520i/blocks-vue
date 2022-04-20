<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <div class="tech-from-com-item">
        <a>
          <div class="tech-pic">
            <img src="../../assets/common/picture/阿里-圆-120x120.png">
          </div>
          <div class="tech-from-com-main">
            <div class="tech-from-com-name">
              <a @click="dvb=true">
                <slot name="companyname">阿里巴巴</slot>
              </a>
              <i class="v-tag"></i></div>
            <div class="tech-from-com-ft">
              <a @click="dvb=true">
                <slot name="post">职位</slot>
              </a>
            </div>
            <div class="tech-from-com-ft">
              <slot name="time">时间</slot>
            </div>
          </div>
        </a>
      </div>
    </el-card>
    <el-dialog
        title="详细信息"
        :visible.sync="dvb"
        width="50%">
      <Post :rid="rid" :cid="cid"></Post>
    </el-dialog>
  </div>
</template>
<script>
import Post from "@/views/company/Post";

export default {
  name: 'UserCarChild',
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
  components: {
    Post
  },
  data() {
    return {
      dvb: false,
    }
  }
}
</script>
<style>

</style>