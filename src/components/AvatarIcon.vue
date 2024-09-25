<template>
  <div class="library-item">
    <div :class="item.type == 'playlist' ? 'square_avatar' : 'round_avatar'">
      <img src="./icons/default_user.png" alt="default user icon">
    </div>
    <div class="text" v-if="item.song">
      {{ item.song }}
      <p class="sub-text" >{{ item.artist}}</p>
    </div>
    <div v-else class="text">
      {{ item.artist }}
      <p class="sub-text" v-if="item.type == 'playlist' && item.value == 'liked_songs'">Playlist * {{ item.songs}}</p>
      <p class="sub-text" v-if="item.value !='liked_songs'">{{ item.type == 'playlist' ? item.playlists ? `${item.playlists} playlists` : 'Playlist' : 'Artist' }}</p>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'

const item = ref(props.item)

const props = defineProps({
  item: {
    type: Object,
    Default: {
      type: {
        type: String,
        Default: "playlist"
      }, 
      artist: {
        type: String,
        Default: "Bad Bunny"

      },
      value: {
        type: String,
        Default: "liked_songs"
      },
      songs: {
        type: Number,
        Default: 468,
      },
      playlists: {
        type: Number,
        Default: 11
      },
      song: {
        type: String,
        Default: 'Efecto'
      }
    }
  },
  mode: {
    type: String,
    Default: "list"
  }
})

onMounted(async() => {
  console.log('props', props.item)
} )
</script>

<style lang="scss" scoped>
.library-item {
  height: 3.4rem;
  display: flex;
  
  img {
    width: 45px;
    height: 45px;
    background-color: red;
    /* border-radius: 50%; */
  }

  .text {
  font-size: 15px;
  font-weight: bold;
  padding-left: 1rem;
}
}

</style>