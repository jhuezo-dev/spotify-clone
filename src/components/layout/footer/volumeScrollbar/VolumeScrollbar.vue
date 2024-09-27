<template>
  <div class="flex items-center gap-1 ">
    <progress :max="100" :value="level"></progress>
  </div>
</template>

<script setup>

const props = defineProps({
  level: {
    type: Number,
    default: 75
  }
})


</script>

<style lang="scss" scoped>
progress {
	height: 5px;
  border-radius: 8px;
	display: flex;
  flex-direction: column;
  max-width: 90px;
	width: 90px;
  min-width: 70px;
	justify-content: center;
	align-items: center;
  background: var(--color-text);
	color: var(--white);
	transition: width 200ms ease, opacity 200ms ease;
	z-index: 10;
}

</style>