<template ng-coak>
  <div class="home">
    <div class="home_side-panel">
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/user.png" alt="">
        </div>
        <div>
          <span>Tomasz Rzucidlo</span>
        </div>
      </div>
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/friends.png" alt="">
        </div>
        <div>
          <span>Znajomi</span>
        </div>
      </div>
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/messages.png" alt="">
        </div>
        <div>
          <span>Wiadomości</span>
        </div>
      </div>
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/groups.png" alt="">
        </div>
        <div>
          <span>Grupy</span>
        </div>
      </div>
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/events.png" alt="">
        </div>
        <div>
          <span>Wydarzenia</span>
        </div>
      </div>
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/stats.png" alt="">
        </div>
        <div>
          <span>Statystyki</span>
        </div>
      </div>
    </div>
    <div class="home_side-panel">
      <span class="contacts-title">Znajomi</span>
      <Friends />
      <div class="home_side-panel_list-element">
        <div class="list-element-icon">
          <img src="@/assets/stats.png" alt="">
        </div>
        <div>
          <span>Statystyki</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';
import {useStore} from 'vuex';
import Friends from '@/components/Friends.vue';
export default {
  name: 'Home',
  components: {
    Friends
  },
  setup(){
      const state = reactive({
      });

      const store = useStore();
      const user = computed(() => store.getters.getUserData)

  return{
    state,
    user
  }
  }
}
</script>
<style scoped lang="scss">
</style>
