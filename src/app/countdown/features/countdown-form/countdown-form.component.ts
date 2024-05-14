import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TimePickerComponent } from '../../../ui/time-picker/time-picker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CountdownFormValue, Time } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-form',
  standalone: true,
  imports: [MatButtonModule, TimePickerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './countdown-form.component.html',
  styleUrl: './countdown-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownFormComponent {
  @Output() start = new EventEmitter<CountdownFormValue>();
  readonly form = new FormGroup({
    start: new FormControl<Time>({ hours: new Date().getHours(), minutes: new Date().getMinutes() }),
    duration: new FormControl<Time>({ hours: 8, minutes: 0 }),
  });

  submit() {
    if (this.form.valid) {
      this.start.emit(this.form.getRawValue());
    }
  }
}
