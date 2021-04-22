//import apiService from '../services/apiService'

export const authStoreModule = {
    state: {
      user: null
    },
  
    mutations: {
      SET_USER(state, user){
        state.user = user;
      }
    },
  
    actions: {

    },
  }