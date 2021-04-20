import apiService from '../services/apiService'

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
      register({commit}, user){
        console.log(apiService)
        return new Promise((resolve, reject) => {
          apiService.post("auth/register", user)
            .then(() => {
              commit('SET_USER', user);
              resolve();
            })
            .catch((error) => {
              reject(error.response.status);
            })
        });
      }
    },
  }