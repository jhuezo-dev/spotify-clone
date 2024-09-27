<template>
  <div class="footer">
    <div class="flex pl-4">
      <div class="flex">
        <img src="../../../assets/default_user.png" width="100" height="100" alt="default user icon" />
      </div>
      <div class="flex flex-col pl-4">
        <div class="text">{{ nowPlaying.song }}</div>
        <p class="sub-text">{{ nowPlaying.artist }}</p>
      </div>
      <div class="flex w-full pl-4 my-auto">
        <svg-icon class="rounded-lg" type="mdi" :size="20" :path="mdiPlusCircleOutline"></svg-icon>
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

    <div class="flex gap-2 justify-center items-center">
      <button @click="ToggleRightNavCollapse">
        <svg-icon type="mdi" :size="20" :path="mdiPlayBoxOutline"></svg-icon>
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
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGeneralStore } from '@/stores/GeneralStore'
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
  mdiPlay
} from '@mdi/js'
import TrackScrollbar from './trackScrollbar/TrackScrollbar.vue';
import VolumeScrollbar from './volumeScrollbar/VolumeScrollbar.vue';

const generalStore = useGeneralStore()
const payload = ref({
  type: 'artist',
  song: 'Thirsty',
  artist: 'PARTYNEXTDOOR'
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
  height: 80px;
  max-height: 80px;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  min-width: 480px;
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
