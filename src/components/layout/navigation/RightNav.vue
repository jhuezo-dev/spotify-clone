<template>
  <div class="navbar" :class="`${generalStore.right_nav_collapsed ? 'nav_collapsed' : ''}`">
    <div class="container">

      <h2>right nav bar</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore();

</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: calc(100% - 40vw);
  max-width: 380px;
  background: var(--color-background-mute);
  border-radius: 6px;
}

.nav_collapsed {
  display: none;
}

/* .container {
  display: flex;
  flex-direction: column;
  width: 100%;
} */

</style>