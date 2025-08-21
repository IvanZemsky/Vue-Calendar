<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import UiCalendarDateInput from './UiCalendarDateInput.vue'
import UiCalendarMonth from './UiCalendarMonth.vue'
import UiCalendarLanguageSelect from './UiCalendarLanguageSelect.vue'
import UiCalendarDayBtn from './UiCalendarDayBtn.vue'
import UiCalendarWeekDays from './UiCalendarWeekDays.vue'
import { getArrayOfDaysInMonth, formatDate } from '../model/date'
import type { monthAbbr } from '@/i18n/calendar'

// yyyy-mm-dd
const dateValue = defineModel<string>()

const currentDate = new Date(dateValue.value || Date.now())

const languge = ref<keyof typeof monthAbbr>('en')
provide('ui-calendar-lang', languge)

const date = ref({
  day: currentDate.getDate(),
  month: currentDate.getMonth(),
  year: currentDate.getFullYear(),
})

const daysInMonth = computed(() => getArrayOfDaysInMonth(date.value.year, date.value.month))
</script>

<template>
  <div class="ui-calendar__wrapper">
    <UiCalendarDateInput :value="formatDate(date)" />

    <div class="ui-calendar">
      <UiCalendarMonth v-model:date="date" />

      <UiCalendarWeekDays v-model:date="date" />
      <div class="ui-calendar__day-btns">
        <UiCalendarDayBtn
          v-for="monthDay in daysInMonth"
          :key="monthDay"
          :day="monthDay"
          :date="date"
          :current="monthDay === date.day"
          @click="date.day = monthDay"
        />
      </div>
      <UiCalendarLanguageSelect v-model="languge" />
    </div>
  </div>
</template>

<style>
.ui-calendar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid silver;
}
.ui-calendar__day-btns {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}
</style>
