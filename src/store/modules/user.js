import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { gender, age, consume, hobby, city, line } from '@/api/home'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    },
    sex: [],
    age: [],
    consume: [],
    hobby: [],
    city: [],
    city10: [],
    line: []
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
    },
    SET_AGE: (state, age) => {
      state.age = age
    },
    SET_CONSUME: (state, consume) => {
      state.consume = consume
    },
    SET_HOBBY: (state, hobby) => {
      state.hobby = hobby
    },
    SET_CITY: (state, city) => {
      state.city = city
    },
    SET_CITYTOP10: (state, city10) => {
      state.city10 = city10
    },
    SET_LINE: (state, line) => {
      state.line = line
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(response.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取男女性别比例
    getSex({ commit }) {
      return new Promise((resolve, reject) => {
        gender().then(response => {
          const data = response.data.data
          if (response.status === 200) {
            commit('SET_SEX', data)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取游客年龄
    getAge({ commit }) {
      return new Promise((resolve, reject) => {
        age().then(response => {
          const data = response.data.data
          if(response.status === 200) {
            commit('SET_AGE', data)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 游客消费水平
    getConsume({ commit }) {
      return new Promise((resolve, reject) => {
        consume().then(response => {
          const data = response.data.data
          if(response.status === 200) {
            commit('SET_CONSUME', data)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 游客线上偏好
    getHobby({ commit }) {
      return new Promise((resolve, reject) => {
        hobby().then(response => {
          const data = response.data.data
          if(response.status === 200) {
            commit('SET_HOBBY', data)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 游客来源地城市
    getCity({ commit }) {
      return new Promise((resolve, reject) => {
        city().then(response => {
          const data = response.data.data
          let data10 = response.data.data
          // console.log(data10, 'qi')
          data10.sort(function(a, b){
            return b.value -a.value
          })
          // console.log(data10, 'hou')
          if(response.status === 200) {
            commit('SET_CITY', data)
            commit('SET_CITYTOP10', data10)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 游客热门路线
    getLine({ commit }) {
      return new Promise((resolve, reject) => {
        line().then(response => {
          const data = response.data.data
          // console.log(data, '11')
          data.sort(function(a, b) {
            return b.value -a.value
          })
          // console.log(data, '22')
          if(response.status === 200) {
            commit('SET_LINE', data)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data

          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }

          commit('SET_NAME', data.name)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user
