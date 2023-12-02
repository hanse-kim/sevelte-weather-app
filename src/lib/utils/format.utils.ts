import dayjs from 'dayjs';

export class FormatUtils {
  static formatDate(utx: number, format?: string) {
    return dayjs.unix(utx).format(format);
  }

  static formatTemperature(temp: number) {
    return temp.toFixed(1);
  }

  static formatPop(humidity: number) {
    return (humidity * 100).toFixed(1);
  }
}
