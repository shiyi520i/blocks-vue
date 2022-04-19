<template>
  <div>
    题目：
    <el-input v-model="title"></el-input>
    摘要：
    <el-input v-model="summary"></el-input>
    文章预览图：
    <el-upload
        :action="this.baseUrl+'news/image'"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

    <div>
      <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="$imgAdd"
          @change="change"
          style="min-height: 600px"/>
      <el-button class="editor-btn"
                 type="primary"
                 @click="submit">
        发布
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MEditor',
  data: function () {
    return {
      title: '',
      author: '',
      summary: '',
      content: '',
      html: '',
      image: '',
      configs: {},
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append("file", $file)
      //将下面上传接口替换为你自己的服务器接口
      this.axios({
        url: this.baseUrl + 'news/image',
        method: "post",
        data: formdata,
        headers: {"Content-Type": "multipart/form-data"}
      }).then(url => {
        this.$refs.md.$img2Url(pos, url.data)
      });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
      this.axios({
            method: 'post',
            url: this.baseUrl + 'news/savenews',
            data: {
              title: this.title,
              author: this.author,
              summary: this.summary,
              content: this.content,
              html: this.html,
              image: this.image
            },
          }
      ).then(response => {
        this.$message({
          message: '恭喜你，发布成功！',
          type: 'success'
        })
      }).catch(e => {
        this.$message({
          message: '发布失败，请联系管理员' + e,
          type: 'error'
        });
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(r) {
      this.image = r
    }
  }
};
</script>


