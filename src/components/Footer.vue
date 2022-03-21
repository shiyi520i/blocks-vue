<template>
    <div>
      <div id="footer">
        {{footerMsgCopyright}}&nbsp;&nbsp;
        <span class="source">{{footerMsgName}}</span>
      </div>
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
/*.app-foot{
  position:absolute;
  color:#fff;
  bottom:0;
  width:100%;
  height:100px;
  line-height:100px;
  text-align:center;
  background-color: #000;
}*/
/*#footer {
  !*要做成响应式*!
  color:#fff;
  bottom:0;
!*  width:100%;*!
  height:100px;
  line-height:100px;
  text-align:center;
  background-color: #000;
}*/
</style>
