<template>
  <div class="wrap" id="wrap">
    <el-pagination
        layout="prev, pager, next"
        @current-change="pageHandler"
        :page-size="pageSize"
        :current-page="page"
        :hide-on-single-page="vl"
        :total="total"
        class="bc">
    </el-pagination>
  </div>
</template>
<script>

export default {
  name: 'Pagination',
  props: {
    url: {
      // 定义接收的类型 还可以定义多种类型 [String, Undefined, Number]
      // 如果required为true,尽量type允许undefined类型，因为传递过来的参数是异步的。或者设置默认值。
      type: String,
      // 定义是否必须传
      required: true,
    },
    cn: {
      type: String,
      required: false,
    },
    uid: {
      type: String,
    },
    typeNumber: {
      type: Number,
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      vl: true,
      page: 1,  //显示的是哪一页
      pageSize: 5, //每一页显示的数据条数
      total: 0, //记录总数
      maxPage: 9,//最大页数
      results: [],
    }
  },
  methods: {
    pageHandler(page) {
      this.axios.get(this.baseUrl + this.url, {
        params: {
          pageSize: this.pageSize,
          pageNo: page,
          cn: this.cn,//公司名称
          uid: this.uid,
          type: this.typeNumber
        }
      }).then(response => {
        this.total = response.data.total;
        this.results = response.data.records
        this.$emit('getData', this.results)
      })
    }
  },
  mounted() {
    this.pageHandler()
  }
}
</script>
<style>
.bc {
  color: #32ca99;
}
</style>