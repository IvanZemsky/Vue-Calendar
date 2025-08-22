<script setup lang="ts">
import { computed, inject, ref, type Ref } from 'vue'
import { getDayOfDate, getWeekDaysLine, type CalendarDate } from '../model/date'
import { i18n } from '@/i18n/calendar'

const lang = inject<Ref<'ru ' | 'en'>>('ui-calendar-lang', ref('en'))

const date = defineModel<CalendarDate>('date', {
  required: true,
})

const dayOfDate = computed(() => getDayOfDate({ ...date.value, day: 1 }))
const days = computed(() => getWeekDaysLine(dayOfDate.value))
</script>

<template>
  <div class="ui-calendar__week-days">
    <p class="ui-calendar__week-day" v-for="day in days" :key="day" :day="day">
      {{ i18n[lang as 'en' | 'ru'].weekDays[day] }}
    </p>
  </div>
</template>

<style>
.ui-calendar__week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.ui-calendar__week-day {
  text-align: center;
  font-size: 0.8rem;
  text-transform: capitalize;
}
</style>
