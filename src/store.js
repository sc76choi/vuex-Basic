import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    userInfo: null,
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
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError =  false
      state.userInfo = payload // userInfo에 로그인한 유저를 넣어줌
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false
      state.isLoginError =  true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
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
    login({commit}, loginObj) {
      console.log(loginObj)

      // 로그인 시도
      // 파라메터(body)
      axios.post('https://reqres.in/api/login', 
          loginObj
          // {
          // "email": "eve.holt@reqres.in",
          // "password": "cityslicka"
          // }
      )
      .then((response) => {
        let token = response.data.token
        let config = {
          headers: {
            "access-token": token
          }
        }
        
        // 성공시 token: 블라블라(실제로는 user_id 값을 받아 옴)
        // 토큰을 헤더에 포함시켜서 유저정보를 요청
        axios.get('https://reqres.in/api/user/2', config)
        .then(res => {
          console.log(res);
          // color: "#C74375"
          // id: 2
          // name: "fuchsia rose"
          // pantone_value: "17-2031"
          // year: 2001
          let userInfo = {
            name: res.data.data.name,
            year: res.data.data.year
          }
          commit('loginSuccess', userInfo)
        })
        .catch(err => {
          alert('이메일과 비번을 확인하세요.')
        })

        console.log(response);
      })
      .catch((error) => {
          console.log(error);
      })
      .then( () => {
          console.log('posttest')
      });

      // console.log(loginObj)
      // // 전체 유저에서 해당 이메일로 유저를 찾는다.
      // let selectedUser = null
      // state.allUsers.forEach(user => {
      //     if (user.email === loginObj.email) selectedUser = user
      // })
      
      // if (selectedUser === null || selectedUser.password !== loginObj.password ) {
      //   commit('loginError')
      // } else {
      //   commit('loginSuccess', selectedUser)
      //   router.push({name: "mypage"})
      // }
      
      // // 그 유저의 비밀번호화 입력된 비밀번호를 비교한다.
      // console.log(this.email, this.password)
      // return selectedUser
    },
    logout({ commit }) {
      commit('logout')
      router.push({name: "home"})
    }
  }
})
