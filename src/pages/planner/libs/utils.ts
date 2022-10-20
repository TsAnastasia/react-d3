export const formatDateForInput = (date: Date) =>
  Intl.DateTimeFormat("ru").format(date).split(".").reverse().join("-");
