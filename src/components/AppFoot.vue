<template>
  <div class="app-foot">
    {{footerMsgCopyright}}&nbsp;&nbsp;
    <span class="source">{{footerMsgName}}</span>
  </div>
</template>

<script>
export default {
  name: 'AppFoot',
  data() {
    return {
      // 版权说明的文字
      footerMsgCopyright: 'Copyright © 2021-2022 招聘平台 - Powered By ',
      // 单位
      footerMsgName: '陈耀明'
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html{
  height:100%;
}
body{
  min-height:100%;
  margin:0;
  padding:0;
  position:relative;
}

header{
  background: #000;
  text-align: center;
  height:50px;
  line-height: 50px;
  color:#fff;
}
main{ /* main的padding-bottom值要等于或大于footer的height值 */
  padding-bottom:100px;
  background:#ccc;
  text-align: center;
}
.app-foot{
  position:absolute;
  color:#fff;
  bottom:0;
  width:100%;
  height:100px;
  line-height:100px;
  text-align:center;
  background-color: #000;
}
</style>
