<template>
  <div class="footer">
    <div class="flex flex-col w-full">
      <div class="flex justify-between gap-6 w-full mb-2">
        <div class="flex pl-2">
          <div class="flex">
            <img src="../../../assets/default_user.png" class="min-w-14 min-h-14 h-14 w-14 bg-blue-600 rounded"  alt="default user icon" />
            <!-- <AvatarIcon :item="nowPlaying" mode="list" /> -->
          </div>
          <div class="flex flex-col pl-6">
            <div class="text">{{ nowPlaying.song }}</div>
            <p class="sub-text">{{ nowPlaying.artist }}</p>
          </div>
          <div class="flex w-full pl-10 my-auto">
            <div v-if="nowPlaying.is_liked" class="rounded-full p-1 bg-accent-green">
              <svg-icon :class="`${nowPlaying.is_liked ? 'text-dark font-bold' : ''}`" type="mdi" :size="16" :path="mdiCheck"></svg-icon>
            </div>
            <svg-icon v-else class="rounded-lg" type="mdi" :size="20" :path="mdiPlusCircleOutline"></svg-icon>
          </div>
        </div>
    
        <div class="flex">
          <div class="flex flex-col">
            <div class="flex gap-2 justify-center items-center">
              <svg-icon class="rounded-lg" type="mdi" :size="20" :path="mdiShuffle"></svg-icon>
              <svg-icon class="rounded-lg" type="mdi" :size="30" :path="mdiSkipPrevious"></svg-icon>
              <div class="rounded-3xl bg-button-light-bg">
                <svg-icon class="text-dark p-1" type="mdi" :size="35" :path="mdiPlay"></svg-icon>
              </div>
              <svg-icon class="rounded-lg" type="mdi" :size="30" :path="mdiSkipNext"></svg-icon>
              <svg-icon class="rounded-lg" type="mdi" :size="25" :path="mdiRepeatVariant"></svg-icon>
            </div>
            <div class="flex">
              <TrackScrollbar :duration="duration" :goTo="goTo"/>
            </div>
          </div>
        </div>
    
        <div class="flex gap-3 justify-center items-center">
          <button class="flex flex-col mt-4" @click="ToggleRightNavCollapse" :class="`${generalStore.right_nav_collapsed ? '' : 'text-accent-green'}`">
            <svg-icon type="mdi" :size="20" :path="mdiPlayBoxOutline"></svg-icon>
            <span class="-mt-7 text-4xl" :class="`${generalStore.right_nav_collapsed ? 'invisible' : 'text-accent-green'}`">.</span>
          </button>
          <svg-icon type="mdi" :size="20" :path="mdiMicrophoneVariant"></svg-icon>
          <svg-icon type="mdi" :size="20" :path="mdiPlaylistMusicOutline"></svg-icon>
          <svg-icon type="mdi" :size="20" :path="mdiLaptop"></svg-icon>
          <svg-icon type="mdi" :size="20" :path="mdiVolumeHigh"></svg-icon>
          <div class="flex">
            <VolumeScrollbar :level="level"/>
          </div>
          <svg-icon type="mdi" :size="18" :path="mdiArrowExpand"></svg-icon>
        </div>
      </div>
      
      <div class="flex w-full justify-end items-center bg-accent-green rounded-lg">
        <svg-icon class="text-dark" type="mdi" :size="16" :path="mdiMotionPlayOutline"></svg-icon>
        <span class="text-dark p-1 pr-2 font-bold text-sm">Playing on DESKTOP</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useGeneralStore } from '@/stores/GeneralStore';
import AvatarIcon from '@/components/AvatarIcon.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiPlusCircleOutline,
  mdiPlayBoxOutline,
  mdiMicrophoneVariant,
  mdiMicrophoneVariantOff,
  mdiVolumeHigh,
  mdiVolumeMute,
  mdiPlaylistMusicOutline,
  mdiLaptop,
  mdiShuffle,
  mdiCheck,
  mdiSkipPrevious,
  mdiSkipNext,
  mdiRepeatVariant,
  mdiRepeatOnce,
  mdiArrowExpand,
  mdiPause,
  mdiPlay,
  mdiMotionPlayOutline 
} from '@mdi/js'
import TrackScrollbar from './trackScrollbar/TrackScrollbar.vue';
import VolumeScrollbar from './volumeScrollbar/VolumeScrollbar.vue';

const generalStore = useGeneralStore()
const payload = ref({
  type: 'artist',
  song: 'Thirsty',
  artist: 'PARTYNEXTDOOR',
  is_liked: true
})

const goTo = ref('1:00');
const duration = ref('3:50');
const level = ref(75);

const nowPlaying = computed(() => {
  generalStore.SetNowPlaying(payload.value)
  return generalStore.GetNowPlaying()
})

function ToggleRightNavCollapse() {
  generalStore.toggleRightNavCollapse()
}
</script>

<style lang="scss" scoped>
.footer {
  grid-area: FooterNav;
  height: 90px;
  max-height: 90px;
  display: flex;
  // flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  align-items: center;
  // min-width: auto;
  width: 100%;
}

.text {
  font-size: 15px;
  font-weight: 400;
  color: var(--vt-c-text-dark-1);
}
.sub-text {
  color: var(--vt-c-text-dark-2);
  font-size: 12px;
}
</style>
