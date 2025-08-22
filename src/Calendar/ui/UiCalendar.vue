<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import UiCalendarDateInput from './UiCalendarDateInput.vue'
import UiCalendarMonth from './UiCalendarMonth.vue'
import UiCalendarLanguageSelect from './UiCalendarLanguageSelect.vue'
import UiCalendarDayBtn from './UiCalendarDayBtn.vue'
import UiCalendarWeekDays from './UiCalendarWeekDays.vue'
import { getArrayOfDaysInMonth, formatDate, isCurrentDay, type CalendarDate } from '../model/date'

// yyyy-mm-dd
const dateValue = defineModel<string>()

const currentDate = ref(new Date(dateValue.value || Date.now()))

const languge = ref<"en" | "ru">('en')
provide('ui-calendar-lang', languge)

const date = ref<CalendarDate>({
  day: currentDate.value.getDate(),
  month: currentDate.value.getMonth(),
  year: currentDate.value.getFullYear(),
})

const daysInMonth = computed(() => getArrayOfDaysInMonth(date.value.year, date.value.month))

function handleSetDay(day: number) {
  date.value.day = day
  const formattedDate = formatDate(date.value)
  dateValue.value = formattedDate
  currentDate.value = new Date(formattedDate)
}
</script>

<template>
  <div class="ui-calendar__wrapper">
    <UiCalendarDateInput :value="dateValue" />

    <div class="ui-calendar">
      <UiCalendarMonth v-model:date="date" />

      <UiCalendarWeekDays v-model:date="date" />
      <div class="ui-calendar__day-btns">
        <UiCalendarDayBtn
          v-for="monthDay in daysInMonth"
          :key="monthDay"
          :day="monthDay"
          :date="date"
          :current="isCurrentDay(monthDay, date, currentDate)"
          @click="handleSetDay(monthDay)"
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
