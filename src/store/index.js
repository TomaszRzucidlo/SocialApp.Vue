import { createStore } from 'vuex'
import { authStoreModule } from './auth.module'
import { friendStoreModule } from './friend.module'

export default createStore({
  state: {
  },

  mutations: {
  },

  actions: {
  },

  getters:{
  },

  modules: {
    Auth: authStoreModule,
    Friend: friendStoreModule
  }
})
