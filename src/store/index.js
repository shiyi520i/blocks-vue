import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        type: 0,
        loginId: '',
        name: '',
        chatMessageList:[],

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
        SOCKET_updateChatMessageList(state,data){
            console.log(data)
            state.chatMessageList.push(data);
        },
    }
})

export default store;