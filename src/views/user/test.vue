<template>
  <div>
<a v-for="pa in parameter" :key="pa.index">{{pa.id}}</a>
<a @click="getParameter">aaaaa</a>
  </div>
</template>
<script>
//import qs from 'qs';

export default {
  name: 'ReleasePost',
  data() {
    return {
      parameter:[],

    }
  },
  methods: {

    getParameter() {
      this.axios({
            method: 'get',
            url: this.baseUrl+'parameter/getparameter',
          }
      ).then(response => {
        this.parameter= response.data['xlyq']
        console.log(this.parameter)
       // console.log(this.parameter['xlyq'][1])
      })
    },

  },
  mounted() {
  }
}
</script>