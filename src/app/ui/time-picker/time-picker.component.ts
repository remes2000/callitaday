import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Time } from '../../models';


@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: TimePickerComponent
    }
  ]
})
export class TimePickerComponent implements ControlValueAccessor {
  hours: number = null;
  minutes: number = null;
  private onChange = (time: Time) => {};
  private onTouched = () => {};

  writeValue(value: Time) {
    this.hours = value?.hours ?? null;
    this.minutes = value?.minutes ?? null;
  }

  registerOnChange(fn: (time: Time) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  change(value: { hours?: number, minutes?: number }) {
    if (typeof value.hours === 'number') {
      this.hours = value.hours;
    }
    if (typeof value.minutes === 'number') {
      this.minutes = value.minutes;
    }
    this.onChange({ hours: this.hours, minutes: this.minutes });
  }
}
