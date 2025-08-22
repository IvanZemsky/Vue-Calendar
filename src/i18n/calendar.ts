type I18n = Record<
  'en' | 'ru',
  { monthsAbbr: Record<string, string>; weekDays: Record<string, string> }
>

export const i18n: I18n = {
  en: {
    monthsAbbr: {
      jan: 'jan',
      feb: 'feb',
      mar: 'mar',
      apr: 'apr',
      may: 'may',
      jun: 'jun',
      jul: 'jul',
      aug: 'aug',
      sep: 'sep',
      oct: 'oct',
      nov: 'nov',
      dec: 'dec',
    },
    weekDays: {
      sun: 'sun',
      mon: 'mon',
      tue: 'tue',
      wed: 'wen',
      thu: 'thu',
      fri: 'fri',
      sat: 'sat',
    },
  },
  ru: {
    monthsAbbr: {
      jan: 'янв',
      feb: 'фев',
      mar: 'мар',
      apr: 'апр',
      may: 'май',
      jun: 'июн',
      jul: 'июл',
      aug: 'авг',
      sep: 'сен',
      oct: 'окт',
      nov: 'ноя',
      dec: 'дек',
    },
    weekDays: {
      sun: 'вс',
      mon: 'пн',
      tue: 'вт',
      wed: 'ср',
      thu: 'чт',
      fri: 'пт',
      sat: 'сб',
    },
  },
}
