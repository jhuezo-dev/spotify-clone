<template>
  <div class="footer" >
    <div class="flex pl-4" >
      <img src="../../../assets/default_user.png" width="45" height="45" alt="default user icon" />
      <div class="flex flex-col pl-4">
        <div class="text">{{ nowPlaying.song }}</div>
        <p class="sub-text">{{ nowPlaying.artist }}</p>
      </div>
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
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-left: .5rem;
  padding-right: .5rem;
  align-items: center;
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