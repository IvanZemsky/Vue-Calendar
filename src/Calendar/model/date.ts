import { weekDays } from '@/i18n/calendar'

export type CalendarDate = {
  day: number
  month: number
  year: number
}

export function getDayOfDate(date: CalendarDate) {
  const day = new Date(date.year, date.month, date.day).getDay()
  return day
}

// здесь было бы лучше подключить полноценный i18n, чтобы не засорять функцию и в целом код
export function getWeekDaysLine(firstDay: number, lang: 'en' | 'ru' = 'en') {
  const limit = 6

  let current = firstDay
  const line: string[] = []
  for (let i = 0; i <= limit; i++) {
    line.push(weekDays[lang][current])
    if (current >= 6) {
      current = 0
      continue
    }
    current++
  }

  return line
}

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

export function getArrayOfDaysInMonth(year: number, month: number) {
  return Array.from({ length: getDaysInMonth(year, month) }, (_, i) => i + 1)
}

export function formatDate(date: CalendarDate) {
  return `${date.year}-${date.month + 1}-${date.day}`
}

export function isCurrentDay(day: number, date: CalendarDate, value: Date) {
  return day === date.day && date.month === value.getMonth() && date.year === value.getFullYear()
}
