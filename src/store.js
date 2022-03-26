import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers:[
      // {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      // {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId:1, name:'sc', email:'sc@gmail.com', password:'123', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId:2, name:'uw', email:'uw@gmail.com', password:'123', address: 'Busan', src:'https://goo.gl/Ksk9B9'},
      {userId:3, name: 'Lego', email:'xxs@gmail.com', password: '123' , address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ],
    isLogin: false,
    isLoginError: false
  },
  // computed의 역활, state를 사용
  getters: {
    allUsersCount: state  => {
      return state.allUsers.length
    },
    countOfSeoul: state => {
        let count = 0
        state.allUsers.forEach(user => {
          if(user.address === 'Seoul') count++
        })
        return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }
  },
  // state 값을 변화시킴
  mutations: {
    addUsers: (state,payload) => {
      state.allUsers.push(payload)
    },

    // 로그인이 성공했을 때
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError =  false
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false
      state.isLoginError =  true
    }
  },
  // 비지니스 로직
  actions: {
    // addUsers: context => {
    //   context.commit('addUsers')
    // }
    addUsers: ({ commit }, payload) => { // function(commit) feat. context
      commit('addUsers', payload)
    },
    // 로그인을 시도
    login({state, commit}, loginObj) {
      console.log(loginObj)
      // 전체 유저에서 해당 이메일로 유저를 찾는다.
      let selectedUser = null
      state.allUsers.forEach(user => {
          if (user.email === loginObj.email) selectedUser = user
      })
      
      if (selectedUser === null ) {
          // this.isError = true
          commit('loginError')
        } else {
          // console.log(selectedUser.password, this.password)
          
          if(selectedUser.password !== loginObj.password ) {
            commit('loginError')
            // this.isError = true
          } else {
            commit('loginSuccess')
            // this.isError = false
            //   this.loginSuccess = true
          }
      }
      // 그 유저의 비밀번호화 입력된 비밀번호를 비교한다.
      console.log(this.email, this.password)
      return selectedUser
    }
  }
})
