import { defineStore } from 'pinia'
import { updateStorageSettings } from './utility'

export const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
    left_nav_collapsed: false,
    right_nav_collapsed: false,
    now_playing: {
      type: null,
      artist: null,
      value: null,
      songs: null,
      playlists: null,
      song: null
    }
  }),
  actions: {
    toggleLeftNavCollapse() {
      this.left_nav_collapsed = !this.left_nav_collapsed
      updateStorageSettings('left_nav_collapsed', this.left_nav_collapsed, 'left-nav')
    },
    toggleRightNavCollapse() {
      this.right_nav_collapsed = !this.right_nav_collapsed
      updateStorageSettings('right_nav_collapsed', this.right_nav_collapsed, 'right-nav')
    },

    SetNowPlaying(data: { type: string; song: string; artist: string }) {
      this.now_playing = {
        type: data.type,
        artist: data.artist,
        value: data.value,
        songs: data.songs,
        playlists: data.playlists,
        song: data.song
      }

      updateStorageSettings('now_playing', this.now_playing, 'now_playing')
    },

    GetNowPlaying() {
      console.log('now playing', this.now_playing)
      return this.now_playing 
    }
  }
  
  
  
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
