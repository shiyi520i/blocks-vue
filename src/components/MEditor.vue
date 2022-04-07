<template>
  <div>
  题目：<el-input v-model="title"></el-input>
  摘要：<el-input v-model="summary"></el-input>
    <div >
      <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="$imgAdd"
          @change="change"
          style="min-height: 600px"
      />
      <el-button class="editor-btn" type="primary" @click="submit"
      >发布</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name:'MEditor',
  data: function() {
    return {
      title:'',
      author:'',
      summary:'',
      content: '',
      html: '',
      configs: {}
    };
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append("file", $file);
      //将下面上传接口替换为你自己的服务器接口
      this.axios({
        url: "/common/upload",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(url => {
        this.$refs.md.$img2Url(pos, url);
      });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
      console.log(this.content);
      console.log(this.html);
      this.axios({
            method: 'post',
            url: this.baseUrl + 'news/savenews',
            data: {
              title:this.title,
              author:this.author,
              summary:this.summary,
              content: this.content,
              html: this.html,
            },
            // headers: {'Content-Type':'application/x-www-form-urlencoded'},
          }
      ).then(response => {
        this.$message({
          message: '恭喜你，发布成功！',
          type: 'success'
        })
      }).catch(e=>{
        this.$message({
          message: '发布失败，请联系管理员'+e,
          type: 'error'
        });
      })
    }
  }
};
</script>


