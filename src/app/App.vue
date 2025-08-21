<script setup lang="ts">
import { ref } from 'vue'
import UiCalendar from '../Calendar/ui/UiCalendar.vue'

// const date = ref('2023-01-01')
</script>

<template>
  <h1 class="title">Vue 3 calendar component</h1>
  <UiCalendar class="calendar" />
</template>

<style scoped>
.title {
  margin-bottom: 1rem;
}
.calendar :global(.ui-calendar) {
  max-width: 300px;
}
</style>
