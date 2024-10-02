<template>
  <div class="main-layout">
    <HeaderNav />
    <LeftNav />
    <div class="content_wrapper" :class="`${generalStore.left_nav_collapsed ? 'left_nav_collapsed': `${generalStore.right_nav_collapsed ? 'right_nav_collapsed' : ''}`}`"> 
      <router-view :key="$route.fullPath" v-slot="{ Component }">
        <component :is="Component" class="content_bg"/>
      </router-view>
    </div>
    <RightNav />
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import LeftNav from '@/components/layout/navigation/LeftNav.vue'
import RightNav from '@/components/layout/navigation/RightNav.vue'
import FooterNav from '@/components/layout/footer/FooterNav.vue'
import HeaderNav from '@/components/layout/header/HeaderNav.vue';
import { onMounted } from 'vue';
import { useGeneralStore } from '@/stores/GeneralStore';
const generalStore = useGeneralStore();

onMounted(() => {
  generalStore.loadNavStates('left-nav')
  generalStore.loadNavStates('right-nav')
})

</script>

<style scoped>
.main-layout {
  display: grid;
  flex-direction: grid;
  grid-template-areas: 
  "HeaderNav HeaderNav HeaderNav" 
  "LeftNav content_wrapper RightNav"
  "FooterNav FooterNav FooterNav";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  height: 100vh; 
  position: relative;
  min-height: 100%;
  overflow: auto;
  background-color: var(--black);
  padding: 10px;
  gap: 10px;
}


.content_wrapper {
  grid-area: content_wrapper;
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  min-width: 400px;
  background: var(--color-background-mute);
  border-radius: 6px;
  min-height: 0;
  overflow: hidden;
  position: relative;
}

.content_bg {
  flex: 1;
  position: relative;
}


.left_nav_collapsed {
  /* grid-template-columns: auto 2fr auto; */
}

.right_nav_collapsed {
  /* grid-template-columns: auto 1fr; */
}

/* .nav_collapsed {
  grid-template-columns: 60px 1fr;
} */

/* tablets and desktop */
@media only screen and (min-width: 768px) {
  .content_wrapper {
    /* grid-template-columns: 1fr auto; */
  }
 
 
  
}
/* phones */
@media only screen and (max-width: 767px) {
  .content_wrapper {
    /* grid-template-columns: 1fr auto; */
  }
 
 
}

/* portrait phones */
@media only screen and (max-width: 767px) and (orientation: portrait) {
  .content_wrapper {
    /* grid-template-columns: 1fr auto; */
  }
 

}

</style>