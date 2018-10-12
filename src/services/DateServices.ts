import * as moment from 'moment';
export function FromJSDateToBe(date: Date): string {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
