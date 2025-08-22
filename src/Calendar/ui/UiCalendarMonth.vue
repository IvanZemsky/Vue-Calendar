<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'
import { getDaysInMonth, type CalendarDate } from '../model/date'
import { monthsAbbr } from '../model/date'
import { i18n } from '@/i18n/calendar'

const lang = inject<Ref<'ru' | 'en'>>('ui-calendar-lang', ref('en'))

const date = defineModel<CalendarDate>('date', {
  required: true,
})

function handleSetNextMonth() {
  if (date.value.month === 11) {
    date.value.month = 0
    date.value.year += 1
  } else {
    date.value.month += 1
  }
  setCorrectDay()
}

function handleSetPrevMonth() {
  if (date.value.month === 0) {
    date.value.month = 11
    date.value.year -= 1
  } else {
    date.value.month -= 1
  }
  setCorrectDay()
}

function setCorrectDay() {
  const daysInMonth = getDaysInMonth(date.value.year, date.value.month)
  if (date.value.day > daysInMonth) {
    date.value.day = daysInMonth
  }
}
</script>

<template>
  <div class="ui-calendar__month-selector">
    <button class="ui-calendar__month-prev" @click="handleSetPrevMonth">
      <span>&lt;</span>
    </button>

    <p class="ui-calendar__month-value">
     {{ i18n[lang].monthsAbbr[monthsAbbr[date.month]] }} {{ date.year }}
    </p>

    <button class="ui-calendar__month-next" @click="handleSetNextMonth">
      <span>&gt;</span>
    </button>
  </div>
</template>

<style>
.ui-calendar__month-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.ui-calendar__month-value {
  font-weight: 500;
  text-transform: capitalize;
}
.ui-calendar__month-prev,
.ui-calendar__month-next {
  display: block;
  width: 2rem;
  font-size: 1.5rem;
  aspect-ratio: 1 / 1;
  cursor: pointer;
}
</style>
