<template>
  <div class="pdf">
    <div class="pdf-tab">
      <el-button
          class="b"
          type="text"
          @click.stop="prePage"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> </el-button>
      <el-button
          class="b"
          type="text"
          @click.stop="nextPage"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> </el-button>
      <el-button
          class="b"
          type="text"
          @click.stop="clock">顺时针</el-button>
      <el-button
          class="b"
          type="text"
          @click.stop="counterClock">逆时针</el-button>
      <el-button
          class="b"
          type="text"
          @click.stop="pdfPrintAll"><i class="fa fa-print" aria-hidden="true"></i> </el-button>
      <el-button
          class="b"
          type="text"
          @click.stop="pdfPrint"><i class="fa fa-print" aria-hidden="true"></i> </el-button>
    </div>
    <div>{{pageNum}}/{{pageTotalNum}}</div>
    <div>进度：{{loadedRatio}}</div>
    <div>页面加载成功: {{curPageNum}}</div>
    <pdf
        ref="pdf"
        :src="pdfUrl"
        :page="pageNum"
        :rotate="pageRotate"
        @password="password"
        @progress="loadedRatio = $event"
        @page-loaded="pageLoaded($event)"
        @num-pages="pageTotalNum=$event"
        @error="pdfError($event)"
        @link-clicked="page = $event">
    </pdf>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Pdf',
  props:{
    url:{
      type:String,
      required:true
    }
  },
  components:{
    pdf
  },
  data(){
    return {
      pdfUrl:"https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/7286770033419020776测试.pdf",
      pageNum:1,
      pageTotalNum:1,
      pageRotate:0,
      // 加载进度
      loadedRatio:0,
      curPageNum:0,
    }
  },
  mounted: function() {
    console.log(this.url)
  },
  methods: {
    prePage(){
      var p = this.pageNum
      p = p>1?p-1:this.pageTotalNum
      this.pageNum = p
    },
    nextPage(){
      var p = this.pageNum
      p = p<this.pageTotalNum?p+1:1
      this.pageNum = p
    },
    clock(){
      this.pageRotate += 90
    },
    counterClock(){
      this.pageRotate -= 90
    },
    password(updatePassword, reason) {
      updatePassword(prompt('password is "123456"'))
      console.log('...reason...')
      console.log(reason)
      console.log('...reason...')
    },
    pageLoaded(e){
      this.curPageNum = e
    },
    pdfError(error){
      console.error(error)
    },
    pdfPrintAll(){
      this.$refs.pdf.print()
    },
    pdfPrint(){
      this.$refs.pdf.print(100,[1,2])
    },
  }
}
</script>
<style>
.b {
  color: #32ca99;

}
</style>