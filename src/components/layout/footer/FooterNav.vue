<template>
  <div class="footer" >
    <div class="now_playing" >
      <AvatarIcon :item="nowPlaying"/>

    </div>
    <div class="music_controls">
    music controls
    </div>
    <div class="music_actions">
      music actions
    </div>

    <div>
      <button @click="ToggleRightNavCollapse">now playing</button>
    </div>
    
  </div>
</template>

<script setup>
import {ref, computed } from 'vue'
import { useGeneralStore } from '@/stores/GeneralStore'
import AvatarIcon from '@/components/AvatarIcon.vue'


const generalStore = useGeneralStore()
const payload = ref({
  type: 'artist',
  song: 'Thirsty',
  artist: 'PARTYNEXTDOOR',
})

const nowPlaying = computed(() => {
  generalStore.SetNowPlaying(payload.value)
  return generalStore.GetNowPlaying()
})

function ToggleRightNavCollapse() {
  generalStore.toggleRightNavCollapse();
}
</script>

<style lang="scss" scoped>
.footer {

  height: 80px;
  // min-height: 80px;
  display: flex;
  position: relative;
  justify-content: space-between;
  // height: 100%;
  // margin-top: auto;
  padding-left: .5rem;
  padding-right: .5rem;
  align-items: center;
  // background-color: var(--black);

  // .now_playing {
  //   display:flex;
  // }

  // .music_controls {
  //   display: flex;
  // }

  // .music_actions {
  //   display: flex;
  // }

}
</style>