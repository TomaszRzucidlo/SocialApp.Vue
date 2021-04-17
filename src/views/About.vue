<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{aboutId}}</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import {reactive, computed} from 'vue';

export default ({
  setup() {
    const route = useRoute();
    const aboutId = computed(() => route.params.id)

    const state = reactive({
      count: 0,
    })

    const userCount = computed(() => state.count)

    return {
      state,
      userCount,
      aboutId
    }
  },
})
</script>

