<template>
  <div class="header_nav">
    <div class="flex justify-start pl-5">
      <svg-icon type="mdi" class="text-almost-light" :size="40" :path="mdiSpotify"></svg-icon>
    </div>

    <div class="flex gap-2 justify-center items-center">
      <router-Link to="/">
        <button class="flex rounded-full bg-button-bg p-2">
          <svg-icon type="mdi" :size="25" :path="mdiHomeOutline"></svg-icon>
        </button>
      </router-Link>
      <div class="flex items-center bg-button-bg p-2 rounded-full">
        <router-Link to="/search">
          <button class="flex items-center w-full gap-2 min-w-96">
            <svg-icon  type="mdi" :size="30" :path="mdiMagnify"></svg-icon>
            <span class="text-lg">What do you want to play?</span>
          </button>
        </router-Link>
        <div class="border-l border-button-light-bg h-7"></div>
        <button class="p-1 pl-3">
          <svg-icon type="mdi" :size="25" :path="mdiFileAccount"></svg-icon>
        </button>
      </div>
    </div>
    
    <div class="flex justify-end gap-6">
      <button class="flex justify-center items-center">
        <svg-icon type="mdi" :size="25" :path="mdiArrowDownBoldCircleOutline"></svg-icon>
        <span class="pl-1 flex text-nowrap font-bold text-almost-light">Install App</span>
      </button>
      <button>
        <svg-icon type="mdi" :size="20" :path="mdiBellOutline"></svg-icon>
      </button>
      <button class="flex items-center border-8 border-button-bg justify-center rounded-full bg-pink-400 min-w-12 min-h-12 w-12 h-12">
        <span class="text-dark font-bold">J</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBellOutline,
        mdiArrowDownBoldCircleOutline,
        mdiMagnify,
        mdiHomeOutline,
        mdiFileAccount,
        mdiSpotify
 } from '@mdi/js';    

</script>

<style lang="scss" scoped>
.header_nav{
  grid-area: HeaderNav;
  height: 45px;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  min-width: 620px;
  width: 100%;
}
</style>