<template>
  <div class="flex flex-col p-4">
    <h3 class="text-lg font-bold"> Browse all</h3>
    <div class="flex flex-wrap gap-6">
      <div v-for="i in items" :key="i.key" class="flex justify-between rounded-lg p-4 xs:min-w-48 xs:min-h-24 w-80 md:w-80 md:min-w-72 md:h-32 lg:w-64 lg:min-w-64 border overflow-hidden">
        <div class="flex w-30 min-w-30 max-w-30 bg-blue-600">
          <span class="text-md font-bold">{{ i.value }}</span>
        </div>
        <div class="flex -mr-7 mt-4">
          <img src="../assets/default_user.png" class="relative bg-red-600 rounded origin-center rotate-45 max-w-16 object-cover max-h-16 w-16 h-16" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref } from 'vue';

const items = ref([
  {key: 'music', value: 'Music'},
  {key: 'podcasts', value: 'Podcasts'},
  {key: 'audiobooks', value: 'Audiobooks'},
  {key: 'live_events', value: 'Live Events'},
  {key: 'made_for_you', value: 'Made For You'},
  {key: 'new_releases', value: 'New Releases'},
  {key: 'hip_hop', value: 'Hip-Hop'},
  {key: 'country', value: 'Country'},
  {key: 'pop', value: 'Pop'},
  {key: 'latin', value: 'Latin'},
  {key: 'podcast_charts', value: 'Podcast Charts'},
  {key: 'podcast_new_releases', value: 'Podcast New Releases'},
  {key: 'video', value: 'Video'},
  {key: 'spotify_originals', value: 'Spotify Originals'},
  {key: 'mystery_&_thriller', value: 'Mystery & Thriller'},
  {key: 'biography_&_memoir', value: 'Biography & Memoir'},
  {key: 'fiction_&_literature', value: 'Fiction & Literature'},
  {key: 'self_help', value: 'Self-Help'},
  {key: 'charts', value: 'Charts'},
  {key: 'fall', value: 'Fall'},
  {key: 'rock', value: 'Rock'},
  {key: 'discover', value: 'Discover'},
  {key: 'student', value: 'Student'},
  {key: 'dance_electronics', value: 'Dance/Electronics'},
  {key: 'in_the_car', value: 'In the car'},
  {key: 'mood', value: 'Mood'},
  {key: 'indie', value: 'Indie'},
  {key: 'disney', value: 'Disney'},
  {key: 'r&b', value: 'R&B'},
  {key: 'christian_gospel', value: 'Christian Gospel'},
  {key: 'workout', value: 'Workout'},
  {key: 'musica_mexicana', value: 'Musica Mexicana'},
  {key: 'k_pop', value: 'K-pop'},
  {key: 'chill', value: 'Chill'},
  {key: 'halloween', value: 'Halloween'},
  {key: 'netflix', value: 'Netflix'},
  {key: 'spotify_classics', value: 'Spotify Classics'},
  {key: 'sleep', value: 'Sleep'},
  {key: 'party', value: 'Party'},
  {key: 'at_home', value: 'At Home'},
  {key: 'decades', value: 'Decades'},
  {key: 'love', value: 'Love'},
  {key: 'metal', value: 'Metal'},
  {key: 'jazz', value: 'Jazz'},
  {key: 'broadway', value: 'Broadway'},
  {key: 'trending', value: 'Trending'},
  {key: 'frequency', value: 'Frequency'},
  {key: 'glow', value: 'GLOW'},
  {key: 'classical', value: 'Classical'},
  {key: 'folk_&_acoustic', value: 'Folk & Acoustic'},
  {key: 'focus', value: 'Focus'},
  {key: 'soul', value: 'Soul'},
  {key: 'kids_&_Family', value: 'Kids & Family'},
  {key: 'gaming', value: 'Gaming'},
  {key: 'happy_holidays', value: 'Happy Holidays'},
  {key: 'anime', value: 'Anime'},
  {key: 'tv_&_movies', value: 'TV & Movies'},
  {key: 'instrumental', value: 'Instrumental'},
  {key: 'punk', value: 'Punk'},
  {key: 'ambient', value: 'Ambient'},
  {key: 'blues', value: 'Blues'},
  {key: 'cooking_&_dining', value: 'Cooking & Dining'},
  {key: 'alternative', value: 'Alternative'},
  {key: 'travel', value: 'Travel'},
  {key: 'caribbean', value: 'Caribbean'},
  {key: 'afro', value: 'Afro'},
  {key: 'songwriters', value: 'Songwriters'},
  {key: 'nature_&_noise', value: 'Nature & Noise'},
  {key: 'funk_&_disco', value: 'Funk & Disco'},
  {key: 'spotify_singles', value: 'Spotify Singles'},
  {key: 'equal', value: 'EQUAL'},
  {key: 'fresh_finds', value: 'Fresh Finds'},
  {key: 'radar', value: 'RADAR'},
  {key: 'wellness', value: 'Wellness'},
  {key: 'tastemakers', value: 'Tastemakers'},
  {key: 'arab', value: 'Arab'},
])

</script>

<style lang="scss" scoped>
.main-container {
  // display: flex;
  // flex-direction: column;
  // margin: .5rem .5rem .5rem 0;
  // border-radius: 6px;
  // padding: .5rem 1rem;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // /* max-width: 300px; */
  // width: 100%;
  // background-color: var(--container-background-color);
  // border-radius: 6px;
  // margin: .5rem;
  /* padding: .5rem 1rem; */
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .main-container {
    width: 100%;
  }
}

</style>
