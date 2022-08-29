import { DateTime } from "luxon";

const dateShort = dataString => DateTime.fromISO(dataString).toLocaleString(DateTime.DATE_SHORT);
const dateMedium = dataString => DateTime.fromISO(dataString).toLocaleString(DateTime.DATE_MED);
const dateLong = dataString => DateTime.fromISO(dataString).toLocaleString(DateTime.DATE_FULL);

export {
  dateShort,
  dateMedium,
  dateLong,
};
