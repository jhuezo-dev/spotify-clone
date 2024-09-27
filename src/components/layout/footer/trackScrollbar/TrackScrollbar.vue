<template>
  <div class="flex items-center gap-1 ">
    <span>00:00</span>
    <progress :max="100" :value="50"></progress>
    <span>{{duration}}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  duration: {
    type: String,
    default: '3:50'
  },
  goTo: {
    type: String,
    default: '1:00'
  }
})


</script>

<style lang="scss" scoped>
progress {
	height: 5px;
  border-radius: 8px;
	display: flex;
  flex-direction: column;
	width: 250px;
	justify-content: center;
	align-items: center;
  background: var(--color-text);
	color: var(--white);
	transition: width 200ms ease, opacity 200ms ease;
	z-index: 10;
}

</style>