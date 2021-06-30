<template v-cloak>
      <div class="navigation">
        <div class="navigation-logo">
            <img src="@/assets/social_app.png" alt="">
        </div>
        <div>
          <router-link v-if="isLoggedIn" to="/">Home</router-link>
          <router-link v-if="isLoggedIn" to="/about/1">About</router-link>
          <router-link v-if="isLoggedIn" to="/admin">Admin</router-link>
          <router-link v-if="!isLoggedIn" to="/registration">--{{isLoggedIn}}--</router-link>
          <router-link v-if="!isLoggedIn" to="/login">Logowanie</router-link>
        </div>
      </div>
</template>
<script>

import {reactive, computed} from 'vue';
import {useStore} from 'vuex';
export default ({
    name: "Navbar",
    setup() {
      const state = reactive({
      })
      const store = useStore();
      const isLoggedIn = computed(() => store.getters.getLoggedInStatus);

      return {
          state,
          isLoggedIn
      }
    },
})
</script>

<style lang="scss" scoped>
</style>
