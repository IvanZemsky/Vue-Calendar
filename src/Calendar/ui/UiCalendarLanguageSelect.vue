<script setup lang="ts">
import type { monthAbbr } from '@/i18n/calendar'

const lang = defineModel<'en' | 'ru'>({ required: true })

function handleSetLanguage(event: Event) {
  lang.value = (event.target as HTMLSelectElement).value as keyof typeof monthAbbr
}
</script>

<template>
  <select class="ui-calendar__language" name="lang" id="lang" @change="handleSetLanguage">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>
</template>

<style>
.ui-calendar__language {
  cursor: pointer;
  font-size: 1rem;
}
</style>
