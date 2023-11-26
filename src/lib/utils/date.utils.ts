import dayjs from 'dayjs';

export class DateUtils {
  static format(utx: number, format?: string) {
    return dayjs.unix(utx).format(format);
  }
}
