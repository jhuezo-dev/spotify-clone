<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGeneralStore } from '@/stores/GeneralStore';
const generalStore = useGeneralStore();

onMounted(() => {
  generalStore.loadNavStates('left-nav')
  generalStore.loadNavStates('right-nav')
})
</script>

<style scoped>
.app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
</style>