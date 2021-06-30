<template>
    <div v-for="friend in state.friends" :key="friend.id" class="navbar-friend">
        <img v-bind:src="getImage(friend.image)" alt="photo"> 
        <span>{{friend.name}}</span>
    </div>
</template>

<script>
import {reactive, computed} from 'vue';
import {useStore} from 'vuex';
import API_URL from "@/services/config.js";
export default ({
    setup(){
        const state = reactive({
            friends:[]
        });
        const store = useStore();
        state.friends = computed(() => store.getters.getFriends);
        
        function getImage(src){
            if(src){
                return `${API_URL}${src}`;
            }else{
                return `${API_URL}user.png`;
            }
        }

        return{
            state,
            getImage
        }
    }
})
</script>

<style>

</style>