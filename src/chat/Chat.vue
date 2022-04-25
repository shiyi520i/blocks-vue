<template>
  <div>
    <!-- main wrapper -->
    <div class="main-wrapper">

      <!-- navigation -->
      <div class="right-content">
        <div class="left-sidebar">

          <div class="chat-header">
            <div class="chat-header-user">
              <figure class="avatar">
                <a class="profile-detail-bttn"><img
                    src="https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg" class="rounded-circle"
                    alt="image"></a>
              </figure>
              <div>
                <h5 class="mt-0 mb-0">James Henry</h5>
                <small class="text-success">james43@gmail.com</small>
              </div>
            </div>
          </div>

          <div class="sidebar active" id="chats" style="width: 300px">


            <div class="text-left mb-1 mt-0"><h2 class="title-text"><b>联系</b> </h2></div>
            <div class="chat-list-content">
              <ul class="chat-list">
                <li class="chat-list-item" v-if="name!==undefined">
                  <figure class="avatar user-online">
                    <img :src="avatar===''?'https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg':avatar" alt="image">
                  </figure>
                  <div class="list-body">
                    <div class="chat-bttn">
                      <h3 class="mb-0 mt-2" v-text="name===''?'defaultName':name"></h3>
<!--                      <p>What's up, how are you?</p>-->
                    </div>
                    <div class="list-action mt-2 text-right">
                      <div class="message-count bg-primary">3</div>
                      <small class="text-primary">03:41 PM</small>
                    </div>
                  </div>
                </li>
                <li class="chat-list-item">
                  <figure class="avatar user-online">
                    <img src="https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg" alt="image">
                  </figure>
                  <div class="list-body">
                    <div class="chat-bttn">
                      <h3 class="mb-0 mt-2">Victor Exrixon</h3>
                      <p>What's up, how are you?</p>
                    </div>
                    <div class="list-action mt-2 text-right">
                      <div class="message-count bg-primary">3</div>
                      <small class="text-primary">03:41 PM</small>
                    </div>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="chat-content"  id="interact">
          <!-- chat header -->
          <div class="chat-header">
            <div class="chat-header-user">
              <el-avatar
                  shape="circle"
                  :src="avatar==''?'https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg':avatar"
                  :size="64"
              ></el-avatar>
              <div>
                <h5 class="mt-2 mb-0">Alice Maghyn</h5>
                <small class="text-success">Typing....</small>
              </div>
            </div>
          </div>
          <!-- chat header -->
          <!-- chat body -->
          <div class="chat-body" style="overflow: hidden;outline: none;" v-infinite-scroll="">
            <div class="messages-content">
              <div v-for="(msg,index) in msgList"
                   :key="index" :class="msg.sender===loginId?'message-item outgoing-message':'message-item'">
                <div class="message-user">

                  <div>
                    <h5 v-text="msg.name"></h5>
                    <div class="time">{{ msg.time }}</div>
                  </div>
                  <figure class="avatar">
                    <img :src="msg.avatar===''?'https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg':msg.avatar" alt="image">
                  </figure>
                </div>
                <div class="message-wrap" style="padding: 3px">{{ msg.message }}</div>
              </div>
            </div>
          </div>
          <!-- chat body -->
          <!-- chat footer -->
          <div class="chat-footer">
            <form>
              <input type="text" placeholder="Message.." v-model="inputMsg">
              <el-button @click="sendMsg"><i class="fa fa-paper-plane" aria-hidden="true"></i></el-button>
            </form>

          </div>
          <!-- chat footer -->
        </div>

      </div>

    </div>

  </div>
</template>
<script>
import store from '../store/index'

export default {
  name: 'chat',
  props: {
    receiver: {
      type: String
    },
    name: {
      type: String
    },
    userAvatar: {
      type: String
    }
  },
  data() {
    return {
      inputMsg: '您好！',
      conList: [],

    }
  },
  computed: {
    msgList() {
      const arr=store.state.chatMessageList
      return arr.slice(arr.length-5,arr.length)//先返回五条数据
    },
    userName() {
      return store.state.name
    },
    loginId() {
      return store.state.loginId
    },
    avatar() {
      return store.state.avatar
    },
  },
  methods: {
    sendMsg() {

      let time = new Date();
      let data = {
        sender: store.state.loginId,//发送者id
        avatar: store.state.avatar,//发送者头像
        name: store.state.name,//发送者姓名
        receiver: store.state.loginId === '626604922670050e48ed71f9' ? '6238114fe0dba61a880974ad' : '626604922670050e48ed71f9',//接收方id
        time: time.toLocaleString(),//发送时间
        message: this.inputMsg,//消息内容
      }
      this.$socket.emit("privateChat", data);
      store.commit('SOCKET_updateChatMessageList', data);
      console.log(store.state.chatMessageList)
      this.inputMsg = ''
/*      this.$nextTick(() => {
        let msg = document.getElementById('interact') // 获取对象
        msg.scrollTop = msg.scrollHeight // 滚动高度
      })*/
    },
    getConList() {

    },
  },
  mounted() {
    this.$socket.open();
    let user = {
      userName: store.state.name,
      userId: store.state.loginId
    }
    this.$socket.emit('ini_user', user)
    console.log(this.name)

  }
}
</script>
<style scoped src="../assets/common/css/main.min.css"></style>
<style scoped>

.main-wrapper .right-content .chat-content .chat-body .messages-content .message-item.outgoing-message .message-wrap[data-v-50b210c6] {
  background-color: #32ca99;
  color: #fff;
}

.main-wrapper .right-content .chat-content .chat-footer form button[data-v-50b210c6] {
  background-color: #32ca99;
}

.main-wrapper .right-content .chat-content .chat-header[data-v-50b210c6] {
  margin-top: 10px;
}
.bg-primary {
  background-color: #32ca99!important;
}
.text-primary {
  color: #32ca99!important;
}
/*owl.carousel.min.css*/
.owl-carousel, .owl-carousel .owl-item {
  -webkit-tap-highlight-color: transparent;
  position: relative
}


.owl-carousel .owl-stage {
  position: relative;
  -ms-touch-action: pan-Y;
  touch-action: manipulation;
  -moz-backface-visibility: hidden
}

.owl-carousel .owl-stage:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0
}

.owl-carousel .owl-stage-outer {
  position: relative;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0)
}

.owl-carousel .owl-item, .owl-carousel .owl-wrapper {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0)
}

.owl-carousel .owl-item {
  min-height: 1px;
  float: left;
  -webkit-backface-visibility: hidden;
  -webkit-touch-callout: none
}

.owl-carousel .owl-item img {
  display: block;
  width: 100%
}

.owl-carousel .owl-dots.disabled, .owl-carousel .owl-nav.disabled {
  display: none
}

.no-js .owl-carousel, .owl-carousel.owl-loaded {
  display: block
}

.owl-carousel .owl-dot, .owl-carousel .owl-nav .owl-next, .owl-carousel .owl-nav .owl-prev {
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev, .owl-carousel button.owl-dot {
  background: 0 0;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit
}


.owl-carousel.owl-refresh .owl-item {
  visibility: hidden
}

.owl-carousel.owl-drag .owl-item {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}


.owl-carousel.owl-rtl .owl-item {
  float: right
}

.owl-carousel .animated {
  animation-duration: 1s;
  animation-fill-mode: both
}

.owl-carousel .owl-animated-in {
  z-index: 0
}

.owl-carousel .owl-animated-out {
  z-index: 1
}

.owl-carousel .fadeOut {
  animation-name: fadeOut
}

@keyframes fadeOut {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}


.owl-carousel .owl-item .owl-lazy {
  opacity: 0;
  transition: opacity .4s ease
}

.owl-carousel .owl-item .owl-lazy:not([src]), .owl-carousel .owl-item .owl-lazy[src^=""] {
  max-height: 0
}

.owl-carousel .owl-item img.owl-lazy {
  transform-style: preserve-3d
}

.owl-carousel .owl-video-wrapper {
  position: relative;
  height: 100%;
  background: #000
}

.owl-carousel .owl-video-play-icon {
  position: absolute;
  height: 80px;
  width: 80px;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;
  background: url() no-repeat;
  cursor: pointer;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  transition: transform .1s ease
}

.owl-carousel .owl-video-play-icon:hover {
  -ms-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3)
}

.owl-carousel .owl-video-playing .owl-video-play-icon, .owl-carousel .owl-video-playing .owl-video-tn {
  display: none
}

.owl-carousel .owl-video-tn {
  opacity: 0;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity .4s ease
}

.owl-carousel .owl-video-frame {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%
}

.slider-1.owl-theme .owl-dots {
  bottom: -40px;
  position: absolute;
  width: 100%;
}

.slider-1.owl-theme .owl-dots .owl-dot span {
  width: 7px;
  height: 7px;
  margin: 4px;
}

.slider-1.owl-theme .owl-dots .owl-dot.active span,
.slider-1.owl-theme .owl-dots .owl-dot:hover span {
  background: #007bff !important;
}


/*owl.theme.default.min.css*/
.owl-theme .owl-dots, .owl-theme .owl-nav {
  text-align: center;
  -webkit-tap-highlight-color: transparent
}

.owl-theme .owl-nav {
  margin-top: 10px
}

.owl-theme .owl-nav [class*=owl-] {
  color: #FFF;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
  background: #D6D6D6;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px
}

.owl-theme .owl-nav [class*=owl-]:hover {
  background: #869791;
  color: #FFF;
  text-decoration: none
}

.owl-theme .owl-nav .disabled {
  opacity: .5;
  cursor: default
}

.owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 10px
}

.owl-theme .owl-dots .owl-dot {
  display: inline-block;
  zoom: 1
}

.owl-theme .owl-dots .owl-dot span {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  background: #D6D6D6;
  display: block;
  -webkit-backface-visibility: visible;
  transition: opacity .2s ease;
  border-radius: 30px
}

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
  background: #869791
}

/*themify-icons.css*/
@font-face {
  font-family: 'themify';
  font-weight: normal;
  font-style: normal;

}

[class^="ti-"], [class*=" ti-"] {
  font-family: 'themify';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: 14px;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
