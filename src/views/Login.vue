<template>
  <div>
        <Header/>
    <!--展示的地方-->
    <el-footer>
      <Footer/>
    </el-footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer"
import Header from "@/router/Header"

export default {
  name: 'Login',
  components: {
    Footer,
    Header
  }
};
</script>

<style>

.headline-info2 ul li {
  float: left;
  padding: 0 5px;
  width: auto;
  height: auto;
  line-height: 30px;
}

.headline-info2 li a {
  line-height: 18px;
  font-size: 12px;
  padding: 5px 10px;
  display: block;
}

.headline-info2 a:hover {
  background: #D8544F;
  color: #ffffff
}

.main-container {
  /*  35 = footer  */
  min-height: calc(100vh - 35px);
}

</style>