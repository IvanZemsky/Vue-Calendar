<script setup lang="ts">
type Props = {
  day: number
  date: { day: number; month: number; year: number }
  current: boolean
}

const { day, current } = defineProps<Props>()
</script>

<template>
  <button class="ui-calendar__day-btn" :class="{ current }">{{ day }}</button>
</template>

<style>
.ui-calendar__day-btn {
  font-size: 1rem;
  aspect-ratio: 1 / 1;
  cursor: pointer;
}
.ui-calendar__day-btn.current {
  border: 2px dashed blue;
}
</style>
