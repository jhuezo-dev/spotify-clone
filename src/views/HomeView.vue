<template>
  <!-- <div class="main-container"> -->
    <div class="">
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>header</th>
            <th>header</th>
            <th>header</th>
            <th>header</th>
            <th>header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
          </tr>
          <tr>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
          </tr>
          <tr>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
          </tr>
        </tbody>
      </table>
    </div>
  <!-- </div> -->
</template>

<script setup lang="ts">

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
