import { defineStore } from 'pinia'
import { getStorageNavbar, updateStorageSettings } from './utility'

export const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
    left_nav_collapsed: false,
    right_nav_collapsed: false,
    now_playing: {
      type: '',
      artist: '',
      song: '',
      is_liked: false
    }
  }),
  actions: {
    loadNavStates(nav:string) {
      const navbar = getStorageNavbar(nav);
      if(navbar?.key === 'left-nav') {
        this.left_nav_collapsed = navbar.value.left_nav_collapsed
      }
      if(navbar?.key === 'right-nav') {
        this.right_nav_collapsed = navbar.value.right_nav_collapsed
      }

    },
    toggleLeftNavCollapse() {
      this.left_nav_collapsed = !this.left_nav_collapsed
      updateStorageSettings('left_nav_collapsed', this.left_nav_collapsed, 'left-nav')
    },
    toggleRightNavCollapse() {
      this.right_nav_collapsed = !this.right_nav_collapsed
      updateStorageSettings('right_nav_collapsed', this.right_nav_collapsed, 'right-nav')
    },

    SetNowPlaying(data: { type: string, artist: string, song: string, is_liked: boolean }) {
      this.now_playing = {
        type: data.type,
        artist: data.artist,
        song: data.song,
        is_liked: data.is_liked
      }

      updateStorageSettings('now_playing', this.now_playing, 'now_playing')
    },

    GetNowPlaying() {
      // console.log('now playing', this.now_playing)
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
