<template>
  <div class="flex flex-col p-4">
    
  </div>
</template>

<script setup lang="ts">
import {ref } from 'vue';

const chipItems = [
  {key: 'all', value: 'All'},
  {key: 'music', value: 'Music'},
  {key: 'podcasts', value: 'Podcasts'},
]

const mostRecent = [
  {key: 'liked_songs', value: 'Liked Songs'},
  {key: 'bad_bunny', value: 'Bad Bunny'},
  {key: 'feid', value: 'Feid'},
  {key: 'kiss_land_-_deluxe', value: 'Kiss Land - Deluxe'},
  {key: 'lofi_beats', value: 'lofi beats'},
  {key: 'bad_bunny_mix', value: 'Bad Bunny Mix'},
  {key: 'this_is_bad_bunny', value: 'This Is Bad Bunny'},
  {key: 'ferxxo', value: 'ferxxo'},
]

// const 

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
