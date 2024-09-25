<template>
  <div class="main-layout">
    <HeaderNav />
    <div class="content_wrapper"> 
      <LeftNav />
      <div class="content_pane">
        <router-view :key="$route.fullPath" v-slot="{ Component }">
          <component :is="Component" class=""/>
        </router-view>
      </div>
      <RightNav />
    </div>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import LeftNav from '@/components/layout/navigation/LeftNav.vue'
import RightNav from '@/components/layout/navigation/RightNav.vue'
import FooterNav from '@/components/layout/footer/FooterNav.vue'
import HeaderNav from '@/components/layout/header/HeaderNav.vue';

</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh; 
  overflow: hidden;
  background-color: var(--black);
}


.content_wrapper {
  height: 100%;
  overflow-y: auto;
  display: flex;
  padding: 10px 8px;
  gap: 10px;
  position: relative;
  justify-content: space-between;
}

.content_pane {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--color-background-mute);
  border-radius: 6px;
  
}



/* .nav_collapsed {
  grid-template-columns: 60px 1fr;
} */

/* tablets and desktop */
/* @media only screen and (min-width: 768px) {
  .main-layout {
    grid-template-columns: repeat(2, 1fr);
  }
 
 
  
} */
/* phones */
/* @media only screen and (max-width: 767px) {
  .main-layout {
    grid-template-columns: repeat(2, 1fr);
    background-color: red;
  }
 
 
} */

/* portrait phones */
/* @media only screen and (max-width: 767px) and (orientation: portrait) {
  .main-layout {
    grid-template-columns: repeat(2, 1fr);
    background-color: red;
  }
 

} */

</style>