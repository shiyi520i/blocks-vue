import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        type: 0,
        loginId: '',
        name: '',
        avatar:'',
        chatMessageList: [],
        receiverInfo: [],
        senderInfo: []
    },
    mutations: {
        setType(state, type) {
            state.type = type
        },
        setLoginId(state, loginId) {
            state.loginId = loginId
        },
        setName(state, name) {
            state.name = name
        },
        setAvatar(state, avatar) {
            state.avatar = avatar
        },
        SOCKET_updateChatMessageList(state, data) {
            console.log(data)
            state.chatMessageList.push(data);
        },
        setSenderInfo(state, data) {
            state.senderInfo = data;
        },
        setReceiverInfo(state, data) {
            state.receiverInfo = data;
        },
    },
    getters: {
        getType: state => {
            return state.type
        },
        getName: state => {
            return state.name
        },
        getLoginId: state => {
            return state.loginId
        },
    }
})

export default store;