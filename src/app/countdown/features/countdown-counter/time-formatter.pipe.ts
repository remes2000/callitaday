import { Pipe, PipeTransform } from '@angular/core';

const MS_IN_HOUR = 60 * 60 * 1_000;
const MS_IN_MINUTE = 60 * 1_000;
const MS_IN_SECOND = 1_000;

@Pipe({
  name: 'timeFormatter',
  standalone: true
})
export class TimeFormatterPipe implements PipeTransform {
  transform(timeInMs: number): string {
    const hours = Math.floor(timeInMs / MS_IN_HOUR);
    timeInMs -= hours * MS_IN_HOUR;
    const minutes = Math.floor(timeInMs / MS_IN_MINUTE);
    timeInMs -= minutes * MS_IN_MINUTE;
    const seconds = Math.floor(timeInMs / MS_IN_SECOND);
    return [hours, minutes, seconds]
      .map((value) => value.toString().padStart(2, '0'))
      .join(':');
  }
}
