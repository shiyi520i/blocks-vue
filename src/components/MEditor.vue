<template>
  <div class="markdown-container">
    <div class="container">
      <div class="title">编辑器</div>
      <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="$imgAdd"
          @change="change"
          style="min-height: 600px"
      />
      <el-button class="editor-btn" type="primary" @click="submit"
      >提交</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      content: "",
      html: "",
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
      this.$message.success("提交成功！");
    }
  }
};
</script>


