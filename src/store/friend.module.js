import apiService from '../services/apiService'

export const friendStoreModule = {
    state: {
        friends:{
            
        }
    },
  
    mutations: {
        setFiends(state, friends){
            state.friends = friends
        }
    },
  
    actions: {
        getFriends({commit}){
            apiService.get("friend/get-all-friends")
            .then((data) => {
                console.log(data.data)
                commit("setFiends", data.data)
            })
        }
    },

    getters: {
        getFriends: state => {
            return state.friends;
          },
    }
  }