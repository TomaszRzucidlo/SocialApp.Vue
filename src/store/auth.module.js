//import { reject } from 'core-js/fn/promise';
import apiService from '../services/apiService'
import jwtService from '../services/jwtService';
export const authStoreModule = {
    state: {
      user: {
        fullName: "",
        imageUrl: "",
      },
      isLoggedIn:false
    },
  
    mutations: {
      setLoggedIn(state, isLoggedIn){
        state.isLoggedIn = isLoggedIn;
      },
      setUserData(state, user){
        state.user = {
          fullName : user.fullName,
          imageUrl : user.imageUrl
        }
      }
    },
  
    actions: {
      logIn({commit}, user){
        return new Promise((resolve, reject) => {
          apiService.post("auth/log-in", user)
          .then((data) => {
            jwtService.saveToken(data.data.token)
            //localStorage.setItem("authentication", data.data.token)
            commit('setLoggedIn', true)
            commit('setUserData', data.data);
            resolve();
          })
          .catch(() => {
            reject();
          })
        })
      }
    },

    getters: {
      getLoggedInStatus: state => {
        return state.isLoggedIn;
      },
      getUserData: state => {
        return state.user;
      }
    }
  }