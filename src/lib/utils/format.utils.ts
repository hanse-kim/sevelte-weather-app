import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export class FormatUtils {
  static formatDate(utx: number, format?: string) {
    return dayjs.unix(utx).format(format);
  }

  static formatTemperature(temp: number) {
    return temp.toFixed(1);
  }

  static formatPop(pop: number) {
    return Math.round(pop * 10) * 10;
  }
}
