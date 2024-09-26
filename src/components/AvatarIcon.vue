<template>
  <div class="library-item">
    <div class="image" :class="item.type == 'playlist' ? 'square_avatar' : 'round_avatar'">
      <img src="../assets/default_user.png" alt="default user icon" />
    </div>
    <div :class="`${generalStore.left_nav_collapsed ? 'hidden' : ''}`">
      <div class="text" v-if="item.song">
        {{ item.song }}
        <p class="sub-text">{{ item.artist }}</p>
      </div>
      <div v-else class="text">
        {{ item.artist }}
        <p class="sub-text" v-if="item.type == 'playlist' && item.value == 'liked_songs'">
          Playlist * {{ item.songs }}
        </p>
        <p class="sub-text" v-if="item.value != 'liked_songs'">
          {{
            item.type == 'playlist'
              ? item.playlists
                ? `${item.playlists} playlists`
                : 'Playlist'
              : 'Artist'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/GeneralStore'

const generalStore = useGeneralStore()
const item = ref(props.item)

const props = defineProps({
  item: {
    type: Object,
    Default: {
      type: {
        type: String,
        Default: 'playlist'
      },
      artist: {
        type: String,
        Default: 'Bad Bunny'
      },
      value: {
        type: String,
        Default: 'liked_songs'
      },
      songs: {
        type: Number,
        Default: 468
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
    Default: 'list'
  }
})

onMounted(async () => {
  // console.log('props', props.item)
})
</script>

<style lang="scss" scoped>
.library-item {
  height: 4rem;
  display: flex;

  img {
    width: 45px;
    height: 45px;
    background: var(--container-background-color);
    /* border-radius: 50%; */
  }

  .text {
    font-size: 15px;
    font-weight: 400;
    color: var(--vt-c-text-dark-1);
    padding-left: 1rem;
  }
  .sub-text {
    color: var(--vt-c-text-dark-2);
  }
}

@media only screen and (max-width: 768px) {
  .image {
    justify-content: center;
  }
  .text,
  .sub-text {
    display: none;
  }
}
</style>
