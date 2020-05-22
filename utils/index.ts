import { DateTime } from 'luxon';

export const fmtDateTime = (millis: number) => DateTime.fromMillis(millis).toFormat('MMMM dd, yyyy h:mm a');
