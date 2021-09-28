import moment from "moment";

const formatCreatedTime = (milliseconds: number) => {
  const now = moment();
  const time = moment(milliseconds * 1000);

  const daysDiff = now.diff(time, "days");

  if (daysDiff >= 1) return `${daysDiff} dias`;

  const hoursDiff = now.diff(time, "hours");

  if (hoursDiff >= 1) return `${hoursDiff} horas`;

  const minutesDiff = now.diff(time, "minutes");

  if (minutesDiff >= 1) return `${minutesDiff} minutos`;

  return "poucos segundos";
};

export default formatCreatedTime;
