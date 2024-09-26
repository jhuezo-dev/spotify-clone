<template>
  <div class="navbar" id="nav_collapsed" :class="`${generalStore.left_nav_collapsed ? 'nav_collapsed' : ''}`">
   
      <!-- <div class="container">
        <router-Link to="/">

          <div class="home container-item " @click="active = !active" :class="active ? 'active' : ''">
            <div class="icon">
              <svg-icon type="mdi" :path="mdiHomeVariantOutline" :size="30" class="svg-icon"
              :class="active ? 'active' : ''"></svg-icon>
            </div>
            <div class="text">Home</div>
          </div>
        
        </router-Link>
  
        <router-Link to="/search">
          <div class="search container-item" @click="active = !active" :class="active ? 'active' : ''">
            <div class="icon">
              <svg-icon type="mdi" :path="mdiMagnify" :size="30" class="svg-icon"
              :class="active ? 'active' : ''"></svg-icon>
            </div>
            <div class="text">Search</div>
          </div>
        </router-Link>
      </div> -->

  
      
    <div class="container-header">
      <div class="flex pt-3 justify-center">
        <Button @click="ToggleLeftNav()">
          <svg-icon type="mdi" :size="35" :path="mdiMenuOpen" class="svg-icon"></svg-icon>
        </Button>
      
        <div class="your-library" :class="`${generalStore.left_nav_collapsed ? 'hidden' : 'flex w-full justify-between'}`">
          <div class="text">Your Library</div>
          <div class="">
            <svg-icon type="mdi" :size="25" :path="mdiPlus"></svg-icon>
          </div>
        </div>
      </div>

      <div class="playlists" :class="`${generalStore.left_nav_collapsed ? 'hidden' : 'flex w-full items-center pt-3'}`">
        <div class="relative overflow-hidden">
          <div class="flex items-center overflow-x-scroll whitespace-nowrap w-full" :class="`${isRightChevronClicked ? 'left-blur' : 'right-blur'}`" style="scrollbar-width: none; ">
            <button id="playlists" class="badge" @click="ScrollTo('audiobooks')">Playlists</button>
            <button class="badge">Artists</button>
            <button class="badge">Albums</button>
            <button id="audiobooks" class="badge" @click="ScrollTo('playlists')">Audiobooks</button>  
          </div>
          
          <div class="flex justify-between absolute top-0 bottom-0 left-0 right-0 ">
            <button :class="`${isRightChevronClicked ? 'flex mr-auto' : 'hidden'}`" 
            @click="
            ScrollTo('playlists'),
            isRightChevronClicked = !isRightChevronClicked">
              <svg-icon class="rounded-xl bg-button-bg" type="mdi" 
              :size="25" 
              :path="mdiChevronLeft"></svg-icon>
            </button>
            <button :class="`${isRightChevronClicked ? 'hidden' : 'flex ml-auto'}`"
            @click="ScrollTo('audiobooks'), isRightChevronClicked = !isRightChevronClicked" >
              <svg-icon 
              class="rounded-xl bg-button-bg" type="mdi" 
              :size="25" 
              :path="mdiChevronRight"></svg-icon>
            </button>
          </div>
        </div>
      </div>

        
    </div>


    <div class="container-items" >
      <div class="search-recents" :class="`${generalStore.left_nav_collapsed ? 'hidden' : 'flex justify-between pl-4 pb-4'}`">
        <svg-icon type="mdi" :path="mdiMagnify" :size="22" class=""></svg-icon>
          
        <select>
          <option v-for="o of sortbyOptions" :key="o.value">{{ o.artist }}</option>
        </select>
      </div>

      <div class="library-items ml-4" v-for="item of your_library_items" :key="item.songs">
        <AvatarIcon :item="item" mode="list" />
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenuOpen, mdiHomeVariantOutline, 
  mdiMagnify, 
  mdiPlus, 
  mdiHeart, 
  mdiArrowRight, 
  mdiArrowLeft,
  mdiChevronLeft,
  mdiChevronRight
} from '@mdi/js';
import { useGeneralStore } from '@/stores/GeneralStore';
import AvatarIcon from '@/components/AvatarIcon.vue';

const generalStore = useGeneralStore()
const sortbyOptions = ref([
  { value: 'recents', artist: 'Recents' },
  { value: 'recently-added', artist: 'Recently Added' },
  { value: 'alphabetical', artist: 'Alphabetical' },
  { value: 'creator', artist: 'Creator' }
])
const your_library_items = [
  { value: 'liked_songs', artist: 'Liked Songs', type: 'playlist', songs: 468, },
  { value: 'los_dutis', artist: 'Los Dutis', type: 'artist' },
  { value: 'coding', artist: 'Coding', type: 'playlist', playlists: 11, },
  { value: 'kybba', artist: 'Kybba', type: 'artist' },
  { value: 'crankdat', artist: 'Crankdat', type: 'artist' },
  { value: 'partynextdoor', artist: 'PARTYNEXTDOOR', type: 'artist' },
  { value: 'kali_uchis', artist: 'Kali Uchis', type: 'artist' },
  { value: 'chomppa', artist: 'CHOMPPA', type: 'artist' },
  { value: 'nusha', artist: 'Nusha', type: 'artist' },
  { value: 'rels_b', artist: 'Rels B', type: 'artist' },
  { value: 'crankdat', artist: 'Crankdat', type: 'artist' },
  { value: 'partynextdoor', artist: 'PARTYNEXTDOOR', type: 'artist' },
  { value: 'kali_uchis', artist: 'Kali Uchis', type: 'artist' },
  { value: 'chomppa', artist: 'CHOMPPA', type: 'artist' },
  { value: 'nusha', artist: 'Nusha', type: 'artist' },
  { value: 'rels_b', artist: 'Rels B', type: 'artist' },
]
const isRightChevronClicked = ref(false)


function ToggleLeftNav() {
  generalStore.toggleLeftNavCollapse();
}


function ScrollTo(id: string) {
  const element = document.getElementById(id);
  const elementPos = element?.getBoundingClientRect().top;
  const offsetPos = elementPos! - 65;

  // stops the window from offsetting when scrolling into view
  window.scrollBy({top: offsetPos, behavior: 'smooth'})
  // scroll to the element horizontally
  element?.scrollIntoView({'behavior': 'smooth', 'inline': 'nearest'})
}



</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  min-width: 80px;
  width: calc(100% - 40vw);
  max-width: 380px;
  background: var(--color-background-mute);
  border-radius: 8px;
}

.nav_collapsed {
  width: 80px;
}

.container {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 0;
  overflow: hidden;
  transition: overflow-y .25s ease-in-out;
}

.container-header {
  border-radius: 8px 8px 0 0;
  /* background-color: var(--container-background-color); */
  padding: .25rem 1rem 1rem 1rem;
}

.left-blur {
  mask-image: linear-gradient(90deg, transparent, var(--black) 120px);
}
.right-blur {
  mask-image: linear-gradient(90deg, var(--black) calc(100% - 120px), transparent);
}

.active {
  color: var(--white);
}

.text {
  font-size: 15px;
  font-weight: bold;
  padding-left: 1rem;
  text-decoration: none;
}


.container-items {
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  padding-bottom: 4px;
  width: 100%;
  padding-left: 2px;
  padding-right: 16px;
}

.container-items:hover {
  overflow-y: auto;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  width: 100%;
}
.container-items:hover {
  padding-right: 8px;

}


@media only screen and (max-width: 768px) {
  .navbar {
    width: 80px;
    margin-right: .5rem;
  }
  
  .your-library, .playlists, .search-recents {
    display: none;
  }
  
}
</style>