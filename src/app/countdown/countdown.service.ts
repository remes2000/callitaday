import { Injectable, computed, signal } from "@angular/core";
import { Time } from "../models";

const KEY = 'COUNTDOWN_SETTINGS';
type Mode = 'form' | 'counter';

@Injectable()
export class CountdownService {
  private _startDate = signal<Date>(null);
  private _duration = signal<Time>(null);
  private _mode = signal<Mode>('form');
  startDate = this._startDate.asReadonly();
  duration = this._duration.asReadonly();
  durationInMs = computed(() => {
    const { hours, minutes } = this.duration() ?? { hours: 0, minutes: 0 };
    return hours * 60 * 60 * 1_000 + minutes * 60 * 1_000;
  });
  endDate = computed(() => {
    const startDateUnixTimestamp = this.startDate().getTime() ?? 0;
    return new Date(startDateUnixTimestamp + this.durationInMs());
  });
  mode = this._mode.asReadonly();

  private readonly storage = localStorage;

  start(start: Time, duration: Time) {
    this._startDate.set(this.timeToDate(start));
    this._duration.set(duration);
    this._mode.set('counter');
  }

  private timeToDate(time: Time): Date {
    const date = new Date();
    date.setHours(time.hours);
    date.setMinutes(time.minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
}