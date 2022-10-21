export const formatDateForInput = (dateStr: string) =>
  Intl.DateTimeFormat("ru")
    .format(new Date(dateStr))
    .split(".")
    .reverse()
    .join("-");
