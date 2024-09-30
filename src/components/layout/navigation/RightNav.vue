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
  grid-area: RightNav;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 350px;
  width: 100%;
  min-width: 280px;
  background: var(--color-background-mute);
  border-radius: 6px;
}

.nav_collapsed {
  display: none;
}

</style>