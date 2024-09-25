<template>
  <div class="navbar" :class="`${generalStore.left_nav_collapsed ? 'nav_collapsed' : ''}`">
   
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

  
      <div class="container">
        <div class="container-header">
          <div class="your-library container-item">
            <div class="icon">
              <Button @click="ToggleLeftNav()">
                <svg-icon type="mdi" :size="30" :path="mdiMenuOpen" class="svg-icon"></svg-icon>
              </Button>
            </div>
            <div class="text">Your Library</div>
            <div class="plus icon">
              <svg-icon type="mdi" :size="25" :path="mdiPlus" class="svg-icon"></svg-icon>
            </div>
          </div>
          <div class="badges">
            <button class="badge">Playlists</button>
            <button class="badge">Artists</button>
            <button class="badge">Albums</button>
          </div>
        </div>
  
  
        <div class="container-items scoll">
          <div class="search-sortby">
            <div class="search">
              <div class="icon">
                <svg-icon type="mdi" :path="mdiMagnify" :size="22" class="svg-icon"></svg-icon>
              </div>
            </div>
            <div class="sortby">
              <div>
                <select class="dropdown">
                  <option val="">Sort By</option>
                  <option v-for="o of sortbyOptions" :key="o.value">{{ o.label }}</option>
                </select>
    
              </div>
            </div>
          </div>
    
          <div class="library-items" v-for="item of your_library_items" :key="item.songs">
            <AvatarIcon :item="item" mode="list" />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenuOpen, mdiHomeVariantOutline, mdiMagnify, mdiPlus, mdiHeart } from '@mdi/js';
import { useGeneralStore } from '@/stores/GeneralStore';
import AvatarIcon from '@/components/AvatarIcon.vue'

const generalStore = useGeneralStore()
const active = ref(false)
// const 
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
]

function ToggleLeftNav() {
  generalStore.toggleLeftNavCollapse();
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
  border-radius: 6px;
}

.nav_collapsed {
  width: 80px;
}

.container {
  padding: .5rem 1rem;
  border-radius: 8px;
  width: 100%;
  height: 100%;

  overflow-y: hidden;
  transition: overflow-y .25s ease-in-out;
}


.container-item{
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: .5rem;
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

.container-header {
  border-radius: 6px 6px 0 0;
  background-color: var(--container-background-color);
 
  padding: 0 1rem 1rem 0;
  width: 100%;

  left: 0;
  height: 6rem;
  max-height: 6rem;
  min-height: 6rem;
}

.badges {
  display: flex;
  margin-top: .5rem;

}

.plus {
  margin-left: auto;
}

.container-items {
  display: flex;
  flex-direction: column;
}

.container-items:hover {
  overflow-y: auto;
}

.search-sortby {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 .5rem 0;
}

.library-items {
  display: flex;
  flex-direction: column;
}




@media only screen and (max-width: 768px) {
  .navbar {
    width: 80px;
    margin-right: .5rem;
  }
  
}
</style>